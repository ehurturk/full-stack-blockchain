const express = require("express");
const cors = require("cors");

// Importing Routers
const router = require("./routes/transactions.js");

// Init express
const app = express();

// Body parser
app.use(express.json());

// Enable cors
app.use(cors());

// Routes
app.use("/api/transactions/", router.router);

const PORT = 3000;

app.listen(PORT, () =>
  console.log(`Server running in ${PORT} mode on port ${PORT}`)
);
