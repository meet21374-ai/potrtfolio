document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const status = document.getElementById('form-status');

    status.innerText = "Sending...";

    setTimeout(() => {
        status.innerText = `Thanks, ${name}! Message sent (demo).`;
        this.reset();
    }, 1500);
});
