import moment from "moment";

const formatTime = (time?: number, format = "DD/MM/yyyy") => {
  if (!time) {
    return "--";
  }
  return moment(time).format(format);
};

export { formatTime };
