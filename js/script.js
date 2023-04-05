let bookedSeats = []

function send_handle(){

    let num=document.getElementById("number").value;
  
    let msg= document.getElementById("msg").value;
  
      let name= document.getElementById("name").value;
    
    var win = window.open(`https://wa.me/${num}?text=I%27m%20api%20msg%20hello%20${name}%20friend%20${msg}`, '_blank');
   // win.focus();
  }

if ($(".selectingSeat").length === 2) {
    // lorseque user click 2 fois pour selectionner un chaise vas acctiualiser la page
    location.reload();
}

function update_chaise(booked_seat_v) {

    var bus_num = $('#bus_numero').val();

    if (bus_num != '') {
        duplicate = bookedSeats.filter((item,
            index) => bookedSeats.indexOf(item) === index);
        var bs = duplicate + "," + booked_seat_v
        console.log(bs)
        var dataStr = "bus_no=" + bus_num + "&seat_booked=" + bs
        // clearData()
        // swal('Titulo', 'Contend', 'success');

        $.ajax({
            type: 'POST',
            url: 'php/update_chaise.php',
            //  cache: false,
            data: dataStr,
            async: true,
            success: function (result) {

            }
        });
    }
}
function update_chaise_choisis(booked_seat_v) {

    var bus_num = $('#bus_numero').val();

    if (bus_num != '') {
        duplicate = bookedSeats.filter((item,
            index) => bookedSeats.indexOf(item) === index && item != booked_seat_v);
        var bs = duplicate// + "," + booked_seat_v
        console.log(duplicate + "ddd")
        var dataStr = "bus_no=" + bus_num + "&seat_booked=" + bs
        // clearData()
        // swal('Titulo', 'Contend', 'success');

        $.ajax({
            type: 'POST',
            url: 'php/update_chaise.php',
            //  cache: false,
            data: dataStr,
            async: true,
            success: function (result) {

            }
        });
    }
}

function ajax_php(value) {
    if (value === "nombre_chaise") {
        var nbre_chaise = 0;
        $.ajax({
            type: "post",
            dataType: "json",
            url: "php/nbre_chaise.php", 'async': false,
            success: function (data) {

                $.each(data, function (index, item) {
                    nbre_chaise = item.nombre_chaise;
                });
            }

        });
        return nbre_chaise;
    }


    if (value === "select_bus") {

    }
    if (value === "jsonSeat") {
        var jsonSeat;

        $.ajax({
            type: "post",
            dataType: "json",

            url: "php/seat.php",
            async: false,
            success: function (data) {
                jsonSeat = data
                // location.href="php/seat.php"
            },
        });
        return jsonSeat
    }

}

//verifer les chaise reserver


var settings = {
    rows: 3,
    cols: 5,
    rowCssPrefix: 'row-',
    colCssPrefix: 'col-',
    seatWidth: 100,
    seatHeight: 100,
    seatCss: 'seat',
    selectedSeatCss: 'selectedSeat',
    selectingSeatCss: 'selectingSeat'
};
function initialiser(reservedSeat) {

    var str = [], seatNo, className;
    for (i = 0; i < settings.rows; i++) {
        for (j = 0; j < settings.cols; j++) {
            seatNo = (i + j * settings.rows + 1);
            className = settings.seatCss + ' ' + settings.rowCssPrefix + i.toString() + ' ' + settings.colCssPrefix + j.toString();
            if ($.isArray(reservedSeat) && $.inArray(seatNo, reservedSeat) != -1) {
                className += ' ' + settings.selectedSeatCss;
            }
            str.push('<li class="' + className + '"' +
                'style="top:' + (i * settings.seatHeight).toString() + 'px;left:' + (j * settings.seatWidth).toString() + 'px">' +
                '<a title="' + seatNo + '" id="' + seatNo + '">' + seatNo + '</a>' +
                '</li>');
        }
    }
    $('#place').html(str.join(""));
    // location.reload();
};
// case I: Show from starting
// init();

