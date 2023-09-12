import { useSelector } from "react-redux"
import { ContactItem } from "./ContactItem";

import './contacts.css'

export const Contacts = () => {

    const {registers} = useSelector( state => state.calling)

    console.log(registers);
    
  return (
    <div className="contacts">
        <h3 className="title">Postulantes</h3>
        <div className="btn__content">
            <button className="btn__third">Eliminar todos</button>
        </div>
        <div className="contact__card">
            
            {
                registers.map( rgt => {
                    return <ContactItem key={rgt.id} {...rgt} />
                })
            }

        </div>
    </div>
  )
}
