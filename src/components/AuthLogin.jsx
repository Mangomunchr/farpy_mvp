import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function AuthLogin() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleLogin = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, pass)
      .then((res) => alert("Logged in"))
      .catch((err) => alert("Error: " + err.message));
  };

  return (
    <div>
      <h4>Login</h4>
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPass(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
