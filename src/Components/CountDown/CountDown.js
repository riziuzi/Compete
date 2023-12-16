import React, { useState, useEffect } from 'react'
import SettingsModal from './SettingsModal';
import Timer from './Timer';
import moment from 'moment';
import getCountdownDate from './counter_utils/getCountdownDate'

export default function CountDown() {
  const initialCountdownSettings = {
    eventNameValue: '',
    dateValue: '',
    timeValue: '',
    ampmValue: 'am'
  };
  
  // const event_dict = { "eventNameValue": "Owow", "dateValue": "12-17-2023", "timeValue": "12:30", "ampmValue": "am", "unixEndDate": 1702753200, "eventName": "Owow" }
  const event_dict = { "dateValue": "12-17-2023", "timeValue": "12:30", "ampmValue": "am", "eventName": "UPSC Mains" }
  event_dict["unixEndDate"] = Number(moment(`${event_dict.dateValue} ${event_dict.timeValue} ${event_dict.ampmValue}`, 'MM-DD-YYYY hh:mm A').format('X'));
  const [countdownSettings, setCountdownSettings] = useState({ ...event_dict });
  const [countdownTimer, setCountdownTimer] = useState(null);
  const [countdownInfoMessage, setCountdownInfoMessage] = useState('');
  const [modalVisibility, setModalVisibility] = useState(false);

  // useEffect(()=>{
  //   console.log(countdownSettings)
  // },[])
  useEffect(() => {
    if (!countdownSettings.unixEndDate) setCountdownInfoMessage('Click the Settings button to start a new countdown.');

    window.addEventListener('click', event => {
      if (event.target.id === 'modal') setModalVisibility(false);
    });

    window.addEventListener('keydown', event => {
      if (modalVisibility && event.key === 'Escape') setModalVisibility(false);
    });

    modalVisibility ? document.querySelector('body').classList.add('modal-open') : document.querySelector('body').classList.remove('modal-open');
  }, [modalVisibility]);

  useEffect(() => {
    let timer = null;

    if (countdownSettings.unixEndDate) {
      timer = setInterval(() => playTimer(countdownSettings.unixEndDate), 1000);
    }
    getCountdownDate(countdownSettings);

    return () => {
      clearInterval(timer);
      timer = null;
    }
  }, [countdownSettings.unixEndDate, countdownSettings.eventName]);

  useEffect(() => {
    setCountdownSettings(getCountdownDate());
  }, [modalVisibility]);

  function playTimer(currentUnixEndDate) {
    const distance = currentUnixEndDate - moment().format('X');

    if (distance > 0) {
      setCountdownTimer({
        days: parseInt(distance / (60 * 60 * 24), 10),
        hours: parseInt(distance % (60 * 60 * 24) / (60 * 60), 10),
        mins: parseInt(distance % (60 * 60) / (60), 10),
        secs: parseInt(distance % 60, 10)
      });
      setCountdownInfoMessage('');
    }
    else {
      setCountdownInfoMessage('Countdown ended. Click the Settings button to start a new countdown.');
      setCountdownSettings({ ...initialCountdownSettings });
      setCountdownTimer(null);
    }
  }

  function clearCountdown() {

    if (!countdownSettings.unixEndDate) {
      alert('No countdown has been set. Please click the Settings button to start a new countdown.');
    }
    else {

      if (true) {
        setCountdownInfoMessage('Countdown cleared. Click the Settings button to start a new countdown.');
        setCountdownSettings({ ...initialCountdownSettings });
        setCountdownTimer(null);
      }
    }
  }
  // useEffect(()=>{
  //   console.log(modalVisibility)
  // }, [modalVisibility])
  return (
    <>
      <header>
        <h1 className="header-item">Countdown Timer</h1>
        <div className="button-group header-item">
          <button type="button" className="button header-button clear" onClick={() => clearCountdown()}>Clear</button>
          <button type="button" className="button header-button settings" onClick={() => setModalVisibility(true)}>Settings</button>
        </div>
      </header>
      <div>
        {modalVisibility && <SettingsModal setModalVisibility={setModalVisibility} countdownSettings={countdownSettings} setCountdownSettings={setCountdownSettings} />}
        {countdownSettings.unixEndDate && !countdownTimer ? "<LoadingSpinner />" : countdownTimer ? <Timer countdownTimer={countdownTimer} unixEndDate={countdownSettings.unixEndDate} eventName={countdownSettings.eventName} /> : " <InfoMessage messageText={countdownInfoMessage} />"}
      </div>
    </>
  )
}
