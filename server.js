
const dotenv=require('dotenv');
const app=require('./app');

const connectDatabase=require("./config/db")


dotenv.config({path:"config/config.env"});

connectDatabase();


app.listen(process.env.PORT,()=>{
console.log(`Server is running on this Port: ${process.env.PORT}`)


});


