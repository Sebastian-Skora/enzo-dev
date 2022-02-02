import React, { useState, useEffect } from 'react';
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
import Website from './ServicesForm/Website';
import WebShop from './ServicesForm/WebShop';
import MobileApp from './ServicesForm/MobileApp';

const offer_items = [
    {
        icon: website,
        description: "Strona internetowa",
        choosen: false,

    },
    {
        icon: online_shop,
        description: "Sklep internetowy",
        choosen: false,

    },
    {
        icon: mobile_app,
        description: "Aplikacja mobilna",
        choosen: false,

    },
    {
        icon: seo,
        description: "Pozycjonowanie SEO",
        choosen: false,

    },
    {
        icon: brochure,
        description: "Projektowanie ulotek",
        choosen: false,

    },
    {
        icon: webapp,
        description: "Aplikacja webowa",
        choosen: false,

    },
]





const QuotationModal = ({ modalOpen, toggleModal, modalChooseOpen, toggleChoosenModal, progressBar, progressBarSet }) => {
    const [currentModal, setCurrentModal] = useState(0);
    const nextModal = () => {

        setCurrentModal(currentModal + 1);
        console.log(items_filtered, 'items fitlered next modal')

        // let currentID = items_filtered[i].id
        // let filtered_copy = [...items_filtered]
        // let filtered_to_change = [...filtered_copy, { ...filtered_copy[currentID], ...filtered_copy[currentID].choosen = false }];
        ////////////////////
        ////////////////////////////// DO OBMYŚLENIA!!!!!!!!!!!!!!!!!!!!!!!! ////////////////////////////////

    }



    const [progress, setProgress] = useState(1)
    const [cmsForm, setCmsForm] = useState('');
    const [subpagesForm, setSubpagesForm] = useState(0);
    const [budgetForm, setBudgetForm] = useState(0);
    const [currentlyPageAddressForm, setCurrentlyPageAdressForm] = useState('');
    const [websiteYouLikesForm, setWebsiteYouLikesForm] = useState('');
    const [shortDescriptionForm, setShortDescriptionForm] = useState('');



    const [showError, setError] = useState(false);
    const [items, setItemsChoosen] = useState([{
        id: 0,
        name: 'Strona internetowa',
        choosen: false,
        component: <Website nextModal={nextModal} currentModal={currentModal} id={0} />
    },
    {
        id: 1,
        name: 'Sklep internetowy',
        choosen: false,
        component: <WebShop id={1} />
    },
    {
        id: 2,
        name: 'Aplikacja mobilna',
        choosen: false,
        component: <MobileApp id={2} />
    },
    {
        id: 3,
        name: 'Pozycjonowanie SEO',
        choosen: false,
        component: <WebShop id={3} />
    },
    {
        id: 4,
        name: 'Projektowanie ulotek',
        choosen: false,
        component: <WebShop id={4} />
    },
    {
        id: 5,
        name: 'Aplikacja webowa',
        choosen: false,
        component: <WebShop id={5} />
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

    const SettingProgress = () => {




    }
    const GoToChoosenServices = () => {
        console.log(items_filtered.length, 'length')
        let filtered = items_filtered.length + 1;
        let progressNum = items_filtered.length === 1 ? 50 : (1 / filtered) * 100;
        progressBarSet(progressNum);
        console.log(progressBar, 'progress')
        return (

            items_filtered.map((item, ajdi) => (
                item.component
            ))

        )
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
                        <div className="statement_buttons">
                            <div>
                                <button onClick={toggleModal}>ANULUJ</button>
                                <button onClick={nextStep}>DALEJ <i class="fas fa-angle-down"></i></button>
                            </div>
                            {showError && errorStep()}
                        </div>
                    </div>

                </div>

            </StyledModal>

            {modalChooseOpen && GoToChoosenServices()}
        </>

    )
}






const StyledForm = styled.form`
position: relative;


`

const StageWrapper = styled.div`

`




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
        height: 70vh;
       max-width: 1268px;
       overflow: scroll;
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
        toggleChoosenModal: () => dispatch(actions.onChoosenModal()),
        progressBarSet: (progress) => dispatch(actions.onProgressBarSet(progress))
    }
}


const mapStateToProps = state => {
    return {
        modalOpen: state.quotationOpen,
        modalChooseOpen: state.choosenModal,
        progressBar: state.progressBar,
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(QuotationModal)