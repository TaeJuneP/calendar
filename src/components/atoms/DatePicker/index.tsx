import React from "react";
import DateFnsUtils from '@date-io/date-fns';
import Grid from '@material-ui/core/Grid';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import "datepicker.css"

type Props = {
    date: Date | null;
    setDate: (date: Date | null) => void;
}

const DatePicker: React.FC<Props> = (props: Props) => {
    
    const handleDateChange = (date: Date | null) => {
        props.setDate(date);
    };

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-around">
                <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    value={props.date}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />  </Grid>
        </MuiPickersUtilsProvider>
    );
}


export default DatePicker;