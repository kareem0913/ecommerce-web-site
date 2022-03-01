
var admins;
// get admins fomr database
var session_login_admin = $('input[name=session_login_admin]').val();
var session_priv_admin = $('input[name=session_priv_admin]').val();
$(document).ready(function(){
    $.ajax({
        url : "http://localhost/ecommerce/admin/server/api/administration/readAll.php",
        method : 'get',
        success : (res) => {
            admins = res
            $('#pagination').pagination({
                dataSource : (done) => {
                    result = [];
                    res.forEach((item, i) => {
                        result.push(item)
                    });

                    done(result)
                },
                callback : (data, pagination) => {
                    $('tbody').html(``);
                    data.forEach((item, i) => {
                        $('tbody').append(`
                            <tr>
                                <td>${++i}</td>
                                <td class=na>${item.name}</td>
                                <td>${item.email}</td>
                                <td>${item.adress}</td>
                                <td>${item.age}</td>
                                <td>${item.gander == 0 ? 'male' : 'female'}</td>
                                <td>${item.priv == 300 ? 'owner' : item.priv == 200 ? 'assistant' : item.priv == 100 ? 'super' : ''}</td>
                                <td>${item.start_date}</td>
                                <th>
                                    ${session_priv_admin < item.priv ? 'You cannot control this admin' :
                                        `<button  type='button' class='edit ml-1 btn btn-primary' data-toggle='modal' data-target='#Edit' data_id=${item.id}>
                                            Edit
                                        </button>
                                        <button  type='button' class='del ml-1 btn btn-primary' data-toggle='modal' data-target='#delete' data_id=${item.id}>
                                            Delete
                                        </button>`
                                }
                                </th>
                            </tr>
                            `)
                    });
                },
                pageSize : 4,
                activeClassName : 'pag-active',
            })
        },
        error : (err) => {
            // console.log(err);
        }
    });
})



// start get priv admins from database
$.ajax({
    url : "http://localhost/ecommerce/admin/server/api/administration/priv_rall.php",
    method : 'get',
    success : (res) => {

        res.forEach((item, i) => {
            // console.log(item);
            $("select[name=priv]").append(`
                ${session_priv_admin < item.priv_id ? '' : 
                `<option value=${item.priv_id}>${item.name}</option>`
            }
                `);
        });
    },
    error : (err) => {
        // console.log(err);
    },
});

//add admin in database
$('.adduser form').on('submit', function(event){
    event.preventDefault();
    var data = $(this).serializeArray();
    const obj = new Checkfile(data);
    if (obj.vildate()) {
        const url = "http://localhost/ecommerce/admin/server/api/administration/insert.php"
        $.ajax({
            url : url,
            method : 'post',
            data : new FormData(this),
            success : (res) => {
                $('.err').html(``);
                if ('email' in res) {
                    $(this).find('input[name=email]').siblings('.err').html(`<small style=color:red;font-size:15px>${res.email}</small>`)
                }else{
                    setTimeout(() => {
                        $('#exampleModalLong').modal('toggle');
                    }, 300)
                }
            },
            error : (err) => {
                // console.log(err);
            },
            contentType : false ,
            processData : false ,
            cache : false
        });
    }else{
        var error = obj.err;
        // console.log(error);
        var input = this.querySelectorAll('input');
        $(input).each((i , item) => {
            var n = $(item).attr('name');
            if (error.hasOwnProperty(n)) {
                $(item).siblings('.err').html(`<small style=color:red;font-size:15px>${error[n]}</small>`);
            }else{
                $(item).siblings('.err').html(``);
            }
        })
    }

});

// start delete admin form database
$(document).on('click', '.del', function(){
    var name = $(this).parent().siblings('.na').text();
    $('.del-body').text(`you showr you want delete ${name}`)
    var id = $(this).attr('data_id');
    $('.del-user').attr('data_id',id);
});

$('.del-user').click(function(){
    var id = $('.del-user').attr('data_id');
    $.ajax({
        url : "http://localhost/ecommerce/admin/server/api/administration/del.php",
        method : 'post',
        data : {id},
        success : (res) => {
            if ('error' in res) {
                alert(res.error);
            }else{
                var tr = $(`.del[data_id=${id}]`);
                $(tr).parent().parent().remove();
                setTimeout(() => {
                    $('#delete').modal('toggle');
                }, 300)
            }
        },
        error : (err) => {
            // console.log(err);
        }
    })
})

