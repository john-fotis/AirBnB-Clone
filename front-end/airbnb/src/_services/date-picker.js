import React, { useState } from 'react';
import Helmet from 'react-helmet';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

export const DatePicker = (props) => {
  const defaultProps = {
    numberOfMonths: 2,
  };

  const getInitialState = () => {
    setFrom(undefined)
    setTo(undefined)
  }

  const startDateHandler = (day) => {
    setFrom(day)
    // props.handleChange(props.startDate)
  }

  const endDateHandler = (day) => {
    setTo(day)
  }

  const handleResetClick = () => {
    getInitialState();
    console.log(from, to)
  }

  const [from, setFrom] = useState(undefined);
  const [to, setTo] = useState(undefined);

  const modifiers = { startDate: from, endDate: to };
  return (
    <div className="dropdown"
    style={{width: '85%'}}>
      <p>
        {!from && !to && (
          <span className="link">
            Select start date
          </span>)}
        {from && !to && (
          <span className="link">
            Select end date
          </span>)}
        {from &&
          to &&
          `${from.toLocaleDateString()}-${to.toLocaleDateString()}`}{' '}
        {from && to && (
          <button className="link" onClick={handleResetClick}>
            Reset
          </button>
        )}
      </p>
      <div className="dropdown-content">
        {!from && !to && (
          <DayPicker
            className="Selectable"
            numberOfMonths={defaultProps.numberOfMonths}
            selectedDays={[from, { from, to }]}
            modifiers={modifiers}
            onDayClick={startDateHandler}
            minDate = {new Date()}
            dateFormat = 'dd-MM-yyyy'
            />
        )}
        {from && !to && (
          <DayPicker
            className="Selectable"
            numberOfMonths={defaultProps.numberOfMonths}
            selectedDays={[from, { from, to }]}
            modifiers={modifiers}
            onDayClick={endDateHandler}
            minDate = {new Date()}
            dateFormat = 'dd-MM-yyyy'
          />
        )}
        {from && to && (
          <DayPicker
            className="Selectable"
            numberOfMonths={defaultProps.numberOfMonths}
            selectedDays={[from, { from, to }]}
            modifiers={modifiers}
            onDayClick={startDateHandler}
            minDate = {new Date()}
            dateFormat = 'dd-MM-yyyy'
          />
        )}
      </div>

      <Helmet>
        <style>{`
          .Selectable .DayPicker-Day--selected:not(.DayPicker-Day--startDate):not(.DayPicker-Day--endDate):not(.DayPicker-Day--outside) {
            background-color: #f0f8ff !important;
            color: #4a90e2;
          }
          .Selectable .DayPicker-Day {
            border-radius: 0 !important;
          }
          .Selectable .DayPicker-Months {
            flex-direction: row;
            flex-wrap: nowrap;
          }
          .Selectable .DayPicker-Day--startDate {
            border-top-left-radius: 50% !important;
            border-bottom-left-radius: 50% !important;
          }
          .Selectable .DayPicker-Day--endDate {
            border-top-right-radius: 50% !important;
            border-bottom-right-radius: 50% !important;
          }
        `}</style>
      </Helmet>
    </div>
  );

}