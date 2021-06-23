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
    window.location.href = "/login";
  }
  return (
    <div className="ui inverted segment">
      <form onSubmit={handlesignup} className="ui inverted form">
        <label>Sign Up</label> <br />
        <label>Username:</label>
        <input
          className="field"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Password:</label>
        <input
          className="field"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>First Name:</label>
        <input
          className="field"
          type="text"
          value={first_name}
          onChange={(e) => setFirst_name(e.target.value)}
        />
        <label>Last Name:</label>
        <input
          className="field"
          type="text"
          value={last_name}
          onChange={(e) => setLast_name(e.target.value)}
        />
        <label>E-mail:</label>
        <input
          className="field"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Shipping Address:</label>
        <input
          className="field"
          type="text"
          value={ship_add}
          onChange={(e) => setShip_add(e.target.value)}
        />
        <hr />
        <button className="ui submit button" as="button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default SignUp;
