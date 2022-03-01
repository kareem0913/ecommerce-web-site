(function($){
    var messages = {};
    var count_message;
    $(document).ready(function(){
        const url = "http://localhost/ecommerce/admin/server/api/administration/messages.php";
        $.ajax({
            url : url,
            method : 'get',
            success : res => {
                const count = res.filter(el => el.unread == 0).length;
                count_message = count;
                $('.count-message').text(count);
                res.forEach(item => {
                    messages[item.id] = item.message;
                });
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
                                    <td>
                                        <button  type='button' class='modal-show-message btn btn-primary' data-toggle='modal' data-target='#modal' data_id=${item.id}>
                                            ${item.unread == 0 ? 'unread' : 'read'}
                                        </button>
                                    </td>
                                    <td>
                                        <button  type='button' class='del del-message ml-1 btn btn-primary' data-toggle='modal' data-target='#modal' data_id=${item.id}>
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
            error : err => console.log(err),
        })
    });
    // show message
    $(document).on('click', '.modal-show-message', function(){
        const id = $(this).attr('data_id');
        $('.modal-title').text('message');
        $('.modal-body').html(messages[id]);
        $('.confirm').removeClass('confirm-delete');
        const text = $(this).text().replace(/ |\n/g, '');
        if (text == 'unread') {
            $('.count-message').text(--count_message);
            $(this).text('read');
            $.ajax({
                url : 'http://localhost/ecommerce/admin/server/api/administration/read-unread_message.php',
                method : 'post',
                data : {id},
                success : res => console.log(res),
                error : err => console.log(err),
            });
        }
    });
    // delete message 
    $(document).on('click', '.del-message', function(){
        const id = $(this).attr('data_id');
        $('.modal-title').text('Delete');
        $('.modal-body').text('are you sure you want to delete message');
        $('.confirm').addClass('confirm-delete')
        $('.confirm-delete').attr('data_id',id);
    });
    $(document).on('click', '.confirm-delete', function(){
        const id = $('.confirm-delete').attr('data_id');
        $.ajax({
            url : "http://localhost/ecommerce/admin/server/api/administration/del-message.php",
            method : 'post',
            data : {id},
            success : (res) => {
                const tr = $(`.del[data_id=${id}]`);
                $(tr).parent().parent().remove();
                setTimeout(() => {
                    $('#modal').modal('toggle');
                }, 300);
            },
            error : (err) => {
                console.log(err);
            }
        })
    })

}) (jQuery)