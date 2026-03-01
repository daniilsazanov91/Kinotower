function openMovie() {
    window.location.href = "movie.html";
}

function showTab(tab) {
    document.getElementById('reviews').classList.add('hidden');
    document.getElementById('ratings').classList.add('hidden');
    document.getElementById(tab).classList.remove('hidden');
}