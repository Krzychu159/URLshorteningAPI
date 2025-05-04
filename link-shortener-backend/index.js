import express from "express";
import cors from "cors";
import { nanoid } from "nanoid";

// Tworzymy aplikację Express
const app = express();

// Ustawienia aplikacji
app.use(cors()); // Obsługuje CORS
app.use(express.json()); // Obsługuje JSON w ciele zapytań

// Przechowywanie skróconych linków w pamięci
const links = {};

// Przykładowa trasa do skracania linków
app.post("/api/shorten", (req, res) => {
  console.log("Otrzymane dane:", req.body);
  const { url } = req.body; // Odbieramy URL z ciała zapytania
  if (!url) {
    return res.status(400).json({ error: "URL is required" });
  }

  // Generujemy unikalny skrót
  const shortId = nanoid(6); // 6-znakowy unikalny identyfikator
  const shortLink = `http://short.ly/${shortId}`;

  // Zapisujemy link w pamięci
  links[shortId] = url;

  // Zwracamy odpowiedź z oryginalnym i skróconym linkiem
  res.json({ originalUrl: url, shortUrl: shortLink });
});

// Przykładowa trasa do przekierowania na oryginalny link
app.get("/api/:id", (req, res) => {
  const shortId = req.params.id;
  const originalUrl = links[shortId];

  if (!originalUrl) {
    return res.status(404).json({ error: "Short link not found" });
  }

  // Przekierowanie na oryginalny link
  res.redirect(originalUrl);
});

// Definiujemy port
const PORT = process.env.PORT || 5000;

// Uruchamiamy serwer
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