// Case II: If already booked
function valide_chaise() {

    // cette fonction pour 

    chaiseData = ajax_php("jsonSeat");

//trouver umero du bus dans json php puis ajout , pour array qui contient toute les chaise reserver 
    let seatsBooked = chaiseData.find(({ bus_no }) => {
        return bus_no === document.getElementById("bus_numero").value;

    }).seat_booked;
    if (seatsBooked) {
        seatsBooked = seatsBooked.split(",");

        seatsBooked.forEach(seatNo => {
            // console.log(seatsBooked+bookedSeats)

            bookedSeats.push(parseInt(seatNo));
        })

        initialiser(bookedSeats);

        $('.' + settings.seatCss).click(function () {

            if ($(this).hasClass(settings.selectedSeatCss)) {

                alert('This seat is already reserved');

            }
            else if ($(".selectingSeat").length < 1) {
                $(this).toggleClass(settings.selectingSeatCss);

                $.each($(' #place li.' + settings.selectingSeatCss + ' a'), function (index, value) {
                    selected = $(this).attr('title');
                });
                console.log(selected);
                if (confirm("tu est sur de  cette chaise ?")) {
                    document.getElementById("chaise_numero").value = selected

                    update_chaise(selected);
                    // location.reload();
                }
            }
            else {
                if (confirm("tu veux changer cette chaise ? ")) {
                    update_chaise_choisis(selected);

                    // $(this).toggleClass(settings.selectingSeatCss);
                    location.reload();
                }
            }


        });

        $('#btnShow').click(function () {
            var str = [];
            $.each($('#place li.' + settings.selectedSeatCss + ' a, #place li.' + settings.selectingSeatCss + ' a'), function (index, value) {
                str.push($(this).attr('title'));
            });
            alert(str.join(','));
        })

        $('#btnShowNew').click(function () {
            var str = [], item;
            $.each($('#place li.' + settings.selectingSeatCss + ' a'), function (index, value) {
                item = $(this).attr('title');
                str.push(item);
            });
            alert(str.join(','));
        })
    }
}


// return seatsBooked;

$(document).on('change', '#cat1', function (e) {
    // location.reload();
    console.log(this.options[e.target.selectedIndex].text);
    document.getElementById("bus_numero").value = this.options[e.target.selectedIndex].text
    bookedSeats = []
    valide_chaise()
    console.log($('#cat1 option').length);
});

$("#reload").on("click", function () {
    location.reload();

});
$("#truncate").on("click", function () {
    if (confirm("tu veux vider toute les chaise du bus")) {

        $.ajax({
            type: 'POST',
            url: 'php/truncate.php',
            //  cache: false,
            async: true,
            success: function (result) {

            }
        });
    }
});
let count = 0;
const select = document.getElementById('cat1');
select.addEventListener('click', () => {
    count++;
    //   console.log(`Number of clicks: ${count}`);
});
// var stop=document.getElementById('cat1').innerHTML="jjhj";
$("#cat1").on("click", function () {
    //prenndre la valeur du input direction puis envoiyer vers requet sql qui Select bus_no  from seats where direction='$dir'

    if ($(".cat1").length === 2) {
        location.reload();
    }
    if (count == 1) {
        var dir = $('#direction').val();
        // location.reload();

        console.log(dir + "dffd")
        datad = "direction=" + dir
        var nbre_chaise = 0;
        $.ajax({
            type: "post",
            dataType: "json",
            url: "php/select.php",
            data: datad,
            async: false,
            success: function (data) {

                //cette fonction inject ou remplir les option dans le champs select par les doner dans base de donnes
                options = '';
                a = '';

                $.each(data, function (index, item) {
                    options += '<option id=option"' + index + '"  value="' + item.bus_no + '">' + item.bus_no + '</option>';

                });
                $('#cat1').append(options);

            }

        });
    }
    else
        // location.reload();
        console.log()
});
initialiser(bookedSeats);

    // var dir = $('#direction').val();
    // select_bus(dir)
    function uploadImage() {
        var fileInput = $('#fileInput')[0];
        var file = fileInput.files[0];
        var formData = new FormData();
        formData.append('file', file);
        $.ajax({
          url: '/upload',
          type: 'POST',
          data: formData,
          processData: false,
          contentType: false,
          success: function () {
            console.log('Image uploaded successfully!');
          },
          error: function () {
            console.error('Error while uploading image.');
          }
        });
      }