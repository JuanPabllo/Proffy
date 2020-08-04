import express from "express";

const app = express();

app.use(express.json());

// HTTP:
// GET: Seach and list information.
// POST: Create some new information.
// PUT: Update existing information.
// DELETE: Delete existing information.

// Params:
// Body(Request Body): data for creating or updating a register.
// Route Params: Identify which feature I want to update or delete.
// Query Params: Page, filter, ordination.

app.get("/", (request, response) => {
    return response.json({ message: "Hello world" });
});

app.listen(3333);
