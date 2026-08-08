/* =========================================
   BRAIN BATTLE - LOGIN / SIGNUP JAVASCRIPT
========================================= */


/* =========================================
   SHOW SIGN UP PAGE
========================================= */

function showSignup() {

    const authCard = document.getElementById("authCard");

    authCard.classList.add("signup-mode");

}


/* =========================================
   SHOW SIGN IN PAGE
========================================= */

function showSignin() {

    const authCard = document.getElementById("authCard");

    authCard.classList.remove("signup-mode");

}


/* =========================================
   SIGN UP
========================================= */

function signup() {

    const name =
        document.getElementById("signupName").value.trim();

    const email =
        document.getElementById("signupEmail").value.trim();

    const password =
        document.getElementById("signupPassword").value;


    /* Check empty fields */

    if (name === "" || email === "" || password === "") {

        alert("Please fill all fields.");

        return;
    }


    /* Check email */

    if (!email.includes("@")) {

        alert("Please enter a valid email address.");

        return;
    }


    /* Check password */

    if (password.length < 4) {

        alert("Password must contain at least 4 characters.");

        return;
    }


    /* Save user */

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
        "Account created successfully! 🎉\n\nNow you can Sign In."
    );


    /* Clear fields */

    document.getElementById("signupName").value = "";
    document.getElementById("signupEmail").value = "";
    document.getElementById("signupPassword").value = "";


    /* Go back to sign in */

    showSignin();

}


/* =========================================
   SIGN IN
========================================= */

function login() {

    const email =
        document.getElementById("loginEmail").value.trim();

    const password =
        document.getElementById("loginPassword").value;


    /* Check empty fields */

    if (email === "" || password === "") {

        alert("Please enter your email and password.");

        return;
    }


    /* Get saved user */

    const savedUser =
        localStorage.getItem("brainBattleUser");


    /* If no account exists */

    if (!savedUser) {

        alert(
            "No account found!\n\nPlease create an account first."
        );

        showSignup();

        return;
    }


    const user = JSON.parse(savedUser);


    /* Check login details */

    if (
        email === user.email &&
        password === user.password
    ) {

        /* Login successful */

        localStorage.setItem(
            "brainBattleLoggedIn",
            "true"
        );


        localStorage.setItem(
            "brainBattleName",
            user.name
        );


        alert(
            "Welcome " + user.name + "! 🧠\n\nLogin successful."
        );


        /* Open Quiz Configuration */

        window.location.href = "config.html";

    } else {

        alert(
            "Invalid email or password.\n\nPlease try again."
        );

    }

}


/* =========================================
   FORGOT PASSWORD
========================================= */

function forgotPassword() {

    const savedUser =
        localStorage.getItem("brainBattleUser");


    if (!savedUser) {

        alert(
            "No account has been created yet."
        );

        return;
    }


    const user = JSON.parse(savedUser);


    alert(
        "Your registered email is:\n\n" +
        user.email +
        "\n\nFor this demo, your password is:\n\n" +
        user.password
    );

}


/* =========================================
   SOCIAL BUTTONS
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const socials =
            document.querySelectorAll(".socials span");


        socials.forEach(function (social) {

            social.addEventListener(
                "click",
                function () {

                    alert(
                        "Social login is not connected in this demo."
                    );

                }
            );

        });

    }
);
/* =========================================
   QUIZ CONFIGURATION
========================================= */

let selectedCategory = "C Programming";

let selectedCount = 10;


/* =========================================
   CATEGORY SELECTION
========================================= */

if (
    document.querySelectorAll("[data-category]").length > 0
) {

    document
        .querySelectorAll("[data-category]")
        .forEach(function(button) {

            button.addEventListener(
                "click",
                function() {

                    document
                        .querySelectorAll("[data-category]")
                        .forEach(function(item) {

                            item.classList.remove("active");

                        });


                    button.classList.add("active");


                    selectedCategory =
                        button.getAttribute(
                            "data-category"
                        );

                }
            );

        });

}



/* =========================================
   QUESTION COUNT
========================================= */

