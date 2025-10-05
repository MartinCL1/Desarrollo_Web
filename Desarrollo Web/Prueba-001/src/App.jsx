import "./App.css";
import Login from "./Componentes/Login/Login";
import { Routes, Route } from "react-router";
import { motion } from "framer-motion";
import Home from "./Componentes/Home/Home";
import Protected from "./Componentes/Protected/Protected";
import SignUp from "./Componentes/Signup/SignUp";

function App() {
  return (
    <motion.section
      className="app"
      initial={{
        backgroundImage:
          "radial-gradient(circle at center, rgba(0, 0, 0, 0), rgb(0,0,0))",
      }}
      animate={{
        backgroundImage:
          "radial-gradient(circle at center, rgba(21, 26, 29, 1), rgba(0, 0, 0, 1))",
      }}
      transition={{ duration: 2 }}
    >
      <Routes>
        <Route Component={Login} path="/" />
        <Route Component={SignUp} path="/signup" />
        <Route Component={Protected} >
          <Route Component={Home} path="/home" />
        </Route>
      </Routes>
    </motion.section>
  );
}

export default App;
