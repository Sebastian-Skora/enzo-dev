import React from 'react'
import styled from 'styled-components'
import * as actions from "../../redux/actions/index";
const ChoosenModal = () => {
    return (
        <StyledModal>
            <h3>Strona internetowa</h3>
        </StyledModal>
    )
}


const StyledModal = styled.div`
display: flex;
justify-content: center;
align-items: center;
position: fixed;
width: 100%;
min-height: 100%;
background-color: #bfa67a;
transition: 0.6s cubic-bezier(.86,.53,.83,.67);
z-index: 999999999;
overflow:auto;
`
const mapDispatchToProps = dispatch => {
    return {
        toggleModal: () =>
            dispatch(actions.onWebsiteModal()),
    }
}


const mapStateToProps = state => {
    return {
        modalOpen: state.websiteModal,
    };
};



export default connect(mapStateToProps, mapDispatchToProps)(ChoosenModal);