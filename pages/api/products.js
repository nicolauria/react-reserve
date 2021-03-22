// an api is basically just a bunch of routes (routes are functions)
// both the frontend and the backend are using es6 syntax
import products from '../../static/products.json'
import connectDb from '../../utils/connectDb'

connectDb()

export default (req, res) => {
    res.status(200).json(products)
}