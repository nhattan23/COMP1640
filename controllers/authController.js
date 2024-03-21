const express = require('express');
const router = express.Router();
const multer = require('multer');
const fs = require('fs');
const bcrypt = require('bcrypt');
const User = require('../models/users');

const { model } = require("mongoose")

const authController = {
    // Register user
    addUserSite: async(req, res) =>{
        try {
            const users = await User.find(); // Giả sử bạn sử dụng Mongoose để lấy dữ liệu người dùng từ cơ sở dữ liệu
            res.render('administration/add_users', {title: "Students Management Page", users: users}); // Truyền biến title vào template
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Internal Server Error' });
        }
        
    },    

    addUser: async (req, res) => {
        try {
            const salt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(req.body.password, salt);

            const user = new User({
                userName: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                userImage: req.file.filename,
                password: hashed,
                created: Date.now,
                role: req.body.role,
                faculty: req.body.faculty,
                academy: req.body.academy,
            });
            await user.save();
            req.session.message = {
                type: "success",
                message: "User Added Successfully"
            };
            res.redirect("/");
        } catch (err) {
            res.status(500).json({ message: err.message, type: "danger" });
        };
    },
}

module.exports = authController;