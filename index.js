const express = require('express');

// esto permite setear amiente productivo y de desarrollo para que carge las 2 versiones diferentes del front
const env = require('dotenv').config();
var app = express();

// Setea los archivos estaticos del front
if (process.env.NODE_ENV === 'development') {
    app.use(express.static(__dirname + '/front'));
}else  {
    app.use(express.static(__dirname + '/front/build/es5-bundled'));
}






// Al final de todos los ruteos se agrega el * para que por defecto renderize el front.
app.get('*', function (req, res) {
    if (process.env.NODE_ENV === 'developemnt') {
        res.sendFile('./front/index.html',{root:'.'});
    }
    else {
        res.sendFile('./front/build/es5-bundled/index.html',{root:'.'});
    }
    
    //res.sendFile('./front/index.html',{root:'.'});
});



app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
