import "./CardList.css";
import CardContainer from "./CardContainer";

const CardList = (props) => {
  const { gamesList } = props;
  return (
    <div className="card-list">
      {gamesList.map((games, index) => {
        return <CardContainer key={index + 1} games={games} />;
      })}
    </div>
  );
};

export default CardList;
