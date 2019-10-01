import React from "react";
import styled from "styled-components";
import DayLabel from "components/atoms/DayLabel";


type Props = {
    days: any;

};
const Week: React.FC<Props> = (props: Props) => {

    return (
        <Container>
            {props.days.map((item: number,n:number) => {
                return <DayLabel key={n} day={item} />
            })}
        </Container>
    );
}

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(7, minmax(120px, 1fr));
    grid-auto-flow: dense;
    grid-template-rows: 32px repeat(auto-fill, 32px) 32px;
    grid-gap: 0;
    border-bottom: 1px solid #D7E2EB;
`;

export default Week;
