import styled from "styled-components"

import { GRAY, RED } from "../helpers/colors"

export const InputContainer = styled.div`
    border-radius: 4px;
    padding: 0 8px;
    box-shadow: 1px 1px rgba(0, 0, 0, 0.4);
    border-width: 2px;
    border-style: solid;
    border-color: ${props => props.invalid ? RED : GRAY}
`

export const InputField = styled.input`
    padding: 8px 16px 8px 0;
`