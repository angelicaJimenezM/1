import express from 'express';
import indexRoutes from './routes/index.routes.js';
import cors from 'cors'
import {router} from './routes/user.routes.js'
console.clear();
const app = express();

app.use(cors());
app.use(express.json())
app.use(indexRoutes);
app.use(router) 



const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})