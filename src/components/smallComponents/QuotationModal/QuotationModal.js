import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from "../../redux/actions/index";
import styled from 'styled-components';
import website from './icons/website.svg'
import online_shop from './icons/online-shop.svg'
import mobile_app from './icons/mobile-app.svg'
import seo from './icons/seo.svg'
import brochure from './icons/brochure.svg'
import webapp from './icons/computer.svg'
import Block from './Block';
import ModalsChoosen from './ModalsChoosen/ModalsChoosen';

const offer_items = [
    {
        icon: website,
        description: "Strona internetowa",
        choosen: false
    },
    {
        icon: online_shop,
        description: "Sklep internetowy",
        choosen: false
    },
    {
        icon: mobile_app,
        description: "Aplikacja mobilna",
        choosen: false
    },
    {
        icon: seo,
        description: "Pozycjonowanie SEO",
        choosen: false
    },
    {
        icon: brochure,
        description: "Projektowanie ulotek",
        choosen: false
    },
    {
        icon: webapp,
        description: "Aplikacja webowa",
        choosen: false
    },
]





const QuotationModal = ({ modalOpen, toggleModal, modalChooseOpen, toggleChoosenModal }) => {
    const [showError, setError] = useState(false);
    const [items, setItemsChoosen] = useState([{
        id: 0,
        name: 'Strona internetowa',
        choosen: false
    },
    {
        id: 1,
        name: 'Sklep internetowy',
        choosen: false
    },
    {
        id: 2,
        name: 'Aplikacja mobilna',
        choosen: false
    },
    {
        id: 3,
        name: 'Pozycjonowanie SEO',
        choosen: false
    },
    {
        id: 4,
        name: 'Projektowanie ulotek',
        choosen: false
    },
    {
        id: 5,
        name: 'Aplikacja webowa',
        choosen: false
    }

    ]);
    let items_filtered = items.filter((item) => (
        item.choosen && item.name
    ))
    let itemsChecked = items.find(item => item.choosen);

    const errorStep = () => {

        return (
            <StyledError>
                Aby przejśc dalej musisz zaznaczyc minimum jedną opcję.
            </StyledError>
        )
    }


    const nextStep = () => {
        const toggleModal = () => {
            toggleChoosenModal();
            setError(false);
        }

        itemsChecked ? toggleModal() : setError(true);

    }



    return (
        <>
            <StyledModal isOpen={modalOpen}>

                <div className="wrapper">
                    <h3 className="title">Czym jesteś zainteresowany?</h3>
                    <p className="description">(Mozesz wybrac więcej niz jedną opcję)</p>
                    <div className="boxes">
                        {offer_items.map((box, i) => (
                            <Block icon={box.icon} description={box.description} click={() => {
                                setItemsChoosen(prevState => {
                                    let itemsChoosen = [...items];
                                    itemsChoosen[i] = { ...itemsChoosen[i], choosen: !prevState[i].choosen };
                                    return [
                                        ...itemsChoosen
                                    ]
                                })
                            }} choosen={items[i].choosen} />
                        ))}
                    </div>
                    <div className="statement_buttons">
                        <div>
                            <button onClick={toggleModal}>ANULUJ</button>
                            <button onClick={nextStep}>DALEJ <i class="fas fa-angle-down"></i></button>
                        </div>
                        {showError && errorStep()}
                    </div>
                </div>

            </StyledModal>
            {modalChooseOpen && <ModalsChoosen items={items_filtered} />}
        </>

    )
}


const StyledError = styled.p`
color: #b70000;
text-align: center;
margin-top: 15px;
`


const StyledModal = styled.div`
display: flex;
justify-content: center;
align-items: center;
transform: ${props => props.isOpen ? "translateX(0)" : "translateX(-100%)"};
position: fixed;
width: 100%;
min-height: 100%;
background-color: #bfa67a;
transition: 0.6s cubic-bezier(.86,.53,.83,.67);
z-index: 999999999;
overflow:auto;
.modal_root {
    position: absolute;
    min-height: 100%;

}
.statement_buttons {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    button {
        cursor: pointer;
        text-align: center;
        margin: 10px;
        border: 2px solid whitesmoke;
        font-size: 14px;
        border-radius: 20px;
        padding: 20px 35px;
        color: white;
        font-weight: 500;
        letter-spacing: 2px;
        &:hover {
            background-color: whitesmoke;
            color: #bfa67a;
            transition: 0.2s linear;
        }
    }
}
.wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 70%;
    
    
    .boxes {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        display: flex;
        padding: 30px;
       max-width: 1268px;
    }
}
.title {
    font-size: 28.8px;
    margin: 10px;
    color: white;
    text-align:center;
}
.description {
    font-size: 16px;
    color: white;
    text-align:center;
}
`

const mapDispatchToProps = dispatch => {
    return {
        toggleModal: () =>
            dispatch(actions.onQuotationModal()),
        toggleChoosenModal: () => dispatch(actions.onChoosenModal())
    }
}


const mapStateToProps = state => {
    return {
        modalOpen: state.quotationOpen,
        modalChooseOpen: state.choosenModal,
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(QuotationModal)