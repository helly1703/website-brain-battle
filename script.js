/* =====================================================
   BRAIN BATTLE
   COMPLETE JAVASCRIPT
===================================================== */


/* =====================================================
   LOGIN / SIGNUP
===================================================== */

function showSignup() {

    const card = document.getElementById("authCard");

    if (card) {
        card.classList.add("signup-mode");
    }

}


function showSignin() {

    const card = document.getElementById("authCard");

    if (card) {
        card.classList.remove("signup-mode");
    }

}


function signup() {

    const name =
        document.getElementById("signupName")?.value.trim();

    const email =
        document.getElementById("signupEmail")?.value.trim();

    const password =
        document.getElementById("signupPassword")?.value;


    if (!name || !email || !password) {

        alert("Please fill all fields.");

        return;
    }


    if (!email.includes("@")) {

        alert("Please enter a valid email.");

        return;
    }


    if (password.length < 4) {

        alert("Password must contain at least 4 characters.");

        return;
    }


    const user = {

        name: name,

        email: email,

        password: password

    };


    localStorage.setItem(
        "brainBattleUser",
        JSON.stringify(user)
    );


    alert(
        "Account created successfully! 🎉"
    );


    showSignin();

}


function login() {

    const email =
        document.getElementById("loginEmail")?.value.trim();

    const password =
        document.getElementById("loginPassword")?.value;


    if (!email || !password) {

        alert("Please enter email and password.");

        return;
    }


    const savedUser =
        localStorage.getItem("brainBattleUser");


    if (!savedUser) {

        alert(
            "Please create an account first."
        );

        showSignup();

        return;
    }


    const user =
        JSON.parse(savedUser);


    if (
        email === user.email &&
        password === user.password
    ) {

        localStorage.setItem(
            "brainBattleLoggedIn",
            "true"
        );


        localStorage.setItem(
            "brainBattleName",
            user.name
        );


        window.location.href =
            "config.html";

    } else {

        alert(
            "Invalid email or password."
        );

    }

}


function forgotPassword() {

    const savedUser =
        localStorage.getItem("brainBattleUser");


    if (!savedUser) {

        alert("No account found.");

        return;
    }


    const user =
        JSON.parse(savedUser);


    alert(
        "Your registered email:\n" +
        user.email
    );

}


function logout() {

    localStorage.removeItem(
        "brainBattleLoggedIn"
    );

    window.location.href =
        "index.html";

}



/* =====================================================
   QUESTIONS
===================================================== */

