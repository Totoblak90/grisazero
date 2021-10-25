window.onload = () => {
    var style = window.getComputedStyle(document.getElementById("header"), null);
    style.getPropertyValue("height");

    const main = document.getElementById('main')
    main.style.marginTop = style.getPropertyValue("height");

}
