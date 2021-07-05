import React, { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {

 
  const {data:imagenes,loading}= useFetchGifs(category);
  console.log(imagenes,loading);
 /*  const [imagenes, setimagenes] = useState([]);

  useEffect(() => {
    getGifs(category)
    .then(img=>setimagenes(img))

  }, [category])
 */



 /*  const getGifs = async () => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category) }&limit=10&api_key=fOTjEMmJVbEQ9sACdpGjBvQr5NxJ5gyn`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });
    console.log('test',category);
    console.log(gifs);
   
    setimagenes(gifs);
  }; */

  
  return (
    <>
      <h3 className="card animate__animated animate__fadeIn">{category}</h3>
      {loading && <p className="card animate__animated animate__flash">Loading...</p>}
      <div className="card-grid">
        {imagenes.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
