import moment from "moment";

export const JobPostedAt = date => {
  const currentDate: any = moment();
  const postDate: any = moment(date);

  const getYearsPosted = currentDate.diff(postDate, "years");
  const getMonthPosted = currentDate.diff(postDate, "months");
  const getWeeksPosted = currentDate.diff(postDate, "weeks");
  const getDaysPosted = currentDate.diff(postDate, "days");
  const getHoursPosted = currentDate.diff(postDate, "hours");

  if (getHoursPosted > 0 && getHoursPosted < 24) {
    return `${getHoursPosted} h`;
  } else if (getHoursPosted > 24 && getHoursPosted < 168) {
    return `${getDaysPosted} d`;
  } else if (getHoursPosted > 168 && getHoursPosted < 730) {
    return `${getWeeksPosted} w`;
  } else if (getHoursPosted > 730 && getHoursPosted < 8760) {
    return `${getMonthPosted} mo`;
  } else {
    return `${getYearsPosted} y`;
  }
};
