let studentID: number = 1234;
let studentName: string = "Tech Park";
let age: number = 21;
let gender: string = "mail";
let subject: string = "Typescript";
let coursecomplete: boolean = false;

//
// Enum
enum GenderType {
  Male = "male",
  Female = "female",
  genderNeutral = "genderNeutral",
}
//
let student1: Student = {
  studentID: 1234,
  studentName: "Tech Park",
  age: 21,
  gender: GenderType.Male,
  subject: "Typescript",
  coursecomplete: false,
};
//
interface Student {
  studentID: number;
  studentName: string;
  age: number;
  gender: GenderType;
  //
  // Literal Type
  subject: "Typescript" | "Javascript" | "Graphql" | "Express";
  coursecomplete: boolean;
  addComment?(comment: string): string;
  addReview?: (review: string) => string;
}

function getStudentDetails(studentID: number): Student {
  return {
    studentID: 1234,
    studentName: "Tech Park",
    age: 21,
    gender: GenderType.Male,
    subject: "Typescript",
    coursecomplete: false,
  };
}

function saveStudentDetails(student: Student): void {}

saveStudentDetails(student1);

let unionType: number | string = 5;

//
//type aliases
type StrOrNum = number | string;
let totalCost: number;
let orderID: StrOrNum;

const calculateTotalCost = (price: StrOrNum, qty: number): void => {};

interface Customer {
  customerID: StrOrNum;
  name: string;
}

const findOrderID = (customer: Customer, productID: StrOrNum): void => {};

let itemPrice: number;

//
//type gaurd
const setItemPrice = (price: StrOrNum): void => {
  if (typeof price === "string") {
    itemPrice = 0;
  } else {
    itemPrice = price;
  }
};

//
// Function type + Optional Prameter ? + Default Parameter
// void : the return value of functions which don’t return a value.
// if no parameter
// optional parameter -> undefiend
// default parameter -> default

function sendGreeting(message: string = "Bye", userName?: string): void {
  console.log(`${message}, ${userName}`);
}

sendGreeting();
sendGreeting("Hello");
sendGreeting("Hello", "tech");

const sendHello = (message: string = "Bye", userName?: string): void => {
  console.log(`${message}, ${userName}`);
};

sendHello();
sendHello("Hello");
sendHello("Hello", "tech");
// any[]
// Array<T>
// Tuple

//
// Object Oriented Programming
// Class
//
// Constructor

class Employee {
  // property
  private _fullName: string;
  private age: number;
  private jobTitle: string;
  private hourlyRate: number;
  private workingHoursPerWeek: number;

  constructor(
    fullName: string,
    age: number,
    jobTitle: string,
    workingHoursPerWeek: number,
    hourlyRate?: number
  ) {
    this._fullName = fullName;
    this.age = age;
    this.jobTitle = jobTitle;
    this.workingHoursPerWeek = workingHoursPerWeek;
    this.hourlyRate = hourlyRate;
  }

  get fullName() {
    return this._fullName;
  }
  set fullName(value: string) {
    this._fullName = value;
  }

  // method
  printEmployeeDetails = (): void => {
    console.log(
      `${this._fullName}의 직업은 ${this.jobTitle}이고 일주일의 수입은${
        this.hourlyRate * this.workingHoursPerWeek
      }원입니다. ${this.age}`
    );
  };
}

let employ1 = new Employee("tech", 34, "Developer", 20, 100);

console.log(employ1);

//
// Access Modifiers
// 1. Public*
// 2. Private*
// 3. Protected

//
// Getterr + Setter
