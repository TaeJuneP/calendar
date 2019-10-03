import React from "react";
import styled from "styled-components";

type Props = {
  setModalStatus: (status: boolean) => void;
  createScheduleHandler: () => void
};

const ConfirmButton: React.FC<Props> = (props: Props) => {
  return (
    <>
      <Button onClick={() => (props.setModalStatus(false), props.createScheduleHandler())}>일정 만들기</Button>
    </>
  );
};
const Button = styled.button`
  margin-right: 0.25rem;
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  cursor: pointer;
  :hover {
    color: #fff;
    background-color: #0069d9;
    border-color: #0062cc;
  }
`;

export default ConfirmButton;
