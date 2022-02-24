import { useState } from "react";
import "./App.css";
import Login from "./component/Login";

function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "*>@CltBdy3BD",
  };

  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const loginCheck = (details) => {
    console.log(details);

    if (
      details.email === adminUser.email &&
      details.password === adminUser.password
    ) {
      setError("matched");
      setUser({
        email: details.email,
        password: details.password,
      });
    } else {
      setError("Details not matched");
    }
  };

  return (
    <div className="App">
      <Login login={loginCheck} error={error} />
    </div>
  );
}

export default App;
