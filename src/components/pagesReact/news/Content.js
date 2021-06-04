import React from 'react'
import styled from 'styled-components'
const Content = () => {
    return (
        <SectionContainer>
            <h1>Pojawi się wkrótce!</h1>
            <i class="fas fa-hourglass-half" style={{ fontSize: '80px', padding: "30px" }}></i>
        </SectionContainer>
    )
}


const SectionContainer = styled.section`
height: 70vh;
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
background-color: #f7f7f7;
flex-direction: column;
`

export default Content;