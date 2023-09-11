import { useDispatch } from 'react-redux'
import { LogoutIcon } from '../../../icons'
import { startLogout } from '../../../store/auth'
import { Profile } from '../Profile'

import './aside.css'

export const Aside = () => {

    const dispatch = useDispatch()

    const onLogout = () => {
        dispatch( startLogout() )
    }
  return (
    <aside className='aside'>
       <div className='aside__top'>
         <Profile />
        
         {/* TODO: PUT NAVBAR HERE */}
       </div>
        <footer>
            <button                
                onClick={onLogout}
                className='aside__btn'
            >
                <span>Cerrar sesión</span>
                <LogoutIcon />
            </button>
        </footer>
    </aside>
  )
}

/* Crear registro */
/* Crear puesto */
/* ver pendientes */
/* Crear puesto */