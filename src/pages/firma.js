import React from "react";
import Layout from "../components/layout/layout";
import SubpageHeader from "../components/smallComponents/SubpageHeader/SubpageHeader";
import AboutImage from "../assets/svgs/about.svg";
import AboutImage2 from "../assets/svgs/about2.svg";
import TeamImage from "../assets/svgs/team.svg";
import WhatWeDoImage from "../assets/svgs/what_we_do.svg";
import styled from "styled-components";
import SpecialButton from "../components/smallComponents/SpecialButton/SpecialButton";
import { connect } from "react-redux";
import SEO from "../components/smallComponents/seo";
const Firma = ({ modeRedux }) => {
  return (
    <>
      <SEO
        title="Firma"
        description={`Dowiedz się więcej o naszej firmie - agencja interaktywna - usługi internetowe - Enzo development, enzo-dev`}
      />
      <Layout>
        <SubpageHeader>Nasza firma</SubpageHeader>
        <Wrapper modeRedux={modeRedux}>
          <div className="box about">
            <div className="title">
              <h3>Nasza firma</h3>
            </div>
            <div className="flex">
              <div className="description">
                <div className="flex-1">
                  <div className="desc-box">
                    <p>
                      Historia firmy <b>Enzo Development</b> zaczyna się od roku
                      2020 kiedy to stawialiśmy pierwsze kroki na rynku,
                      podejmując się pracy na bezpłatnych stażach po to, aby
                      zbudować swoją markę. Wykonywaliśmy wtedy pierwsze strony
                      internetowe dla rodziny i znajomych. Nasze strony
                      internetowe były przyjmowane z pełnym zadowoleniem co
                      dodawało nam wiatru w skrzydła. Po krótkim czasie zaczęły
                      się pojawiać pierwsze zapytania od klientów z zewnątrz,
                      które możecie zobaczyć w zakładce Portfolio.
                    </p>
                    <p>
                      Wiele osób pyta Nas: <b>Skąd pomysł na nazwę Enzo?</b>{" "}
                      Pomysł na nazwę Naszej firmy powstał od legendarnego
                      modelu Ferrari Enzo, gdyż motoryzacja jest to Nasza wielka
                      pasja.
                    </p>
                  </div>
                  <div className="about_images">
                    <img src={AboutImage2} />
                  </div>
                </div>
                <div className="flex-2">
                  <div className="about_images">
                    <img src={AboutImage} />
                  </div>
                  <div className="desc-box">
                    <p>
                      <b>Co Nas charakteryzuje?</b> Jesteśmy agencją
                      interaktywną zajmującą się wszelkimi usługami dla firm
                      oraz osób prywatnych. Do każdego zlecenia podchodzimy
                      indywidualnie tak, aby sprostać oczekiwaniom klienta. Nie
                      boimy się żadnego zlecenia, chętnie podejmujemy się
                      każdego wyzwania. Wybierając Nas zapewniamy{" "}
                      <b>stały kontakt z obsługą klienta</b> po to, aby
                      dynamicznie i na bieżąco kontrolować zmiany na stronie
                      internetowej lub aplikacji mobilnej. Posiadamy duże
                      doświadczenie w zakresie programowania stron
                      internetowych, sklepów internetowych oraz aplikacji
                      mobilnych. Potrafimy również pozycjonować strony oraz
                      sklepy internetowe pod względem SEO.{" "}
                      <b>
                        Wykonanie prostych grafik na stronę lub sklep
                        internetowy?
                      </b>{" "}
                      Żaden problem. Stawiamy na kompleksową obsługę klienta od
                      A do Z.{" "}
                      <b>
                        Inwestujemy w Ciebie swój czas po to abyś Ty go miał
                        więcej.
                      </b>{" "}
                      Korzystając z Naszych usług nie musisz martwić się o
                      jakość, zadbamy o to aby całość projektu była szczegółowo
                      omówiona z klientem zanim zostanie zrealizowana.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="box workers">
            <div className="title">
              <h3>Nasz zespół</h3>
            </div>
            <div className="flex">
              <div className="description">
                <p>
                  Jesteśmy <b>młodym, dynamicznym i pełnym energii zespołem</b>{" "}
                  z ogromną chęcią wykazania się oraz z pasją do programowania i
                  motoryzacji. Już od młodych lat interesowało nas jak wygląda
                  działanie stron i programów internetowych. Nurtowało Nas wiele
                  pytań odnośnie tego jak działa Internet, kto odpowiada za to
                  co się tam znajduje? Teraz wiemy: My tym sterujemy!{" "}
                  <b>
                    Chętnie pomożemy pokazać Ci się w sieci z jak najlepszej
                    strony!
                  </b>{" "}
                  Nasze pierwsze kroki w pisaniu kodu rozpoczęły się już{" "}
                  <b>10 lat temu</b> kiedy to tworzyliśmy swoje pierwsze serwery
                  do gier komputerowych po to, aby pograć ze znajomymi online.
                  Na lekcjach informatyki w szkole średniej rozpoczęła się
                  przygoda z językami programowania stron internetowych. Od
                  tamtej pory zaczęliśmy z wielkim zainteresowaniem zagłębiać
                  się w coraz to większą wiedzę na temat programowania -{" "}
                  <b>
                    od pisania prostych programów matematycznych, aż do gier i
                    serwerów.
                  </b>
                </p>
                <p>
                  <b>Ostatecznie wybraliśmy drogę jako Agencja interaktywna</b>{" "}
                  zajmująca się projektowaniem i tworzeniem : stron
                  internetowych | sklepów internetowych | pozycjonowaniem SEO |
                  aplikacji mobilnych iOS i Android | .{" "}
                </p>
                <p>
                  Początki nie były łatwe , lecz chęć do kodowania i dalszej
                  nauki przetrwała{" "}
                  <b>
                    dlatego dziś stajemy naprzeciw Wam drodzy klienci, aby
                    wspólnie stworzyć sukces.
                  </b>
                </p>
              </div>
              <div className="workers_images">
                <img src={TeamImage} />
              </div>
            </div>
          </div>
          <div className="box what_we_do">
            <div className="title">
              <h3>Nasza wizja</h3>
            </div>
            <div className="flex">
              <p className="description">
                Naszym celem jest to, aby dostarczać nowoczesne rozwiązania do
                jak największej ilości klientów, tak
                <b>
                  aby strony internetowe naszych klientów przeważały jakością
                  oraz wydajnością nad konkurencją.
                </b>{" "}
                Chcemy, aby Nasze strony, sklepy oraz aplikacje mobilne,
                ułatwiały i pomagały w codziennym funkcjonowaniu firmy.
                Podejmujemy się nowych szkoleń po to aby klient zawsze
                otrzymywał najwyższą jakość usługi. W niedalekiej przyszłości
                planujemy powiększenie Naszej kadry pracowniczej aby zwiększyć
                swoje możliwości i powiększyć swoje współpracę o nowe firmy.
              </p>
              <div className="box what_we_do_images">
                <img src={WhatWeDoImage} />
              </div>
            </div>
          </div>
        </Wrapper>
        <BacklinkWrapper modeRedux={modeRedux}>
          {/* <button>
          Sprawdź klientów, którzy nam zaufali!
          <i class="fas fa-arrow-alt-circle-right"></i>
        </button> */}
          <SpecialButton></SpecialButton>
        </BacklinkWrapper>
      </Layout>
    </>
  );
};

