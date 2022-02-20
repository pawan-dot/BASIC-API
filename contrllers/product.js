const Product = require("../models/productModel");


// Create Product -- Admin
exports.createProduct = async (req, res, next) => {

    try {
        const product = await Product.create(req.body);

        res.status(201).json({
            success: true,
            product,
        });
    } catch (error) {
        res.send(error)

    }

};

//get all products

exports.getAllProducts = async (req, res) => {

    try {
        const product = await Product.find();


        res.status(200).json({
            success: true,
            product,
        });
    } catch (error) {
        res.send(error)

    }

}

//get one product

exports.getOneProduct = async (req, res, next) => {


    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(500).json({
                success: false,
                msg: "Product not found"
            });

        }

        res.status(200).json({
            success: true,
            product
        });
    }
    catch (error) {
        res.send(error)

    }
}




// Update Product -- Admin

exports.updateProduct = async (req, res, next) => {


    try {
        let product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(500).json({
                success: false,
                msg: "Product not found"
            });

        }
        product = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
            useFindAndModify: false,
        });

        res.status(200).json({
            success: true,
            product,
        });
    }
    catch (error) {
        res.send(error)

    }
}

// Delete Product -- Admin

exports.deleteteProduct = async (req, res, next) => {


    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(500).json({
                success: false,
                msg: "Product not found"
            });

        }
        await Product.deleteOne();
        //we use also Use deleteOne(), deleteMany(),remove()

        res.status(200).json({
            success: true,
            message: "Product Deleted Successfully"
        });
    }
    catch (error) {
        res.send(error)

    }
}