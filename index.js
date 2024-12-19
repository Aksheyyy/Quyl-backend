require('dotenv').config();
const express = require("express");
const cors = require("cors");
const router = require("./routes/routes");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const app = express();


app.use(cors()); 
app.use(express.json()); 
app.use(router); 

app.get("/", (req, res) => {
  res.send("Student Management server is Running and waiting for client request!");
});

const PORT = 5000 || process.env.PORT

app.listen(PORT, async () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  try {
    await prisma.$connect();
    console.log("Prisma connected to the database successfully!");
  } catch (err) {
    console.error("Failed to connect to the database:", err.message);
  }
});
