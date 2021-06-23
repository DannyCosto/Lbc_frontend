import ItemCard from "./ItemCard.js";
import styled from "styled-components";

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-gap: 20px:
width: 20px;
padding:20px;
`;

function Items({ items }) {
  const itemCards = items.map((item) => {
    return <ItemCard key={item.id} item={item} />;
  });

  return <Grid>{itemCards}</Grid>;
}
export default Items;
