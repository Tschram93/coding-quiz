// Empty array that will have the questions, options, answers, and number appended into it

let questions = [{
        num: 1,
        question: ' Where is the correct location to insert javascript into the HTML ',
        options: [
            `<body> section`,
            `<head> section`,
            `With the <html> tag`,
            `Both the <head> and <body> are correct`
        ],
        answer: `Both the <head> and <body> are correct`
    },
    {
        num: 2,
        question: ' How is "Hello World" written to be displayed in an alert box? ',
        options: [
            `alertBox="Hello World"`,
            `alertBox("Hello World")`,
            `msgBox("Hello World")`,
            `alert("Hello World")`
        ],
        answer: `alert("Hello World")`
    },
    {
        num: 3,
        question: ` How is a comment written in JavaScript?`,
        options: [
            `<!--This is a comment-->`,
            `//This is a comment`,
            `#This is a comment`,
            `none of these are correct`
        ],
        answer: `//This is a comment`
    },
    {
        num: 4,
        question: `How does a "for" loop start?`,
        options: [
            `for (i <= 5; i++)`,
            `for (i = 0; i <= 5; i++)`,
            `for (i = 0; i <= 5)`,
            `for (i <= 5; i++)`
        ],
        answer: `for (i = 0; i <= 5; i++)`
    },
    {
        num: 5,
        question: `How do you call a function named "myFunction"?`,
        options: [
            `call function myFunction`,
            `call.myFunction()`,
            `myFunction()`,
            `call myFunction()`
        ],
        answer: `myFunction()`
    },
    {
        num: 6,
        question: `The majority of a typical Web document will be found in:`,
        options: [
            `title tag`,
            `head tag`,
            `comment tag`,
            `body tag`
        ],
        answer: `body tag`
    },
    {
        num: 7,
        question: ` In JavaScript, which of the following is a logical operator?`,
        options: [
            `&&`,
            `|`,
            `%`,
            `/`
        ],
        answer: `&&`
    },
    {

    }
];