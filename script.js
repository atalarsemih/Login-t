window.onload = function() {
    createStars();
};


function createStars() {
    var numberOfStars = 60; // Eklenen yıldız sayısı
    var body = document.body;

    for (var i = 0; i < numberOfStars; i++) {
        var star = document.createElement('div');
        star.classList.add('star');
        star.style.top = Math.random() * 100 + '%'; 
        star.style.left = Math.random() * 100 + '%'; 
        star.style.animationDuration = (Math.random() * 5 + 3) + 's';
        body.appendChild(star);
    }
}
document.addEventListener('mousemove', function(event) {
    var mouseX = event.clientX;
    var mouseY = event.clientY;
    var box = document.querySelector('.login-container');
    box.style.width = mouseX + 'px';
    box.style.height = mouseY + 'px';
});
