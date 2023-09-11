import { Navigate, Route, Routes } from 'react-router-dom'
import { CallAppPage } from '../pages/CallAppPage'

export const CallAppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<CallAppPage />}/>
        <Route path='/*' element={<Navigate to="/" />} />
    </Routes>
  )
}
