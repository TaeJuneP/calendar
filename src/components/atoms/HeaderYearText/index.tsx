import React from "react";
import styled from "styled-components";
import moment from "moment"

type Props = {
    month: number;

};

const HeaderYearText: React.FC<Props> = (props: Props) => {
    const month = moment().subtract(props.month, "months")

    return (
        <>
            <Container >{month.format("YYYY년 M월")}</Container>
        </>
    );
}

const Container = styled.div`
    font-size: 20px;
    width: 120px;
    line-height: 1.6;
    letter-spacing: -0.009em;
    margin: 0;
    color: inherit;
    margin: 3.5px 0 3.5px 8px;
`
export default HeaderYearText;
