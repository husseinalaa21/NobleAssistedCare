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
        menu_list.style.display = "flex"
        mls = true
    } else {
        menu_list.style.display = "none"
        mls = false
    }
}
function openModal(img) {
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-image');
  const captionText = document.getElementById('caption');
  
  modal.style.display = 'flex';
  modalImg.src = img.src;
  captionText.innerHTML = img.alt;
}

function closeModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
  const verticalLine = document.querySelector('.vertical-line');
  const careItems = document.querySelectorAll('.care-item');
  
  careItems.forEach((item, index) => {
      const dot = document.createElement('span');
      dot.classList.add('dot');
      dot.style.top = `${item.offsetTop + (item.offsetHeight / 2) - 5}px`; // Center the dot on the section
      verticalLine.appendChild(dot);
  });
});

var picure_id = "pic2"
function picure_select(a){
  document.getElementById(picure_id).className = "about_picures"
  a.className = "about_picures picure_selected"
  picure_id = a.id
}