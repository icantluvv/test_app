import "./styles/App.css"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Utilisateurs from "./pages/Utilisateurs.tsx"
import Home from "./pages/Home.tsx"
import Base from "./pages/Base.tsx"
import Controle from "./pages/Controle.tsx"
import SignIn from "./pages/SignIn.tsx"
import SignIn from "./pages/SignUp.tsx"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/SignIn" element={<SignIn />}></Route>
          <Route path="/SignIn" element={<SignUp />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/Configuration/Utilisateurs"
            element={<Utilisateurs />}
          ></Route>
          <Route path="/Configuration/Base" element={<Base />}></Route>
          <Route path="/Configuration/Controle" element={<Controle />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
