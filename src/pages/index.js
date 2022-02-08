import React from "react";
import MainPage from "../components/pagesReact/mainPage/MainPage";
import Layout from "../components/layout/layout";
import SEO from "../components/smallComponents/seo";
const IndexPage = () => {
  return (
    <Layout>
      <SEO
        description="Firma IT ➤ Tworzenie strony internetowej ➤ Tworzenie sklepu internetowego ☆ Tworzenie aplikacji mobilnych ☆ Pozycjonowanie SEO ☆ Projektowanie logo/wizytówek ☆ Kompleksowa usługa IT"
        title="Strony www, aplikacje mobilne, pozycjonowanie SEO"
        keywords={[
          `strona internetowa`,
          `aplikacja mobilna`,
          `internet`,
          `sklep internetowy`,
          `technologie`,
          `react`,
          `html`,
          `css`,
          `javascript`,
          `js`,
          `wordpress`,
          `mongodb`,
          `nodejs`,
          `klient`,
          `pierwsza strona internetowa	
`,
          `ile kosztuje strona internetowa	
`,
          `polska strona internetowa`,
          `prosta strona internetowa`,
          `nowoczesna strona internetowa`,
          `tania strona internetowa	`,
          `strona internetowa koszt`,
          `profesjonalna strona internetowa`,
          `strona internetowa cennik`,
          `strona internetowa logo`,
          `strona internetowa sklep`,
          `profesjonalna strona internetowa cena`,
          `szybka strona internetowa`,
          `prywatna strona internetowa`,
        ]}
      />
      <MainPage />
    </Layout>
  );
};

export default IndexPage;
