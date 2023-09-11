import { useMemo } from 'react';
import { useDispatch} from 'react-redux';
import { startGoogleSignIn, startLogout } from '../../../store/auth';

import { Button } from "../../../components"
import { GoogleIcon, LogoutIcon } from "../../../icons"
import './navbar.css'
import { useCheckAuth } from '../../../hooks';

export const Navbar = () => {
    
    const {status}  = useCheckAuth()

    const isAuthenticating = useMemo( () => status === 'checking', [status]);


    const dispatch = useDispatch()    

    const onGoogleSignIn = () => {
        dispatch( startGoogleSignIn() )
    }

    const onLogout = () => {
        dispatch( startLogout() )
    }
    
  return (
    <>
        <header className="header">
            <nav className="navbar">
            
            {
                (status === 'authenticated')
        
                ?
                <Button 
                color='red' 
                onClick={onLogout}
                disabled={ isAuthenticating }
                >
                    <span>Cerrar sesión</span> |   
                    <LogoutIcon />
                </Button>
                :
                <Button 
                color='red' 
                onClick={onGoogleSignIn}
                disabled={ isAuthenticating }
                >
                    <span>Ingresar</span> |   
                    <GoogleIcon />
                </Button>
            }    
                
            </nav>
        
        </header>

    </>
  )
}
