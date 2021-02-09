import { Button } from "reactstrap"

import CommonInput from "../../../components/Inputs/views/CommonInput"

import useLogin from "../hooks/useLogin"

const Login = () => {
    const { email, setEmail, password, setPassword } = useLogin()

    return <div className="wh-100 d-flex flex-column align-items-center justify-content-center">
        <div>
            <CommonInput
                className="mb-2"
                label="Email"
                value={email}
                setValue={setEmail}
            />
            <CommonInput
                className="mb-3"
                label="Password"
                value={password}
                setValue={setPassword}
                isPassword
            />
            <Button block color="primary">
                Log in
            </Button>
        </div>
    </div>
}

export default Login