import express from "express";
import db from "./database/connection";

const routes = express.Router();

routes.post("/classes", async (request, response) => {
    const {
        name,
        avatar,
        whatsapp,
        bio,
        subject,
        cost,
        shedule,
    } = request.body;

    const insertedUsersIds = await db("users").insert({
        name,
        avatar,
        whatsapp,
        bio,
    });

    const user_id = insertedUsersIds[0];

    const insertedClassesIds = await db("classes").insert({
        subject,
        cost,
        user_id,
    });

    const class_id = insertedClassesIds[0];

    

    return response.send();
});

export default routes;
