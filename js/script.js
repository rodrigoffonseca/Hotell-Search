// // front-end
// function search(city1,city2,city3,city4)={
//   this.city1=Mombasa;
//   this.city2=Nairobi;
//   this.city3=Kisumu;
//   this.city4=Nakuru;
// }
//
//
//
//
//
//
//
//       $(document).ready(function(){
//         $("#search").click(function(){
//         event.preventDefault()
//         function search() {
//         var city=document.getElementById("enter").value
//         }
//         if (city=this.city1){
//           $("#search").click(function(){
//           $
//         }
//
//
//         });
//         });
//
//
//
//
//
//
//
//
//
//
//
//         //
//         // footer{
//         //   height: 400px;
//         //   background-color: #0D122C;
//         // }
//         // footer p{
//         //   font-size: 150px;
//         //   transform: translate(55%,-50%);
//         // }
//         // footer i{
//         //   font-size: 100px;
//         // }
//         function filterFunction() {
//             var input, filter, ul, li, a, i;
//             input = document.getElementById("myInput");
//             filter = input.value.toUpperCase();
//             div = document.getElementById("myDropdown");
//             a = div.getElementsByTagName("a");
//             for (i = 0; i < a.length; i++) {
//                 if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
//                     a[i].style.display = "";
//                 } else {
//                     a[i].style.display = "none";
//                 }
//             }
//         }
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
