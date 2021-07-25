import React from 'react'
import styled from 'styled-components';
import responsive from "../../../assets/svgs/responsive.svg"



const OfferSection = () => {
    const offer_items = [
        {
            font: "fas fa-cogs",
            title: "APLIKACJE MOBILNE IOS / ANDROID ",
            description: "Posiadanie strony internetowej już nie jest wystarczające - oczekuje się, że będą to również natywne aplikacje na iOS i Androida."
        },
        {
            font: "fas fa-terminal",
            title: "STRONA / SKLEP INTERNETOWY",
            description: "Korzystając z najnowszych technologii internetowych, wszystkie strony internetowe są tworzone na zamówienie i skalowalne, co pozwala na ich rozwój i zwiększanie funkcjonalności."
        },
    ]
    return (
        <OfferWrapper>
            <LeftColumn>
                <h2>Oferta</h2>
                <div className="items_container">
                    {offer_items.map((item) => (
                        <article className="offer_item" key={item.title}>
                            <div style={{ width: "155px", height: "70px", padding: "10px", display: "flex", justifyContent: "center" }}>
                                <i className={item.font} style={{ color: "#7A7A7A", fontSize: "32px", width: "50px" }}></i>
                            </div>
                            <div>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>

                        </article>
                    ))

                    }
                </div>
                <Button>
                    Zobacz całą ofertę
                 </Button>
            </LeftColumn>
            <RightColumn>
                <img src={responsive} alt="" />
            </RightColumn>

        </OfferWrapper>
    )
}

const Button = styled.button`
@media(max-width: 850px) {
    width: 260px;
    
}
    margin: 30px;
    color: white;
    transition: 0.15s linear;
    background-color: #bfa67a;
    border: 3px solid #bfa67a;
    width: auto;
    width: 420px;
    padding: 13px 30px;
    font-weight: 700;
    /* margin-top: 30px; */
    font-size: 14px;
    outline: none;
    text-transform: uppercase;
    cursor: pointer;
    &:hover {
      background-color: #000;
      border: 3px solid #000;
    }

`


const LeftColumn = styled.div`
h3 {
    font-size: 15px;
    letter-spacing: 1.3;
}
p {
    color: #7A7A7A;
    font-size: 15px;
}
display: flex;
justify-content: flex-start;
align-items: center;
flex-direction: column;

.items_container {
    width: 360px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.offer_item {
display: flex;
justify-content: flex-start;
width: 80%;
width: 420px;
padding-top: 30px;
padding-bottom: 30px;
@media(max-width: 850px) {
    width: 360px;
    margin:0;
    padding:30px;
}
}
padding: 100px 0;
background-color: #f7f7f7;
width: 50%;
min-height: 80vh;
@media(max-width: 850px) {
    width: 100%;
    padding:30px;
    
}
h2 {
position: relative;
text-align: center;
font-weight: 700;
color: #111111;
font-size: 36px;
text-transform: uppercase;
letter-spacing: 1.3;
margin-bottom: 70px;
&::after {
  content: "";
  position: absolute;
  width: 50px;
  left: calc(50% - 25px);
  height: 3px;
  background-color: #cecece;
  bottom: -10px;
}
}

`

const RightColumn = styled.div`
    display: flex;
    justify-content: center;
    width: 50%;
    
    
    img {
        width: 50%;
        
    }
    @media(max-width: 850px) {
    display: none;
    
}
`

const OfferWrapper = styled.section`
min-height: 80vh;
display: flex;
align-items: center;
justify-content: center;
width: 100vw;
background-color: #f7f7f7; // ALL
@media(max-width: 850px) {
    flex-direction: column;
    
}

`

export default OfferSection;