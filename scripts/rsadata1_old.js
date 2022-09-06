function openorclosemenu() {

  classlist1 = document.getElementsByClassName("navbar_side");

  for (var i = 0; i < classlist1.length; i++) {
    if (classlist1[i].style.display == "none") {
      classlist1[i].style.display = "block";
    }
    else if (classlist1[i].style.display != "none") {
      classlist1[i].style.display = "none";
    }
  }


  /* if on full mode, readjust width of main content div? */
}
document.querySelector(".navbar_top button").addEventListener("click", openorclosemenu);





// function keepnavbarside_open() {
//   console.log('asdfldksajf');
//   if (window.innerWidth > 700) {
//     classlist1 = document.getElementsByClassName("navbar_side");
//     classlist1[0].style.display == "block";
//   }
// }
// window.addEventListener('resize', keepnavbarside_open);
window.addEventListener('resize', console.log("helo reisze"));
