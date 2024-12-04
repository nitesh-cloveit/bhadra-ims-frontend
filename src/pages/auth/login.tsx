import { useState } from "react";
import CustomInput from "../../components/customInput";
import { api } from "../../api";
import CustomButton from "../../components/customButton";
import "./auth.css";
import { useNavigate } from "react-router";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(username, password);
    try {
      const response = await api.post("/auth/login", { username, password });
      console.log(response);
      if (response.status === 200) {
        navigate("/");
        localStorage.setItem("token", response.data.token);
      }
    } catch (error: any) {
      console.error(error);
      setError(error.response.data.message);
    }
  }

  return (
    <div className="form-container">
      <h1 className="header">Login</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <CustomInput label="Username" setValue={setUsername} />
        <CustomInput label="Password" type="password" setValue={setPassword} />
        {error && <p className="error">{error}</p>}
        <CustomButton type="submit" label="Login" />
      </form>
    </div>
  )
}