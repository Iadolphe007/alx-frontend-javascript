export default function getStudentsByLocation(students, city) {
  const filterdlocation = students.filter((student) => student.location === city);
  return filterdlocation;
}
