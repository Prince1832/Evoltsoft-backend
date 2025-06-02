const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const app = express();
app.use(cors());
app.use(express.json());

const authRoutes = require('./routes/authRoutes');
const stationRoutes = require('./routes/stationRoutes');

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "EV Charging Station API",
      version: "1.0.0",
      description: "API documentation for EV Charging Station project",
    },
    servers: [
      {
        url: "https://evoltsoft-backend-oz6h.onrender.com", 
      },
    ],
  },
  apis: ["./routes/*.js"], 
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/chargers', stationRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log("MongoDB connection error:", err));

app.get("/", (req, res) => {
    res.send("API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
