import React from "react";
import Layout from "../components/layout/Layout";
import Services from "../components/pagesReact/services/Services";
import Seo from "../components/smallComponents/Seo";
const Uslugi = () => {
  return (
    <Layout>
      <Seo
        description="Poznaj nasze usługi: aplikacje mobilne, strony internetowe, sklepy internetowe, wizytówki, logo. - Enzo development, enzo-dev"
        title="Usługi"
        keywords={[
          `strona internetowa`,
          `aplikacja mobilna`,
          `usługi it`,
          `wrocław`,
          `internet`,
          `sklep internetowy`,
          `wrocław`,
          `polska`,
        ]}
      />
      <Services />
    </Layout>
  );
};

export default Uslugi;
