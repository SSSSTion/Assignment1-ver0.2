document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.choose-picture button');
    const displayPicture = document.getElementById('display-picture');

    buttons.forEach(button => {
        const imageUrl = button.getAttribute('data-image');

        button.style.backgroundImage = `url(${imageUrl})`;

        button.addEventListener('click', function() {
            displayPicture.src = imageUrl;
        });
    });
});
