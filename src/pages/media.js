import React from "react";
import SEO from "../components/smallComponents/seo";
import styled from "styled-components";
import SubpageHeader from "../components/smallComponents/SubpageHeader/SubpageHeader";
import Layout from "../components/layout/layout";
const media = () => {
  return (
    <>
      <SEO
        description="Sprawdź nasze realizacje filmowe"
        title="Realizacje filmowe"
      />
      <Layout>
        <SubpageHeader>Media</SubpageHeader>
        <SectionWrapper></SectionWrapper>
      </Layout>
    </>
  );
};

const SectionWrapper = styled.section`
  min-height: 80vh;
`;

export default media;
