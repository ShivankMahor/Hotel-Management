import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sql from './db/index.js'

dotenv.config();

const app = express();
// Middleware
app.use(cors());
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.send("Hotel Management API is running 🚀");
});

// Example: Get all hotels
app.get("/hotels", async (req, res) => {
  try {
    const result = await sql.query("SELECT * FROM hotels");
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Example: Add a hotel
app.post("/hotels", async (req, res) => {
  try {
    const { name, location, description, contact_email, contact_phone } = req.body;
    console.log("BODY: ", req.body);
    const created_at = new Date();
    const updated_at = new Date();
    const result = await sql`
      INSERT INTO hotels (name, location, description, contact_email, contact_phone, created_at, updated_at)
      VALUES (${name}, ${location}, ${description}, ${contact_email}, ${contact_phone}, ${created_at}, ${updated_at})
      RETURNING *;
    `;

    res.json(result[0]); // with postgres.js client
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
