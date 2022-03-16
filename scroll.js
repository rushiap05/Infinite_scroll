var listElm = document.getElementById("infinite-list");

// Add 20 items.
let nextItem = 1;
var loadMore = ()=> {
    for(var i = 0; i < 25; i++){
        var item = document.createElement('li');
        item.innerText= "Masai School " + nextItem++;
        listElm.appendChild(item);
    }
}

// Detect when scrolled to bottom.

listElm.addEventListener("scroll", function() {
    if(listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight) {
        loadMore()
    }
});

loadMore()