import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function ItemShow() {
  const [item, setItem] = useState([]);
  const { id } = useParams();
  //get item for showpage
  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/items/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.token}` },
    })
      .then((res) => res.json())
      .then((text) => {
        setItem(text);
      });
  }, [id]);

  const { name, img, description, price } = item;
  function handleSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:3000/api/v1/item_orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${localStorage.token}`,
      },
      body: JSON.stringify({
        item_order: { item_id: id },
      }),
    })
      .then((res) => res.json())
      .then((newCartItem) => {
        console.log(newCartItem);
      });
  }
  return (
    <>
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <img src={img} alt={name} height="500px" />
          <h1>{name}</h1>
          <p>{description}</p>
          <h3>${price}</h3>

          <button type="submit">Add to Cart</button>
        </form>
      </div>
    </>
  );
}

export default ItemShow;
