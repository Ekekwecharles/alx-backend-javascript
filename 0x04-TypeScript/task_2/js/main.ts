// DirectorInterface interface
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// TeacherInterface interface
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Director class implementing DirectorInterface
class Director implements DirectorInterface {
  workFromHome() {
    return "Working from home";
  }

  getCoffeeBreak() {
    return "Getting a coffee break";
  }

  workDirectorTasks() {
    return "Getting to director tasks";
  }
}

// Teacher class implementing TeacherInterface
class Teacher implements TeacherInterface {
  workFromHome() {
    return "Cannot work from home";
  }

  getCoffeeBreak() {
    return "Cannot have a break";
  }

  workTeacherTasks() {
    return "Getting to work";
  }
}

// createEmployee function
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

// Function to check if an employee is a Director
function isDirector(employee: Director | Teacher): employee is Director {
  return employee instanceof Director;
}

// Function to execute work based on the employee type
function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    // If the employee is a Director, call workDirectorTasks
    return employee.workDirectorTasks();
  } else {
    // If the employee is a Teacher, call workTeacherTasks
    return employee.workTeacherTasks();
  }
}

// String literal type
type Subjects = 'Math' | 'History';

// Function using the string literal type
function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else if (todayClass === 'History') {
    return 'Teaching History';
  } 
}
