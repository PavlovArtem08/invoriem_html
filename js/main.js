$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 2,
                margin: 32,
                loop: true,
                dots: false,
                // stagePadding: 90,
            },
            // breakpoint from 601 up
            601: {
                items: 3,
                margin: 32,
                loop: true,
                dots: false,

            },
            // breakpoint from 1001 up
            1001: {
                items: 3,
                margin: 48,
                dots: false,
            },
        },
    });
  });

//   ----------video------------
const videoBtn = document.querySelector('#video-btn');
const videoPicture = document.querySelector('.video__picture');
const videoWrapper = document.querySelector('.video');
const video = document.querySelector('#video-file');

videoWrapper.addEventListener('click', function () {
    
    if (video.paused) {
        videoPicture.classList.add('hidden');
        videoWrapper.classList.remove('video-overlay');
        videoBtn.classList.add('none');
        video.play();
    } else {
        // videoPicture.classList.remove('none');
        videoWrapper.classList.add('video-overlay');
        videoBtn.classList.remove('none');
        video.pause();
    }
});

// ------------Mobile Nav-----------
const openNavbtn = document.querySelector('#openMobileNav');
const closeNavbtn = document.querySelector('closeMobileNav');
const mobileNav = document.querySelector('#mobileNav');

openNavbtn.onclick = function () {
    mobileNav.classList.remove('none')
    document.body.classList.add('no-scroll');
}

closeNavbtn.onclick = function () {
    mobileNav.classList.add('none');
    document.body.classList.remove('no-scroll');
};