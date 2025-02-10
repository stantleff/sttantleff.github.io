const questions = [
    { question: "What is the difference between var, let, and const?", answer: "var is function-scoped and can be redeclared, let is block-scoped and cannot be redeclared, const is block-scoped and cannot be reassigned." },
    { question: "What is a closure in JavaScript?", answer: "A closure is a function that retains access to its lexical scope even when the function is executed outside that scope." },
    { question: "What is the difference between == and ===?", answer: "== checks for value equality with type coercion, while === checks for both value and type equality." },
    { question: "How do you create an arrow function?", answer: "An arrow function is created using the => syntax, e.g., const add = (a, b) => a + b;" },
    { question: "What is the purpose of the map() method?", answer: "The map() method creates a new array populated with the results of calling a function on every element in the original array." },
    { question: "What does the typeof operator do?", answer: "The typeof operator returns the data type of a variable or expression." },
    { question: "How do you handle errors in JavaScript?", answer: "Errors can be handled using try...catch blocks." },
    { question: "What is event delegation?", answer: "Event delegation is a technique where a parent element handles events from its child elements via event bubbling." },
    { question: "What is the difference between null and undefined?", answer: "null is an assigned value that represents no value, while undefined means a variable has been declared but not assigned a value." },
    { question: "What is the purpose of the reduce() method?", answer: "The reduce() method executes a reducer function on each element of the array, resulting in a single output value." },
    { question: "What does JSON stand for?", answer: "JSON stands for JavaScript Object Notation." },
    { question: "How do you convert a string to a number in JavaScript?", answer: "You can use parseInt(), parseFloat(), or the Number() function." },
    { question: "What is the purpose of the setTimeout function?", answer: "setTimeout schedules a function to execute after a given delay." },
    { question: "What is the DOM?", answer: "The DOM (Document Object Model) is a programming interface for HTML and XML documents that allows scripts to update content and structure." },
    { question: "What is the purpose of the querySelector method?", answer: "querySelector selects the first element that matches a specified CSS selector." },
    { question: "What is an IIFE?", answer: "An Immediately Invoked Function Expression (IIFE) is a function that runs as soon as it is defined." },
    { question: "What is hoisting in JavaScript?", answer: "Hoisting is JavaScript's behavior of moving variable and function declarations to the top of their containing scope during compilation." },
    { question: "What is the difference between forEach and map?", answer: "forEach executes a function for each array element but does not return anything, while map creates a new array with transformed elements." },
    { question: "How do you prevent event bubbling?", answer: "Use event.stopPropagation() to prevent event bubbling." },
    { question: "What is localStorage?", answer: "localStorage is a web storage API that allows you to store data in the browser with no expiration time." }
];

let currentQuestionIndex = 0;

function displayQuestion() {
    const questionContainer = document.getElementById("question");
    questionContainer.innerText = questions[currentQuestionIndex].question;
    document.getElementById("answer").innerText = "Click to Reveal Answer";
}

document.getElementById("answer").addEventListener("click", function() {
    this.innerText = questions[currentQuestionIndex].answer;
});

document.getElementById("next").addEventListener("click", function() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        document.getElementById("question").innerText = "🎉 Congratulations! You've completed the quiz! 🎉";
        document.getElementById("answer").innerText = "Would you like to try again?";
        document.getElementById("next").innerText = "Restart Quiz";
        document.getElementById("next").style.display = "block";
        document.getElementById("next").addEventListener("click", function restartQuiz() {
            currentQuestionIndex = 0;
            displayQuestion();
            document.getElementById("next").innerText = "Next Question";
            document.getElementById("answer").innerText = "Click to Reveal Answer";
            document.getElementById("next").removeEventListener("click", restartQuiz);
        });
    }
});

displayQuestion();

