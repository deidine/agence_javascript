
// $(document).ready(function () {
    $('#showdata').on('click', function(e) {
      e.preventDefault();
      $.ajax({
        url: "ajax.php",
        type: "POST",
        dataType: "html",   
        success: function(data){
          $("#all-data-user-table").html(data); 
        }
      });
    });

    $('#submit').on('click', function () {

  
        var direction = $('#direction').val();
        var date = $('#date').val();
        var depart = $('#depart').val(); 
        var tele = $('#tele').val();
        var prix = $('#prix').val();
        var nom = $('#nom').val();
        var bus_no = $('#bus_numero').val();
        var chaise = $('#chaise_numero').val();
        if(nom!='' && date!='' && tele!='' ){
            var dataStr = "nom=" + nom + "&direction=" + direction + "&chaise=" + chaise+ "&bus_no=" + bus_no + "&date=" + date + "&depart=" + depart + "&tele=" + tele +  "&prix=" + prix
            swal('Titulo', 'les donner son inserer', 'success');
            $.ajax({
                type: 'POST',
                url: './php/ajax.php',
                cache: false,
                data: dataStr,
                success: function (result) {
                    // alert(result);
  setInterval(() => {
      location.reload();
  }, 5000);

                }
            }); 
            clearData()
         
    
    }

    else{
        swal('les champs', 'touts les champs est obligatoire', 'error');

    }
    });

// });
let searchBtn = document.querySelector("#search-btn")
let searchForm = document.querySelector(".search-form")
let loginForm = document.querySelector(".login-form")
let menuBar = document.querySelector("#menu-bar")
let amenu = document.querySelector(".navbar")
let vidBtn = document.querySelectorAll(".video-btn")


function showbar() {
    searchBtn.classList.toggle("fa-times")
    searchForm.classList.toggle("active")
}

function showform() {
    loginForm.classList.add("active")
}

function hideform() {
    loginForm.classList.remove("active")

}

function showmenu() {
    menuBar.classList.toggle("fa-times")
    amenu.classList.toggle("active")
}
vidBtn.forEach(slide => {
    slide.addEventListener("click", function () {
        document.querySelector(".controls .blue").classList.remove("blue");
        slide.classList.add("blue");
        let src = slide.getAttribute("data-src");
        document.querySelector("#video-slider").src = src;
    })
})

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2500
    },
    breakpoints: {
        640: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
});

function show_price() {
    var a = document.getElementById("direction").value;
    switch (a) {
        case "noikchott":
            var prix = 5000;
            break;
        case "atar":
            var prix = 4000;
            break;
        case "noidibou":
            var prix = 6000;
            break;
        case "nema":
            var prix = 7000; 
           break;
    }
 document.getElementById("prix").value = prix;
}




function clearData() {
    nom.value = '';
    // direction.value = '';
   // date.value = '';
    // depart.value = '';
    tele.value = '';
    chaise.value = '';
    bus_no.value = '';

}