const express = require('express');
const router = express.Router();

router.get('/login',(req,res) => {
    res.render('admin/adminLogin')
})


module.exports = router