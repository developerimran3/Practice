// // console.log(ageCal("imran", 2000));
// // console.log(ageCal2("imran", 2000));
// // console.log(ageCal3("imran", 2000));

// // console.log(currencyConverter(100, "euro"));

let name = "arifa";
let roll = "00011";
let reg = "1254122";
let ban = 81;
let eng = 88;
let math = 89;
let science = 80;
let s_science = 80;
let reli = 80;

console.log(`

Student Name    : ${name}
Roll Number     : ${roll}
Reg Number     : ${reg}
================================
Subject - Mark - GPA - Grade
Bangla - ${ban} - ${getGpa(ban)} - ${getGrade(ban)}
English - ${eng} - ${getGpa(eng)} - ${getGrade(eng)}
Math - ${math} - ${getGpa(math)} - ${getGrade(math)}
Science - ${science} - ${getGpa(science)} - ${getGrade(science)}
Social Science - ${s_science} - ${getGpa(s_science)} - ${getGrade(s_science)}
Religion - ${reli} - ${getGpa(reli)} - ${getGrade(reli)}
=====================================
Final Result = ${
  isPassed(ban, eng, math, science, s_science, reli) ? "Passed" : "Failed"
}
Final GPA = ${getFinalGPA(ban, eng, math, science, s_science, reli).toFixed(2)}
Final Grade = ${getFinalGrade(ban, eng, math, science, s_science, reli)}
`);
