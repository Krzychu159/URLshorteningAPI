import { useState } from "react";
import "./Form.scss";

function Form() {
  const [link, setLink] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Shorten a link here..."
        onChange={(e) => setLink(e.target.value)}
        value={link}
      />
      <button>Shorten It!</button>
    </form>
  );
}

export default Form;
