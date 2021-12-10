let userApi = require('../components/users');
module.exports = function(app) {
    userApi(app);

  app.get('/', (req, res,next)=> {
   
    res.render("index", {});
   
  });
};