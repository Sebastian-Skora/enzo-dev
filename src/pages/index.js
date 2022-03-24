import React from "react";
import MainPage from "../components/pagesReact/mainPage/MainPage";
import Layout from "../components/layout/layout";
import SEO from "../components/smallComponents/seo";
const indexPage = () => {
  return (
    <Layout>
      <SEO
        description="Firma IT ➤ Tworzenie strony internetowej ➤ Tworzenie sklepu internetowego ☆ Pozycjonowanie SEO ☆ Enzo Development ☆ Tworzenie aplikacji mobilnych ☆ Projektowanie logo/wizytówek ☆ Kompleksowa usługa IT"
        title="Strony www, aplikacje mobilne, pozycjonowanie SEO"
      />
      <MainPage />
    </Layout>
  );
};

export default indexPage;
