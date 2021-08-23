import React from 'react'
import styled from 'styled-components';




const Block = ({ icon, description, choosen, click }) => {
    console.log(choosen)
    return (
        <BlockWrapper choosen={choosen}>
            <button onClick={click}>
                <img src={icon} alt={description} />
                {description}
            </button>
        </BlockWrapper>
    )
}

const BlockWrapper = styled.div`
padding: 25px;
button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 300px;
    border: ${props => props.choosen ? '3px solid #35d835' : '0px solid whitesmoke'};
    height: 200px;
    background-color: whitesmoke;
    border-radius: 20px;
    transition: .3s linear;
    transform: ${props => props.choosen ? 'scale(1.1)' : 'scale(1)'};
    img {
        width: 50px;
        height: 50px;
    }
}
`


export default Block;