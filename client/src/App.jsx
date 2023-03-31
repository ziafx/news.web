import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import IndexPage from "./pages";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage/>} />
        <Route path={"/login"} element={<LoginPage/>} />
        <Route path={"/register"} element={<RegisterPage/>} />
      </Route>
    </Routes>
  );
}

export default App;
