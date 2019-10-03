import axios from "axios";

const host = "http://localhost:5000";
const createScheduleURL = host + "/schedule";
export const createSchedule = (title: string, content: string, start: string, end: string) => {
  let data = {
    title: title,
    content: content,
    startDate: start,
    endDate: end,
    planType: 1
  };
  axios
    .post(createScheduleURL, data, {})
    .then(res => {
      console.log(res);
    })
    .catch(error => {
      console.log("failed", error);
    });
};

export const getSchedule = () => {
  axios.get(host + "/schedule", {});
};
