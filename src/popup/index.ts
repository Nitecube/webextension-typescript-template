namespace Popup {
    const now = document.getElementById("now");
    
    if (now) {
        now.textContent = new Date().toLocaleString();
    }
}