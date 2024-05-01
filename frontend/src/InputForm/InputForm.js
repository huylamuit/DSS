import { useState } from "react";
import "./InputForm.css";
import axios from "axios";
function InputForm({ setResult, setInput }) {
  const [data, setData] = useState({
    Pregnancies: 0,
    Glucose: 0,
    BloodPressure: 0,
    SkinThickness: 0,
    Insulin: 0,
    BMI: 0,
    DPF: 0,
    Age: 0,
  });
  const handleSubmit = async (event) => {
    console.log(data);
    setInput(data);
    event.preventDefault();
    const url = "https://dss-backend-pm83.onrender.com/predict";
    // const url = "http://127.0.0.1:5000/predict";
    const response = await axios.post(url, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response.data);
    setResult(response.data);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  return (
    <div className="form-container">
      <h2>Nhập số liệu</h2>
      <form>
        <table className="cinereousTable">
          <tbody>
            <tr>
              <td>
                <input
                  className="form-input"
                  type="number"
                  placeholder="Pregnancies"
                  name="Pregnancies"
                  onChange={handleChange}
                ></input>
              </td>
              <td>
                <input
                  className="form-input"
                  type="number"
                  placeholder="Glucose"
                  name="Glucose"
                  onChange={handleChange}
                ></input>
              </td>
            </tr>
            <tr>
              <td>
                <input
                  className="form-input"
                  type="number"
                  placeholder="Blood Pressure"
                  name="BloodPressure"
                  onChange={handleChange}
                ></input>
              </td>
              <td>
                <input
                  className="form-input"
                  type="number"
                  placeholder="Skin Thickness"
                  name="SkinThickness"
                  onChange={handleChange}
                ></input>
              </td>
            </tr>
            <tr>
              <td>
                <input
                  className="form-input"
                  type="number"
                  placeholder="Insulin"
                  name="Insulin"
                  onChange={handleChange}
                ></input>
              </td>
              <td>
                <input
                  className="form-input"
                  type="number"
                  placeholder="BMI"
                  name="BMI"
                  onChange={handleChange}
                ></input>
              </td>
            </tr>
            <tr>
              <td>
                <input
                  className="form-input"
                  type="number"
                  placeholder="Diabates Pedigree Fun"
                  name="DPF"
                  onChange={handleChange}
                ></input>
              </td>
              <td>
                <input
                  className="form-input"
                  type="number"
                  placeholder="Age"
                  name="Age"
                  onChange={handleChange}
                ></input>
              </td>
            </tr>
          </tbody>
        </table>
        <button className="btn-submit" onClick={handleSubmit}>
          Tính toán
        </button>
      </form>
    </div>
  );
}

export default InputForm;