// start edit admins in database
$(document).on('click', '.edit', function(){
    // send id to button submit
    var id = $(this).attr('data_id');
    $('.subedit').attr('data_id',id);
    //////
    var td = $(this).parent().parent().find('td');
    var data = {};
    var name = ['id_table', 'name', 'email', 'address', 'age', 'gander', 'priv', 'start_date'];
    $(td).each((i, item) => {
        data[name[i]] = $(item).text();
    });

    $('.edituser form input[name=name]').attr('value', data.name);
    $('.edituser form input[name=email]').attr('value', data.email);
    $('.edituser form input[name=adress]').attr('value', data.address);
    $('.edituser form input[name=age]').attr('value', data.age);
    $('.edituser form input[name=start_date]').attr('value', data.start_date);
    if (data.gander == 'male') {
        $('.edituser form .male').attr('checked', 'checked');
    }else{
        $('.edituser form .female').attr('checked', 'checked');
    }

    // insert name to select elemetn by
    var i = 0;
    data.priv == 'owner' ? i = 300 :
    data.priv == 'assistant' ? i = 200 :
    i = 100
    $(".edituser select").val(i).trigger("chosen:updated");
});

$('.edituser form').submit(function(event){
    event.preventDefault();
    var data = $(this).serializeArray();
    const obj  = new Update(data);
    var formData = new FormData(this);
    var id = $('.subedit').attr('data_id');
    formData.append('id', id);
    if (obj.cheack()) {
        $.ajax({
            url : "http://localhost/ecommerce/admin/server/api/administration/update.php",
            method : 'post',
            data : formData,
            success : (res) => {
                setTimeout(() => {
                    $('#Edit').modal('toggle');
                }, 300);
                alert(res.message)
                // console.log(res.message);
            },
            error : (err) => {
                // console.log(err);
            },
            contentType : false ,
            processData : false ,
            cache : false
        })
    }else{
        var error = obj.err;
        // console.log(error);
        var input = this.querySelectorAll('input');
        $(input).each((i , item) => {
            var n = $(item).attr('name');
            if (error.hasOwnProperty(n)) {
                $(item).siblings('.err').html(`<small style=color:red;font-size:15px>${error[n]}</small>`);
            }else{
                $(item).siblings('.err').html(``);
            }
        })
    }
})

// Find the admin in the table
$(document).ajaxComplete(function(){
    $('.search').keyup(function(){
        let value = $('.search').val();
        value = value.replaceAll(/ /g, '');
        $('tbody').html(``);
        $('#pagination').pagination({
            dataSource : (done) => {
                var result = [];
                admins.forEach((item, i) => {
                    if (/\d/.test(value)) {
                        item.email.includes(value) ? result.push(item) : '';
                    }else{
                        item.name.includes(value) ? result.push(item) : item.email.includes(value) ? result.push(item) : '';
                    }
                });
                done(result)
            },
            callback : (data, pagination) => {
                $('tbody').html(``);
                data.forEach((item, i) => {
                    $('tbody').append(`
                        <tr>
                            <td>${++i}</td>
                            <td class=na>${item.name}</td>
                            <td>${item.email}</td>
                            <td>${item.adress}</td>
                            <td>${item.age}</td>
                            <td>${item.gander == 0 ? 'male' : 'female'}</td>
                            <td>${item.priv == 300 ? 'owner' : item.priv == 200 ? 'assistant' : item.priv == 100 ? 'super' : ''}</td>
                            <td>${item.start_date}</td>
                            <th>
                                <button  type='button' class='edit ml-1 btn btn-primary' data-toggle='modal' data-target='#Edit' data_id=${item.id}>
                                    Edit
                                </button>
                                <button  type='button' class='del ml-1 btn btn-primary' data-toggle='modal' data-target='#delete' data_id=${item.id}>
                                    Delete
                                </button>
                            </th>
                        </tr>
                        `)
                });
            },
            pageSize : 2,
            activeClassName : 'pag-active',
        })
    })
})
