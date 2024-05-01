import "./Positive.css";
function Positive() {
  return (
    <div>
      <h2 className="positive-title">
        <b>Bạn đã mắc tiểu đường loại 2</b>
      </h2>
      <div className="positive-result">
        <h5>
          Sau đây là một số lời khuyên dành cho bạn theo khuyến nghị của W.H.O:
        </h5>
        <table class="suggest-table">
          <tbody>
            <tr>
              <td>Kiểm tra định kì</td>
              <td>
                Kiểm tra mức đường huyết và gặp bác sĩ để được hướng dẫn thêm.
              </td>
            </tr>
            <tr>
              <td>Kiểm soát đường huyết</td>
              <td>
                Duy trì mức đường huyết trước bữa ăn: 80 đến 130 mg/dL (4,4 đến
                7,2 mmol/L). Hai giờ sau khi bắt đầu bữa ăn: Dưới 180 mg/dL (10
                mmol/L).
              </td>
            </tr>
            <tr>
              <td>Tuân theo đơn thuốc từ bác sĩ</td>
              <td>
                Nên tuân theo đơn thuốc của bác sĩ và uống thuốc đúng giờ và làm
                theo những hướng dẫn khác.
              </td>
            </tr>
            <tr>
              <td>Tập thể dục thường xuyên</td>
              <td>
                Đặt mục tiêu hoạt động thể chất với cường độ vừa phải ít nhất
                150 phút mỗi tuần. Chia nó thành 30 phút, năm lần một tuần.
              </td>
            </tr>
            <tr>
              <td>Tránh ăn các thực phẩm carbohydrates xấu cho cơ thể</td>
              <td>
                Ăn ít muối và cẩn thận với thịt đỏ và thịt chế biến sẵn. Uống
                rượu một cách hợp lý và thông minh với đồ ăn nhẹ và tránh hút
                thuốc.
              </td>
            </tr>
            <tr>
              <td>Chọn các loại thực phẩm tốt cho sức khỏe</td>
              <td>
                Bắt đầu ăn nhiều trái cây, rau quả và các sản phẩm từ sữa như
                sữa chua và sữa không đường. Chúng ta cần năng lượng, vì vậy hãy
                chọn những chất béo lành mạnh hơn như bơ sữa trâu, bơ, mỡ lợn,
                bánh quy, bánh ngọt, bánh nướng và bánh ngọt.
              </td>
            </tr>
            <tr>
              <td>Cắt giảm lượng đường bổ sung</td>
              <td>
                Việc cắt bỏ đường có thể thực sự khó khăn, vì vậy thay vào đó
                hãy sử dụng chất làm ngọt có hàm lượng calo thấp hoặc không có
                calo để bắt đầu.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Positive;
