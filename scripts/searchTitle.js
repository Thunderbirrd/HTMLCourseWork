(function () {
    if (!String.prototype.includes) {
        String.prototype.includes = function (search, start) {
            if (typeof start !== 'number') {
                start = 0;
            }
            if (start + search.length > this.length) {
                return false;
            } else {
                return this.indexOf(search, start) !== -1;
            }
        };
    }
}());

(function () {
    let search = document.querySelector(".search");
    let searchInput = document.querySelector(".search_input");
    document.querySelector(".search_button").addEventListener("click", function () {
        searchInput.value = "";
        search.classList.toggle("search_active");
    });

    searchInput.addEventListener("input", function () {
        document.body.scrollTop = 0;
        content.filter = searchInput.value;
        document.querySelector(".consoles").innerHTML = "";
        content.currentId = 0;
        addConsole();
    });

    window.addEventListener("scroll", function () {
        if (window.pageYOffset > document.documentElement.clientHeight) {
            search.classList.add("search_white_theme");
        } else {
            search.classList.remove("search_white_theme");
        }
    });
}());