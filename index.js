 var kendaraan = [];
 var waktu = [];

 var buttonSubmit = document.querySelector(".submit");

 buttonSubmit.addEventListener('click', function (event) {
     tampil(event);
 });


 var input = document.querySelector(".input");

 input.addEventListener("keypress", function (evt) {

     if (evt.key == "Enter") {

         tampil(evt);
     }


     console.log(evt.key);

 })




 function tampil() {

     var today = new Date();
     var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
     var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
     var dateTime = date + ' ' + time;


     var h2Tampil = document.querySelector(".h2-tampil");
     var h3Tampil = document.querySelector(".h3-tampil");
     var valueFrom = document.querySelector("#inputNomorPolisi").value;
     h2Tampil.innerHTML = valueFrom.toUpperCase();
     h3Tampil.innerHTML = dateTime;

     push(valueFrom.toUpperCase(), dateTime)

     setTimeout(() => {
         h2Tampil.innerHTML = " ";
         h3Tampil.innerHTML = " ";
     }, 3000);

 }

 function push(nopol, waktu) {

     kendaraan.push(nopol);



     //  var tambah = document.querySelector('.tr').append();
     var tambah = `<table width="500px">
<tr class="tr">
    <th>Nomor Polisi</th>
    <th>Waktu (Jam) </th>
</tr>`



     for (let i = 0; i < kendaraan.length; i++) {
         tambah += `<tr>
        <td>` +
             kendaraan[i] +
             `</td>
        <td>` + waktu + `</td>
    </tr>`
     }
     tambah += `</table>`

     document.querySelector('.table').innerHTML = tambah;

 }

 // When the user scrolls the page, execute myFunction
 window.onscroll = function () {
     stickyNav()
 };

 // Get the navbar
 var navbar = document.querySelector("nav");

 // Get the offset position of the navbar
 var sticky = navbar.offsetTop;

 // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
 function stickyNav() {
     if (window.pageYOffset >= sticky) {
         navbar.classList.add("sticky")
     } else {
         navbar.classList.remove("sticky");
     }
 }