const BacklinkWrapper = styled.div`
  width: 100vw;
  min-height: 35vh;
  background-color: ${(props) => (props.modeRedux ? "#383838" : "#f7f7f7")};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  flex-direction: column;
`;

const Wrapper = styled.section`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => (props.modeRedux ? "#252525" : "#fff")};
  // display: grid;
  // grid-template-columns: 1fr 1fr;
  //   grid-template-rows: 1fr 1fr;
  width: 100vw;
  padding: 100px 4rem;
  @media (max-width: 1280px) {
  }
  @media (max-width: 960px) {
    padding: 100px 30px;
  }
  @media (max-width: 640px) {
    padding: 100px 10px;
    padding-bottom: 0;
  }
  @media (max-width: 500px) {
    padding: 100px 5px;
    padding-bottom: 0;
  }
  .box {
    display: flex;
    justify-content: center;
    align-items: center;
    // border: 1px solid black;
    margin-bottom: 50px;
    min-height: 400px;
    max-width: 1280px;
    .title {
      @media (max-width: 1280px) {
        width: 100vw;
        display: flex;
        justify-content: center;
        margin-bottom: -20px;
      }
    }
    .flex {
      display: flex;
      justify-content: center;
      align-items: center;
      .workers_images {
        @media (max-width: 1280px) {
          display: none;
        }
        display: flex;
        align-items: center;
        img {
          width: 500px;
          padding: 30px;
        }
      }
    }
    .description {
      margin-top: 80px;
      line-height: 1.75;
      padding: 30px;
      font-size: 16px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: ${(props) => (props.modeRedux ? "#b1b1b1" : "black")};
      @media (max-width: 1280px) {
        width: 100%;
        padding: 100px;
      }
      @media (max-width: 760px) {
        padding: 60px;
      }
      @media (max-width: 480px) {
        padding: 30px;
      }
      .flex-1 {
        padding-bottom: 50px;
        .desc-box {
          width: 50%;
          @media (max-width: 1280px) {
            width: 100%;
          }
        }
        display: flex;
        .about_images {
          position: relative;
          width: 50%;
          @media (max-width: 1280px) {
            width: 0;
          }
          img {
            max-height: 100%;
          }
        }
      }
      .flex-2 {
        .desc-box {
          width: 50%;
          @media (max-width: 1280px) {
            width: 100%;
          }
        }
        display: flex;
        .about_images {
          display: flex;
          align-items: center;
          position: relative;
          width: 50%;
          @media (max-width: 1280px) {
            width: 0;
          }
          img {
            height: 324px;
          }
        }
      }
      img {
        position: absolute;
        @media (max-width: 1280px) {
          height: 35%;
          opacity: 0.08;
          display: block;
        }
      }
    }
    &.about {
      display: flex;

      padding: 50px;
      position: relative;
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      @media (max-width: 1280px) {
        padding: 10px;
      }
      h3 {
        font-size: 38px;
        font-weight: 500;
        z-index: 3;
        position: relative;
        color: ${(props) => (props.modeRedux ? "#f5f5f5" : "black")};
        &::after {
          content: "01";
          font-size: 98px;
          position: absolute;
          left: 0;
          bottom: -15.5px;
          font-weight: 700;
          z-index: 2;
          color: #bfa67a;
          opacity: 0.2;
        }
      }
    }
    .about_images {
      img {
        width: 100%;
      }
      width: 50%;
      @media (max-width: 1280px) {
        display: block;
      }
    }
    &.workers {
      @media (max-width: 450px) {
        padding: 25px;
      }

      padding: 10px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      h3 {
        color: ${(props) => (props.modeRedux ? "#f5f5f5" : "black")};
        font-size: 38px;
        font-weight: 500;
        z-index: 3;
        position: relative;
        &::after {
          content: "02";
          font-size: 98px;
          position: absolute;
          left: 0;
          bottom: -15.5px;
          font-weight: 700;
          z-index: 2;
          color: #bfa67a;
          opacity: 0.2;
        }
      }
    }

    &.what_we_do {
      .description {
        padding-bottom: 0;
      }
      padding: 50px;
      padding-bottom: 0;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: flex-start;
      .description {
        margin-right: 180px;
        max-width: 500px;
        @media (max-width: 1280px) {
          margin-right: 0;
          max-width: none;
        }
      }
      h3 {
        color: ${(props) => (props.modeRedux ? "#f5f5f5" : "black")};
        font-size: 38px;
        font-weight: 500;
        z-index: 3;
        position: relative;
        &::after {
          content: "03";
          font-size: 98px;
          position: absolute;
          left: 0;
          bottom: -15.5px;
          font-weight: 700;
          z-index: 2;
          color: #bfa67a;
          opacity: 0.2;
        }
      }
    }
    &.what_we_do_images {
      @media (max-width: 1280px) {
        display: none;
      }
      img {
        width: 500px;

        padding: 30px;
      }
    }

    &.workers_images {
      @media (max-width: 510px) {
        flex-direction: column;
      }
      .worker {
        margin: 15px;
        font-size: 18px;
        text-align: center;
        width: 100%;
      }
      .position {
        font-weight: 500;
        color: grey;
        width: 100%;
        text-align: center;
        height: 140px;
        @media (max-width: 510px) {
          height: 80px;
        }
      }
      .image_container {
        width: 50%;
        display: flex;
        align-items: center;
        flex-direction: column;
        h4 {
          color: ${(props) => (props.modeRedux ? "#f5f5f5" : "black")};
        }
        &:nth-of-type(1) {
          margin-right: -60px;
          @media (max-width: 510px) {
            margin-right: 0;
          }
        }
        @media (max-width: 628px) {
          width: 100%;
        }
      }

      img {
        width: 60%;
        // margin: 15px;
        border-radius: 15px;
        @media (max-width: 500px) {
          width: 70%;
        }
      }
    }
  }
`;

const mapStateToProps = (state) => {
  return {
    modeRedux: state.toggleMode,
  };
};

export default connect(mapStateToProps, null)(Firma);
