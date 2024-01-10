interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "Detroit",
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location:"Vermont"
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement("table");

studentsList.forEach((student) => {
  const row = table.insertRow();
  const firstNameRow = row.insertCell(0);
  const locationRow = row.insertCell(1);

  firstNameRow.textContent = student.firstName;
  locationRow.textContent = student.location;
});
document.body.appendChild(table);