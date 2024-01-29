export function getTime(timeString: string) {
  const date = new Date(new Date(timeString).getTime() + -540 * 60 * 1000);

  const year = String(date.getFullYear());
  const month = String(date.getMonth() + 1);
  const day = String(date.getDate());

  const trimMonth = month.length == 1 ? ` ${month}` : month;
  const trimday = month.length == 1 ? ` ${day}` : day;
  return `${year}.${trimMonth}.${trimday}`;
}

export function getTimeByNow(timeString: string) {
  const date = new Date(new Date(timeString).getTime());
  const now = new Date();

  const milliSeconds = Number(now) - Number(date);

  const seconds = milliSeconds / 1000;

  if (seconds < 60) return `방금 전`;
  const minutes = seconds / 60;
  if (minutes < 60) return `${Math.floor(minutes)}분 전`;
  const hours = minutes / 60;
  if (hours < 24) return `${Math.floor(hours)}시간 전`;
  const days = hours / 24;
  if (days < 7) return `${Math.floor(days)}일 전`;

  return getTime(timeString);
}

export function getTimeH(timeString: string) {
  const date = new Date(new Date(timeString).getTime() + -540 * 60 * 1000);

  const year = String(date.getFullYear());
  const month = String(date.getMonth() + 1);
  const day = String(date.getDate());
  const hour = String(date.getHours());
  const minute = String(date.getMinutes());

  const trimMonth = month.length == 1 ? ` ${month}` : month;
  const trimday = month.length == 1 ? ` ${day}` : day;

  return `${year}.${trimMonth}.${trimday} ${hour}:${minute}`;
}

export default {};
