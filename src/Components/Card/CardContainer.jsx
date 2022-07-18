import "./CardContainer.css";

const CardContainer = (props) => {
  const { genre, platform, editors_choice, score, title } = props.games;

  return (
    <div className="card-container">
      <h3 className="game-title"> {title}</h3>
      <div className="game-details">
        <p>
          <span className="genre">Genre</span>: {genre}
        </p>
        <p>
          <span className="platform">Platform</span>: {platform}
        </p>
        <p>
          <span className="editor">Editor Choice</span>: {editors_choice}
        </p>
        <p>
          <span className="score">Score</span>: {score}
        </p>
      </div>
    </div>
  );
};

export default CardContainer;

// editors_choice: "Y"
// genre: "Platformer"
// platform: "PlayStation Vita"
// score: 9
// title: "LittleBigPlanet PS Vita"
