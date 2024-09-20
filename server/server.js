//access express, cors, pg, dotenv
import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";

//intiailise express

const app = express();

//configure dotenv
dotenv.config();

//tell express app to use json then use cors

app.use(express.json());

app.use(cors());

//set up database pool using connection
const dbConnectionString = process.env.DATABASE_URL;

export const db = new pg.Pool({
  connectionString: dbConnectionString,
});

const PORT = 8080;
// "https://week4-assignment-guestbook-ntbd.onrender.com"
app.listen(PORT, function () {
  console.log(`server is ready and running in PORT ${PORT}`);
});

app.get("/", function (request, response) {
  response.json({ message: "You are looking at my root route!" });
});

app.get("/panem", async (request, response) => {
  const query = db.query(`SELECT * FROM panem`);
  response.json(query.rows);
  console.log(query);
});

app.post("/add", function (request, response) {
  const bodyData = request.body;

  console.log(bodyData);
  response.json({ message: "Body data received!", form: `${bodyData.form}` });
});
//set up root route

//=====================================
// in.env i need database connection string with correct password
