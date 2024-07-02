document.addEventListener('DOMContentLoaded', () => {

});
    document.addEventListener('DOMContentLoaded', function() {

        const movieCards = document.querySelectorAll('.movie-card');


        movieCards.forEach(function(card) {

            const buyTicketLink = card.querySelector('.buy-ticket-link');

 
            card.addEventListener('mouseenter', function() {
                buyTicketLink.style.display = 'inline-block';
            });


            card.addEventListener('mouseleave', function() {
                buyTicketLink.style.display = 'none';
            });
        });
    });
    document.addEventListener('DOMContentLoaded', function() {
        var video = document.getElementById('video-background');
        video.play();
    });

