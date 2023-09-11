import { Navigate, Route, Routes } from "react-router-dom"
import { Welcome } from "../pages/Welcome"


export const AuthRoutes = () => {
  return (
    <Routes>
        <Route path="welcome" element={ <Welcome /> } />
        <Route path="/*" element={ <Navigate to="auth/welcome" /> } />
    </Routes>
  )
}
