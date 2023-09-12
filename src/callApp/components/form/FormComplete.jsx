import { useDispatch } from "react-redux"
import { Button } from "../../../components"
import { useForm } from "../../../hooks"
import { SavelIcon } from "../../../icons"
import { startNewRegister } from "../../../store/calling/thunks"

import './form.css'

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
    <div className='form__contact'>
      <h3 className="title">Crear Registro</h3>
      <form className='form'>
        <input 
        className='input'
        name='number'
        type="tel"
        onChange={handleChange}
        value={form.number}
        placeholder='Ingrese el número'
        required
       />
      
       <input 
       className='input'
        name='name'
        type="text"
        onChange={handleChange}
        value={form.name}
        placeholder='Ingrese el nombre'
       />
      
       <Button 
       color="red" 
       onClick={ onNewRegister }
       >
          <SavelIcon />
        </Button>
     </form>
    </div>
  )
}
