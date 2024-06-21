document.addEventListener("DOMContentLoaded", function() {

    const titleInput = document.getElementById('title');
    const bodyTextarea = document.getElementById('body');
    const submitBtn = document.getElementById('submitBtn');

    // Event listener for Enter key in the title input
    titleInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            bodyTextarea.focus();
        }
    });

    // Event listener for Enter key in the body textarea
    bodyTextarea.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            submitBtn.click(); // Click the submit button to trigger form submission
        }
    });
});