const adminController = {
    loginAdmin: (req, res) => {
        res.render('./Views/administration/loginAdminSite', {title: 'Admin Login'});
    },
}

module.exports = adminController;