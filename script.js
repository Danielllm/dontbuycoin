// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Ticker setup
    const ticker = document.getElementById('newsTicker');
    const tickerItems = ['TICKER • '];
    
    // Generate random ticker numbers
    function generateTickerText() {
        return Array.from({length: 20}, () => {
            const num = (Math.random() * 1000).toFixed(2);
            const change = Math.random() > 0.5 ? `↑${(Math.random() * 10).toFixed(2)}` : `↓${(Math.random() * 10).toFixed(2)}`;
            return `${num} ${change} • `;
        }).join(' ');
    }

    // Update ticker content
    function updateTicker() {
        ticker.innerHTML = tickerItems.join('') + generateTickerText();
        // Reset animation
        ticker.style.animation = 'none';
        void ticker.offsetWidth;
        ticker.style.animation = 'ticker-scroll 30s linear infinite';
    }

    // Main messages setup
    const gridContainer = document.getElementById('gridContainer');
    const messagesCount = 50;
    const messageText = 'DONT BUY';

    function createMessage() {
        const messageElement = document.createElement('div');
        messageElement.className = 'message';
        
        const rotation = (Math.random() * 30) - 15;
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        
        messageElement.style.setProperty('--rot', `${rotation}deg`);
        messageElement.style.left = `${x}px`;
        messageElement.style.top = `${y}px`;
        messageElement.textContent = messageText;
        
        return messageElement;
    }

    // Create initial messages
    for (let i = 0; i < messagesCount; i++) {
        gridContainer.appendChild(createMessage());
    }

    // Randomize positions periodically
    setInterval(() => {
        document.querySelectorAll('.message').forEach(msg => {
            msg.style.left = `${Math.random() * window.innerWidth}px`;
            msg.style.top = `${Math.random() * window.innerHeight}px`;
        });
    }, 5000);

    // Update ticker every 30 seconds
    updateTicker();
    setInterval(updateTicker, 30000);

    // Add new messages periodically
    setInterval(() => {
        const messages = document.querySelectorAll('.message');
        messages[Math.floor(Math.random() * messages.length)].remove();
        gridContainer.appendChild(createMessage());
    }, 1000);
});
