import moment from 'moment';
import React from 'react';
import { ScheduleMeeting } from 'react-schedule-meeting';
import styles from './BookingCalender.module.scss';

const BookingCalender = () => {
  const availableTimeslots = [0, 1, 2, 3, 4, 5].map((id) => {
    return {
      id,
      startTime: new Date(new Date(new Date().setDate(new Date().getDate() + id)).setHours(9, 0, 0, 0)),
      endTime: new Date(new Date(new Date().setDate(new Date().getDate() + id)).setHours(17, 0, 0, 0)),
    };
  });
  return (
    <div className={`${styles.calender_wrap} col-8 mx-auto`}>
      <ScheduleMeeting
        borderRadius={10}
        primaryColor="#005C65"
        eventDurationInMinutes={30}
        availableTimeslots={availableTimeslots}
        onStartTimeSelect={console.log}
      />
    </div>
  )
}

export default BookingCalender
