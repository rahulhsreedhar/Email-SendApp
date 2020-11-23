import React, { useState } from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField, Icon } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import DeleteIcon from '@material-ui/icons/Delete';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  buttonSend: {
    margin: theme.spacing(1),
    backgroundColor: '#cb203f'
  },
  buttonReset: {
    margin: theme.spacing(1),
    backgroundColor: '#1073ae'
  },
  fields: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '30px'
  },
  spinner: {
    '& .MuiCircularProgress-root': {

      color: '#4344ac !important'
    },
    margin: '2% 0',
    textAlign: "center"


  }
}));
function App() {
  React.useEffect(() => {
    checkSendDisable();
  });
  const classes = useStyles();
  const [emailError, setEmailError] = useState(false);
  const [email, setEmail] = useState('');
  const [subjectError, setSubjectError] = useState(false);
  const [subject, setSubject] = useState('');
  const [messageError, setMessageError] = useState(false);
  const [message, setMessage] = useState('');
  const [sendDisable, setSendDisable] = useState(true);
  const [showSpinner, setShowSpinner] = useState(false);
  const [showMailSend, setShowMailSend] = useState(false);


  const checkEmail = () => {
    const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    const val = pattern.test(email);
    setEmailError(!val);
  }
  const checkSubject = () => {
    setSubjectError(subject ? false : true);
  }
  const checkMessage = () => {
    setMessageError(message ? false : true);
  }
  const reset = () => {
    setEmail('');
    setMessage('');
    setSubject('');

  }

  const sendMail = () => {

    setShowSpinner(true);

    setTimeout(() => { setShowSpinner(false) }, 3000);

    setTimeout(() => { setShowMailSend(true) }, 3001);
    setTimeout(() => { setShowMailSend(false) }, 8000);
    setTimeout(() => { reset() }, 8001);
  }

  const checkSendDisable = () => {

    if (email && subject && message && !emailError) { setSendDisable(false); }
    else { setSendDisable(true); }
  }
  return (
    <div className="app">
      <div className="mail-container">
        <header>
          <span>
            Send New Email
                    </span>
        </header>
        <main>
          <div className={classes.fields}>

            <TextField
              required
              onChange={e => setEmail(e.target.value)}
              error={emailError}
              value={email}
              label="To:"
              onBlur={checkEmail} />

            <TextField
              required
              error={subjectError}
              value={subject}
              onChange={e => setSubject(e.target.value)}
              onBlur={checkSubject}
              label="Subject:" />


            <TextField required
              error={messageError}
              value={message}
              onBlur={checkMessage}
              onChange={e => setMessage(e.target.value)}
              label="Message:" />


          </div>
          <div hidden={!showSpinner} className={classes.spinner}  >  <CircularProgress /></div>
          <div hidden={!showMailSend} className="mailImage">
            <img src="/sendImage.gif" />
          </div>
          <div className="actions">
            <Button
              variant="contained"
              color="primary"
              disabled={sendDisable}
              className={classes.buttonSend}
              onClick={sendMail}
              endIcon={<SendIcon />}
            >
              Send
      </Button>
            <Button
              onClick={reset}
              variant="contained"
              color="primary"
              className={classes.buttonReset}
              endIcon={<DeleteIcon />}
            >
              Reset
      </Button>
          </div>

        </main>


      </div>
    </div>);
}

export default App;
