$(document).ready(function() {
    var percent = 0,
        bar = $('.transition-timer-carousel-progress-bar'),
        crsl = $('#services-slider');

    function progressBarCarousel() {
        bar.css({ width: percent + '%' });
        percent = percent + 0.5;
        if (percent > 100) {
            crsl.carousel('next');
        }
    }
    crsl.carousel({
        interval: false,
        pause: false
    }).on('slid.bs.carousel', function() { percent = 0; });
    var barInterval = setInterval(progressBarCarousel, 30);
    crsl.hover(
        function() {
            clearInterval(barInterval);
        },
        function() {
            barInterval = setInterval(progressBarCarousel, 30);
        })
});
