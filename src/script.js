                // Query Selectors

                // Rules Section/Card
                const cardRules = document.querySelector('#cardRules');

                // Question Box
                const options = document.querySelectorAll('.option');
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
                })
                // nextBtn.addEventListener('click', )
                // restartBtn.addEventListener('click', )

                // exitBtn.addEventListener('click', () => {
                //     cardRules.style.display = "none";;
                // })


                // Functions