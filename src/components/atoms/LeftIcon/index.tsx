import React from "react";
import styled from "styled-components";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';

type Props = {
    month: number
    setMonth: (month: number) => void;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > span': {
                margin: theme.spacing(1),
            },
        },
    })
);

const LeftIcon: React.FC<Props> = (props: Props) => {

    const classes = useStyles();
    const previousMonth = () => {
        props.setMonth(props.month + 1)
    }
    return (
        <div className={classes.root}>
            <Container title="이전" onClick={() => previousMonth()}>
                <Icon style={{ marginTop: "1px" }}>chevron_left</Icon>
            </Container>
        </div >
    );
}

const Container = styled.button`
    width: 38px;
    color:inherit;
    height:38px;
    outline:0;
    border:0;
    background-color:inherit;
    :hover{
        background-color: #CDD7E0;
        border-radius: 50%;
        width: 38px;
        height: 38px;
    }         
`
export default LeftIcon;