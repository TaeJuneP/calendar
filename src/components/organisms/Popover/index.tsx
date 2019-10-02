import React from "react";
import styled from "styled-components";
import PopoverTitleAndPeriod from "components/molecules/PopoverTitleAndPeriod"
import PopoverContent from "components/molecules/PopoverContent"
const Popover: React.FC = () => {

    return (
        <Container>
            <Arrow />
            <PopoverTitleAndPeriod />
            <PopoverContent />
        </Container>
    );
}

const Container = styled.div`
    position: absolute;
    transform: translate3d(5px, 135px, 0px);
    top: 0px;
    left: 0px;
    padding: 16px;
    will-change: transform;
    min-width: 320px;
    z-index: 1060;
    display: block;
    max-width: 276px;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0,0,0,.2);
    border-radius: .3rem;
    margin-right: .5rem;
    font-size: .875rem;
`;
const Arrow = styled.div`
    right: calc((.5rem) * -1);
    width: .5rem;
    height: 1rem;
    margin: .3rem 0;
    top: 50px;
    position: absolute;
    border-color: transparent;
    border-style: solid;
    border-left-color: #fff;
    border-width: .5rem 0 .5rem .5rem;
`
export default Popover;