if (
    document.querySelectorAll("[data-count]").length > 0
) {

    document
        .querySelectorAll("[data-count]")
        .forEach(function(button) {

            button.addEventListener(
                "click",
                function() {

                    document
                        .querySelectorAll("[data-count]")
                        .forEach(function(item) {

                            item.classList.remove("active");

                        });


                    button.classList.add("active");


                    selectedCount =
                        parseInt(
                            button.getAttribute(
                                "data-count"
                            )
                        );

                }
            );

        });

}



/* =========================================
   START QUIZ
========================================= */

function startQuiz() {

    const quizConfig = {

        category: selectedCategory,

        count: selectedCount

    };


    localStorage.setItem(
        "brainBattleConfig",
        JSON.stringify(quizConfig)
    );


    window.location.href = "quiz.html";

}



/* =========================================
   LOGOUT
========================================= */

function logout() {

    localStorage.removeItem(
        "brainBattleLoggedIn"
    );

    window.location.href =
        "index.html";

}
/* =========================================
   BRAIN BATTLE QUIZ
========================================= */


/* =========================================
   QUESTIONS
========================================= */

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
            q: "What is the correct way to declare an integer variable?",

            a: [
                "int x;",
                "integer x;",
                "x int;",
                "num x;"
            ],

            c: 0
        },


        {
            q: "What is the output of printf(\"%d\", 10 + 20)?",

            a: [
                "10",
                "20",
                "30",
                "Error"
            ],

            c: 2
        },


        {
            q: "Which operator is used for the remainder (modulus)?",

            a: [
                "/",
                "*",
                "%",
                "//"
            ],

            c: 2
        },


        {
            q: "Which loop is guaranteed to execute at least once?",

            a: [
                "for",
                "while",
                "do...while",
                "None of the above"
            ],

            c: 2
        },


        {
            q: "What is the output of int a = 5; printf(\"%d\", a++);?",

            a: [
                "5",
                "6",
                "Error",
                "4"
            ],

            c: 0
        },


        {
            q: "Which data type stores a single character?",

            a: [
                "string",
                "char",
                "character",
                "text"
            ],

            c: 1
        },


        {
            q: "Which symbol is used to access the value stored at a pointer?",

            a: [
                "&",
                "*",
                "#",
                "%"
            ],

            c: 1
        },


        {
            q: "If x = 2 and if(x == 2), what is printed?",

            a: [
                "Yes",
                "No",
                "Error",
                "Nothing"
            ],

            c: 0
        },


        {
            q: "Which keyword is used to exit a loop immediately?",

            a: [
                "continue",
                "exit",
                "break",
                "return"
            ],

            c: 2
        }

    ],



    /* =====================================
       DATA STRUCTURES
    ====================================== */

    "Data Structures": [

        {
            q: "What is the time complexity of inserting an element at the beginning of a singly linked list?",

            a: [
                "O(n)",
                "O(log n)",
                "O(1)",
                "O(n log n)"
            ],

            c: 2
        },


        {
            q: "Which data structure is best suited for checking balanced parentheses?",

            a: [
                "Queue",
                "Stack",
                "Linked List",
                "Heap"
            ],

            c: 1
        },


        {
            q: "What is the worst-case time complexity of Binary Search?",

            a: [
                "O(1)",
                "O(log n)",
                "O(n)",
                "O(n²)"
            ],

            c: 1
        },


        {
            q: "Which tree traversal produces the nodes in sorted order for a Binary Search Tree?",

            a: [
                "Preorder",
                "Inorder",
                "Postorder",
                "Level Order"
            ],

            c: 1
        },


        {
            q: "A queue can be implemented using:",

            a: [
                "Arrays only",
                "Linked Lists only",
                "Both Arrays and Linked Lists",
                "Trees only"
            ],

            c: 2
        },


        {
            q: "In a max heap, where is the largest element located?",

            a: [
                "At any leaf node",
                "At the root",
                "At the last node",
                "In the middle level"
            ],

            c: 1
        },


        {
            q: "Which sorting algorithm is not stable?",

            a: [
                "Merge Sort",
                "Bubble Sort",
                "Insertion Sort",
                "Selection Sort"
            ],

            c: 3
        },


        {
            q: "Which data structure is used in Breadth-First Search (BFS)?",

            a: [
                "Stack",
                "Queue",
                "Heap",
                "Linked List"
            ],

            c: 1
        },


        {
            q: "What is the height of a binary tree with only one node?",

            a: [
                "-1",
                "0",
                "1",
                "2"
            ],

            c: 1
        },


        {
            q: "Push(10), Push(20), Pop(), Push(30), Pop(). What remains at the top?",

            a: [
                "10",
                "20",
                "30",
                "Stack is empty"
            ],

            c: 0
        }

    ],



    /* =====================================
       JAVA
    ====================================== */

    "Java": [

        {
            q: "Java was invented by _____.",

            a: [
                "James Gosling",
                "Dennis Ritchie",
                "Brian Kernighan",
                "Martin Richards"
            ],

            c: 0
        },


        {
            q: "Which is the latest version of Java listed in the source questions?",

            a: [
                "26.1.1",
                "26.0.1",
                "25.0.1",
                "26.0"
            ],

            c: 1
        },


        {
            q: "JVM stands for _________.",

            a: [
                "Java Visual Machine",
                "Java Variable Method",
                "Java Virtual Monitor",
                "Java Virtual Machine"
            ],

            c: 3
        }

    ],



    /* =====================================
       DBMS
    ====================================== */

    "DBMS": [

        {
            q: "DBMS stands for ________________.",

            a: [
                "DataBase Management Service",
                "Data backup mapping System",
                "DataBase Management System",
                "DataBase Management Source"
            ],

            c: 2
        },


        {
            q: "Which key uniquely identifies a record in a table?",

            a: [
                "Primary key",
                "Super key",
                "Candidate key",
                "Foreign key"
            ],

            c: 0
        },


        {
            q: "Which SQL command is used to retrieve data?",

            a: [
                "INSERT",
                "DELETE",
                "SELECT",
                "UPDATE"
            ],

            c: 2
        },


        {
            q: "Which language is used to interact with database?",

            a: [
                "Java",
                "Python",
                "C++",
                "SQL"
            ],

            c: 3
        },


        {
            q: "A row in table is also called tuple?",

            a: [
                "True",
                "False"
            ],

            c: 0
        },


        {
            q: "Which normal form removes transitive dependency?",

            a: [
                "1NF",
                "2NF",
                "3NF",
                "BCNF"
            ],

            c: 2
        },


        {
            q: "The process of organizing data to reduce redundancy is called _______.",

            a: [
                "Scheduling",
                "Normalization",
                "Serializibility",
                "Transaction processing"
            ],

            c: 1
        },


        {
            q: "Which statement is true?",

            a: [
                "Every super key is candidate key",
                "Primary key can contain NULL values",
                "Every candidate key is super key",
                "Foreign key must be unique"
            ],

            c: 2
        },


        {
            q: "What happens if DELETE FROM student; is executed without a WHERE clause?",

            a: [
                "Table is delete",
                "Structure is delete",
                "All records are deleted",
                "An error occurs"
            ],

            c: 2
        },


        {
            q: "A table can have how many primary key?",

            a: [
                "One",
                "Two",
                "Three",
                "Zero"
            ],

            c: 0
        },


        {
            q: "Which SQL command permanently removes a table and its structure?",

            a: [
                "DELETE",
                "DROP",
                "TRUNCATE",
                "REMOVE"
            ],

            c: 1
        },


        {
            q: "Which dependency is removed in 2NF?",

            a: [
                "Functional dependency",
                "Transitive dependency",
                "Partial dependency",
                "Multivalued dependency"
            ],

            c: 2
        },


        {
            q: "Which of the following is TRUE?",

            a: [
                "A primary key can be NULL",
                "A foreign key must be unique",
                "A table can have multiple candidate keys",
                "A table can have multiple primary keys"
            ],

            c: 2
        },


        {
            q: "Which of the following is NOT an ACID property?",

            a: [
                "Atomicity",
                "Consistency",
                "Integrity",
                "Durability"
            ],

            c: 2
        },


        {
            q: "Every serial schedule is:",

            a: [
                "Concurrent",
                "Recoverable",
                "Serializable",
                "Non-recoverable"
            ],

            c: 2
        },


        {
            q: "A REVOKE command is used in______.",

            a: [
                "DML",
                "DCL",
                "DDL",
                "TCL"
            ],

            c: 1
        },


        {
            q: "Which statement is TRUE?",

            a: [
                "SELECT is a DDL command",
                "COMMIT is a DML command",
                "DROP is a DDL command",
                "GRANT is a TCL command"
            ],

            c: 2
        },


        {
            q: "DELETE FROM Student;",

            a: [
                "Delete the student table",
                "Delete all records from the Student table",
                "Delete the table structure",
                "Display all records"
            ],

            c: 1
        },


        {
            q: "Which query is used to display all columns of a table?",

            a: [
                "SELECT*FROM student;",
                "SELECT FROM Student;",
                "SELECT ALL Student;",
                "DISPLAY Student;"
            ],

            c: 0
        },


        {
            q: "Which command belongs to DCL?",

            a: [
                "COMMIT",
                "REVOKE",
                "UPDATE",
                "TRUNCATE"
            ],

            c: 1
        }

    ]

};


