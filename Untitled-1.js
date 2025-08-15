// Particle Effect
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    
    // Create particles
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random position & size
        particle.style.left = '${Math.random() * 100}%';
        particle.style.top = '${Math.random() * 100}%';
        particle.style.width = '${Math.random() * 3 + 1}px';
        particle.style.height = particle.style.width;
        
        // Random animation
        particle.style.animation = 'floot ' + (Math.random() * 3 + 2) + 's ease-in-out infinite';
        
        container.appendChild(particle);
    }
});

// Add floating animation in CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0% { transform: translateY(0) translateX(0); opacity: 0; }
        50% { opacity: 1; }
        100% { transform: translateY(-100vh) translateX(20px); opacity: 0; }
    }
    
    .particle {
        position: absolute;
        background: rgba(0, 255, 255, 0.7);
        border-radius: 50%;
        pointer-events: none;
        z-index: -1;
    }
`;
document.head.appendChild(style);