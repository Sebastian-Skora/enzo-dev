import React from 'react';
import styled from 'styled-components';
import { AiFillCloseSquare } from 'react-icons/ai'
const ModalHeader = ({ children }) => {
    return (
        <Wrapper>
            {/* <AiFillCloseSquare /> */}
            <span>{children}</span>
        </Wrapper>
    )
}


const Wrapper = styled.div`
height: 200px;
display: flex;
justify-content: center;
align-items: center;
background-color: #f7f7f7;
position: relative;
svg {
    position: absolute;
    left: 40px;
    top: 38%;
    font-size: 50px;
    color: grey;
}
span {
padding: 38px 50px;
line-height: 1.1;
font-size: 24px;
font-weight: 700;
border: black 5px solid;
text-transform: uppercase;
max-width: 80vw;
text-align: center;

}
`


export default ModalHeader
