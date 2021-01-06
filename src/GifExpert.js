import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpert = () => {
  const [categories, setCategories] = useState(["KK"]);

  return (
    <div>
      <h2> Giphy</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((cat) => (
          <GifGrid category={cat} key={cat} />
        ))}
      </ol>
    </div>
  );
};

export default GifExpert;
