                // Query Selectors

                // Rules Section/Card
                const cardRules = document.querySelector('#cardRules');

                // Question Box
                const options = document.querySelectorAll('.option');
                const optionList = document.querySelector('#optionList');
                const quizBox = document.querySelector('#quizBox');
                const questionText = document.querySelector('#questionText');
                const timer = document.querySelector('#timer');
                const timerBox = document.querySelector('#timerBox');
                const totalQuestions = document.querySelector('#totalQuestions');

                // Result Box
                const resultBox = document.querySelector('#resultBox');
                const finishedQuiz = document.querySelector('#finishedQuiz');
                const score = document.querySelector('#score');

                // Buttons
                const beginBtn = document.getElementById('beginBtn'); // Rules Section
                const exitBtn = document.getElementById('exitBtn'); //Result Box
                const nextBtn = document.getElementById('nextBtn'); // Quiz section
                const restartBtn = document.getElementById('restartBtn'); //Result Box
                const returnBtn = document.getElementById('returnBtn');
                const startBtn = document.querySelector('#startBtn'); // Blank Screen (on page start up)
                console.log(startBtn);


                // Event Listeners

                // Start button displays the Rule Card
                startBtn.addEventListener('click', () => {
                    cardRules.style.display = "block";
                    if (cardRules.style.display = "block") {
                        startBtn.style.display = "none"
                    } // Hides display button
                })

                beginBtn.addEventListener('click', () => {
                    quizBox.setAttribute("id", 'test')
                    if (quizBox.style.display = "block") {
                        cardRules.style.display = "none"
                    }
                    showQuestions(0);
                })

                // nextBtn.addEventListener('click', )
                // restartBtn.addEventListener('click', )
                returnBtn.addEventListener('click', () => {
                    cardRules.style.display = "none";
                    if (cardRules.style.display = "none") {
                        startBtn.style.display = "block"
                    }
                })
                // exitBtn.addEventListener('click', () => {
                //     cardRules.style.display = "none";;
                // })

                let questionCount = 0;

                // Functions
                function showQuestions(i) {
                    let questionsTag = `<span>` + questions[i].question + `</span>`;
                    let optionsTag = `<div class="option border border-primary rounded mb-2 px-2 py-3">` + questions[i].options[0] + `<span></span></div>` +
                        `<div class="option border border-primary rounded mb-2 px-2 py-3">` + questions[i].options[1] + `<span></span></div>` +
                        `<div class="option border border-primary rounded mb-2 px-2 py-3">` + questions[i].options[2] + `<span></span></div>` +
                        `<div class="option border border-primary rounded mb-2 px-2 py-3">` + questions[i].options[3] + `<span></span></div>`;

                    questionText.innerHTML = questionsTag;
                    optionList.innerHTML = optionsTag;
                };