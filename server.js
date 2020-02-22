const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const indexRouter = require('./routes/index');
const skillsRouter = require('./routes/skills');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));
app.use('/', indexRouter);
app.use('/skills', skillsRouter);

app.listen(port, function() {
    console.log(`Listening on port ${port}...`);
});
