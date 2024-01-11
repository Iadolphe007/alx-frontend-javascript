interface DirectorInterface {
  workFromHome(): string;
  gerCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }
  goToWork(): string {
    return 'Getting a coffe break';
  }
  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from Home';
  }
  getCoffeeBreak(): string {
    return 'cannot have a break';
  }
  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

function ceateEmployee(salary: string | number): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  } else {
    return new Director ();
  }
}

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee("$500"));

function isDirector(employee: Teacher | Director): boolean {
  return employee instanceof Director;
}
  
function executeWork(employee: Teacher | Director): string {
  if (employee instanceof Director) {
    return employee.workDirectorTasks();
  } else if (employee instanceof Teacher) {
    return employee.workTeacherTasks();
  }
}
