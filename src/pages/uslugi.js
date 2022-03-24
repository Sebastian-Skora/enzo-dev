import React from "react";
import Layout from "../components/layout/layout";
import Services from "../components/pagesReact/services/Services";
import SEO from "../components/smallComponents/seo";
const Uslugi = () => {
  return (
    <Layout>
      <SEO
        description="Poznaj nasze usługi: aplikacje mobilne, strony internetowe, sklepy internetowe, wizytówki, logo. - Enzo development, enzo-dev"
        title="Usługi"
      />
      <Services />
    </Layout>
  );
};

export default Uslugi;
