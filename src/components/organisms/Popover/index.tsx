import React from "react";
import styled from "styled-components";
import PopoverTitleAndPeriod from "components/molecules/PopoverTitleAndPeriod"
import PopoverContent from "components/molecules/PopoverContent"

type Props = {
    n: any
    plan: any
    setPopoverStatus: (status: boolean) => void
}

const Popover: React.FC<Props> = (props: Props) => {
    const PopoverClick = (event: any) => {
        props.setPopoverStatus(false);
        event.stopPropagation();
    }
    return (
        <Container n={props.n} onClick={PopoverClick}>
            <Arrow />
            <PopoverTitleAndPeriod plan={props.plan}/>
            <PopoverContent plan={props.plan}/>
        </Container>
    );
}

const Container: React.ComponentType<any> = styled.div`
    position: absolute;
    margin-top: -15px;
    padding: 16px;
    min-width: 320px;
    z-index: 1060;
    margin-left: ${(props: any) => (props.n) * 55 + "px"};
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
