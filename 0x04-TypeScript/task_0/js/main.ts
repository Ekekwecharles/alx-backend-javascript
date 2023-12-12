// Define the interface for a Student
interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}
  
// Create two students
const student1: Student = {
	firstName: "John",
	lastName: "Doe",
	age: 20,
	location: "New York",
};
  
const student2: Student = {
	firstName: "Jane",
	lastName: "Doe",
	age: 22,
	location: "San Francisco",
};
  
// Create an array named studentsList containing the two variables
const studentsList: Student[] = [student1, student2];
  
// Using Vanilla JavaScript, render a table and append a new row for each student

// Create a new HTML table element
const table = document.createElement("table");

// Create a new tbody (table body) element
const tbody = document.createElement("tbody");

// Iterate over each student in the studentsList array
studentsList.forEach((student) => {
  // For each student, insert a new row into the tbody
  const row = tbody.insertRow();

  // Insert two cells into the new row
  const cell1 = row.insertCell(0); // Cell for the first name
  const cell2 = row.insertCell(1); // Cell for the location

  // Set the content of the cells to the corresponding properties of the student
  cell1.textContent = student.firstName; // Set the content of the first cell to the first name
  cell2.textContent = student.location;  // Set the content of the second cell to the location
});

// Append the tbody to the table
table.appendChild(tbody);

// Append the table to the body of the HTML document
document.body.appendChild(table);
