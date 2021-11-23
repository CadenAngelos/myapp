const productService = require('./productService');

exports.list = async (req, res) => {
    const products = await productService.list(!isNaN(req.query.page) && req.query.page > 0 ? req.query.page - 1 : 0);
    res.render('productGrid', { products });
}