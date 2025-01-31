// script.js
document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.getElementById('gridContainer');
    const messagesCount = 50; // Number of messages to create
    const messageText = 'DONT BUY';

    for (let i = 0; i < messagesCount; i++) {
        const messageElement = document.createElement('div');
        messageElement.className = 'message';
        
        // Random animation delay for staggered effect
        const delay = Math.random() * 2;
        messageElement.style.animationDelay = `${delay}s`;
        
        // Random rotation between -15 and 15 degrees
        const rotation = (Math.random() * 30) - 15;
        messageElement.style.setProperty('--rot', `${rotation}deg`);
        
        // Random font size variation
        const sizeVariation = (Math.random() * 2) + 0.8;
        messageElement.style.fontSize = `${sizeVariation}em`;

        messageElement.textContent = messageText;
        gridContainer.appendChild(messageElement);
    }
});
