import axios from "axios";

const host = "http://localhost:5000";
export const createSchedule = () => {
  let data = {
    title: "일정",
    content: "아아아아ㅏ아ㅏ아아아",
    startDate: "2019-10-03",
    endDate: "2019-10-04",
    planType: 1
  };
  axios
    .post(host + "/schedule", data, {})
    .then(res => {
      console.log(res);
    })
    .catch(error => {
      console.log("failed", error);
    });
};
export const getTable = () => {
  axios.get(host + "/schedule", {});
};
