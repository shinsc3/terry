import express from 'express';
import path from 'path';

import morgan from 'morgan'; // HTTP REQUEST LOGGER
import bodyParser from 'body-parser'; // PARSE HTML BODY

import mongoose from 'mongoose';

import session from 'express-session';


const app = express();
const port = 3000;

app.use(morgan('tiny'));
app.use(bodyParser.json());
/* use session */
app.use(session({
    secret: 'ReduxBlog$1$234',
    resave: false,
    saveUninitialized: true,
    //cookie: {_expires : 15000}
}));

/* setup routers & static directory */
/// import routes1 from './routes';
/// app.use('/api', routes1); //이 프로젝트에서는 /api/account/login 식으로 ...
//app.use('/user/', routes1);
// /user/로 들어오는 요청을 /routes/account.js 파일에서 처리할 수 있도록 app.use에 /user/ 경로를 routes 모듈로 맵핑 -->
// 예를 들면 /user/login 또는 /api/logoff, /user/register 둥둥 -->

app.use('/', express.static(path.join(__dirname, './../public')));

/* support client-side routing */
// 이 작업을 하지 않으면, URL 을 직접 입력하여 들어갔을때 클라이언트사이드 라우팅이 제대로 작동하지 않음.
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './../public/index.html'));
});

/* handle error */
//라우터(routes/account.js)에서 throw err 가 실행되면 이 코드가 실행됩니다
app.use(function(err, req, res, next) {
  console.error(err.stack);
//  res.status(500).send('Something broke!');
  res.status(500).json({
         error: {
             message: 'Something Broke!',
             code: 0
         }
  });
  next();
});

// mongoose.connect('mongodb://username:password@host:port/database=');
//var con1 = mongoose.connect('mongodb://localhost/reduxblog');
//var con2 = mongoose.connect('mongodb://localhost/mean-authdb');

app.listen(port, () => {  //app.listern  -> http.listen
    console.log('Express is listening on port', port);
});
