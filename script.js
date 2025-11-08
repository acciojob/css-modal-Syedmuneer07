//your JS code here. If required.
var modal = document.getElementById("myModal");

// Get open modal button
var openModalBtn = document.getElementById("openModal");

// Get close button
var closeModalBtn = document.getElementsByClassName("close-modal")[0];

// Listen for open click
openModalBtn.onclick = function() {
    modal.style.display = "block";
}

// Listen for close click
closeModalBtn.onclick = function() {
    modal.style.display = "none";
}

// Listen for outside click
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}