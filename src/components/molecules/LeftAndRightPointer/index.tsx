import React from "react";
import styled from "styled-components";
import LeftIcon from "components/atoms/LeftIcon"
import RightIcon from "components/atoms/RightIcon"

type Props = {
    month: number
    setMonth: (month: number) => void;
}

const LeftAndRightPointer: React.FC<Props> = (props: Props) => {

    return (
        <Container>
            <LeftIcon  setMonth={props.setMonth} month={props.month}/>
            <RightIcon  setMonth={props.setMonth} month={props.month}/>
        </Container>
    );
}

const Container = styled.div`
    width:80px;
    display:flex;
    color: #44576c;
    justify-content:space-between;
`;
export default LeftAndRightPointer;
