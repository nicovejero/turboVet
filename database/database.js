import { Sequelize } from "sequelize";
import "dotenv/config.js";

const database=process.env.DB_NAME
const username=process.env.DB_USERNAME
const password=process.env.DB_PASSWORD
const port=process.env.DB_PORT
const host=process.env.DB_HOST
const dialect=process.env.DB_DIALECT

const connectionDb = new Sequelize(
	database, 
	username, 
	password, 
	{
		host,
		port,
		dialect,
	}
);

try {
	await connectionDb.authenticate();
	console.log("Connection has been established successfully.");
  } catch (error) {
	console.error("Unable to connect to the database:", error);
}

export default connectionDb;