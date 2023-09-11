import { useSelector } from "react-redux"
import { ContactItem } from "./ContactItem";

import './contacts.css'

export const Contacts = () => {

    const {registers} = useSelector( state => state.calling)

    console.log(registers);
    
  return (
    <div className="contacts">
        <h1>Lista por llamar</h1>
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
