var studentID = 1234;
var studentName = "Tech Park";
var age = 21;
var gender = "mail";
var subject = "Typescript";
var coursecomplete = false;
//
// Enum
var GenderType;
(function (GenderType) {
    GenderType["Male"] = "male";
    GenderType["Female"] = "female";
    GenderType["genderNeutral"] = "genderNeutral";
})(GenderType || (GenderType = {}));
//
var student1 = {
    studentID: 1234,
    studentName: "Tech Park",
    age: 21,
    gender: GenderType.Male,
    subject: "Typescript",
    coursecomplete: false
};
function getStudentDetails(studentID) {
    return {
        studentID: 1234,
        studentName: "Tech Park",
        age: 21,
        gender: GenderType.Male,
        subject: "Typescript",
        coursecomplete: false
    };
}
function saveStudentDetails(student) { }
saveStudentDetails(student1);
var unionType = 5;
var totalCost;
var orderID;
var calculateTotalCost = function (price, qty) { };
var findOrderID = function (customer, productID) { };
var itemPrice;
//
//type gaurd
var setItemPrice = function (price) {
    if (typeof price === "string") {
        itemPrice = 0;
    }
    else {
        itemPrice = price;
    }
};
//
// Function type + Optional Prameter ? + Default Parameter
// void : the return value of functions which don’t return a value.
// if no parameter
// optional parameter -> undefiend
// default parameter -> default
function sendGreeting(message, userName) {
    if (message === void 0) { message = "Bye"; }
    console.log("".concat(message, ", ").concat(userName));
}
sendGreeting();
sendGreeting("Hello");
sendGreeting("Hello", "tech");
var sendHello = function (message, userName) {
    if (message === void 0) { message = "Bye"; }
    console.log("".concat(message, ", ").concat(userName));
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
var Employee = /** @class */ (function () {
    function Employee(fullName, age, jobTitle, workingHoursPerWeek, hourlyRate) {
        var _this = this;
        // method
        this.printEmployeeDetails = function () {
            console.log("".concat(_this._fullName, "\uC758 \uC9C1\uC5C5\uC740 ").concat(_this.jobTitle, "\uC774\uACE0 \uC77C\uC8FC\uC77C\uC758 \uC218\uC785\uC740").concat(_this.hourlyRate * _this.workingHoursPerWeek, "\uC6D0\uC785\uB2C8\uB2E4. ").concat(_this.age));
        };
        this._fullName = fullName;
        this.age = age;
        this.jobTitle = jobTitle;
        this.workingHoursPerWeek = workingHoursPerWeek;
        this.hourlyRate = hourlyRate;
    }
    Object.defineProperty(Employee.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (value) {
            this._fullName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
var employ1 = new Employee("tech", 34, "Developer", 20, 100);
console.log(employ1);
//
// Access Modifiers
// 1. Public*
// 2. Private*
// 3. Protected
//
// Getterr + Setter
