import React from 'react'
import * as styles from './OfferElements.module.scss';
import Zoom from "react-reveal/Zoom";

const offer_items = [
    {
        font: "fas fa-cogs",
        title: "IOS / ANDROID DEVELOPMENT",
        description: "Posiadanie strony internetowej już nie jest wystarczające - oczekuje się, że będą to również natywne aplikacje na iOS i Androida."
    },
    {
        font: "fas fa-terminal",
        title: "WEB DEVELOPEMENT",
        description: "Korzystając z najnowszych technologii internetowych, wszystkie strony internetowe są tworzone na zamówienie i skalowalne, co pozwala na ich rozwój i zwiększanie funkcjonalności."
    },
    {
        font: "fas fa-eye",
        title: "SEO",
        description: "Aby witryna klienta była łatwa do znalezienia, piszemy kod w sposób który sprzyja pozycjonowaniu w Google."
    },
    {
        font: "fas fa-mobile",
        title: "RESPONSIVE DESIGN",
        description: "W aktualniej erze smartfonów i tabletów nigdy nie było ważniejsze, aby Twoja witryna lub aplikacja działały idealnie na wszystkich rozmiarach ekranu."
    },
    {
        font: "fas fa-object-ungroup",
        title: "UX DESIGN",
        description: "Projektowanie wyglądu strony w taki sposób, aby była intuicyjna oraz prosta w obsłudze dla uzytkowników."
    },
    {
        font: "fas fa-database",
        title: "DATABASE ARCHITECTURE",
        description: "Podłączenie bazy danych umożliwi witrynom i aplikacjom zapisywanie potrzebnych informacji oraz pozwoli na dobrowolną edycje ich."
    },
]



const OfferElements = ({ modeRedux }) => {
    return (
        <div className={`${styles.offerElements_container} ${modeRedux && styles.dark_mode}`}>

            {offer_items.map((item) => (
                <div className={`${styles.offer_item} ${modeRedux && styles.dark_mode}`} key={item.title}>
                    <div style={{ width: "155px", height: "70px", padding: "10px", display: "flex", justifyContent: "center" }}>
                        <i className={item.font} style={{ color: "#7A7A7A", fontSize: "32px", width: "50px" }}></i>
                    </div>
                    <div>
                        <h3>{item.title}</h3>
                        <p className={`${styles.description} ${modeRedux && styles.dark_mode}`}>{item.description}</p>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default OfferElements;