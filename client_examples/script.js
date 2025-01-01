document.getElementById('login').onclick = function() {
    document.getElementById('login-modal').style.display = 'flex';
}

document.querySelectorAll('.close').forEach(function(element) {
    element.onclick = function() {
        this.parentElement.parentElement.style.display = 'none';
    }
});

document.querySelectorAll('.request-link').forEach(function(element) {
    element.onclick = function() {
        document.getElementById('request-modal').style.display = 'flex';
    }
});