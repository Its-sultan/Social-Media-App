const HttpError = require("../models/errorModel");

// =========register user =========
// POST : api/users/register
//UNPROTECTED
const registerUser = async (req, res, next) => {
    try {
        res.json("Register User")
    } catch (error) {
        return next(new HttpError(error))
    }
}

// =========login user =========
// POST : api/users/login
//UNPROTECTED
const loginUser = async (req, res, next) => {
    try {
        res.json("Login User")
    } catch (error) {
        return next(new HttpError(error))
    }
}


// =========GET user =========
// GET : api/users/:id
//PROTECTED
const getUser = async (req, res, next) => {
    try {
        res.json("Get User")
    } catch (error) {
        return next(new HttpError(error))
    }
}



// =========GET user =========
// GET : api/users/
//PROTECTED
const getUsers = async (req, res, next) => {
    try {
        res.json("Get Users")
    } catch (error) {
        return next(new HttpError(error))
    }
}


// =========Edit user =========
// PATCH : api/users/edit
//PROTECTED
const editUser = async (req, res, next) => {
    try {
        res.json("Edit User")
    } catch (error) {
        return next(new HttpError(error))
    }
}


// =========FOLLOW/UNFOLLOW user =========
// PATCH : api/users/:id/follow-unfollow
//PROTECTED
const followUnfollowUser = async (req, res, next) => {
    try {
        res.json("FOLLOW/UNFOLOW User")
    } catch (error) {
        return next(new HttpError(error))
    }
}




// =========cHANGE user PROFILE PHOTO =========
// PATCH : api/users/avatar
//PROTECTED
const changeUserAvatar = async (req, res, next) => {
    try {
        res.json("Change User Avatar")
    } catch (error) {
        return next(new HttpError(error))
    }
}


module.exports =  {registerUser, loginUser, getUser, getUsers, editUser, followUnfollowUser, changeUserAvatar};