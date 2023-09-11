
import { Contacts } from '../components/contact'
import { FormComplete } from '../components/form/FormComplete'
import './mainContent.css'

export const MainContent = () => {
  return (
    <main>
      <h5>Crear registro</h5>
      <FormComplete />
      <Contacts />
    </main>
  )
}
