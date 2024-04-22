import express from 'express';
import indexRoutes from './routes/index.routes.js';
import cors from 'cors'
import {router as iniciar_sesion} from './routes/user.routes.js';
import {router as createGuide} from './routes/Guide.routes.js';
import {router as createTourist} from './routes/Tourist.routes.js';
import {router as login} from './routes/Login.routes.js'
console.clear();
const app = express();

app.use(cors());
app.use(express.json());
app.use(indexRoutes);
app.use(iniciar_sesion);
app.use(createGuide); 
app.use(createTourist);
app.use(login);



const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})