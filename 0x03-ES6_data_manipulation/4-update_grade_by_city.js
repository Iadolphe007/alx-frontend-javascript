export default function updateStudentGradeByCity(studentsList, city, newGrades) {
  const studentsInCity = studentsList.filter((student) => student.location === city);
  const updatedStudents = studentsInCity.map((student) => {
    const matchingGrade = newGrades.find((grade) => grade.studentId === student.id);
    const grade = matchingGrade ? matchingGrade.grade : 'N/A';
    return {
      ...student,
      grade,
    };
  });
  return updatedStudents;
}
