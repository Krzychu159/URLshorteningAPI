import React, { useEffect, useState } from "react";

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts") // tu można podać swoje API
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) =>
        console.error("Błąd podczas pobierania danych:", error)
      );
  }, []);

  return (
    <div>
      <h1>Posty</h1>
      {posts.map((post) => (
        <div
          key={post.id}
          style={{
            border: "1px solid gray",
            margin: "10px",
            padding: "10px",
          }}
        >
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
