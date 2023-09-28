import Players from './Players';
import Player from './assets/Player';

const PlayerList = () => {
  return (
    <div className="flex w-[100%] max-w-[1040px] mx-auto my-[100px]">
      {Players.map((player) => (
        <Player
          key={player.name}
          image={player.imageUrl}
          name={player.name}
          nationality={player.nationality}
          age={player.age}
          jerseyNumber={player.jerseyNumber}
        />
      ))}
    </div>
  );
};

export default PlayerList;
