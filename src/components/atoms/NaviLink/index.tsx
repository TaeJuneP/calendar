import React from "react";
import styled from "styled-components";

type Props = {
  content: string;
  linkStatus: string;
  setStatus: (status: string) => void;
};

const naviLink: React.FC<Props> = (props: Props) => {
  
  return (
    <>
      <Container linkStatus={props.linkStatus} content={props.content} onClick={() => props.setStatus(props.content)}>{props.content}</Container>
    </>
  );
}

const Container: React.ComponentType<any> = styled.button`
  background-color: ${(props: any) => props.linkStatus === props.content ? "#44576C" : "#f8f9fa"};
  border: 1px solid #D7E2EB;
  color: ${(props: any) => props.linkStatus === props.content ? "#fff" : "#44576C"};
  font-weight: 500;
  padding: .5rem 1rem;
  font-size: 1rem;
  max-height: 42px;
  line-height: 1.5;
  border-radius: 0.25rem;
  margin-right: 4px;
  outline:0;
  cursor: pointer;
  :hover {
    background-color: #e2e6ea;
    border-color: #dae0e5;
  }
`;
export default naviLink;
