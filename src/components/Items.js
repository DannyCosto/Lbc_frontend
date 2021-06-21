import ItemCard from "./ItemCard.js";

function Items({ items }) {
  const itemCards = items.map((item) => {
    return <ItemCard key={item.id} item={item} />;
  });

  return <>{itemCards}</>;
}
export default Items;
