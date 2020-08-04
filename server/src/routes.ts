import express from "express";

import ClassesController from "./controllers/classesController";

const routes = express.Router();
const classesControlers = new ClassesController();

routes.get("/classes", classesControlers.index);
routes.post("/classes", classesControlers.create);

export default routes;
