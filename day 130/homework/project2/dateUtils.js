export function getYear() {
  return new Date().getFullYear();
}

export function getMonth() {
  return new Date().getMonth() + 1;
}

export default function getDateString() {
  const year = getYear();
  const month = getMonth();
  return `${year},${month}`;
}
