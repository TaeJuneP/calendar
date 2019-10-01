import React from "react";
import styled from "styled-components";
import DefaultButton from "components/atoms/DefaultButton";

const TodayButton: React.FC = () => {

  const content = `Today`;

  return (
    <Container>
      <DefaultButton content={content} />
    </Container>
  );
}

const Container = styled.div`
  margin-right: 24px;
  @media only screen and (max-width: 450px) {
    margin-right: 5px;
  }
`;

export default TodayButton;
