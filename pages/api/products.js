// an api is basically just a bunch of routes (routes are functions)
// both the frontend and the backend are using es6 syntax
// import products from '../../static/products.json'
import connectDb from '../../utils/connectDb'
import Product from '../../models/Product'

connectDb()

export default async (req, res) => {
    const products = await Product.find()
    res.status(200).json(products)
}