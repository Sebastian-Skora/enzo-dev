import React, { useState } from 'react'
import styled from 'styled-components'
import { Range, getTrackBackground } from 'react-range';
import ModalHeader from '../../ModalHeader/ModalHeader';
import { AiOutlineArrowRight } from 'react-icons/ai';

const STEP = 0.1;
const MIN = 1;
const MAX = 12000;

const Website = () => {
    const [count, setCount] = useState({ values: [1] });
    return (
        <Wrapper>
            <ModalHeader>Sklep internetowy</ModalHeader>
            <fieldset name="website">
                <p>Podaj ile mniej więcej produktów będzie w sklepie</p>
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



                <div className="system_info">
                    <div className="checkbox"><div className="checkbox_button"></div><label>Integracja z Allegro</label></div>
                    <div className="checkbox"><div className="checkbox_button"></div><label>System blogowy</label></div>
                </div>
                <div className="budget">
                    <div className="checkbox">
                        <div className="checkbox_button"></div>
                        <p>Chcę określic budzet strony</p>
                    </div>
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

            </fieldset>



        </Wrapper>
    )
}


const Wrapper = styled.div`
z-index: 99999999991;
width: 100vw;
height: 100vh;
background-color:white;
position: fixed;
/* padding: 25px; */

fieldset {
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
            box-shadow: inset 2px 2px 5px 0 rgb(85 97 136 / 20%);
          width: 600px;
          text-align: center;
          
          height: 100px;
            border: 1px solid rgba(85,97,136,.2);
        }
    }
    .system_info {
        p {
            padding:0;
            padding-left: 12px;
        }
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-bottom: 30px;
        width: 200px;
        
     
    }
    .budget {
        p {
            padding: 0;
        }
    }
    .checkbox {
            display: flex;
            width: 300px;
            align-items: center;
            margin-bottom: 10px;
        }
    .checkbox_button {
        box-shadow: inset 2px 2px 5px 0 rgb(85 97 136 / 20%);
            width: 35px;
            height: 35px;
            margin-right: 10px;
            border: 1px solid rgba(85,97,136,.2);
      }
    .currentPage {
        padding-bottom: 30px;
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
        padding-bottom: 20px;
        output {
        width: 72px;
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

export default Website
