import { Button } from "../../../components"
import { useForm } from "../../../hooks"
import { CallIcon, WhatsappIcon } from "../../../icons"

export const Form = () => {

    const { form, handleChange } = useForm({
        number: '',
        name: '',
        job: ''
    })
    
  return (
    <div className='form box'>
      <div className='contact'>
        <input 
        className='input'
        name='number'
        type="tel"
        onChange={handleChange}
        value={form.number}
        placeholder='Ingrese el número'
       />
       
       
        <Button color="blue" link={`tel:${form.number}`}>
          <CallIcon />
        </Button>
        <Button color="green" link={`https://wa.me/+51${form.number}`} target={true}>
          <WhatsappIcon />
        </Button>
      </div>

      
      
     </div>
  )
}
