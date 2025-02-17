import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import pool from "./database/db";

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post("/api/v1/renters", async (req: Request, res: Response) => {
  const { name, age, gender, occupation } = req.body;
  try {
    console.log(JSON.stringify(req.body, null, 2));
    const newRenter = await pool.query(
      "INSERT INTO renters (name, age, gender, occupation) VALUES ($1, $2, $3, $4) RETURNING *",
      [name, age, gender, occupation]
    );
    res.json(newRenter.rows[0]);
  } catch (err: any) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
