// get elements 
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("modalImg"); //refers to image in the modal aka when it's full screen. 
var caption = document.getElementById("caption"); 
var span = document.getElementsByClassName("close")[0];  

var img01 = document.getElementById("img01");   
var img02 = document.getElementById("img02"); 
var img03 = document.getElementById("img03");  
var img04 = document.getElementById("img04"); 
var img05 = document.getElementById("img05");   
var img06 = document.getElementById("img06"); 
var img07 = document.getElementById("img07");   
var img08 = document.getElementById("img08"); 
var img09 = document.getElementById("img09"); 
var img10 = document.getElementById("img10");  
var img11 = document.getElementById("img11");   
var img12 = document.getElementById("img12");  
var img13 = document.getElementById("img13");
var img14 = document.getElementById("img14");  

function popout(){
  modal.style.display = "block";
  modalImg.src = this.src;  // assign the src of the modal image to the same as the image from the box. 
  caption.innerHTML = this.alt; // use the "alt" text of the image as a caption
}

img01.addEventListener("click", popout); 
img02.addEventListener("click", popout); 
img03.addEventListener("click", popout); 
img04.addEventListener("click", popout); 
img05.addEventListener("click", popout); 
img06.addEventListener("click", popout); 
img07.addEventListener("click", popout); 
img08.addEventListener("click", popout); 
img09.addEventListener("click", popout); 
img10.addEventListener("click", popout); 
img11.addEventListener("click", popout); 
img12.addEventListener("click", popout); 
img13.addEventListener("click", popout); 
img14.addEventListener("click", popout); 

// click x to close the modal
span.onclick = function() {
  modal.style.display = "none";
}


/*
  if quilava img is selected, change the max-width of modal-content to 450px 

  after I can click on each individual image and it displays that image fullscreen in a modal... Then I can save a copy of this and change the code to do have it as a full screen slideshow instead of seperate modal images. 
  e.g. modal = project 3. 
       slideshow = project 4. 
*/