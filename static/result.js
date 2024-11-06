document.addEventListener('DOMContentLoaded', function() {
    const scorePercentage = document.getElementById('scorePercentage');
    const scoreMessage = document.getElementById('scoreMessage');
    const suggestionsList = document.getElementById('suggestionsList');
    const homeBtn = document.getElementById('homeBtn');
    const progressRing = document.querySelector('.progress-ring__circle--progress');

    // Simulated score (replace this with actual assessment logic)
    const score = Math.floor(Math.random() * 101);

    // Animate score
    animateScore(score);

    // Set progress ring
    setProgress(score);

    // Generate and display suggestions
    const suggestions = generateSuggestions(score);
    displaySuggestions(suggestions);

    // Display score message
    displayScoreMessage(score);

    homeBtn.addEventListener('click', function() {
        // In a real application, this would redirect to the home page
        window.location.href = 'index.html';
    });

    function animateScore(targetScore) {
        let currentScore = 0;
        const animationDuration = 2000; // 2 seconds
        const framesPerSecond = 60;
        const totalFrames = animationDuration / 1000 * framesPerSecond;
        const scoreIncrement = targetScore / totalFrames;

        const animation = setInterval(() => {
            currentScore += scoreIncrement;
            if (currentScore >= targetScore) {
                currentScore = targetScore;
                clearInterval(animation);
                animateScoreMessage();
            }
            scorePercentage.textContent = Math.round(currentScore);
        }, 1000 / framesPerSecond);
    }

    function setProgress(percent) {
        const radius = progressRing.r.baseVal.value;
        const circumference = radius * 2 * Math.PI;
        progressRing.style.strokeDasharray = `${circumference} ${circumference}`;
        progressRing.style.strokeDashoffset = circumference;

        const offset = circumference - (percent / 100 * circumference);
        progressRing.style.strokeDashoffset = offset;
    }

    function generateSuggestions(score) {
        const suggestions = [
            { text: "Practice mindfulness meditation for 10 minutes daily", minScore: 0 },
            { text: "Engage in regular physical exercise, aim for 30 minutes a day", minScore: 0 },
            { text: "Maintain a consistent sleep schedule", minScore: 0 },
            { text: "Connect with friends or family members regularly", minScore: 20 },
            { text: "Try journaling to express your thoughts and feelings", minScore: 20 },
            { text: "Limit social media usage and screen time before bed", minScore: 40 },
            { text: "Explore a new hobby or creative outlet", minScore: 40 },
            { text: "Practice deep breathing exercises when feeling stressed", minScore: 60 },
            { text: "Set realistic goals and celebrate small achievements", minScore: 60 },
            { text: "Consider talking to a mental health professional for additional support", minScore: 80 }
        ];

        return suggestions.filter(suggestion => suggestion.minScore <= score);
    }

    function displaySuggestions(suggestions) {
        suggestions.forEach((suggestion, index) => {
            const li = document.createElement('li');
            li.textContent = suggestion.text;
            suggestionsList.appendChild(li);

            // Animate suggestions
            setTimeout(() => {
                li.style.opacity = '1';
                li.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }

    function displayScoreMessage(score) {
        let message = '';
        let color = '';

        if (score >= 80) {
            message = "Excellent! Your mental well-being is strong.";
            color = 'var(--success-color)';
        } else if (score >= 60) {
            message = "Good job! Your mental health is on the right track.";
            color = 'var(--primary-color)';
        } else if (score >= 40) {
            message = "You're doing okay, but there's room for improvement.";
            color = 'var(--warning-color)';
        } else {
            message = "It might be helpful to seek additional support.";
            color = 'var(--danger-color)';
        }

        scoreMessage.textContent = message;
        scoreMessage.style.backgroundColor = color;
    }

    function animateScoreMessage() {
        setTimeout(() => {
            scoreMessage.style.opacity = '1';
            scoreMessage.style.transform = 'translateY(0)';
        }, 500);
    }
});