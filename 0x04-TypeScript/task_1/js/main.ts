export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

export interface Directors extends Teacher {
  numberOfReports: number;
}

// Interface for the printTeacher function
export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implementation of the printTeacher function
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  const firstLetter = firstName.charAt(0).toUpperCase();
  const fullLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
  return `${firstLetter}. ${fullLastName}`;
};

// Define an interface for the constructor parameters
interface StudentConstructor {
  firstName: string;
  lastName: string;
}

// Define an interface for the class methods
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Implement the class
class StudentClass implements StudentClassInterface {
  private _firstName: string;
  private _lastName: string;

  // Constructor accepting parameters defined in the interface
  constructor({ firstName, lastName }: StudentConstructor) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  // Method to indicate that the student is currently working
  workOnHomework(): string {
    return "Currently working";
  }

  // Method to display the first name of the student
  displayName(): string {
    return this._firstName;
  }
}