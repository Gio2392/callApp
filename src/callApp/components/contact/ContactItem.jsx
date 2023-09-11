import { ButtonLink } from "../../../components"
import { CallIcon, WhatsappIcon } from "../../../icons"

export const ContactItem = ({date, phone, userName}) => {

    const dateLocal = new Date(date).toLocaleDateString()

    
  return (
    <div className="contact__item">
        <div className="contact__info">
            <div className="username">{userName}</div>
            <div className="phone">{phone}</div>
        </div>
        <div className="contact__actions">
            <ButtonLink color="blue" link={`tel:${phone}`}>
             <CallIcon />
            </ButtonLink>
            <ButtonLink color="green" link={`https://wa.me/+51${phone}`} target={true}>
             <WhatsappIcon />
            </ButtonLink>
        </div>
    </div>
 
  )
}
