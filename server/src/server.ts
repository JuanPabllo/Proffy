import express from "express";
import routes from "./routes";

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333);

// HTTP:
// GET: Seach and list information.
// POST: Create some new information.
// PUT: Update existing information.
// DELETE: Delete existing information.

// Params:
// Body(Request Body): data for creating or updating a register.
// Route Params: Identify which feature I want to update or delete.
// Query Params: Page, filter, ordination.
