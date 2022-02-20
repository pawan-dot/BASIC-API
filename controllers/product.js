const Product = require("../models/product");
const connectDatabase = require("../config/database");


var csv = require('csvtojson');






// 1.Create Product -- Admin
exports.createProduct = async (req, res, next) => {


    try {
        var temp;

        //convert csvfile to jsonArray   
        csv()
            .fromFile(req.file)
            .then((jsonObj) => {
                for (var x = 0; x < jsonObj; x++) {
                    temp = parseFloat(jsonObj[x].Test1)
                    jsonObj[x].Test1 = temp;
                    temp = parseFloat(jsonObj[x].Test2)
                    jsonObj[x].Test2 = temp;
                    temp = parseFloat(jsonObj[x].Test3)
                    jsonObj[x].Test3 = temp;
                    temp = parseFloat(jsonObj[x].Test4)
                    jsonObj[x].Test4 = temp;
                    temp = parseFloat(jsonObj[x].Final)
                    jsonObj[x].Final = temp;
                }
                Product.insertMany(jsonObj, (err, product) => {
                    if (err) {
                        console.log(err);
                    } else {
                        //const product = jsonObj.save();

                        res.status(201).json({
                            success: true,
                            product,
                        });
                    }
                });
            });

    } catch (error) {
        res.send(error)


    }


};


//2.get all products

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

