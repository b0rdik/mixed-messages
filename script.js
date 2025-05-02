const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "What do you call a fake noodle? An impasta!",
    "Why did the bicycle fall over? Because it was two-tired!",
    "What do you call a fish with no eyes? Fsh!",
    "Why don't eggs tell jokes? They'd crack each other up!",
    "What's orange and sounds like a parrot? A carrot!",
    "Why did the math book look sad? Because it had too many problems!",
    "What do you call a bear with no teeth? A gummy bear!",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one!"
];

const jokeText = document.getElementById('joke-text');
const generateBtn = document.getElementById('generate-btn');

function getRandomJoke() {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    return jokes[randomIndex];
}

generateBtn.addEventListener('click', () => {
    jokeText.textContent = getRandomJoke();
}); 