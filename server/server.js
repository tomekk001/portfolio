import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

// Helper to reconstruct __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json()); // Built-in express body parsing
app.use(express.urlencoded({ extended: true }));

// Serve Static Frontend Files (from the build folder)
// We assume the build output is in ../dist relative to this file
app.use(express.static(path.join(__dirname, "../dist")));

// API Routes
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  // Log the message (In production, replace this with Nodemailer logic)
  console.log("--- NEW CONTACT FORM SUBMISSION ---");
  console.log(`From: ${name} (${email})`);
  console.log(`Message: ${message}`);
  console.log("-----------------------------------");

  // Simulation of email sending delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  return res.status(200).json({ success: true, message: "Message received" });
});

// Fallback to index.html for React Router (SPA handling)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
