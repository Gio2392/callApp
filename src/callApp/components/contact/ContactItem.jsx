import { useDispatch } from "react-redux"
import { Button, ButtonLink } from "../../../components"
import { CallIcon, DeleteIcon, WhatsappIcon } from "../../../icons"
import { startDeleteAllregisters } from "../../../store/calling/thunks"

export const ContactItem = ({id, date, phone, userName}) => {

    const dateLocal = new Date(date).toLocaleDateString()

    const dispatch = useDispatch()

    const onDeleteRegister = () => {
      dispatch(startDeleteAllregisters(id))
      console.log('deleteingggg', id);
    }

    
  return (
    <div className="contact__item">
        <div className="contact__info">
            <div className="phone">{phone}</div>
            <div className="username">{!userName ? 'Desconocido' : userName}</div>
        </div>
        <div className="contact__actions">
            <ButtonLink color="blue" link={`tel:${phone}`}>
             <CallIcon />
            </ButtonLink>
            <ButtonLink color="green" link={`https://wa.me/+51${phone}`} target={true}>
             <WhatsappIcon />
            </ButtonLink>
            <Button color="red" onClick={onDeleteRegister}>
             <DeleteIcon />
            </Button>
        </div>
    </div>
 
  )
}
