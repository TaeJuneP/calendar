import React from "react";
import styled from "styled-components";
import NaviLink from "components/atoms/NaviLink";

type Props = {
    linkStatus: string
    setLinkStatus: (status: string) => void;
  }

const MonthAndDayLink: React.FC<Props> = (props:Props) => {

    const month = `월`;
    const day = `일`;

    return (
        <Container>
            <NaviLink content={month} linkStatus={props.linkStatus} setLinkStatus={props.setLinkStatus} />
            <NaviLink content={day} linkStatus={props.linkStatus} setLinkStatus={props.setLinkStatus} />
        </Container>
    );
}





const Container = styled.div`
  display:flex;
`;

export default MonthAndDayLink;
