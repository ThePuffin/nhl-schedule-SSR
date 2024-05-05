import React, { useState } from 'react';
import Selector from './selector/selector';
import DatePicker from '../datePicker/DatePicker';
import './Body.css';
import moment from 'moment';

export default function Body({ allTeams }) {
  const maxVisible = 5;
  const [teams, setTeams] = useState(allTeams);
  const teamsSelectedIds = teams
    .map((team, id) => {
      if (id < maxVisible) {
        return team.id;
      }
    })
    .filter((t) => t);

  return (
    <>
      <div>
        <DatePicker />
        <div className="grid">
          {teamsSelectedIds.map((teamId, index) => (
            <div className="col s3 m2">
              <div className="visible-selector" id={teamId}>
                <Selector
                  // handleChangeTeam={this.handleChangeTeam}
                  index={index}
                  teams={teams}
                  teamIds={teamsSelectedIds}
                />
                <p>ici la liste des matchs</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
