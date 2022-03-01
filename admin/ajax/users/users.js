var users;
// get users fomr database
$(document).ready(function(){
    $.ajax({
        url : "http://localhost/ecommerce/admin/server/api/users/readAll.php",
        method : 'get',
        success : (res) => {
            users = res;
            $('#pagination').pagination({
                dataSource : res,
                callback : (data, pagination) => {
                    $('tbody').html(``);
                    data.forEach((item, i) => {
                        $('tbody').append(`
                            <tr>
                                <td>${++i}</td>
                                <td class=na>${item.username}</td>
                                <td>${item.email}</td>
                                <td>${item.phone}</td>
                                <td>${item.address}</td>
                                <td>
                                    <button  type='button' class='del ml-1 btn btn-primary' data-toggle='modal' data-target='#delete' data_id=${item.id}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                            `)
                    });
                },
                pageSize : 8,
                activeClassName : 'pag-active',
            })
        },
        error : (err) => {
            console.log(err);
        }
    });
});
// delete users 
$(document).on('click', '.del', function(){
    const name = $(this).parent().siblings('.na').text();
    $('.del-body').text(`you showr you want delete ${name}`)
    const id = $(this).attr('data_id');
    $('.del-user').attr('data_id',id);
});
$('.del-user').click(function(){
    const id = $('.del-user').attr('data_id');
    $.ajax({
        url : "http://localhost/ecommerce/admin/server/api/users/del.php",
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
});
// search users 
$(document).on('keyup', '.search', function(){
    let value = $('.search').val();
    value = value.replaceAll(/ /g, '');
    $('tbody').html(``);
    $('#pagination').pagination({
        dataSource : (done) => {
            let filter_users;
            filter_users = users.filter(el => el.username.includes(value));
            if (filter_users.length == 0) {
                filter_users = users.filter(el => el.email.includes(value));
            };
            done(filter_users)
        },
        callback : (data, pagination) => {
            $('tbody').html(``);
            data.forEach((item, i) => {
                $('tbody').append(`
                    <tr>
                        <td>${++i}</td>
                        <td class=na>${item.username}</td>
                        <td>${item.email}</td>
                        <td>${item.phone}</td>
                        <td>${item.address}</td>
                        <td>
                            <button  type='button' class='del ml-1 btn btn-primary' data-toggle='modal' data-target='#delete' data_id=${item.id}>
                                Delete
                            </button>
                        </td>
                    </tr>
                    `)
            });
        },
        pageSize : 8,
        activeClassName : 'pag-active',
    })
})