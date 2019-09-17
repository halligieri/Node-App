const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

//Initializacions
const app = express();
//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs',exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'),'layout'),
    partialsDir:,
    extname:


}));

//middelwares

//Golbal Variables

//Routes

//Statics Files

//Servers is listening

app.listen(app.get('port'), () =>{
    console.log('Server on port', app.get('port'));
});

