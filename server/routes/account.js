import express from 'express';
import Account from '../models/account';

const router = express.Router();

function generateColor() {
     const r = Math.floor((Math.random() * 255));
     const g = Math.floor((Math.random() * 255));
     const b = Math.floor((Math.random() * 255));
     return [r,g,b];
}

////////////////////////////////////////////////////
/*
    ACCOUNT SIGNUP: POST /api/account/signup
    BODY SAMPLE: { "username": "test", "password": "test" }
    ERROR CODES:
        1: BAD USERNAME
        2: BAD PASSWORD
        3: USERNAM EXISTS
*/

router.post('/signup', (req, res) => {
  // CHECK USERNAME FORMAT
  let usernameRegex = /^[a-z0-9]+$/;

  if(!usernameRegex.test(req.body.username)) {
      return res.status(400).json({
          error: "BAD USERNAME",
          code: 1
      });
  }

  // CHECK PASS LENGTH
  if(req.body.password.length < 4 || typeof req.body.password !== "string") {
      return res.status(400).json({
          error: "BAD PASSWORD",
          code: 2
      });
  }

  // CHECK USER EXISTANCE
  Account.findOne({ username: req.body.username }, (err, exists) => {
      if (err) throw err;
      if(exists){
          return res.status(409).json({
              error: "USERNAME EXISTS",
              code: 3
          });
      }

      // CHECK USER EXISTANCE
      Account.findOne({ nickname: req.body.nickname }, (err, exists) => {
          if (err) throw err;
          if(exists){
              return res.status(409).json({
                  error: "NICKNAME EXISTS",
                  code: 4
              });
          }

          // CREATE ACCOUNT
          let account = new Account({
              username: req.body.username,
              nickname: req.body.nickname,
              password: req.body.password,
              created: req.body.created,
              updated: req.body.updated,
              groupname: req.body.groupname
          });

          account.password = account.generateHash(account.password);

          // SAVE IN THE DATABASE
          account.save( err => {
              if(err) throw err;
              return res.json({ success: true });
          });
      });
  });

}); //post

/*
    ACCOUNT SIGNIN: POST /api/account/signin
    BODY SAMPLE: { "username": "test", "password": "test" }
    ERROR CODES:
        1: LOGIN FAILED
*/

router.post('/signin', (req, res) => {
      if(typeof req.body.password !== "string") {
          return res.status(401).json({
              error: "LOGIN FAILED",
              code: 1
          });
      }

      // FIND THE USER BY USERNAME
      Account.findOne({ username: req.body.username}, (err, account) => {
          if(err) throw err;

          // CHECK ACCOUNT EXISTANCY
          if(!account) {
              return res.status(401).json({
                  error: "LOGIN FAILED",
                  code: 1
              });
          }

          // CHECK WHETHER THE PASSWORD IS VALID
          if(!account.validateHash(req.body.password)) {
              return res.status(401).json({
                  error: "LOGIN FAILED",
                  code: 1
              });
          }

          let rgb_color = [];
          rgb_color = generateColor();
          //console.log('reg 칼러', rgb_color);

          // ALTER SESSION, 여기서(로그인시) 세션 정보를 만든다.
          let session = req.session;
          session.loginInfo = {
              _id: account._id,
              username: account.username,
              nickname: account.nickname,
              groupname: account.groupname,
              color: rgb_color
          };

//          // RETURN SUCCESS
//          return res.json({
//              success: true
//          });
//////
          var id = account._id;
          var update = {'$set': {'online' : 'true'}};
          var callback = function (err, data) {
              if (err) return next(err);
          };

          Account.findByIdAndUpdate(id, update, callback);
              return res.json({ success : true});

    });
});

/*
    GET CURRENT USER INFO GET /api/account/getInfo
    세션확인이 필요한 이유는, 클라이언트에서 로그인 시, 로그인 데이터를 쿠키에 담고 사용을 하고 있다가,
    만약에 새로고침을 해서 어플리케이션을 처음부터 다시 렌더링 하게 될 때, 지금 갖고 있는 쿠키가 유효한건지 체크.
*/

router.get('/getinfo', (req, res) => {
  if(typeof req.session.loginInfo === "undefined") {
      return res.status(401).json({
          error: 1
      });
  }

  res.json({ info: req.session.loginInfo });
  //console.log('session-info', req.session.loginInfo);
});

/*
    LOGOUT: POST /api/account/logout
*/
router.post('/logout', (req, res) => {
    //console.log('세션', req.session.loginInfo);

    var id = req.session.loginInfo._id;
    var update = {'$set': {'online' : 'false'}};
    var callback = function (err, data) {
          if (err) return next(err);
    };

    Account.findByIdAndUpdate(id, update, callback);

    req.session.destroy(err => { if(err) throw err; });
    return res.json({ sucess: true });
});

export default router;
