import React from "react";
import styled from "styled-components";
import ModalHeaderText from "components/atoms/ModalHeaderText";
import CloseButton from "components/atoms/CloseButton";

type Props = {
  setModalStatus: (status: boolean) => void;
};

const ModalHeader: React.FC<Props> = (props: Props) => {
  return (
    <Container>
      <ModalHeaderText />
      <CloseButton setModalStatus={props.setModalStatus} />
    </Container>
  );
};

const Container = styled.div`
  background: #f7f7fb;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid #e9ecef;
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
`;

export default ModalHeader;