const QUESTIONS = {

    "C Programming": [

        {
            q: "Which header file is required for printf()?",
            a: [
                "#include <math.h>",
                "#include <stdio.h>",
                "#include <stdlib.h>",
                "#include <string.h>"
            ],
            c: 1
        },

        {
            q: "Which data type is used to store a single character?",
            a: [
                "int",
                "float",
                "char",
                "double"
            ],
            c: 2
        },

        {
            q: "Which operator is used to find remainder?",
            a: [
                "/",
                "*",
                "%",
                "+"
            ],
            c: 2
        },

        {
            q: "Which loop executes at least once?",
            a: [
                "for",
                "while",
                "do...while",
                "if"
            ],
            c: 2
        },

        {
            q: "Which keyword is used to exit a loop?",
            a: [
                "continue",
                "break",
                "stop",
                "exit"
            ],
            c: 1
        },

        {
            q: "Which symbol is used to get the address of a variable?",
            a: [
                "*",
                "&",
                "#",
                "%"
            ],
            c: 1
        },

        {
            q: "Which function is used to read formatted input?",
            a: [
                "printf()",
                "scanf()",
                "getchar()",
                "puts()"
            ],
            c: 1
        },

        {
            q: "What is the correct declaration of an integer?",
            a: [
                "integer x;",
                "int x;",
                "x int;",
                "number x;"
            ],
            c: 1
        },

        {
            q: "Which keyword is used to return a value from a function?",
            a: [
                "break",
                "continue",
                "return",
                "send"
            ],
            c: 2
        },

        {
            q: "Array indexing in C starts from:",
            a: [
                "0",
                "1",
                "-1",
                "2"
            ],
            c: 0
        },

        {
            q: "Which is a valid C comment?",
            a: [
                "// comment",
                "<!-- comment -->",
                "# comment",
                "** comment"
            ],
            c: 0
        },

        {
            q: "Which operator represents logical AND?",
            a: [
                "&",
                "&&",
                "||",
                "!"
            ],
            c: 1
        },

        {
            q: "Which function is used to display output?",
            a: [
                "scanf()",
                "printf()",
                "input()",
                "display()"
            ],
            c: 1
        },

        {
            q: "Which keyword is used for a constant variable?",
            a: [
                "constant",
                "const",
                "fixed",
                "static"
            ],
            c: 1
        },

        {
            q: "Which symbol terminates a C statement?",
            a: [
                ":",
                ".",
                ";",
                ","
            ],
            c: 2
        }

    ],


    "Data Structures": [

        {
            q: "Which data structure follows LIFO?",
            a: [
                "Queue",
                "Stack",
                "Array",
                "Tree"
            ],
            c: 1
        },

        {
            q: "Which data structure follows FIFO?",
            a: [
                "Stack",
                "Queue",
                "Tree",
                "Graph"
            ],
            c: 1
        },

        {
            q: "Which data structure is used in BFS?",
            a: [
                "Stack",
                "Queue",
                "Tree",
                "Heap"
            ],
            c: 1
        },

        {
            q: "Which traversal gives sorted order in a BST?",
            a: [
                "Preorder",
                "Inorder",
                "Postorder",
                "Level order"
            ],
            c: 1
        },

        {
            q: "What is the time complexity of binary search?",
            a: [
                "O(n)",
                "O(log n)",
                "O(n²)",
                "O(1)"
            ],
            c: 1
        },

        {
            q: "Which data structure is used for balanced parentheses?",
            a: [
                "Queue",
                "Stack",
                "Graph",
                "Array"
            ],
            c: 1
        },

        {
            q: "A queue can be implemented using:",
            a: [
                "Array",
                "Linked List",
                "Both",
                "Tree"
            ],
            c: 2
        },

        {
            q: "In a max heap, the largest element is at:",
            a: [
                "Leaf",
                "Root",
                "Middle",
                "Last"
            ],
            c: 1
        },

        {
            q: "Which algorithm is used for graph traversal?",
            a: [
                "BFS",
                "DFS",
                "Both",
                "None"
            ],
            c: 2
        },

        {
            q: "Which data structure stores elements in nodes connected by links?",
            a: [
                "Array",
                "Linked List",
                "Stack",
                "Queue"
            ],
            c: 1
        }

    ],


    "Java": [

        {
            q: "Who invented Java?",
            a: [
                "James Gosling",
                "Dennis Ritchie",
                "Bjarne Stroustrup",
                "Bill Gates"
            ],
            c: 0
        },

        {
            q: "JVM stands for:",
            a: [
                "Java Virtual Machine",
                "Java Variable Machine",
                "Java Visual Machine",
                "Java Virtual Method"
            ],
            c: 0
        },

        {
            q: "Which keyword creates an object?",
            a: [
                "object",
                "create",
                "new",
                "make"
            ],
            c: 2
        },

        {
            q: "Which language is Java based on?",
            a: [
                "C/C++",
                "Python",
                "PHP",
                "HTML"
            ],
            c: 0
        },

        {
            q: "Which method is the entry point of a Java program?",
            a: [
                "start()",
                "main()",
                "run()",
                "execute()"
            ],
            c: 1
        }

    ],


    "DBMS": [

        {
            q: "DBMS stands for:",
            a: [
                "Database Management System",
                "Database Machine System",
                "Data Management Software",
                "Database Managing Service"
            ],
            c: 0
        },

        {
            q: "Which key uniquely identifies a record?",
            a: [
                "Foreign Key",
                "Primary Key",
                "Candidate Key",
                "Super Key"
            ],
            c: 1
        },

        {
            q: "Which SQL command retrieves data?",
            a: [
                "INSERT",
                "DELETE",
                "SELECT",
                "UPDATE"
            ],
            c: 2
        },

        {
            q: "Which language is used to interact with databases?",
            a: [
                "HTML",
                "CSS",
                "SQL",
                "XML"
            ],
            c: 2
        },

        {
            q: "A row in a table is called:",
            a: [
                "Attribute",
                "Tuple",
                "Field",
                "Database"
            ],
            c: 1
        },

        {
            q: "Which normal form removes transitive dependency?",
            a: [
                "1NF",
                "2NF",
                "3NF",
                "4NF"
            ],
            c: 2
        },

        {
            q: "Which command removes a table completely?",
            a: [
                "DELETE",
                "DROP",
                "REMOVE",
                "CLEAR"
            ],
            c: 1
        },

        {
            q: "Which command is used to add a new record?",
            a: [
                "INSERT",
                "UPDATE",
                "SELECT",
                "CREATE"
            ],
            c: 0
        },

        {
            q: "Which SQL command modifies existing data?",
            a: [
                "UPDATE",
                "SELECT",
                "DROP",
                "CREATE"
            ],
            c: 0
        },

        {
            q: "Which of the following is an ACID property?",
            a: [
                "Atomicity",
                "Availability",
                "Accuracy",
                "Accessibility"
            ],
            c: 0
        }

    ]

};



