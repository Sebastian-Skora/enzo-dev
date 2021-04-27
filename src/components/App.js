import React, { Component } from "react";
// import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Header from "./layout/header/Header";
import MainPage from "./pages/mainPage/MainPage";
import Contact from "./pages/contact/Contact";
import Footer from "./layout/Footer/Footer";
import Services from "./pages/services/Services";
import NotFound from "./pages/NotFound/NotFound";
import CookieConsent from "react-cookie-consent";
import MessengerCustomerChat from 'react-messenger-customer-chat';
import PhoneCall from "./PhoneCall";
import News from "./pages/news/News";
class App extends Component {
  state = {};
  componentDidMount() {
    window.addEventListener("scroll", () => {
      let nav = document.querySelector("header");
      console.log(nav);
      nav.classList.toggle("section_size", window.scrollY > 0);
      let logo = document.querySelector("small");
      logo.classList.toggle("section_size", window.scrollY > 0);
    });
  }
  render() {
    return (
      <>
        <CookieConsent
          location="bottom"
          buttonText="Akceptuje"
          cookieName="AllCookiesAccepted"
          style={{ background: "black", opacity: "0.85", display: 'flex', justifyContent: "center", textAlign: "center", alignItems: "center", zIndex: "999999999999999" }}
          buttonStyle={{ color: "black", fontSize: "14px", backgroundColor: "#bfa67a", padding: "16px" }}
          expires={150}
        >
          Strona do poprawnego działania potrzebuje wykorzystywać pliki cookies. Zaakceptuj je, by móc w pełni korzystać z funkcjonalności naszej strony.
      </CookieConsent>
        {/* <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/services" component={Services} />
            <Route path="/contact" component={Contact} />
            <Route path="/news" component={News} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </Router> */}
        <MessengerCustomerChat
          pageId="104782821734352"
          appId="589168405818513"
          htmlRef={window.location.pathname}
          language="pl_PL"

        />
        <PhoneCall />
      </>
    );
  }
}

export default App;
