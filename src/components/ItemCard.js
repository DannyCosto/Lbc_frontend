import { Link, useRouteMatch } from "react-router-dom";
import styled from "styled-components";

const DivCard = styled.div`
  border: 1px solid #efefef;
  background: #fff;
`;

const Price = styled.h3`
  text-align: center;
`;

const Image = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const LinkWrapper = styled.div`
  margin: 30px 0 20px 0;
  height: 50px;
  a {
    color: #fff;
    background: #000;
    border-radius: 4px;
    padding: 10px 50px;
    border: 1px solid #000;
    width: 100%;
    text-decoration: none;
    justify-content: center;
    display: flex;
    align-items: center;
  }
`;

function ItemCard({ item }) {
  let match = useRouteMatch();
  const { name, price, img } = item;
  return (
    <DivCard>
      <br />
      <Image src={img} alt={name} height="300px" />
      <LinkWrapper>
        <Link to={`${match.url}/${item.id}`} key={item.id}>
          {name}
        </Link>
      </LinkWrapper>
      <Price>${price}</Price>
    </DivCard>
  );
}
export default ItemCard;
