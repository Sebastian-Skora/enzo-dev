import React from 'react'
import "./App.css";
import styled, { keyframes } from 'styled-components';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
const PhoneCall = () => {
    return (
        <Popup trigger={<Container >
            <i style={{ fontSize: "24px", color: "white", }} class="fas fa-phone">
            </i>
        </Container>} position="center" modal>
            {close => (

                <div className="modal">

                    <div className="header"> Kontakt z nami </div>
                    <div className="content">
                        <p>Sebastian Skóra:</p>
                        Web Developer <br />
                        <a href="tel:+48-793-086-672"><i style={{ fontSize: "14px", color: "#bfa67a", paddingRight: '5px', }} class="fas fa-phone">
                        </i>793-086-672</a><br />
                        <p>Kornel Naróg:</p>
                        Web Developer <br />
                        <a href="tel:+48-728-489-061"><i style={{ fontSize: "14px", color: "#bfa67a", paddingRight: '5px', }} class="fas fa-phone">
                        </i>728-489-061</a>
                    </div>
                    <div className="actions">

                        <button
                            className="close-btn"
                            onClick={() => {
                                console.log('modal closed ');
                                close();
                            }}
                        >
                            Zamknij
          </button>
                    </div>
                </div>

            )}
        </Popup>

    )
}
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(-15deg);
  }
`;



const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 60px;
height: 60px;
background-color:#009e00;
border-radius: 100%;
position: fixed;
animation: ${rotate} 0.8s linear alternate infinite;
bottom: 20px;
left: 20px;
box-shadow: 0px 0px 11px 5px rgba(0,0,0,0.27);
`
export default PhoneCall;