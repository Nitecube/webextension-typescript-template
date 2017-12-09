namespace Sidebar {
    const now = document.getElementById("now");
    
    if (now) {
        now.textContent = new Date().toISOString();
    }
}
