exports.getAdminPage = (req,res,next) => {
    res.render('pages/admin page/admin', {active: 'overview'})
}
exports.getAdminProducts = (req,res,next) => {
    res.render('pages/admin page/adminProducts.ejs', {active: 'products'})
}