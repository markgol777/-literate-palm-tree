const express = require('express');
const path = require('path');
const exphb = require('express-handlebars');
const homeRoutes = require('./routes/home');
const coursesRoutes = require('./routes/courses');
const addRoutes = require('./routes/add');

const app = express();

const hbs = exphb.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: false}));
app.use('/', homeRoutes)
app.use('courses', coursesRoutes)
app.use('add', addRoutes)


app.get('/courses', (req,res ) => {
    res.render('courses', {
        title: 'courses',
        isCourses: true
    })
})

app.get('/add', (req,res ) => {
    res.render('add', {
        title: 'add',
        isAdd: true
    })
})

const PORT = process.env.PORT || 6996;

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}/`);
})