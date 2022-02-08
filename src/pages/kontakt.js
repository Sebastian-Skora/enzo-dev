import React from "react";
import Layout from "../components/layout/layout";
import Contact from "../components/pagesReact/contact/Contact";
import SEO from "../components/smallComponents/seo";
const Kontakt = () => {
  return (
    <Layout>
      <SEO
        description="Skontaktuj się z nami"
        title="Kontakt"
        keywords={[
          `enzo-dev`,
          `kontakt`,
          `wycena strony internetowej`,
          `email firmy`,
          `numer telefonu`,
          `adres`,
          `wrocław`,
          `lokalizacja firmy`,
          `google maps`,
          `formularz kontaktowy`,
        ]}
      />
      <Contact />
    </Layout>
  );
};

export default Kontakt;
