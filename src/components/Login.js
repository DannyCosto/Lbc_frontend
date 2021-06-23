import { useState } from "react";

function Login({ setItems }) {
  //login logic
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();
    fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
      body: JSON.stringify({
        username: username,
        password: password,
        items: [],
        current_cart: {
          id: 0,
          item_orders: [],
        },
        past_orders: [],
      }),
    })
      .then((res) => res.json())
      .then((userInfo) => {
        if (!userInfo.token) {
          alert("Invalid Username or Password");
          return null;
        }
        localStorage.token = userInfo.token;
        localStorage.setItem(`userId`, `${userInfo.user.id}`);
        window.location.href = "/home";
      });
    console.log(localStorage.token);
  }
  return (
    <div className="ui inverted segment">
      <form onSubmit={handleLogin} className="ui inverted form">
        <div className="field">
          <label>Login</label>
          <label>Username:</label>
          <br />
          <input
            className="field"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>{" "}
        <br />
        <div className="field">
          <label>Password:</label> <br />
          <input
            className="field"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>{" "}
        <hr />
        <button className="ui button" as="button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
