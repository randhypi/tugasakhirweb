var buttonSubmi = document.querySelector(".submit");

buttonSubmi.addEventListener('click', function (event) {
    tampil(event);
});


var input = document.querySelector(".input");

input.addEventListener("keypress", function (evt) {

    if (evt.key == "Enter") {

        tampil(evt);
    }


    console.log(evt.key);

})


function tampil(event) {

    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;


    var h2Tampil = document.querySelector(".h2-tampil");
    var h3Tampil = document.querySelector(".h3-tampil");
    var valueFrom = document.querySelector("#inputNomorPolisi").value;
    h2Tampil.innerHTML = valueFrom.toUpperCase();
    h3Tampil.innerHTML = dateTime;


    setTimeout(() => {
        h2Tampil.innerHTML = " ";
        h3Tampil.innerHTML = " ";
    }, 3000);

}