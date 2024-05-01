import "./Result.css";
import Positive from "./Positive/Positive";
import Negative from "./Negative/Negative";
function Result({ result, data }) {
  return (
    <div>
      <div className="form-container">
        <h2>Kết quả</h2>
        {result === 1 ? <Positive /> : <Negative input={data} />}
      </div>
    </div>
  );
}

export default Result;
