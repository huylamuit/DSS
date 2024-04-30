import "./Result.css";

function Result({ result }) {
  return (
    <div>
      <div className="form-container">
        <h2>Kết quả</h2>
        {<div>{result}</div>}
        {result === 1 ? <div>Chết mẹ m rầu</div> : <div> hihi</div>}
      </div>
    </div>
  );
}

export default Result;
