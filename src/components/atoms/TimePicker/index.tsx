import React from "react";
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker
} from '@material-ui/pickers';
import "datepicker.css"

type Props = {
    time: (Date | null)
    setTime: (time: Date | null) => void;
}

const TimePicker: React.FC<Props> = (props: Props) => {
    const handleDateChange = (date: Date | null) => {
        props.setTime(date);
    };

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-around">
                <KeyboardTimePicker
                    margin="normal"
                    value={props.time}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change time',
                    }}
                />
            </Grid>
        </MuiPickersUtilsProvider>
    );
}
export default TimePicker;