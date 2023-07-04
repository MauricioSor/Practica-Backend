import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import path from 'path';
import 'dotenv/config'
import './src/database/dbConnection'

// usar un puerto 
const app = express();
app.set('port', process.env.PORT || 4000);
app.listen(app.get('port'), ()=>{
    console.log('estoy en el puerto'+app.get('port'))
});

// middlewares
app.use(cors()) // Permite conexiones remotas
app.use(express.json()) // Permite a mi aplicacion recibir objetos de tipo json en los request
app.use(morgan('dev')) // Me muiestra en la consola informacion extra de las solicitudes (get ,p ost put etc.)
console.log(path.join(__dirname,'/public'))// La variable __dirname siempre devuelve la ruta absoluta donde vive el proyecto 
//app.use(express.static(path.join(__dirname,'/public')))// Le concateno a la ruta la ubicacion public 
//http://localhost:4000
//rutas

console.log("esta es una prueba de backend");