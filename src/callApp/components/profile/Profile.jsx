import { useSelector } from "react-redux"
import './profile.css';

export const Profile = () => {

    const {displayName, photoURL} = useSelector(state => state.auth)

    const name = displayName.split(' ')[0]

    
  return (
    <div className="profile">
        <div className="profile_img">
            <img src={photoURL} />
        </div>
        <div className="profile__name">
            <span>¡Hola </span>
            <h3>{name}!</h3>
        </div>
    </div>
  )
}
