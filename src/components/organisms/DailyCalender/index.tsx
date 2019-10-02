import React from "react";
import styled from "styled-components";


const DailyCalender: React.FC = () => {
    return (
        < Container >
        </Container >
    );
}


const Container = styled.div`
    display: grid;
    min-height: 640px;
    grid-template-columns: repeat(1, minmax(840px, 1fr));
    grid-template-rows: 48px repeat(12, 40px) 40px;
    grid-auto-rows: inherit;
    overflow: auto;
`;
export default DailyCalender;
