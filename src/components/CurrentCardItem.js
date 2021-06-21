import React from "react";
import { useEffect, useState } from "react";

function CurrentCardItem({ item, orderId, itemOrders }) {
  const [inputValue, setInputValue] = useState(undefined);
  console.log("orderId : ", orderId);

  useEffect(() => {
    if (itemOrders) {
      let a = 0;
      itemOrders?.forEach((element) => {
        if (element.item_id == item.id) a = element.counter;
      });
      setInputValue(a);
    }
  }, [itemOrders]);

  function updateOrder(e) {
    e.preventDefault();
    fetch(`http://localhost:3000/api/v1/item_orders/${item.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${localStorage.token}`,
      },
      body: JSON.stringify({
        orderId: orderId,
        counter: inputValue,
      }),
    });
    window.location.reload(false);
  }

  function deleteOrder(e) {
    e.preventDefault();
    fetch(`http://localhost:3000/api/v1/item_orders/${item.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${localStorage.token}`,
      },
      body: JSON.stringify({
        orderId: orderId,
      }),
    });
    window.location.reload(false);
  }

  return (
    <div>
      <img src={item.img} alt={item.name} height="500px" />
      <h1>{item.name}</h1>
      <input
        type="number"
        id="quantity"
        name="quantity"
        min="1"
        max="100"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      ></input>
      <button onClick={updateOrder}>Update Quantity</button>
      <button onClick={deleteOrder}>Delete From Cart</button>
      <h3>${item.price}</h3>
    </div>
  );
}

export default CurrentCardItem;
