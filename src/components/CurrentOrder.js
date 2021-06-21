import React from "react";
import { useEffect, useState } from "react";
import CurrentCardItem from "./CurrentCardItem";

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

  return (
    <div>
      <h2>Current Order</h2>
      <h3>{currentItems}</h3>
      <h1>Total:${totalOrder}</h1>
    </div>
  );
}

export default CurrentOrder;
