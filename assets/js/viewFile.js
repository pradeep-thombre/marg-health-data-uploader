$('#edit-box').hide();
$('#data-table').hide();
$.get("/api/getAll", function (data) {
    // iterating over data 
    for (let user of data) {
        addNewRow(user);
    }
    $(document).ready( function () {
        $('#data-table').DataTable();
        $('#data-table').show();
    });
    
}).fail(function (jqXHR, textStatus, errorThrown) {
    isError=true;
});

function addNewRow(data){
    let tableRow = document.createElement('tr'); // create one table row element and setting its inner html as json response
    tableRow.id = data._id;
    tableRow.innerHTML = (`
        <td id="cn${data.c_name}">${data.c_name}</td>
        <td id="cb${data.c_batch_no}">${data.c_batch_no}</td>
        <td id="ed${data.d_expiry_date}">${data.d_expiry_date}</td>
        <td id="bq${data.n_balance_qty}">${data.n_balance_qty}</td>
        <td id="cp${data.c_packaging}">${data.c_packaging}</td>
        <td id="uc${data.c_unique_code}">${data.c_unique_code}</td>
        <td id="cs${data.c_schemes}">${data.c_schemes}</td>
        <td id="nm${data.n_mrp}">${data.n_mrp}</td>
        <td id="cm${data.c_manufacturer}">${data.c_manufacturer}</td>
        <td id="hc${data.hsn_code}">${data.hsn_code}</td>
        <td>
            <i onClick="editClick('${data._id}')" class="fas fa-user-edit"></i>
            <i onClick="delClick('${data._id}')" class="fas fa-trash"></i>
        </td>
    `);
    document.getElementById('table-body').appendChild(tableRow); // adding row to existing table
}



function delClick(id){
    // calling api to delete from server 
    $.get("/api/delete/"+id, function (data) {
        let element=document.getElementById(id);
        let tablebody=document.getElementById('table-body');
        tablebody.removeChild(element);
    }).fail(function (jqXHR, textStatus, errorThrown) {
        console.log(errorThrown);
    });
}

function editClick(id){
    $("#edit-box").show();

    $.get("/api/searchById/"+id, function (data) {
        $("#edit-c_name").val(data.c_name);
        $("#edit-c_batch_no").val(data.c_batch_no);
        $("#edit-d_expiry_date").val(data.d_expiry_date);
        $("#edit-n_balance_qty").val(data.n_balance_qty);
        $("#edit-c_packaging").val(data.c_packaging);
        $("#edit-c_unique_code").val(data.c_unique_code);
        $("#edit-c_schemes").val(data.c_schemes);
        $("#edit-n_mrp").val(data.n_mrp);
        $("#edit-c_manufacturer").val(data.c_manufacturer);
        $("#edit-hsn_code").val(data.hsn_code);
        $("#edit-id").val(data._id);
    }).fail(function (jqXHR, textStatus, errorThrown) {
        console.log(errorThrown);
    });
}


// update users darta button - it updates the modified data in map
$("#update-button").click(function () {
    $('#edit-box').hide();
});