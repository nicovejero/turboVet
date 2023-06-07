import { Router } from "express";
const example = Router();
//import sql from "./database/database.js"
example.get ("/", (req, res)=> {
	res.send("get all examples")
});

example.get ("/:id", (req, res)=> {
	res.send("get example by id")
});

example.post ("/", (req, res)=> {
	res.send("create example")
});

example.put ("/:id", (req, res)=> {
	res.send("update example by id")
});

example.delete ("/:id", (req, res)=> {
	res.send("delete example by id")
});

export default example;