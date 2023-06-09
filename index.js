const express = require('express');
const path = require('path');
const exphb = require('express-handlebars');
const app = express();
const homeRoutes = require('./routes/home');
const coursesRoutes = require('./routes/courses');
const addRoutes = require('./routes/add');

const hbs = exphb.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

console.log(path.join(__dirname, 'public', 'index.css'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}));

app.use('/', homeRoutes);
app.use('/courses', coursesRoutes);
app.use('/add', addRoutes);


const PORT = process.env.PORT || 1111;

app.listen(PORT, () => {
    console.log(`server has been started on port ${PORT}`);
})
