window.addEventListener('DOMContentLoaded', () => {
    var divs = document.querySelectorAll('div');
    console.log(divs);

    for (const div of divs) {
        div.addEventListener('click', function(){
            var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
            this.style.backgroundColor = randomColor;
            console.log('click');
        })
    }

});