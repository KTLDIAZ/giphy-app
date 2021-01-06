import React from "react";
import GifGridItem from "./GifGridItem";
import { useFetchGif } from "../hooks/useFetchGif";

const GifGrid = ({ category }) => {
  const { data, loading } = useFetchGif(category);
  // const { data:images } = useFetchGif(category); para renombrar a iamges
  return (
    <>
      <h3>{category}</h3>
      {loading ? (
        "cargando"
      ) : (
        <div className="card-grid">
          {data.map((img) => (
            <GifGridItem key={img.id} {...img} />
          ))}
        </div>
      )}
    </>
  );
};

export default GifGrid;
