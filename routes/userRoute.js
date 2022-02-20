const express = require("express");
const {
    registerUser,
    loginUser,
    logout,
    forgotPassword,
    resetPassword,
    getUserDetails,
    updatePassword,
    updateProfile,
    getAllUser,
    getSingleUser,
    updateUserRole,
    deleteUser,
} = require("../controllers/userController");

const router = express.Router();

router.route("/user/register").post(registerUser);

router.route("/user/login").post(loginUser);
module.exports = router;