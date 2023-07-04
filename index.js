import express from 'express';
import cors from 'cors';

// usar un puerto 
const app =express();
app.set('port', process.env.PORT || 4000);
app.listen(app.get('port'), ()=>{
    console.log('estoy en el puerto'+app.get('port'))
});

// middlewares
app.use(cors()); // Permite conexiones remotas


//rutas

console.log("esta es una prueba de backend");