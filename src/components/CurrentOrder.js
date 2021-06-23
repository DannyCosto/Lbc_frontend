import React from "react";
import { useEffect, useState } from "react";
import CurrentCardItem from "./CurrentCardItem";
import styled from "styled-components";

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(1, 1fr);
grid-gap: 20px:
width: 20px;
padding:20px;
`;

const Container = styled.div`
  text-align: center;
  justify-content: center;
  align-items: center;
`;

function CurrentOrder() {
  const [currentOrder, setCurrentOrder] = useState([]);
  const [totalOrder, setTotalOrder] = useState("");
  const [orderId, setOrderId] = useState(undefined);
  const [itemOrders, setItemOrder] = useState(undefined);
  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/orders/active_cart`, {
      headers: {
        Authorization: `bearer ${localStorage.token}`,
      },
    })
      .then((res) => res.json())
      .then((current_cart) => {
        console.log(current_cart);
        setCurrentOrder(current_cart.items);
        setOrderId(current_cart.id);
        setItemOrder(current_cart.get_item_orders);
        if (!current_cart.items[0]) {
          return (current_cart = "Cart is empty");
        }
        setTotalOrder(current_cart.total);
        if (!current_cart.total) {
          return (current_cart.total = 0);
        }
      });
  }, []);
  console.log(totalOrder);
  console.log(currentOrder);

  const currentItems = currentOrder.map((item) => {
    return (
      <CurrentCardItem
        key={item.id}
        item={item}
        orderId={orderId}
        itemOrders={itemOrders}
      />
    );
  });

  function handleClick(e) {
    fetch(`http://localhost:3000/api/v1/orders/${orderId}/transform`, {
      method: "PATCH",
      headers: {
        Authorization: `bearer ${localStorage.token}`,
      },
    })
      .then((r) => r.json())
      .then((current_cart) => setCurrentOrder(current_cart));
    window.location.reload(false);
  }

  return (
    <div>
      <h2>Current Order</h2>
      <Grid>{currentItems}</Grid>
      <hr />
      <Container>
        <h1>Total:${totalOrder}</h1>
        <button className="ui submit button" onClick={handleClick}>
          Check Out
        </button>
      </Container>
    </div>
  );
}
export default CurrentOrder;