/* =========================================
   QUIZ VARIABLES
========================================= */

let quiz = [];

let currentQuestion = 0;

let score = 0;

let selectedAnswer = false;

let timeLeft = 30;

let timerInterval;



/* =========================================
   START QUIZ
========================================= */

function initializeQuiz() {

    const config =
        JSON.parse(
            localStorage.getItem(
                "brainBattleConfig"
            )
        );


    if (!config) {

        window.location.href =
            "config.html";

        return;

    }


    let questionPool =
        QUESTIONS[config.category];


    if (!questionPool) {

        questionPool =
            QUESTIONS["C Programming"];

    }


    /*
       Shuffle questions
    */

    quiz =
        [...questionPool]
        .sort(
            () => Math.random() - 0.5
        );


    /*
       Select requested number
    */

    quiz =
        quiz.slice(
            0,
            Math.min(
                config.count,
                quiz.length
            )
        );


    /*
       Category display
    */

    const categoryLabel =
        document.getElementById(
            "categoryLabel"
        );


    if (categoryLabel) {

        categoryLabel.textContent =
            config.category;

    }


    showQuestion();

    startTimer();

}



/* =========================================
   SHOW QUESTION
========================================= */

function showQuestion() {

    selectedAnswer = false;

    timeLeft = 30;


    const question =
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
            quiz.length) *
            100
        ) + "%";


    document.getElementById(
        "question"
    ).textContent =
        question.q;


    const answerBox =
        document.getElementById(
            "answers"
        );


    answerBox.innerHTML = "";


    /*
       Create options
    */

    question.a.forEach(
        function(answer, index) {

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
                function() {

                    selectAnswer(
                        index,
                        button
                    );

                };


            answerBox.appendChild(
                button
            );

        }
    );


    /*
       Change button text
    */

    const nextButton =
        document.getElementById(
            "nextBtn"
        );


    if (
        currentQuestion ===
        quiz.length - 1
    ) {

        nextButton.textContent =
            "Finish Quiz";

    } else {

        nextButton.textContent =
            "Next Question";

    }

}



