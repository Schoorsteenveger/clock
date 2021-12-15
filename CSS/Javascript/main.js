/*
 * Starts any clocks using the user's local time
 * From: cssanimation.rocks/clocks
 */
function initLocalClocks() {
    // Get the local time using JS
    let date = new Date;
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hours = date.getHours();

    // Create an object with each hand and it's angle in degrees
    let hands = [
        {
            hand: 'handHour',
            angle: (hours * 30) + (minutes / 2)
        },
        {
            hand: 'handMinute',
            angle: (minutes * 6)
        },
        {
            hand: 'handSec',
            angle: (seconds * 6)
        }
    ];
    // Loop through each of these hands to set their angle
    for (let j = 0; j < hands.length; j++) {
        const elements = document.querySelectorAll('.' + hands[j].hand);
        for (var k = 0; k < elements.length; k++) {
            elements[k].style.webkitTransform = 'rotateZ(' + hands[j].angle + 'deg)';
            elements[k].style.transform = 'rotateZ(' + hands[j].angle + 'deg)';
            // If this is a minute hand, note the seconds position (to calculate minute position later)
            if (hands[j].hand === 'minutes') {
                elements[k].parentNode.setAttribute('data-second-angle', hands[j + 1].angle);
            }
        }
    }
}