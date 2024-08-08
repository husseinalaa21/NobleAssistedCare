window.onscroll = function() {myFunction()};
    
var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

 var menu_list = document.getElementById("menu_list")
 var mls = false

 function openlist(element) {
    element.classList.toggle('opened');
    element.setAttribute('aria-expanded', element.classList.contains('opened'));
    
    if(mls == false){
        menu_list.style.display = "block"
        mls = true
    } else {
        menu_list.style.display = "none"
        mls = false
    }
}