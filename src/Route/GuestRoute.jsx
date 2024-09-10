import { Navigate } from "react-router-dom"

const Guestroute = ({  children }) => {
    const localData = localStorage.getItem("test")

    return localData ? <Navigate to='/' /> :  children 
}

export default Guestroute;