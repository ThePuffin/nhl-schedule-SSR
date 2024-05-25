import React, { useState } from 'react';
import Selector from './selector/selector';
import currentSeason from '../../temporaryData/currentSeason.json'

import './Body.css';

export default function Body(props) {
  const maxVisible = 5;
  const { allTeams } = props;
  const [teams = [], setTeams = []] = useState(allTeams);
  const teamsSelectedIds = teams
    .map((team, id) => {
      if (id < maxVisible) {
        return team.id;
      }
    })
    .filter((t) => t);
  const teamsGames = teamsSelectedIds.map((teamSelected)=>{
    return currentSeason[teamSelected]
  })
  console.log('iciiii', teamsGames[0]);
  


  return (
    <>
      <div>
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
