import Calendar from "react-calendar";
import {useState} from "react";
import styled from 'styled-components';
import "react-calendar/dist/Calendar.css";
const ReactCalendar = () => {
    const [date, setDate] = useState(new Date());

    const onChange = date => {
        setDate(date);
    }
    return (
      <>
          <div className="flex items-center justify-center py-14 w-1/2  mx-auto rounded-full bg-gray-100">
              <div className="bg-white p-6 rounded-lg shadow-md">
                  <CalendarContainer>
                      <Calendar
                          className="border rounded-lg p-4 duration-1000"
                          onChange={onChange}
                          value={date}
                          defaultActiveStartDate={date}

                      />
                  </CalendarContainer>
              </div>
          </div>
      </>
  )
}

export default ReactCalendar;


const CalendarContainer = styled.div`
 
  /* ~~~ button styles ~~~ */

  button {
    margin: 3px;
    background-color: skyblue;
    border: 0;
    border-radius: 3px;
    color: white;
    padding: 5px 0;
    transition-duration: 500ms;

    &:hover {
      background-color: #16505d !important;
      color: crimson;
      
    }

    &:active {
      background-color: crimson !important;
    }
  }

  /* ~~~ label styles ~~~ */
  .react-calendar__month-view__weekdays {
    text-align: center;
    color: brown;
  }

  /* ~~~ day grid styles ~~~ */

  .react-calendar__month-view__days {
    display: grid !important;
    grid-template-columns: repeat(7, 14.2%);

    .react-calendar__tile {
      max-width: initial !important;
    }
  }
`;