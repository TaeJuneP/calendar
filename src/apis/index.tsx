import axios from "axios";

const host = "http://localhost:5000";
const createScheduleURL = host + "/schedule/createSchedule";
const getScheduleURL = host + "/schedule/getSchedule/"
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

export const getSchedule = async (data: string) => {
  let schedule;
  await axios.get(getScheduleURL + data).then(
    res => { schedule = res.data }
  )
    .catch(error => {
      console.log("failed", error);
    });
  console.log(schedule)
  return schedule
};
