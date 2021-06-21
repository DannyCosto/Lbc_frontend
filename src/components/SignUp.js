import { useState } from "react";

function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [email, setEmail] = useState("");
  const [ship_add, setShip_add] = useState("");

  let jwt_token = localStorage.getItem("token");

  function handlesignup(e) {
    e.preventDefault();
    fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {
        Authorization: `bearer ${jwt_token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: first_name,
        last_name: last_name,
        email: email,
        username: username,
        password: password,
        shipping_address: ship_add,
      }),
    })
      .then((res) => res.json())
      .then((resp) => {
        localStorage.token = resp.token;
      });
  }
  return (
    <>
      <label>Sign Up</label>
      <form onSubmit={handlesignup}>
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>First Name</label>
        <input
          type="text"
          value={first_name}
          onChange={(e) => setFirst_name(e.target.value)}
        />
        <label>Last Name</label>
        <input
          type="text"
          value={last_name}
          onChange={(e) => setLast_name(e.target.value)}
        />
        <label>E-mail</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Shipping Address</label>
        <input
          type="text"
          value={ship_add}
          onChange={(e) => setShip_add(e.target.value)}
        />
        <button as="button" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}

export default SignUp;
