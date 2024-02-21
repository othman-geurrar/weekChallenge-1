
const express = require('express');
const router = require('./Routes/postRoutes');
const {log} = require('./Middlewares/middleware');
const app = express();
app.use(express.json());
app.use(log);


const port = 5000;



app.use("/posts", router)




app.listen(port , ()=>
    console.log("Server has started .. ")
    )


