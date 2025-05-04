import { useState } from "react";
import "./Form.scss";

function Form() {
  const [link, setLink] = useState("");
  const [shortenedLink, setShortenedLink] = useState("");

  const shortenLink = async (link) => {
    const response = await fetch("http://localhost:5000/api/shorten", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Ustawiamy typ danych na JSON
      },
      body: JSON.stringify({ url: link }), // Przesyłamy obiekt JSON z kluczem "url"
    });

    if (!response.ok) {
      const error = await response.json();
      alert(error.error || "Something went wrong");
      return;
    }

    const data = await response.json();
    return data.shortUrl; // Zakładam, że odpowiedź ma pole "shortUrl"
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const trimmedLink = link.trim();

    let formattedLink = trimmedLink;
    if (!/^https?:\/\//i.test(formattedLink)) {
      formattedLink = "https://" + formattedLink;
    }

    try {
      new URL(formattedLink); // Walidacja URL
    } catch (err) {
      alert("Enter a correct link!");
      console.log(err);
      return;
    }

    if (trimmedLink === "") {
      alert("Enter your link!");
      return;
    }

    const shortUrl = await shortenLink(formattedLink);
    setShortenedLink(shortUrl); // Ustawiamy skrócony link
    console.log(shortenedLink);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Shorten a link here..."
          onChange={(e) => setLink(e.target.value)}
          value={link}
        />
        <button>Shorten It!</button>
      </form>
      <div>{shortenedLink && <p>Shortened URL: {shortenedLink}</p>}</div>
    </>
  );
}

export default Form;
