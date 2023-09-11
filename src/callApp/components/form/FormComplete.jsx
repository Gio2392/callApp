import { useDispatch } from "react-redux"
import { Button } from "../../../components"
import { useForm } from "../../../hooks"
import { CallIcon, SavelIcon, WhatsappIcon } from "../../../icons"
import { startNewRegister } from "../../../store/calling/thunks"

export const FormComplete = () => {

    const dispatch = useDispatch()

    const { form, handleChange, clearForm } = useForm({
        number: '',
        name: '',
        job: ''
    })

    const onNewRegister = () => {
      dispatch( startNewRegister(form) )
      clearForm()
    }
    
  return (
    <div className='container form'>
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
      
       <input 
       className='input'
        name='name'
        type="text"
        onChange={handleChange}
        value={form.name}
        placeholder='Ingrese el nombre'
       />
       <input 
       className='input'
        name='job'
        type="text"
        onChange={handleChange}
        value={form.job}
        placeholder='Ingrese el nombre de la campaña'
       />
       <Button 
       color="red" 
       link={`tel:${form.number}`}
       onClick={ onNewRegister }
       >
          <SavelIcon />
        </Button>
     </div>
  )
}
