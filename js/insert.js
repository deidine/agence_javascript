$('#insert_booking').on('click', function () {

    var direction = $('#direction').val();

    var idCl = $('#id_client').val();
    var chaise = $('#chaise_numero').val();
    var bus = $('#bus_numero').val();

    if(idCl!=''   && bus!='' && chaise!='' ){
        var dataStr = "id_client=" +idCl +"&chaise=" + chaise + "&bus_no=" + bus 
        // clearData()
        alert('Titulo success');

     $.ajax({
         type: 'POST',
         url: 'php/php1/insert_client.php',
         cache: false,
         data: dataStr,
         success: function (result) {
             // swal('Titulo', 'Contend', 'success');
            //  alert(result);
    location.reload();

         }
     }); 
 
     

}

else{
    alert('les champs touts les champs est obligatoire error');

}
});

$('#submit_bus').on('click', function () {


    var chaise = $('#seat_booked').val();
    var bus = $('#busnumber').val();

    if( bus!='' ){
        var dataStr = "seat_booked=" + chaise + "&bus_no=" + bus 
        // clearData()
        // alert('Titulo success');

     $.ajax({
         type: 'POST',
         url: 'php/insert_bus.php',
         cache: false,
         data: dataStr,
         success: function (result) {
             // swal('Titulo', 'Contend', 'success');
             alert(result);
    // location.reload();

         }
     }); 
 
     

}

else{
    alert('les champs touts les champs est obligatoire error');

}
});
