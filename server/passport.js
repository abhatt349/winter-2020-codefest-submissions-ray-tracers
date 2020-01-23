const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongose");
const User = mongoose.model("users");
const keys = require("./config");

const opts = {};
opts.jwtFromRequest = Extract ExtractJwt.fromAuthHeaderAsBearerToken();  //giving user a token as a type of id
opts.secretOrKey = keys.SECRET_OR_KEY;

/*
  arrow func with passport as param
  the passport creates a new strategy to find the user by the token id
  if the user is found then return that user, otherwise return false
  throws an error if the strategy doesn't work.
*/
module.expors = (passport) => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      User.findById(jwt_payload.id).then((user) => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
      }).catch((err) => {
        console.log(err)
      });
    })
  );
};
