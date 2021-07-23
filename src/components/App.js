import React, { Component } from "react";
import "./App.css";


class App extends Component {
  state = {};

  render() {
    return (
      <>
        {/* <CookieConsent
          location="bottom"
          buttonText="Akceptuje"
          cookieName="AllCookiesAccepted"
          style={{ background: "black", opacity: "0.85", display: 'flex', justifyContent: "center", textAlign: "center", alignItems: "center", zIndex: "999999999999999" }}
          buttonStyle={{ color: "black", fontSize: "14px", backgroundColor: "#bfa67a", padding: "16px" }}
          expires={150}
        >
          Strona do poprawnego działania potrzebuje wykorzystywać pliki cookies. Zaakceptuj je, by móc w pełni korzystać z funkcjonalności naszej strony.
      </CookieConsent> */}
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

        <PhoneCall />
      </>
    );
  }
}

export default App;
