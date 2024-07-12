document.addEventListener('DOMContentLoaded', () => {
    const games = document.querySelectorAll('#game-tracker input[type="checkbox"]');

    games.forEach(game => {
        game.addEventListener('change', () => {
            if (game.checked) {
                game.parentElement.style.textDecoration = 'line-through';
            } else {
                game.parentElement.style.textDecoration = 'none';
            }
        });
    });
});
