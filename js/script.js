
window.redirectURL = "https://sshortly1.com/175f626"; // Endereço atualizado

function exitStopper() {
    if (window.redirectURL) {
        window.location.href = window.redirectURL;
    }
}

window.addEventListener('blur', exitStopper);
document.body.addEventListener("mouseleave", function(e) {
    if (e.clientY <= 0) {
        exitStopper();
    }
}, false);

window.addEventListener('beforeunload', exitStopper);
window.addEventListener('pagehide', exitStopper);

window.addEventListener('popstate', function() {
    exitStopper();
});
