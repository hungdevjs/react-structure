import { useState } from "react"

const useLogin = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return {
        email,
        setEmail,
        password,
        setPassword
    }
}

export default useLogin