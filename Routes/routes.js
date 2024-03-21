const express = require('express');
const router = express.Router();
const multer = require('multer');
const fs = require('fs');
const bcrypt = require('bcrypt');
const authController = require('../controllers/authController');
const User = require('../models/users');


router.get("/addUser", authController.addUserSite);
router.post("/add", authController.addUser);
// index.ejs
// router.get('/', async (req, res) => {
//     try {
//         const users = await User.find(); // Giả sử bạn sử dụng Mongoose để lấy dữ liệu người dùng từ cơ sở dữ liệu
//         res.render('index', { title: 'Admin Dashboard', users: users }); // Truyền biến title vào template
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ message: 'Internal Server Error' });
//     }
// });


router.get('/', (req, res) => {
    res.render('administration/dashboard', {title: 'Admin Dashboard'});
});


// Login
router.get('/loginPage', (req, res) => {
    res.render('loginSite', {title: "Login Page"});
});
router.post('/login', async (req, res) => {
    try {
        // Tìm kiếm người dùng trong cơ sở dữ liệu
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.render('loginSite', { message: { type: 'danger', message: 'Invalid email or password' }, title: 'Login Page' });
        }

        // So sánh mật khẩu được nhập với mật khẩu trong cơ sở dữ liệu
        const isPasswordMatch = await bcrypt.compare(req.body.password, user.password);
        if (!isPasswordMatch) {
            return res.render('loginSite', { message: { type: 'danger', message: 'Invalid email or password' }, title: 'Login Page' });
        }

        // Đăng nhập thành công, trả về thông tin người dùng
        res.redirect('/');
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

router.get('/adminLogin', (req, res) => {
    res.render('administration/loginAdminSite', {title: 'Admin Login'});
});




module.exports = router;
