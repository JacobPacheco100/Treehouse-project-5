baguetteBox.run('.gallery');
// const search = new Filter('search', 'data-caption'); 

// JavaScript code
function search_animal() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('img');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {  // <--- I think this is what its checking for
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}
