import express from "express";

const app = express();

// GET: Seach and list information
// POST: Create some new information
// PUT: Update existing information
// DELETE: Delete existing information

app.post("/users", (request, response) => {
    const users = [
        {name: 'Juan', age: 18},
        {name: 'Bina', age: 18},
        {name: 'Diego', age: 25},
    ]
    return response.json(users)
});

app.listen(3333);
