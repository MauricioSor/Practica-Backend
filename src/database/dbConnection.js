import {connect} from 'mongoose'
import { MONGODB_URI } from '../config';
connect(MONGODB_URI).then(respuesta => console.log(`DB conectada en ${respuesta.connection.port} con el nombre ${respuesta.connection.name}`))
.catch(error=> console.log(error));
