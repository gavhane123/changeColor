
let box = document.querySelector(".box");
function changeColor(Color){
    box.computedStyleMap.bacground = Color;
    document.querySelectorAll('span').forEach(function(item){
        item.classList.remove('active')
    })
    event.target.classList.add('active');
}