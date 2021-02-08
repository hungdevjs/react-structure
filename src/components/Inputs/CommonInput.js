import { useMemo } from "react"
import PropTypes from "prop-types"
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"

import { InputContainer, InputField } from "../../styles/input"
import useToggle from "../../hooks/useToggle"

const CommonInput = props => {
    const { label, type, value, setValue, isPassword, error } = props
    const [isShow, toggle] = useToggle()

    const inputType = useMemo(() => isPassword 
        ? isShow 
            ? "text"
            : "password"
        : (type || "text"), [type, isShow])

    return <>
        <label>{label}</label>
        <InputContainer invalid={error}>
            <div className="d-flex align-items-center">
                <InputField 
                    className="flex-grow-1 border-0"
                    type={inputType}
                    value={value || ""}
                    onChange={e => setValue(e.target.value)}
                />
                {isPassword && <div onClick={toggle}>
                    {isShow 
                        ? <AiFillEye className="cursor-pointer icon-font" />
                        : <AiFillEyeInvisible className="cursor-pointer icon-font" />}
                </div>}
            </div>
        </InputContainer>
    </>
}

export default CommonInput

CommonInput.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string.isRequired,
    setValue: PropTypes.func.isRequired,
    isPassword: PropTypes.bool,
    error: PropTypes.bool
}