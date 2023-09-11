import { Navigate } from "react-router-dom";
import { useCheckAuth } from "../hooks";
import { FormComplete } from "../layout";

export const PrivateRoutes = () => {

    const status  = useCheckAuth();

    console.log("hola");
    console.log(status);


  return (
   ( status === 'authenticated') ? <FormComplete /> : <Navigate to="/" replace />
  )
}