/* =====================================================
   QUIZ CONFIGURATION
===================================================== */

let selectedCategory =
    "C Programming";

let selectedCount =
    10;


document.addEventListener(
    "DOMContentLoaded",
    function () {

        /* CATEGORY BUTTONS */

        document
            .querySelectorAll("[data-category]")
            .forEach(function (button) {

                button.addEventListener(
                    "click",
                    function () {

                        document
                            .querySelectorAll(
                                "[data-category]"
                            )
                            .forEach(function (item) {

                                item.classList.remove(
                                    "active"
                                );

                            });


                        button.classList.add(
                            "active"
                        );


                        selectedCategory =
                            button.dataset.category;

                    }
                );

            });


        /* QUESTION COUNT */

        document
            .querySelectorAll("[data-count]")
            .forEach(function (button) {

                button.addEventListener(
                    "click",
                    function () {

                        document
                            .querySelectorAll(
                                "[data-count]"
                            )
                            .forEach(function (item) {

                                item.classList.remove(
                                    "active"
                                );

                            });


                        button.classList.add(
                            "active"
                        );


                        selectedCount =
                            Number(
                                button.dataset.count
                            );

                    }
                );

            });


        /* RESULT PAGE */

        if (
            document.getElementById("score")
        ) {

            showResult();

        }


        /* QUIZ PAGE */

        if (
            document.getElementById("question")
        ) {

            initializeQuiz();

        }

    }
);



/* =====================================================
   START QUIZ
===================================================== */

function startQuiz() {

    const config = {

        category:
            selectedCategory,

        count:
            selectedCount

    };


    localStorage.setItem(
        "brainBattleConfig",
        JSON.stringify(config)
    );


    window.location.href =
        "quiz.html";

}



/* =====================================================
   QUIZ VARIABLES
===================================================== */

let quiz = [];

let currentQuestion = 0;

let score = 0;

let selectedAnswer = false;

let timeLeft = 30;

let timer;



/* =====================================================
   INITIALIZE QUIZ
===================================================== */

function initializeQuiz() {

    const savedConfig =
        localStorage.getItem(
            "brainBattleConfig"
        );


    if (!savedConfig) {

        window.location.href =
            "config.html";

        return;

    }


    const config =
        JSON.parse(savedConfig);


    let questions =
        QUESTIONS[config.category];


    if (!questions) {

        questions =
            QUESTIONS["C Programming"];

    }


    /* Shuffle */

    quiz =
        [...questions]
        .sort(
            () => Math.random() - 0.5
        );


    /* Number of questions */

    quiz =
        quiz.slice(
            0,
            Math.min(
                config.count,
                quiz.length
            )
        );


    currentQuestion = 0;

    score = 0;


    const category =
        document.getElementById(
            "categoryLabel"
        );


    if (category) {

        category.textContent =
            config.category;

    }


    showQuestion();

    startTimer();

}



/* =====================================================
   SHOW QUESTION
===================================================== */

