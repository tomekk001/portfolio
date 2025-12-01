import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

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
app.use(express.static(path.join(__dirname, "../dist")));

// Configure Nodemailer Transporter
// This setup assumes you are using Gmail.
// For other providers (Outlook, hosting SMTP), you might need to change 'service' to 'host' and 'port'.
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // Your Gmail address
    pass: process.env.EMAIL_PASS, // Your App Password (not login password)
  },
});

// API Routes
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  console.log(`Received message from: ${name} (${email})`);

  try {
    // Email content
    const mailOptions = {
      from: `Portfolio Contact <${process.env.EMAIL_USER}>`, // Sender address
      to: process.env.EMAIL_TO || "tomekczyz001@wp.pl", // Receiver address
      replyTo: email, // Assuming the user wants to reply directly to the person who filled the form
      subject: `Nowa wiadomość z Portfolio od: ${name}`,
      text: `
        Otrzymałeś nową wiadomość z formularza kontaktowego na Twojej stronie.
        
        Imię: ${name}
        Email: ${email}
        
        Wiadomość:
        ${message}
      `,
      html: `
        <h3>Nowa wiadomość z Portfolio</h3>
        <p><strong>Imię:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Wiadomość:</strong></p>
        <p style="background-color: #f4f4f5; padding: 15px; border-radius: 5px;">${message.replace(
          /\n/g,
          "<br>"
        )}</p>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");

    return res
      .status(200)
      .json({ success: true, message: "Message sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res
      .status(500)
      .json({ error: "Failed to send email. Please try again later." });
  }
});

// Fallback to index.html for React Router (SPA handling)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
