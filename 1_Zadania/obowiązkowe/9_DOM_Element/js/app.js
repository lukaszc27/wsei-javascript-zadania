document.addEventListener("DOMContentLoaded", function () {
    var homeElement = document.getElementById("home");
    var childElements = document.querySelector(".oferts").children;
    var banner = document.querySelector(".ban");
    var blocks = document.querySelectorAll(".block");
    var links = document.querySelector(".links").children;

    /*
    Poniżej napisz kod rozwiązujący zadania
     */
    function getDatasInfos(elements) {
        var tab = [];

        for (let i =0; i < elements.length; i++) {
            tab.push(elements[i].getAttribute('data-color'));
        }
        return tab;
    }
    console.log(getDatasInfos(links));

    //// zadanie 2
    for (let i = 0; i < blocks.length; i++) {
        console.log(blocks[i].innerHTML);
    }
    for (let i = 0; i < blocks.length; i++) {
        console.log(blocks[i].outerHTML);
    }

    //// zadanie 3
    function getId(element) {
        return element.tagName;
    }
    console.log(getId(document.querySelector("#mainFooter")));

    //// zadanie 4
    function getTags(elements) {
        let tab = [];
        for (let i = 0; i < elements.length; i++) {
            tab.push(elements[i].tagName);
        }
        return tab;
    }
    console.log(getTags(childElements));

    //// zadanie 5
    function getClassInfo(element) {
        return element.className.split(' ');
    }
    console.log(getClassInfo(banner));

    //// zadanie 6
    var lis = document.querySelectorAll('nav li');
    function setDataDirection(elements) {
        for (let i = 0; i < elements.length; i++) {
            if (elements[i].hasAttribute('data-direction'))
                continue;
            else elements[i].setAttribute('data-direction', 'top');
        }
    }
    setDataDirection(lis);
});