/* =========================================
   SELECT ANSWER
========================================= */

function selectAnswer(
    selectedIndex,
    selectedButton
) {

    if (selectedAnswer) {

        return;

    }


    selectedAnswer = true;


    const question =
        quiz[currentQuestion];


    const allButtons =
        document.querySelectorAll(
            ".answer"
        );


    /*
       Show correct answer
    */

    allButtons.forEach(
        function(button, index) {

            if (
                index ===
                question.c
            ) {

                button.classList.add(
                    "correct"
                );

            }

        }
    );


    /*
       Check selected answer
    */

    if (
        selectedIndex ===
        question.c
    ) {

        score++;

    } else {

        selectedButton.classList.add(
            "wrong"
        );

    }

}



/* =========================================
   NEXT QUESTION
========================================= */

function nextQuestion() {

    /*
       Don't allow next without answer
    */

    if (!selectedAnswer) {

        alert(
            "Please select an answer first."
        );

        return;

    }


    currentQuestion++;


    /*
       Finish quiz
    */

    if (
        currentQuestion >=
        quiz.length
    ) {

        finishQuiz();

        return;

    }


    timeLeft = 30;


    showQuestion();

}



/* =========================================
   TIMER
========================================= */

function startTimer() {

    clearInterval(timerInterval);


    const timer =
        document.getElementById(
            "timer"
        );


    timerInterval =
        setInterval(
            function() {

                timeLeft--;


                timer.textContent =
                    "00:" +
                    String(
                        timeLeft
                    ).padStart(
                        2,
                        "0"
                    );


                /*
                   Time over
                */

                if (
                    timeLeft <= 0
                ) {

                    clearInterval(
                        timerInterval
                    );


                    if (
                        !selectedAnswer
                    ) {

                        selectedAnswer =
                            true;


                        const question =
                            quiz[
                                currentQuestion
                            ];


                        const buttons =
                            document.querySelectorAll(
                                ".answer"
                            );


                        buttons.forEach(
                            function(
                                button,
                                index
                            ) {

                                if (
                                    index ===
                                    question.c
                                ) {

                                    button.classList.add(
                                        "correct"
                                    );

                                }

                            }
                        );

                    }


                    setTimeout(
                        function() {

                            currentQuestion++;


                            if (
                                currentQuestion >=
                                quiz.length
                            ) {

                                finishQuiz();

                            } else {

                                timeLeft = 30;

                                showQuestion();

                                startTimer();

                            }

                        },
                        700
                    );

                }

            },
            1000
        );

}



