import './cardSchedule.css';
import './colorsTeam.css';

const CardSchedule = (props) => {
  const data = props.teamDate ? props.teamDate : props.gameDate;
  let hideDate = props.hideDate;
  let dateSelected = props.dateSelected;

  if (props.teamDate) {
    return (
      <div
        className={
          data.arenaName && data.show
            ? data.selectedTeam
              ? `card t${data.homeTeamId}`
              : `card awayGame`
            : 'card unclickable'
        }
      >
        <div className={dateSelected >= 0 ? 'selected' : ''}>
          <div className={data.show ? 'ext-box' : 'whiteCard'}>
            <div>
              <p className={hideDate ? 'cardText hideDate' : 'cardText'}>
                {new Date(data.gameDate).toISOString().split('T')[0]}
              </p>
            </div>
            <h4 className="cardText">{data.awayTeamShort}</h4>
            <p className="cardText vs">vs</p>
            <h4 className="cardText">{data.homeTeamShort}</h4>
            <p className="cardText arena"> {data.arenaName}</p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="card cardDate">
        <div className="ext-box">
          <p className="cardText">{data} </p>
          <h3 className="cardText">{data}</h3>
          <br />
        </div>
      </div>
    );
  }
};
export default CardSchedule;