function showQuestion() {

    selectedAnswer = false;

    timeLeft = 30;


    const q =
        quiz[currentQuestion];


    document.getElementById(
        "questionNo"
    ).textContent =
        "Question " +
        (currentQuestion + 1);


    document.getElementById(
        "progressText"
    ).textContent =
        (currentQuestion + 1) +
        " / " +
        quiz.length;


    document.getElementById(
        "progressBar"
    ).style.width =
        (
            ((currentQuestion + 1) /
            quiz.length) * 100
        ) + "%";


    document.getElementById(
        "question"
    ).textContent =
        q.q;


    const answers =
        document.getElementById(
            "answers"
        );


    answers.innerHTML = "";


    q.a.forEach(
        function (answer, index) {

            const button =
                document.createElement(
                    "button"
                );


            button.className =
                "answer";


            button.textContent =
                String.fromCharCode(
                    65 + index
                ) +
                ". " +
                answer;


            button.onclick =
                function () {

                    selectAnswer(
                        index,
                        button
                    );

                };


            answers.appendChild(
                button
            );

        }
    );


    const next =
        document.getElementById(
            "nextBtn"
        );


    if (
        currentQuestion ===
        quiz.length - 1
    ) {

        next.textContent =
            "Finish Quiz";

    } else {

        next.textContent =
            "Next Question";

    }

}



/* =====================================================
   SELECT ANSWER
===================================================== */

function selectAnswer(
    index,
    button
) {

    if (selectedAnswer) {
        return;
    }


    selectedAnswer = true;


    const correct =
        quiz[currentQuestion].c;


    const all =
        document.querySelectorAll(
            ".answer"
        );


    all.forEach(
        function (item, i) {

            if (i === correct) {

                item.classList.add(
                    "correct"
                );

            }

        }
    );


    if (index === correct) {

        score++;

    } else {

        button.classList.add(
            "wrong"
        );

    }

}



/* =====================================================
   NEXT QUESTION
===================================================== */

function nextQuestion() {

    if (!selectedAnswer) {

        alert(
            "Please select an answer first."
        );

        return;

    }


    currentQuestion++;


    if (
        currentQuestion >=
        quiz.length
    ) {

        finishQuiz();

        return;

    }


    showQuestion();

    startTimer();

}



/* =====================================================
   TIMER
===================================================== */

function startTimer() {

    clearInterval(timer);


    timeLeft = 30;


    const timerElement =
        document.getElementById(
            "timer"
        );


    timerElement.textContent =
        "00:30";


    timer =
        setInterval(
            function () {

                timeLeft--;


                timerElement.textContent =
                    "00:" +
                    String(
                        timeLeft
                    ).padStart(
                        2,
                        "0"
                    );


                if (
                    timeLeft <= 0
                ) {

                    clearInterval(timer);


                    selectedAnswer = true;


                    currentQuestion++;


                    if (
                        currentQuestion >=
                        quiz.length
                    ) {

                        finishQuiz();

                    } else {

                        showQuestion();

                        startTimer();

                    }

                }

            },
            1000
        );

}



/* =====================================================
   FINISH QUIZ
===================================================== */

function finishQuiz() {

    clearInterval(timer);


    const config =
        JSON.parse(
            localStorage.getItem(
                "brainBattleConfig"
            )
        );


    const result = {

        score:
            score,

        total:
            quiz.length,

        category:
            config.category

    };


    localStorage.setItem(
        "brainBattleResult",
        JSON.stringify(result)
    );


    window.location.href =
        "result.html";

}



/* =====================================================
   RESULT
===================================================== */

function showResult() {

    const saved =
        localStorage.getItem(
            "brainBattleResult"
        );


    if (!saved) {

        window.location.href =
            "config.html";

        return;

    }


    const result =
        JSON.parse(saved);


    const percentage =
        Math.round(
            (result.score /
            result.total) * 100
        );


    document.getElementById(
        "score"
    ).textContent =
        result.score +
        "/" +
        result.total;


    document.getElementById(
        "resultCategory"
    ).textContent =
        result.category;


    document.getElementById(
        "resultDetails"
    ).textContent =
        "You answered " +
        result.score +
        " correctly out of " +
        result.total +
        " questions. Score: " +
        percentage +
        "%";


    const message =
        document.getElementById(
            "resultMessage"
        );


    if (percentage >= 80) {

        message.textContent =
            "Excellent Work! 🏆";

    } else if (percentage >= 60) {

        message.textContent =
            "Great Job! 🎉";

    } else if (percentage >= 40) {

        message.textContent =
            "Good Try! 💪";

    } else {

        message.textContent =
            "Keep Practicing! 📚";

    }

}



/* =====================================================
   PLAY AGAIN
===================================================== */

function playAgain() {

    window.location.href =
        "config.html";

}


/* =====================================================
   HOME
===================================================== */

function goHome() {

    window.location.href =
        "index.html";

}