/* =========================================
   FINISH QUIZ
========================================= */

function finishQuiz() {

    clearInterval(
        timerInterval
    );


    const config =
        JSON.parse(
            localStorage.getItem(
                "brainBattleConfig"
            )
        );


    const result = {

        score: score,

        total: quiz.length,

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



/* =========================================
   RUN QUIZ
========================================= */

if (
    document.getElementById(
        "question"
    )
) {

    initializeQuiz();

}
/* =========================================
   RESULT PAGE
========================================= */

function showResult() {

    const resultData =
        localStorage.getItem(
            "brainBattleResult"
        );


    /* If result not found */

    if (!resultData) {

        window.location.href =
            "config.html";

        return;

    }


    const result =
        JSON.parse(resultData);


    const score =
        result.score;

    const total =
        result.total;


    const percentage =
        Math.round(
            (score / total) * 100
        );


    /* =====================================
       CATEGORY
    ====================================== */

    const category =
        document.getElementById(
            "resultCategory"
        );


    if (category) {

        category.textContent =
            result.category +
            " • " +
            total +
            " Questions";

    }



    /* =====================================
       SCORE
    ====================================== */

    const scoreElement =
        document.getElementById(
            "score"
        );


    if (scoreElement) {

        scoreElement.textContent =
            score +
            "/" +
            total;

    }



    /* =====================================
       MESSAGE
    ====================================== */

    const message =
        document.getElementById(
            "resultMessage"
        );


    if (percentage === 100) {

        message.textContent =
            "Perfect Score! 🎉";

    }

    else if (percentage >= 80) {

        message.textContent =
            "Excellent Work! 👏";

    }

    else if (percentage >= 60) {

        message.textContent =
            "Great Job! 💪";

    }

    else if (percentage >= 40) {

        message.textContent =
            "Good Try! 📚";

    }

    else {

        message.textContent =
            "Keep Practicing! 🔥";

    }



    /* =====================================
       RESULT DETAILS
    ====================================== */

    const details =
        document.getElementById(
            "resultDetails"
        );


    if (details) {

        details.textContent =
            "You answered " +
            score +
            " correctly out of " +
            total +
            " questions. " +
            "Your score is " +
            percentage +
            "%.";

    }

}



/* =========================================
   PLAY AGAIN
========================================= */

function playAgain() {

    window.location.href =
        "config.html";

}



/* =========================================
   GO HOME
========================================= */

function goHome() {

    window.location.href =
        "index.html";

}



/* =========================================
   LOAD RESULT
========================================= */

if (
    document.getElementById(
        "score"
    )
) {

    showResult();

}