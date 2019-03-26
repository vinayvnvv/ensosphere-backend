const mongoose = require('mongoose');
const ENV = require('./../../env');
mongoose.connect(ENV.MONGODB_CONNECTION, {useNewUrlParser: true});


const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: String,
    isSameAsWhatsapp: Boolean,
    name: String,
    phone: String,
    whatsappNumber: String,
    date: { type: Date, default: Date.now },
});


class UserDB {
    addUser(user, callback) {
        const User = mongoose.model(ENV.COLLECTIONS.USER, UserSchema);
        const userDoc = new User(user);
        userDoc.save((err, doc) => {
            console.log('Doc save', err, doc);
            callback(err, doc);
        });
    }

    getUsers(callback) {
        const User = mongoose.model(ENV.COLLECTIONS.USER, UserSchema);
        User.find({}, (err, docs) => {
            console.log('Doc get', err, docs);
            callback(err, docs);
        });
    }
}

module.exports = new UserDB();



