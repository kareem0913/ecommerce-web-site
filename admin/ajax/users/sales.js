
$(document).ready(function(){
    const url = "http://localhost/ecommerce/admin/server/api/products/all-orders.php";
    $.ajax({
        url : url,
        methd : 'get',
        success : res => {
            // return;
            $('#pagination').pagination({
                dataSource : res,
                callback : (data, pagination) => {
                    $('tbody').html(``);
                    data.forEach(element => {
                        $('tbody').append(`<hr>`);
                        element.forEach((item, i) => {
                            $('tbody').append(`
                                <tr>
                                    <td>${++i}</td>
                                    <td>${item.username}</td>
                                    <td>${item.email}</td>
                                    <td>${item.phone}</td>
                                    <td class=na><a href='http://localhost/ecommerce/product-detail.php?id=${item.id}'>${item.name}</a></td>
                                    <td>${item.price - item.sale}</td>
                                    <td>${item.size}</td>
                                    <td>${item.color}</td>
                                    <td>${item.count}</td>
                                    <td>
                                        <button  type='button' class='del del-order ml-1 btn btn-primary' data-toggle='modal' data-target='#modal' data_id=${item.id_order}>
                                            Sold
                                        </button>
                                    </td>
                                </tr>
                                `)
                        })
                    });
                },
                pageSize : 4,
                activeClassName : 'pag-active',
            })
        },
        error : err => console.log(err),
    });
    $(document).on('click', '.del-order', function(){
        const id = $(this).attr('data_id');
        $('.confirm-delete').attr('data_id', id);
        $('.modal-body').text('are you sure you want to delete order');
    });
    $(document).on('click', '.confirm-delete', function(){
        const id = $('.confirm-delete').attr('data_id');
        $.ajax({
            url : "http://localhost/ecommerce/admin/server/api/products/sold-order.php",
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
})