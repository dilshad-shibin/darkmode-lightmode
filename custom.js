function applyTheme(theme) {
    document.body.classList.remove("tDark", "tLight", "tAuto")
    document.body.classList.add(theme)
}

let theme = localStorage.getItem("theme") || "tAuto";
applyTheme(theme);
document.querySelector("#themeSelector").value = theme;

document.querySelector("#themeSelector").addEventListener("change", function() {
    let currentTheme = this.value;
    applyTheme(currentTheme)
    localStorage.setItem("theme", currentTheme)
})