// @ts-check

document.addEventListener("DOMContentLoaded", () => {
    // Add logic for branch selection alerts
    const branchLinks = document.querySelectorAll('.gallery a');
    branchLinks.forEach(link => {
        if(link.getAttribute('href') === "#" || (link.querySelector('.desc') && link.querySelector('.desc').textContent !== 'CSE')) {
             link.addEventListener('click', (e) => {
                 if (link.getAttribute('href') === "#" || link.querySelector('.desc').textContent !== 'CSE') {
                     e.preventDefault();
                     alert('Currently, the service is only avaliable for the branch CSE and will get updated for other braches, Soon!!..,');
                 }
             });
        }
    });

    const arrows = document.querySelectorAll('.top-arrows');
    if (arrows.length > 0) {
        arrows[0].addEventListener('mouseover', () => sel1(1));
    }
    if (arrows.length > 1) {
        arrows[1].addEventListener('mouseover', () => sel1(2));
    }
});

/**
 * Toggles the visibility of the hero carousel images.
 * @param {number} k - The index of the image to display.
 * @returns {void}
 */
function sel1(k) {
    var x = document.getElementsByClassName("top-img");
    for (var i = 0; i < x.length; i++) {
        if (i == k) {
            x[i].style.display = "block";
        }
        else {
            x[i].style.display = "none";
        }
    }
}
