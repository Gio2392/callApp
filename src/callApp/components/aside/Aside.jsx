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
       
         <Profile />
        
         {/* TODO: PUT NAVBAR HERE */}
    
       
          <button                
              onClick={onLogout}
              className='aside__btn'
          >
              <LogoutIcon />
          </button>
      
    </aside>
  )
}

/* Crear registro */
/* Crear puesto */
/* ver pendientes */
/* Crear puesto */