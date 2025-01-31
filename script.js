// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Ticker setup (same as before)
    const ticker = document.getElementById('newsTicker');
    const container = document.getElementById('mainContainer');
    const words = ['DONT', 'BUY'];
    
    function createWordBlock() {
        const word = words[Math.floor(Math.random() * words.length)];
        const block = document.createElement('div');
        
        // Random properties
        const rotation = (Math.random() * 60) - 30; // -30 to +30 degrees
        const scale = 0.5 + Math.random() * 1.5; // 0.5x to 2x size
        const fontSize = 3 + Math.random() * 5; // 3vw to 8vw
        const x = Math.random() * (window.innerWidth - 200);
        const y = Math.random() * (window.innerHeight - 100);
        
        block.className = 'word-block';
        block.textContent = word;
        block.style.cssText = `
            --rot: ${rotation}deg;
            --scale: ${scale};
            font-size: ${fontSize}vw;
            left: ${x}px;
            top: ${y}px;
            animation-delay: ${Math.random() * 2}s;
        `;
        
        return block;
    }

    function generateBlocks() {
        // Remove old blocks
        const existing = document.querySelectorAll('.word-block');
        if (existing.length > 30) {
            existing[0].remove();
        }
        
        // Add new blocks
        const newBlock = createWordBlock();
        container.appendChild(newBlock);
    }

    // Generate initial blocks
    for (let i = 0; i < 20; i++) {
        container.appendChild(createWordBlock());
    }

    // Continuous generation
    setInterval(generateBlocks, 500);
    
    // Random movement every 3 seconds
    setInterval(() => {
        document.querySelectorAll('.word-block').forEach(block => {
            const x = Math.random() * (window.innerWidth - 200);
            const y = Math.random() * (window.innerHeight - 100);
            block.style.left = `${x}px`;
            block.style.top = `${y}px`;
        });
    }, 3000);

    // Ticker code from previous version
    function generateTickerText() {
        return Array.from({length: 20}, () => {
            const num = (Math.random() * 1000).toFixed(2);
            const change = Math.random() > 0.5 ? `↑${(Math.random() * 10).toFixed(2)}` : `↓${(Math.random() * 10).toFixed(2)}`;
            return `${num} ${change} • `;
        }).join(' ');
    }

    function updateTicker() {
        ticker.innerHTML = 'TICKER • ' + generateTickerText();
        ticker.style.animation = 'none';
        void ticker.offsetWidth;
        ticker.style.animation = 'ticker-scroll 30s linear infinite';
    }

    updateTicker();
    setInterval(updateTicker, 30000);
});
