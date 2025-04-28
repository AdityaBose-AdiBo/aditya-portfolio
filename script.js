const toggleButton = document.getElementById('toggle-mode');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Typing Effect
const typingElement = document.getElementById('typing');
const phrases = ["Security Auditor", "Cybersecurity Engineer", "Risk Advisor", "Problem Solver"];
let phraseIndex = 0;
let letterIndex = 0;
let currentPhrase = [];
let isDeleting = false;
let isEnd = false;

function loop() {
    isEnd = false;
    typingElement.innerHTML = currentPhrase.join('');

    if (phraseIndex < phrases.length) {

        if (!isDeleting && letterIndex <= phrases[phraseIndex].length) {
            currentPhrase.push(phrases[phraseIndex][letterIndex]);
            letterIndex++;
            typingElement.innerHTML = currentPhrase.join('');
        }

        if (isDeleting && letterIndex <= phrases[phraseIndex].length) {
            currentPhrase.pop(phrases[phraseIndex][letterIndex]);
            letterIndex--;
            typingElement.innerHTML = currentPhrase.join('');
        }

        if (letterIndex == phrases[phraseIndex].length) {
            isEnd = true;
            isDeleting = true;
        }

        if (isDeleting && letterIndex === 0) {
            currentPhrase = [];
            isDeleting = false;
            phraseIndex++;
            if (phraseIndex === phrases.length) {
                phraseIndex = 0;
            }
        }
    }
    const speedUp = Math.random() * (80 -50) + 50;
    const normalSpeed = Math.random() * (300 -200) + 200;
    const time = isEnd ? 2000 : isDeleting ? speedUp : normalSpeed;
    setTimeout(loop, time);
}

loop();
