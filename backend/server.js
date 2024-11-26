import path from "path";
import express from "express";
import dotenv from "dotenv";
import userRouter from "./routes/user.routes.js";
import foodDealRouter from "./routes/foodDeal.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import cors from "cors";

dotenv.config({ path: "./backend/.env" });

const app = express();
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

// Middleware to parse JSON
app.use(express.json());

// Allowed origins for CORS
const allowedOrigins = [
  "http://localhost:5173","http://localhost:5000"
];

// CORS configuration
app.use(cors({
  origin: function (origin, callback) {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, origin);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true, // Allow credentials
}));

app.options('*', cors());


// API routes
app.use("/api/auth", userRouter);
app.use("/api/deals", foodDealRouter);

// Serve static files from frontend build
app.use(express.static(path.join(__dirname, "frontend", "dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});
app.get('/assets/*.css', (req, res) => {
    res.setHeader('Content-Type', 'text/css');
    // Your logic to serve the CSS file
  });

// Start server
app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server is running on port ${PORT}`);
});
