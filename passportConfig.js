const LocalStrategy = require("passport-local");
const { usr } = require("./db");
exports.initializePassport = (passport) => {
  console.log('4-----------')
  passport.use(
    new LocalStrategy({ usernameField: 'userName',    // define the parameter in req.body that passport can use as username and password
    passwordField: 'password'}, async (userName, password, done) => {
      console.log("2-----------");
      try {
        const user = await usr.findOne({ userName });
        console.log("0-----", user);
        if (!user) {
          return done('user not found', false);
        }
        if (user.password !== password) {
          return done('password not matching', false);
        }
        return done(null, user);
      } catch (error) {
        console.log("error", error);
        return done(error, false);
      }
    })
  );
  passport.serializeUser((user, done) => {
    console.log('first')
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    try {
        console.log("3-----------")
      const user = usr.findById(id);
      done(null, user);
    } catch (error) {
      done(error, false);
    }
  });
};
