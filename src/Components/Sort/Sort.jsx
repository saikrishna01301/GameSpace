import "./Sort.css";
import { ReactComponent as ArrowUp } from "../../assets/arrow-up.svg";
import { ReactComponent as ArrowDown } from "../../assets/arrow-down.svg";
const Sort = (props) => {
  return (
    <div className="arrow-container">
      <div>Games list</div>
      <div className="arrow-container-main">
        <p>SORT</p>
        <ArrowUp className="arrow" onClick={props.onArrowUpClickHandler} />
        <ArrowDown className="arrow" onClick={props.onArrowDownClickHandler} />
      </div>
    </div>
  );
};

export default Sort;
