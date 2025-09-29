import dotenv from "dotenv";
import connectDB from "./config/database.js";
import app from "./app.js";

dotenv.config({
    path: './.env'
});


const startServer = async () => {
  try {
           console.log("MONGODB_URI:", process.env.MONGODB_URI);
           await connectDB();

        app.on("error", (error) => {    // to check if there are any errors 
        console.log("ERROR", error);
        throw error;
    });


    app.listen(process.env.PORT || 8000, () => {   // app will listen
        console.log(` Server is running at port :     
            ${process.env.PORT}`);                 

    });
} catch (err) {
    console.log("MONGO db connection failed !!! ", err);
    
}
}

startServer();

