let href = decodeURIComponent(window.location.hash).substr(1);
let link = document.getElementById("link");

console.log(href);
link.setAttribute("href", href);
link.addEventListener("click", (event) => {
    console.log(event);
});
