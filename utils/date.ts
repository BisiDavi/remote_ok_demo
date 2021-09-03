function diffTimeFn(time, period) {
  let diff = Math.ceil(time / (1000 * 60 * 60 * period));
  return diff;
}

export function PostJobAt(date) {
  let result;
  const formattedDate: any = new Date(date);
  const presentDate: any = new Date();
  const diffTime = Math.abs(presentDate - formattedDate);
  const diffHours = diffTimeFn(diffTime, 1);
  const diffDays = diffTimeFn(diffTime, 24);
  const diffWeeks = diffTimeFn(diffTime, 24 * 7);
  const diffMonths = diffTimeFn(diffTime, 24 * 30);
  const diffYears = diffTimeFn(diffTime, 24 * 30 * 12);

  if (diffDays < 2) {
    result = diffHours;
    return `${result} h`;
  } else if (diffDays < 7) {
    result = diffDays;
    return `${result} d`;
  } else if (diffDays > 7) {
    result = diffWeeks;
    return `${result} w`;
  } else if (diffWeeks > 4) {
    result = diffMonths;
    return `${result} m`;
  } else if (diffMonths > 12) {
    result = diffYears;
    return `${result} y`;
  } else {
    result = diffYears;
    return `${result} y`;
  }
}
