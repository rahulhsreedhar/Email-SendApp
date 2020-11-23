import React from 'react';
import { FormControl, TextField } from '@material-ui/core';
import './MailForm.css';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
         '& .MuiTextField-root': {
             margin: '10px',
          },
    },
}));

const MailForm = () => {
    const classes = useStyles();

    return (
        <div className="mail-container" >
            <header>
                <span>
                    Send New Email
                    </span>
            </header>
            <main>
                    <TextField className="field" required id="standard-required" error={1 === 1} label="To:" />
                    <TextField required id="standard-required" error={1 === 1} label="Subject:" />
                    <TextField required id="standard-required" error={1 === 1} label="Message:" />

            </main>


        </div>);
}

export default MailForm;