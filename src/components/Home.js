import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Schedule a Demo Drive"
        backgroundImg="model-s.jpg"
        leftBtnText="Custom order"
        rightBtnText="View inventory"
      />
      <Section
        title="Model Y"
        description="Schedule a Demo Drive"
        backgroundImg="model-y.jpg"
        leftBtnText="Custom order"
        rightBtnText="View inventory"
      />
      <Section
        title="Model 3"
        description="Schedule a Demo Drive"
        backgroundImg="model-3.jpg"
        leftBtnText="Custom order"
        rightBtnText="View inventory"
      />
      <Section
        title="Model X"
        description="Schedule a Demo Drive"
        backgroundImg="model-x.jpg"
        leftBtnText="Custom order"
        rightBtnText="View inventory"
      />
      <Section
        title="Solar Panels"
        description="Lowest Cost Solar Panels in America"
        backgroundImg="solar-panel.jpg"
        leftBtnText="Order now"
        rightBtnText="Learn more"
      />
      <Section
        title="Solar Roof"
        description="Produce Clean Energy From Your Roof"
        backgroundImg="solar-roof.jpg"
        leftBtnText="Order now"
        rightBtnText="Learn more"
      />
      <Section
        title="Accessories"
        backgroundImg="accessories.jpg"
        leftBtnText="Shop Now"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
