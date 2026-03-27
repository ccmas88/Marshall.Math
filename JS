// Example: alert when a lesson page loads
document.addEventListener('DOMContentLoaded', () => {
    if(document.body.classList.contains('lesson-page')) {
        alert('Welcome to this lesson! Take notes and enjoy learning.');
    }
});
