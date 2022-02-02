import React, { useState } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux';
import { Range, getTrackBackground } from 'react-range';
import ModalHeader from '../../ModalHeader/ModalHeader';
import { AiOutlineArrowRight } from 'react-icons/ai';

const STEP = 0.1;
const MIN = 0;
const MAX = 50;

const Website = ({ progressBar }) => {
    console.log(progressBar, 'progress inside')
    const [count, setCount] = useState({ values: [50] });
    return (
        <WhiteBg>
            <Wrapper>
                <ModalHeader>Aplikacja mobilna</ModalHeader>
                <fieldset name="website">
                    <p>Podaj ile mniej więcej podstron będzie miala strona</p>
                    <div className="range">
                        <Range
                            values={count.values}
                            step={STEP}
                            min={MIN}
                            max={MAX}
                            onChange={(values) => setCount({ values })}
                            renderTrack={({ props, children }) => (
                                <div
                                    onMouseDown={props.onMouseDown}
                                    onTouchStart={props.onTouchStart}
                                    style={{
                                        ...props.style,
                                        height: "36px",
                                        display: "flex",
                                        width: "100%"
                                    }}
                                >
                                    <div
                                        ref={props.ref}
                                        style={{
                                            height: "5px",
                                            width: "100%",
                                            borderRadius: "4px",
                                            background: getTrackBackground({
                                                values: count.values,
                                                colors: ["#bfa67a", "#ccc"],
                                                min: MIN,
                                                max: MAX
                                            }),
                                            alignSelf: "center"
                                        }}
                                    >
                                        {children}
                                    </div>
                                </div>
                            )}
                            renderThumb={({ props, isDragged }) => (
                                <div
                                    {...props}
                                    style={{
                                        ...props.style,
                                        height: "36px",
                                        width: "36px",
                                        borderRadius: "4px",
                                        backgroundColor: "#FFF",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        boxShadow: "0px 2px 6px #AAA"
                                    }}
                                >
                                    <div
                                        style={{
                                            height: "16px",
                                            width: "5px",
                                            backgroundColor: isDragged ? "#bfa67a" : "#CCC"
                                        }}
                                    />
                                </div>
                            )}
                        />
                        <output>{count.values[0].toFixed(0)}</output>
                    </div>
                    <div className="website_likes">
                        <label>Strony internetowe, które Ci się podobają</label>
                        <div className="row">
                            <div className="col-2">
                                <button className="two_buttons">+</button>
                                <button className="two_buttons">-</button>
                            </div>
                            <fieldset>
                                <input type="text" />
                            </fieldset>
                        </div>
                    </div>
                    <div>
                        <p>System CMS</p>
                        <div className="radio">
                            <div className="option">TAK</div>
                            <div className="option">NIE</div>
                        </div>
                    </div>
                    <div className="currentPage">
                        <p>
                            Jeśli chcesz zmodernizowac aktualną juz stronę wpisz adres w polu:
                        </p>
                        <input
                            // className={`${styles.input} ${modeRedux && styles.dark_mode}`}
                            name="user_name"
                            id="name"
                            type="text"
                            placeholder="Adres istniejącej juz strony internetowej"
                            required
                        />
                    </div>
                    <div className="budget">
                        <div className="checkbox"></div>
                        <p>Chcę określic budzet strony</p>

                    </div>
                    <div className="more_info">
                        <p>Jeśli chcesz wpisac dodatkowe informacje dotyczące strony, wpisz je ponizej</p>
                        <textarea
                            // className={`${styles.textarea} ${modeRedux && styles.dark_mode}`}
                            name="message"
                            id="message"
                            placeholder=""
                            required
                        />
                    </div>

                    <button>Przejdź dalej <AiOutlineArrowRight /></button>
                    <ProgressBarContainer><ProgressBar progress={progressBar} /></ProgressBarContainer>

                </fieldset>



            </Wrapper>

        </WhiteBg>
    )
}

const ProgressBarContainer = styled.div`
position: fixed;
width: 80vw;
left: 10%;
bottom: 0;
height: 10px;
background-color: #dcdcdc;
`

const ProgressBar = styled.div`
position: relative;
width: ${props => props.progress ? `${props.progress}%` : `50%`};
height: 10px;
background-color: #bfa67a;
bottom: 0;
left: 0;
z-index: 99999999999999999;
`

const WhiteBg = styled.div`
width: 100vw;
height: 100vh;

`

const Wrapper = styled.div`
z-index: 99999999991;
width: 100%;
max-height: 100%;
overflow: scroll;
background-color:white;
position: fixed;
padding-bottom: 30px;
/* padding: 25px; */
.website_likes {
    display: flex;
    flex-direction: column;
    padding-top: 30px;
    
    label {
        width: 100%;
        text-align: center;
        font-weight: 700;
    }
    .row {
       
       display: flex;
       button {
           width: 50px;
           height: 50px;
           font-size: 30px;
           font-weight: 700;
           margin: 10px;
       }
       .col-2 {
        @media(max-width: 640px) {
       
        }
           padding-right: 15px;
       }
    }
}
fieldset {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    /* overflow-x: hidden; */
    width: 100%;
    position: relative;
    button {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px 30px;
        width: 180px;
        height: 40px;
        /* border: 1px solid #bfa67a; */
        background: #bfa67a;
        color: white;
    }
    .more_info {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        p {
            padding-bottom: 5px;
        }
        textarea {
            @media(max-width: 640px) {
       width: 300px;
    }
            box-shadow: inset 2px 2px 5px 0 rgb(85 97 136 / 20%);
          width: 600px;
          text-align: center;
          
          height: 100px;
            border: 1px solid rgba(85,97,136,.2);
        }
    }
    p {
        margin-top:15px;
        margin-bottom: 15px;
        padding: 10px;
    }
    .budget {
        p {
            
            padding:0;
            padding-left: 12px;
        }
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: 30px;
      .checkbox {
        box-shadow: inset 2px 2px 5px 0 rgb(85 97 136 / 20%);
            width: 35px;
            height: 35px;
        
            border: 1px solid rgba(85,97,136,.2);
      }
    }
    .currentPage {
        p {
            padding: 10px;
            margin-top:15px;
        }
        padding-bottom: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .radio {
        display: flex;
        padding-bottom: 10px;
        .option {
            box-shadow: inset 2px 2px 5px 0 rgb(85 97 136 / 20%);
            padding: 10px 20px;
            border: 1px solid rgba(85,97,136,.2);
            cursor: pointer;
        }
    }
    input {
        @media(max-width: 640px) {
            width: 250px;
        }
        width: 600px;
        text-align: center;
        box-shadow: inset 2px 2px 5px 0 rgb(85 97 136 / 20%);

            border: 1px solid rgba(85,97,136,.2);
    }
    h3 {
        text-transform: uppercase;
        color: #bfa67a;
        letter-spacing: 1.2px;
        padding-bottom: 30px;
    }
    p {
        padding-top: 30px;
        color: black;
        font-weight: 700;
        text-align: center;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: none;
    .range {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        
        output {
        
        display: flex;
        justify-content: center;
        margin-left: 30px;
        border: 1px solid rgba(85,97,136,.2);
        box-shadow: inset 2px 2px 5px 0 rgb(85 97 136 / 20%);
        padding: 10px;
        color: black;
    }
    }
    
}

`

const mapStateToProps = state => {
    return {
        progressBar: state.progressBar,
    };
};


export default connect(mapStateToProps, null)(Website);
