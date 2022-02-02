import React from "react";
import * as styles from "./OfferElements.module.scss";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

const offer_items = [
  {
    font: "fas fa-terminal",
    title: "STRONA / SKLEP INTERNETOWY",
    description:
      "Używamy tylko najnowszych technologii , wszystkie nasze strony i sklepy internetowe są projektowane z najwyższa dbałością o szczegóły . Tworzymy indywidualne projekty przygotowane pod najbardziej wymagających klientów tak aby sprostały wszystkim wymaganiom. Nasze serwisy WWW są projektowane z myślą o rozwoju i jak największej funkcjonalności.",
  },
  {
    font: "fas fa-cogs",
    title: "APLIKACJE MOBILNE IOS / ANDROID ",
    description:
      "W obecnych czasach posiadanie strony internetowej może nie być wystarczające - klienci mogą oczekiwać czegoś więcej od serwisu WWW . Z pomocą przychodzą aplikacje mobilne na iOS i Androida.",
  },

  {
    font: "fas fa-eye",
    title: "SEO",
    description:
      "Dbamy o pozycjonowanie naszych stron. Chcemy aby witryny naszych klientów były łatwe do znalezienia, dlatego nasz kod źródłowy strony jest pisany w sposób który sprzyja wynikom wyszukiwania Google.",
  },
  {
    font: "fas fa-mobile",
    title: "RESPONSYWNY DESIGN",
    description:
      "W czasach wielkich ekranów smartfonów i tabletów ważne jest to aby Twoja strona internetowa lub aplikacja mobilna potrafiła dopasować się i sprawnie działać na wyświetlaczu każdego urządzenia.",
  },
  {
    font: "fas fa-object-ungroup",
    title: "UX DESIGN",
    description:
      "Idealnie dobrany projekt UX/ UI pozwoli na najlepsze wyniki sprzedaży produktu lub odsłon strony. Zapewni nam również płynność i czytelność strony.",
  },
  {
    font: "fas fa-database",
    title: "ARCHITEKTURA BAZY DANYCH",
    description:
      "Podłączenie bazy danych pozwoli na zapisywanie informacji oraz zapewni swobodną ich edycję.",
  },
];

const additional_items = [
  {
    font: "fas fa-sticky-note",
    title: "PROJEKT ULOTEK",
    description:
      "Projektowanie nowoczesnych ulotek. Ich wydruk oraz bezpośrednie przygotowanie do oddania dla klienta",
  },
  {
    font: "fas fa-id-card",
    title: "PROJEKTOWANIE WIZYTÓWEK",
    description:
      "Podłączenie bazy danych umożliwi witrynom i aplikacjom zapisywanie potrzebnych informacji oraz pozwoli na dobrowolną edycje ich.",
  },
  {
    font: "fab fa-facebook-messenger",
    title: "CHAT MESSENGER NA ŻYWO",
    description:
      "Chat połączony z kontem messenger pozwalający na komunikacje live z klientem bezspośrednio ze strony/sklepu internetowego.",
  },
  {
    font: "fas fa-edit",
    title: "AKTUALIZACJA STRONY INTERNETOWEJ",
    description:
      "Oferujemy aktualizowanie na nowoczesniejszy wygląd stworzonych juz stron internetowych.",
  },
];

const OfferElements = ({ modeRedux }) => {
  return (
    <Fade>
      <div
        className={`${styles.offerElements_container} ${
          modeRedux && styles.dark_mode
        }`}
      >
        {offer_items.map((item) => (
          <div
            className={`${styles.offer_item} ${modeRedux && styles.dark_mode}`}
            key={item.title}
          >
            <div
              style={{
                width: "155px",
                height: "70px",
                padding: "10px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <i
                className={item.font}
                style={{ color: "#7A7A7A", fontSize: "32px", width: "50px" }}
              ></i>
            </div>
            <div>
              <h3>{item.title}</h3>
              <p
                className={`${styles.description} ${
                  modeRedux && styles.dark_mode
                }`}
              >
                {item.description}
              </p>
            </div>
          </div>
        ))}
        <div
          className={`${styles.offerTitle} ${modeRedux && styles.dark_mode}`}
        >
          <h2
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            DODATKOWE USŁUGI
          </h2>
        </div>

        {additional_items.map((item) => (
          <div
            className={`${styles.offer_item} ${modeRedux && styles.dark_mode}`}
            key={item.title}
          >
            <div
              style={{
                width: "155px",
                height: "70px",
                padding: "10px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <i
                className={item.font}
                style={{ color: "#7A7A7A", fontSize: "32px", width: "50px" }}
              ></i>
            </div>
            <div>
              <h3>{item.title}</h3>

              <p
                className={`${styles.description} ${
                  modeRedux && styles.dark_mode
                }`}
              >
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Fade>
  );
};

export default OfferElements;
