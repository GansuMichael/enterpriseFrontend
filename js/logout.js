logoutBtn.addEventListener(
    "click",
    () => {
        deleteToken();
        window.location.href =
        "./login.html"
    }
);