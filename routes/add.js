const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('about', {
        title: 'about',
        isAbout: true
    });
})


router.post('/', (req, res) => {
    console.log(req.body);

    res.redirect('courses')
})

module.exports = router;
