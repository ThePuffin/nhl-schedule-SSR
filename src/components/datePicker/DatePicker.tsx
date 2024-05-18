import React from 'react';
import moment from 'moment';

export default function Selector({ startDate, endDate }) {
  const userFormat = 'DD MM YYYY';
  const dataFormat = 'YYYY-MM-DD';
  const year = new Date().getFullYear();
  const now = moment();

  let beginingDate;
  let finishingDate;

  const endSeason =
    now.isAfter(moment(`${year} 06 30`)) && now.isBefore(moment(`${year + 1} 01 01`))
      ? moment(`${year + 1} 06 30 `).format(dataFormat)
      : moment(`${year} 06 30 `).format(dataFormat);

  const changeDate = (target) => {
    if (target.id === 'startDatePicker') {
      beginingDate = target.value;
    } else {
      finishingDate = target.value;
    }
    if (beginingDate > finishingDate) {
      finishingDate = moment(beginingDate).add(1, 'week').format(dataFormat);
    }
  };

  return (
    <div>
      <input
        type="date"
        onChange={(e) => changeDate(e.target)}
        id="startDatePicker"
        min={startDate}
        max={endSeason}
        name="trip-start"
      />
      <input
        type="date"
        onChange={(e) => changeDate(e.target)}
        id="endDatePicker"
        min={startDate}
        max={endSeason}
        name="trip-end"
      />
      <input type="submit" value="Ok" onClick={() => console.log(beginingDate, finishingDate)} />
    </div>
  );
}
