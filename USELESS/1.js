document.addEventListener("DOMContentLoaded", function () {
    const headingText = "CreepItReal";
    const headingElement = document.getElementById("animatedHeading");
    let index = 0;

    function typeWriter() {
        if (index < headingText.length) {
            headingElement.innerHTML += headingText.charAt(index);
            index++;
            setTimeout(typeWriter, 150); 
        }
    }

    typeWriter();
});


document.getElementById("redirectButton").addEventListener("click", function() {
    window.location.href = "p2.html"; 
});
