import welcome from "../image/welcome.JPG";
import instaLogo from "../image/instaLogo.jpeg";
function Home() {
  return (
    <div>
      <h1>Welcome</h1>
      <img src={welcome} alt="Welcome" height="500px" />
      <br />
      <a href="https://www.instagram.com/lbccreations.inc/">
        Follow us on Instagram!
      </a>
      <br />
      <img src={instaLogo} alt="Instagram-logo" height="50px" />
    </div>
  );
}

export default Home;
