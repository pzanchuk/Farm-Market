import React from "react";
import Day from "./Day";

const marketSchedule = [
 {
    day: "Sunday",
    location: "Lents International",
    hours: "9:00am - 2:00pm",
    booth: "4A"
 },
 {
    day: "Monday",
    location: "Pioneer Courthouse Square",
    hours: "10:00am - 2:00pm",
    booth: "7C"
 },
 {
    day: "Tuesday",
    location: "Hillsboro",
    hours: "5:00pm - 8:30pm",
    booth: "1F"
 },
 {
    day: "Wednesday",
    location: "Shemanski Park",
    hours: "10:00am - 2:00pm",
    booth: "3E"
 },
 {
    day: "Thursday",
    location: "Northwest Portland",
    hours: "2:00pm - 6:00pm",
    booth: "6D"
 },
 {
    day: "Saturday",
    location: "Beaverton",
    hours: "10:00am - 1:30pm",
    booth: "9G"
 }
];

function Days(){
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th>fdfdfdfdfdfd</th>
            <th>Sunday</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Saturday</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>location</th>
            {marketSchedule.map((day, index) =>
              <td>
              <Day location={day.location}
                key={index}/>
              </td>
            )}
          </tr>
          <tr>
            <th>hours</th>
            {marketSchedule.map((day, index) =>
              <td>
              <Day hours={day.hours}
                key={index}/>
              </td>
            )}
          </tr>
          <tr>
            <th>booth</th>
            {marketSchedule.map((day, index) =>
              <td>
              <Day booth={day.booth}
                key={index}/>
              </td>
            )}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Days;
