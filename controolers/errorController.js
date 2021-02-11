exports.get404 = (req, res, next) => {
    res.status(404).render('pages/error.ejs',{active: '', name: ''});
  };
  
  