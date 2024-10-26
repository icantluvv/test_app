import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Users from "./pages/users/Users.tsx"
import Home from "./pages/Home.tsx"
import Base from "./pages/Base.tsx"
import Control from "./pages/Control.tsx"
import SignIn from "./pages/SignIn.tsx"
import SignUp from "./pages/SignUp.tsx"
import NotFound from "./pages/NotFound.tsx"
import Layout from "./components/Layout/Layout.tsx"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />

        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/Users" element={<Users />} />
          <Route path="/Base" element={<Base />} />
          <Route path="/Control" element={<Control />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
