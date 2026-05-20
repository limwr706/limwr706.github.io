// 홀로그램 카드 3D 마우스 인터랙션 로직
const card = document.getElementById('profileCard');

if (card) {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -15; 
        const rotateY = ((x - centerX) / centerX) * 15;

        const bgX = (x / rect.width) * 100;
        const bgY = (y / rect.height) * 100;

        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        card.style.setProperty('--bg-x', `${bgX}%`);
        card.style.setProperty('--bg-y', `${bgY}%`);
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = `rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        card.style.setProperty('--bg-x', `50%`);
        card.style.setProperty('--bg-y', `50%`);
    });
}