const express = require("express");
const {
    registerUser,
    loginUser,
    logout,
    getUserDetails,
    getAllUser,
} = require("../controllers/userController");

const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth");

const router = express.Router();

//user routes
router.route("/user/register").post(registerUser);

router.route("/user/login").post(loginUser);

router.route("/user/details").get(isAuthenticatedUser, getUserDetails);

router
    .route("/admin/getAllusers")
    .get(isAuthenticatedUser, authorizeRoles("admin"), getAllUser);

router.route("/user/logout").get(logout);

module.exports = router;
