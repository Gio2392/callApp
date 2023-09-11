
import { Form } from '../../callApp/components';
import { Navbar } from './navbar';

import './welcome.css';

export const Welcome = () => {
    
   
  return (
    <div className='welcome'>
      <section className='container welcome__content'>
          <div className='welcome__grid'>
              <Form />
              <Navbar />
              
          </div>
      </section>
    </div>
  )
}
