function changeText() {
    const highlightedText = document.querySelector('.highlight');
    highlightedText.textContent = "the changed text";

    const specialText = document.getElementById('special-text');
    specialText.style.color = "green";
}