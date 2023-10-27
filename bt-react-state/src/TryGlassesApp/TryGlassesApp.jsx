import React, { useState } from "react";
import data from "./data.json";

export const TryGlassesApp = () => {
  // console.log(data);

  const [product, setProduct] = useState([
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ]);

  const handleItem = (product) => {
    setProduct(product);
  }
  return (
    <div className="container mt-5 tryGlasses">
      <div className="row">
        <div className="contain">
          <div className="model">
          <img
              style={{
                width: 222,
                height: 250,
              }}
              className="mx-auto d-block"
              src="./glassesImage/model.jpg"
              alt=""
            />
            <img id="glasses" src={product.url} alt="" />
          </div>
        </div>
        <div className="glassDetail text-center">
            <h3>{product.name}</h3>
            <p>{product.desc}</p>
          </div>
      </div>
      <div className="row align-items-center glassesList">
        {data.map((item) => {
          return (
            <div key={item.id} className="col-2 my-3 glassImage">
              <a type="button" onClick={() => {handleItem(item)}}>
              <img
              className="image"
                style={{
                  width: 100,
                  height: 50,
                }}
                src={item.url}
                alt=""
              />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};
