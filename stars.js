//yes, i used ai but i learned from it and did it myself😊

const starField = document.querySelector('.starry-background');  
const numberOfStars = 100;   

for (let i = 0; i < numberOfStars; i++) {  
    const star = document.createElement('div');  
    star.classList.add('star');   
    star.style.width = Math.random() * 3 + 'px';   
    star.style.height = star.style.width;   
    star.style.top = Math.random() * 100 + 'vh';   
    star.style.left = Math.random() * 100 + 'vw'; 
    star.style.animation = `twinkle ${Math.random() * 1 + 0.5}s infinite`;  
    starField.appendChild(star);  
} 