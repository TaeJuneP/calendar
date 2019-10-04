import React from "react";
import styled from "styled-components";
import Icon from "components/atoms/NoteIcon"
import Content from "components/atoms/PopoverContent"

type Props = {
    plan: any
}
const PopoverContent: React.FC<Props> = (props: Props) => {

    return (
        <Container>
            <Icon />
            <Bundle>
                <Content plan={props.plan} />
            </Bundle>
        </Container>
    );
}

const Container = styled.div`
    margin-top: 16px;
    display: flex;
    align-items: flex-start;
    color: #263747;
`;
const Bundle = styled.div`
    margin-left: 12px;
`
export default PopoverContent;
