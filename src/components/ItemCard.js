import { Link, useRouteMatch } from "react-router-dom";

function ItemCard({ item }) {
  let match = useRouteMatch();
  const { name, price, img } = item;
  return (
    <div>
      <br />
      <img src={img} alt={name} height="300px" />
      <h3>
        <Link to={`${match.url}/${item.id}`} key={item.id}>
          {name}
        </Link>
      </h3>
      <h3>${price}</h3>
    </div>
  );
}
export default ItemCard;
