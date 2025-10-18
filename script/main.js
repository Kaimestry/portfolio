//NAV BUTTON
function toggle_hide(btn){
    btn.classList.add('hidden')
}

function toggle_appear(btn){
    btn.classList.remove('hidden')
}

//SCROLL BTN
    const moviesList = document.querySelector('.movies-list');
    const scrollBtns = document.querySelectorAll('.scroll-btn');

    // Get one movie's width (including margin)
    function getMovieWidth() {
        const movie = moviesList.querySelector('.movie-preview');
        if (!movie) return 0;
        const style = window.getComputedStyle(movie);
        const margin = parseFloat(style.marginLeft) + parseFloat(style.marginRight);
        return movie.offsetWidth + margin;
    }

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

