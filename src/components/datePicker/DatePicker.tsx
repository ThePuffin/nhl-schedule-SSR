import React from 'react';
import moment from 'moment';

export default function Selector() {
  const userFormat = 'DD MM YYYY';
  const dataFormat = 'YYYY-MM-DD';
  const year = new Date().getFullYear();
  const now = moment();
  const startDate = moment().format(dataFormat);
  const endDate = moment(startDate).add(1, 'day').format(dataFormat);

  const endSeason =
    now.isAfter(moment(`${year} 06 30`)) && now.isBefore(moment(`${year + 1} 01 01`))
      ? moment(`${year + 1} 06 30 `).format(dataFormat)
      : moment(`${year} 06 30 `).format(dataFormat);
  console.log(endSeason);

  return (
    <div className="App">
      <p>
        <input type="date" id="datepicker" min={startDate} max={endSeason} />
        <input type="date" id="datepicker" min={endDate} max={endSeason} />
      </p>
    </div>
  );
}
