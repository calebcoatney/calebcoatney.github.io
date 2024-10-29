const canvas = document.getElementById('wheel');
const ctx = canvas.getContext('2d');
const spinButton = document.getElementById('spin-button');
const resultDiv = document.getElementById('result');

// Define rewards
const rewards = [
    "5-Min Tea & Chat with Caleb",
    "10-Min YouTube Break",
    "Surprise Acts of Service",
    "Choose a Quality Time Date Night Plan",
    "Short Walk or Fresh Air Break",
    "Spa Time (After Study)",
    "Compliments from Caleb",
    "Caleb Takes Over a Chore"
];

const numSlices = rewards.length;
const sliceAngle = (2 * Math.PI) / numSlices;
let startAngle = 0;
let isSpinning = false;

// Draw the reward wheel
function drawWheel() {
    for (let i = 0; i < numSlices; i++) {
        const angle = startAngle + i * sliceAngle;
        ctx.beginPath();
        ctx.moveTo(200, 200);
        ctx.arc(200, 200, 200, angle, angle + sliceAngle);
        ctx.fillStyle = i % 2 === 0 ? "#ff6347" : "#ffd700";
        ctx.fill();
        ctx.save();

        // Add reward text
        ctx.translate(200 + Math.cos(angle + sliceAngle / 2) * 150, 200 + Math.sin(angle + sliceAngle / 2) * 150);
        ctx.rotate(angle + sliceAngle / 2 + Math.PI / 2);
        ctx.fillStyle = "black";
        ctx.font = "16px Arial";
        ctx.fillText(rewards[i], -ctx.measureText(rewards[i]).width / 2, 0);
        ctx.restore();
    }
}

// Spin the wheel and display the result
function spinWheel() {
    if (isSpinning) return;

    isSpinning = true;
    let spinTime = 0;
    const spinDuration = Math.random() * 3000 + 3000;  // Spin between 3 and 6 seconds

    function animateSpin() {
        spinTime += 20;
        startAngle += 0.05;  // Spin speed
        drawWheel();

        if (spinTime < spinDuration) {
            requestAnimationFrame(animateSpin);
        } else {
            isSpinning = false;
            const selectedReward = rewards[Math.floor(numSlices - ((startAngle % (2 * Math.PI)) / sliceAngle)) % numSlices];
            resultDiv.textContent = `Reward: ${selectedReward}!`;
        }
    }

    animateSpin();
}

// Initial draw and event listener
drawWheel();
spinButton.addEventListener('click', spinWheel);
