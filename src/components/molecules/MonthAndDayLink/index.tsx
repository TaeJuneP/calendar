import React, { useState } from "react";
import styled from "styled-components";
import NaviLink from "components/atoms/NaviLink";
const MonthAndDayLink: React.FC = () => {

    const month = `월`;
    const day = `일`;
    const [linkStatus, setLinkStatus] = useState(month);

    const setStatus = (status: string) => {
        setLinkStatus(status)
    }

    return (
        <Container>
            <NaviLink content={month} linkStatus={linkStatus} setStatus={setStatus} />
            <NaviLink content={day} linkStatus={linkStatus} setStatus={setStatus} />
        </Container>
    );
}





const Container = styled.div`
  display:flex;
`;

export default MonthAndDayLink;
