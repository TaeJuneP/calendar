import React from "react";
import styled from "styled-components"
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';

const NoteIcon: React.FC = () => {

    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            root: {
                '& > span': {
                    margin: theme.spacing(1),
                },
            },
        })
    );

    const classes = useStyles();
   
    return (
        <div className={classes.root}>
            <Container>
                <Icon style={{ marginTop: "1px" }}>notes</Icon>
            </Container>
        </div >
    );
}
const Container = styled.div`
   
`

export default NoteIcon;