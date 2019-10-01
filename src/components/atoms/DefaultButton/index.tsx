import React from "react";
import styled from "styled-components";

type Props = {
  content: string;
};

const DefaultButton: React.FC<Props> = (props: Props) => {

  return (
    <>
      <Container>{props.content}</Container>
    </>
  );
}

const Container = styled.button`
  background-color: #f8f9fa;
  border: 1px solid #d7e2eb;
  color: #44576c;
  font-weight: 500;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  cursor: pointer;
  :hover {
    color: #212529;
    background-color: #e2e6ea;
    border-color: #dae0e5;
  }
  &:focus {
    box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);
    outline: 0;
  }
  &:active {
    background-color: #dae0e5;
    border-color: #d3d9df;
  }
`;
export default DefaultButton;
