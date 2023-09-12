
import { Contacts, FormComplete } from '../components'
import './mainContent.css'

export const MainContent = () => {
  return (
    <main className='main__content container'>      
      <FormComplete />
      <Contacts />
    </main>
  )
}
