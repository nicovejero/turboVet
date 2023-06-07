import express from "express";
//import routes from './routes/routes.js';
import connectionDb from "./database/database.js";
import "dotenv/config.js";

const appPort=process.env.APP_PORT
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
//app.use(routes);

//await connectionDb.sync({force:true}).then(() => { 
	app.listen(appPort, () => {
		console.log("Server ok http://localhost:8080");
	});
//})

app.on("error", (error) => {
	console.log(error.message);
});
