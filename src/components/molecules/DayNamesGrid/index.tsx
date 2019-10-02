import React from "react";
import styled from "styled-components";
import DayName from "components/atoms/DayName";

const DayNamesGrid: React.FC = () => {

    const name = ['일', '월', '화', '수', '목', '금', '토']

    return (
        <Container>
            {name.map(item => {
                return <DayName key={item} name={item} />
            })}
        </Container>
    );
}

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: 48px;
`;
export default DayNamesGrid;
