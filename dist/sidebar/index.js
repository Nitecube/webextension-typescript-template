"use strict";
var Sidebar;
(function (Sidebar) {
    const now = document.getElementById("now");
    if (now) {
        now.textContent = new Date().toISOString();
    }
})(Sidebar || (Sidebar = {}));
