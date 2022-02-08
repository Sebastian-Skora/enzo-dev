import React from "react";
import Layout from "../components/layout/layout";
import Services from "../components/pagesReact/services/Services";
import SEO from "../components/smallComponents/seo";
const Uslugi = () => {
  return (
    <Layout>
      <SEO
        description="Poznaj nasze usługi: aplikacje mobilne, strony internetowe, sklepy internetowe, wizytówki, logo."
        title="Usługi | Enzo Development"
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
