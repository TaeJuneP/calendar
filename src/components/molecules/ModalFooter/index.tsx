import React from "react";
import styled from "styled-components";
import Cancel from "components/atoms/CancelButton";
import Confirm from "components/atoms/ConfirmButton";

type Props = {
  setModalStatus: (status: boolean) => void;
};

const ModalFooter: React.FC<Props> = (props: Props) => {
  return (
    <Container>
      <Cancel setModalStatus={props.setModalStatus}/>
      <Confirm setModalStatus={props.setModalStatus}/>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  background-color: #fff;
  border-radius: 0 0 0.3rem 0.3rem;
`;
export default ModalFooter;
