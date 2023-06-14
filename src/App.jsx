import { useState } from 'react'
import { Button } from './components/Button';
import { CallIcon, WhatsappIcon } from './icons';

function App() {

  const [phone, setPhone] = useState({
    number: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setPhone({...phone, [name]: value})
  }

  return (
    <>
     <div className='contact container'>
       <input 
       name='number'
       type="tel"
       onChange={handleChange}
       value={phone.number}
       />
      
      
       <Button color="blue" link={`tel:${phone.number}`}>
         <CallIcon />
       </Button>
       <Button color="green" link={`https://wa.me/${phone.number}`} target={true}>
         <WhatsappIcon />
       </Button>
     </div>
      
    </>
  )
}

export default App
