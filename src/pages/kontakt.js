import React from "react";
import Layout from "../components/layout/layout";
import Contact from "../components/pagesReact/contact/Contact";
import SEO from "../components/smallComponents/seo";
const Kontakt = () => {
  return (
    <Layout>
      <SEO
        description="Skontaktuj się z nami i zamów bezpłatną wycenę - eSwipe"
        title="Kontakt"
      />
      <Contact />
    </Layout>
  );
};

export default Kontakt;
