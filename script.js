document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.liquid-glass-card');
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    
    setTimeout(() => {
        card.style.transition = 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
    }, 200);

    console.log("%c MIST System Online ", "background: #38bdf8; color: #000; font-weight: bold;");
    console.log("Interface Architecture: Liquid-Glass v1.0");
});

const styleSheet = document.createElement("style");
styleSheet.innerText = `
    @keyframes floatFluid {
        0% { transform: translate(0, 0) scale(1); }
        50% { transform: translate(50px, -50px) scale(1.1); }
        100% { transform: translate(-20px, 30px) scale(0.95); }
    }
`;
document.head.appendChild(styleSheet);
