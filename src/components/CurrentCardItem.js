import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";

const DivCard = styled.div`
  border: 1px solid #efefef;
  background: #fff;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-top: auto;
`;

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
    <DivCard>
      <div className="ui inverted segment">
        <div className="ui inverted form">
          <hr />
          <Image src={item.img} alt={item.name} height="200px" />
          <h1>{item.name}</h1>
          <input
            className="field"
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
          <button className="ui submit button" onClick={updateOrder}>
            Update Quantity
          </button>
          <button className="ui submit button" onClick={deleteOrder}>
            Delete From Cart
          </button>
          <h3>${item.price}</h3>
          <hr />
        </div>
      </div>
    </DivCard>
  );
}

export default CurrentCardItem;
