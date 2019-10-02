import React from "react";
import styled from "styled-components";
import TodayButton from "components/molecules/TodayButton"
import Link from "components/molecules/MonthAndDayLink"
import Text from "components/atoms/HeaderYearText"
import LeftAndRightPointer from "components/molecules/LeftAndRightPointer"

type Props = {
  month: number
  linkStatus: string
  setMonth: (month: number) => void;
  setLinkStatus: (status: string) => void;
}

const Header: React.FC<Props> = (props: Props) => {

  return (
    <Container>
      <Bundle>
        <TodayButton />
        <LeftAndRightPointer setMonth={props.setMonth} month={props.month} />
        <Text month={props.month} />
      </Bundle>
      <Link linkStatus={props.linkStatus} setLinkStatus={props.setLinkStatus} />
    </Container>
  );

}

const Bundle = styled.div`
  display:flex;
`
const Container = styled.div`
  background-color: #F7F7FB;
  border-bottom: 1px solid #D7E2EB;
  display:flex;
  color: #44576c;
  padding: 24px;
  justify-content:space-between;
  @media only screen and (max-width: 450px) {
    display:block;
    padding:20px;
  }
`;
export default Header;
