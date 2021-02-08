import { useState } from "react"

const useToggle = () => {
    const [status, setStatus] = useState(false)

    const toggle = () => setStatus(!status)

    return [status, toggle]
}

export default useToggle