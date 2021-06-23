import welcome from "../image/welcome.JPG";
import instaLogo from "../image/instaLogo.jpeg";
import styled from "styled-components";

const Image = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const Text = styled.h1`
  text-align: center;
`;

function Home() {
  return (
    <div>
      <Text>Welcome to LBC Creations, Home to Custom Jewerly</Text>
      <Image src={welcome} alt="Welcome" height="500px" />
      <br />
      <a href="https://www.instagram.com/lbccreations.inc/">
        <Image src={instaLogo} alt="Instagram-logo" height="50px" />
      </a>
    </div>
  );
}

export default Home;
