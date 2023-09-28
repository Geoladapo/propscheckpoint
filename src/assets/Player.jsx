import PropTypes from 'prop-types';

function Player({ image, name, nationality, age, jerseyNumber }) {
  return (
    <div className="m-[20px] shadow-lg ">
      <img src={image} alt={name} />
      <div className="px-4 mt-4">
        <h3 className="font-bold">{name}</h3>
        <p>Jersey Number: {jerseyNumber}</p>
        <p>Nationality: {nationality}</p>
        <p>Age: {age}</p>
      </div>
    </div>
  );
}

Player.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  nationality: PropTypes.string,
  age: PropTypes.number,
  jerseyNumber: PropTypes.number,
};

export default Player;
