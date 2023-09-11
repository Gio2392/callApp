import { Navigate, Route, Routes } from "react-router-dom"
import { useCheckAuth } from "../hooks";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { CallAppRoutes } from "../callApp/routes/CallAppRoutes";

export const AppRouter = () => {

  const status = useCheckAuth()

  console.log(status);


  return (
    <Routes>           
      {
        (status === 'authenticated')
        ? <Route path="/*" element={ <CallAppRoutes /> } />
        : <Route path="/auth/*" element={ <AuthRoutes /> } />
      }

       <Route path='/*' element={ <Navigate to='/auth/welcome' />}/>
    </Routes>
  )
}
