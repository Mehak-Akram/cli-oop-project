#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(
  chalk.bold.cyanBright("\n\t\t WELCOME TO MEHAK-AKRAM PROJECT - OOP \t\t\n")
);

class Student {
  name: string;
  constructor(n: string) {
    this.name = n;
  }
}

class Person {
  students: Student[] = [];
  add_student(obj: Student) {
    this.students.push(obj);
  }
}

const persons = new Person();

const programStart = async (persons: Person) => {
  do {
    console.log("Welcome!");
    const ans = await inquirer.prompt({
      name: "select",
      type: "list",
      message: chalk.bold.green(
        chalk.bold.green("what would you like to interect with?")
      ),
      choices: ["staff", "student", "exit"],
    });
    if (ans.select == "staff") {
      console.log(
        chalk.bold.blue(
          "you approch staff room.please feel free to ask any question"
        )
      );
    } else if (ans.select == "student") {
      const ans = await inquirer.prompt({
        name: "student",
        type: "input",
        message: chalk.bold.blue("Enter the student's name you engage with:"),
      });
      const student = persons.students.find((val) => val.name == ans.student);
      if (!student) {
        const name = new Student(ans.student);
        persons.add_student(name);
        console.log(
          chalk.magenta(`Hello I am ${name.name}. Nice to meet you!`)
        );
        console.log(`New student edit`);
        console.log(chalk.red(`Current student list:`));
        console.log(persons.students);
      } else {
        console.log(`Hello I am ${student.name}. Nice you see you again!`);
        console.log(chalk.red(`Existing student list:`));
        console.log(persons.students);
      }
    } else if (ans.select == "exit") {
      console.log(chalk.bold.yellow(`Exiting the program...`));
      process.exit();
    }
  } while (true);
};
programStart(persons);
