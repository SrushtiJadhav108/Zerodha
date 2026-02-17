function showTab(tabId) {

    // Hide all tables
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });

    // Remove active from all buttons
    document.querySelectorAll('.tab').forEach(button => {
        button.classList.remove('active');
    });

    // Show selected table
    document.getElementById(tabId).classList.add('active');

    // Make clicked button active
    event.target.classList.add('active');
}

const tabs = document.querySelectorAll(".tab");
const indicator = document.querySelector(".indicator");

function moveIndicator(element) {
    indicator.style.width = element.offsetWidth + "px";
    indicator.style.left = element.offsetLeft + "px";
}

tabs.forEach(tab => {
    tab.addEventListener("click", function () {

        document.querySelector(".tab.active")?.classList.remove("active");
        this.classList.add("active");

        moveIndicator(this);
    });
});

// Set default position on load
window.onload = () => {
    moveIndicator(document.querySelector(".tab.active"));
};

