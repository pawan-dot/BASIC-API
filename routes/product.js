const express = require("express");
const { createProduct, getAllProducts } = require("../controllers/product");
const router = express.Router();
const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth");

var multer = require("multer");

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./public/uploads");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

var uploads = multer({ storage: storage });
//product routes
router
    .route("/admin/product/create")
    .post(
        isAuthenticatedUser,
        authorizeRoles("admin"),
        uploads.single("csv"),
        createProduct
    );

router.route("/product/getAll").get(isAuthenticatedUser, getAllProducts);

module.exports = router;
