//NAV BUTTON
function toggle_hide(btn){
    btn.classList.add('hidden')
}

function toggle_appear(btn){
    btn.classList.remove('hidden')
}

// SCROLL BUTTONS — supports multiple sliders
document.querySelectorAll('.list-container').forEach(container => {
    const moviesList = container.querySelector('.movies-list');
    const scrollBtns = container.querySelectorAll('.scroll-btn');

    // Calculate one movie width for this specific list
    function getMovieWidth() {
        const movie = moviesList.querySelector('.movie-preview');
        if (!movie) return 0;
        const style = window.getComputedStyle(movie);
        const margin = parseFloat(style.marginLeft) + parseFloat(style.marginRight);
        return movie.offsetWidth + margin;
    }

    // Add event listeners to the buttons inside this container
    scrollBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const scrollAmount = getMovieWidth();
            if (btn.classList.contains('scroll-right')) {
                moviesList.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            } else {
                moviesList.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            }
        });
    });
});

