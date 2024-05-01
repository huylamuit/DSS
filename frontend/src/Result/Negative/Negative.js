import { Bar } from "react-chartjs-2";
import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);
import "./Negative.css";
function Negative({ input }) {
  const positive = [141.25, 70.82, 22.16, 100.33, 35.14];
  const negative = [109.98, 68.18, 19.66, 68.79, 30.3];
  const [inputData, setInputData] = useState([]);
  const labels = [
    "Glucose",
    "BloodPressure",
    "SkinThickness",
    "Insulin",
    "BMI",
  ];
  useEffect(() => {
    console.log("inp", input);
    let data = [];
    labels.map((label) => {
      data.push(parseFloat(input[label]));
    });

    console.log("data", data);
    setInputData(data);
  }, [input]);
  return (
    <div>
      <h2 className="negative-title">
        <b>Bạn không mắc tiểu đường loại 2</b>
      </h2>
      <div className="negative-result">
        <h5>Sau đây là biểu đồ thống kê chỉ số của bạn:</h5>
        <Bar
          datasetIdKey="id"
          data={{
            labels: labels,
            datasets: [
              {
                id: 1,
                label: "Non Diabetic",
                data: negative,
              },
              {
                id: 2,
                label: "Your level",
                data: inputData,
              },
              {
                id: 3,
                label: "Diabetic",
                data: positive,
              },
            ],
          }}
        />
      </div>
    </div>
  );
}

export default Negative;
