import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

var localhost = '192.168.1.68';

const Schema = mongoose.Schema;

const Account = new Schema({
    username: {type: String, required: true },
    nickname: {type: String, required: true },
    password: {type: String, required: true },
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now},
    groupname: String,
    online: {type: Boolean, default: false}
});

// generates hash
Account.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, 8);
};

// compares the password
Account.methods.validateHash = function(password) {
    return bcrypt.compareSync(password, this.password);
};

var dbAddr = 'mongodb://localhost/reduxblog';
var con1 = mongoose.createConnection(dbAddr);
// reduxblog

export default con1.model('account', Account);
