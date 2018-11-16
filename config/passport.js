const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const User = mongoose.model('users');
const keys = require('../config/keys');

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

module.exports = passport => {
<<<<<<< HEAD
  passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
  
      User.findById(jwt_payload.id)
      .then(user => {
          if(user){
         return done(null, user);     
          }
          return done(null, false);
      })
      .catch(err => console.log(err));
  })
  );
=======
    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
       User.findById(jwt_payload.id)
       .then(user => {
           if(user){
               return done(null, user);
           }
           return done(null, false);
       })
       .catch(err => console.log(err));
    }));
>>>>>>> ba3e5ef6d4665d7837d3ebe30b24e37249c3947f
};