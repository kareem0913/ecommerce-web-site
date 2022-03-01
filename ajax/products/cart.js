var product_cart;
$(document).ready(function(){
    const session_user = $('input[name=session-user]').val();
    const session_cart = $('input[name=get-session]').val();
    // console.log(session);
    // session = session.slice(0, -1).split(';');
    if ( session_user == undefined && session_cart == 0) {
        $('.checkout').click(function(){
            window.location = 'http://localhost/ecommerce/login.html';
        })
        return;
    }
    if (session_cart == undefined || session_cart == 0) {
        return;
    }
    $.ajax({
        url : "http://localhost/ecommerce/admin/server/api/products/readCart.php",
        method : 'post',
        success : (res) => {
            product_cart = res;
            res.forEach((item, i) => {
                let image = item.img.split(',');
                image = image[0];
                $('tbody').append(`
                    <tr style='border:solid 1px white'>
                        <td class='column-1'>
                            <div data-id = ${item.id} class='cart-img-product b-rad-4 o-f-hidden'>
                                <img src='admin/server/api/products/images/${image}' alt='IMG-PRODUCT'>
                            </div>
                        </td>
                        <td class='column-2'><a style='color:#fff6c1' href="product-detail.php?id=${item.id}">${item.name}</a></td>
                        <td class='column-3'>${'$'+ [item.price - item.sale]}</td>
                        <td class="column-6">${'size' in item ? item.size : '______'}</td>
                        <td class="column-7">${'color' in item ? item.color : '______'}</td>
                        <td class='column-4'>
                            <div class='flex-w bo5 of-hidden w-size17'>
                                <button class='btn-num-product-down color1 flex-c-m size7 bg8 eff2'>
                                    <i class='fs-12 fa fa-minus' aria-hidden='true'></i>
                                </button>

                                <input class='size8 m-text18 t-center num-product' type='number' name='num-product1' value='${'numpro' in item ? item.numpro : 1}'>

                                <button class='btn-num-product-up color1 flex-c-m size7 bg8 eff2'>
                                    <i class='fs-12 fa fa-plus' aria-hidden='true'></i>
                                </button>
                            </div>
                        </td>
                        <td class='column-5'>${'$'+ ['numpro' in item ? [item.price - item.sale] * item.numpro : item.price - item.sale]}</td>
                    </tr>
                    `)
            });
        },
        complete : () => {
            // button num product in cart 
            $('.btn-num-product-down').on('click', function(e){
                e.preventDefault();
                var numProduct = Number($(this).next().val());
                var i = numProduct;
                if(numProduct > 1) $(this).next().val(numProduct - 1);
                const numpro = $(this).next().val();
                var price = $(this).parent().parent().siblings('.column-3').text();
                price = Number(price.replace('$', ''));
                $(this).parent().parent().siblings('.column-5').text('$'+price * numpro);
                var subtotal = Number($('.subtotal').text().replace('$', ''));
                i == 1 ? '' : $('.subtotal').text('$'+ [subtotal - price]);
            });
    
            $('.btn-num-product-up').on('click', function(e){
                e.preventDefault();
                let numProduct = Number($(this).prev().val());
                $(this).prev().val(numProduct + 1);
                let price = $(this).parent().parent().siblings('.column-3').text();
                price = Number(price.replace('$', ''));
                
                $(this).parent().parent().siblings('.column-5').text('$'+price * [numProduct+1]);
                let subtotal = Number($('.subtotal').text().replace('$', ''));
                $('.subtotal').text('$'+ [subtotal + price]);
            });
    
            $('.num-product').on('keyup', function(e){
                e.preventDefault();
                var numProduct = Number($(this).val());
                var price = $(this).parent().parent().siblings('.column-3').text();
                price = Number(price.replace('$', ''));
                $(this).parent().parent().siblings('.column-5').text('$'+price * numProduct);
                var subtotal = Number($('.subtotal').text().replace('$', ''));
                var subtotal = 0
                $('tbody .column-5').each((i, item) => {
                    var el = Number($(item).text().replace('$', ''));
                    subtotal += el;
                })
                $('.subtotal').text('$'+ subtotal);
            });
            // sub total product
            let subtotal = 0;
            $('tbody .column-5').each((i, item) => {
                var el = Number($(item).text().replace('$', ''));
                subtotal += el;
            });
            $('.subtotal').text('$'+ subtotal);

            // remove prouct form cart
            $('table .cart-img-product').on('click', function(){
                const id = $(this).attr('data-id');
                $.ajax({
                    url : "http://localhost/ecommerce/admin/server/api/products/del-from-cart.php",
                    method : 'post',
                    data : {id},
                    success : (res) => {
                        product_cart.forEach((item, i) => {
                            product_cart = product_cart.filter(item => item.id != id)
                        });
                        $(this).parent().parent().remove();
                        let val = $('.header-icons-noti').contents();
                        val = parseInt(val[0].data);
                        val--;
                    },
                    error : (err) => {
                        console.log(err);
                    },
                })
            });

            // process to checkout
            $('.checkout').click(function(){
                const session_user = $('input[name=session-user]').val();
                if (session_user == undefined) {
                    window.location = 'http://localhost/ecommerce/login.html';
                    return;
                }
                $('input[name=num-product1]').each((i, item) => {
                    product_cart[i]['numpro'] = $(item).val();
                });
                $.ajax({
                    url : "http://localhost/ecommerce/admin/server/api/products/sales.php",
                    method : 'post',
                    data : {session_user, product_cart},
                    success : (res) =>{
                        $('.cart_modal').modal('toggle');
                        $('.cart-modal-body').html(res.message + `<button type='button' class='orders btn flex-c-m bg1 bo-rad-23 hov1 s-text1 trans-0-4' data-toggle='modal' data-target='#exampleModal'>My Orders</button>` );
                    },
                    complete : () => {
                        // read orders 
                        $('.orders').on('click', function(){
                            $('.cart_modal').modal('show');
                            $('.cart-modal-body').html(``);
                            const id = $('input[name=session-user]').val(); 
                            $.ajax({
                                url : "http://localhost/ecommerce/admin/server/api/products/read_orders.php",
                                method : 'post',
                                data : {id},
                                success : (res) =>{
                                    res.forEach(item => {
                                        let image = item.img.split(',');
                                        image = image[0];
                                        $('.cart-modal-body').append(`
                                            <div class='cart-modal-content mb-2'>
                                                <div data-count = ${item.count} data-id = ${item.id} class='cart-img-product b-rad-4 o-f-hidden'>
                                                    <img src='admin/server/api/products/images/${image}' alt='IMG-PRODUCT'>
                                                </div>
                                                <small>name :  ${item.name}</small>
                                                <small>price :  $ ${item.price- item.sale}</small>
                                                ${item.size == '' ?  '' : `<small>size :  ${item.size}</small>`}
                                                ${item.color == '' ? '' : `<small>color :  ${item.color}</small>`}
                                                <small> count : ${item.count}</small>
                                                <small> total :$ ${[item.price - item.sale] * item.count}</small>
                                            </div>
                                        `)
                                    });
                                },
                                error : (err) => {
                                    console.log(err);
                                },
                            });
                        });

                        // delete order
                        $('.cart-modal-body').on('click', '.cart-img-product', function(){
                            const id = $(this).attr('data-id');
                            const count = $(this).attr('data-count');
                            const session_user = $('input[name=session-user]').val();
                            $.ajax({
                                url : "http://localhost/ecommerce/admin/server/api/products/del_order.php",
                                method : 'post',
                                data : {id, count, session_user},
                                success : (res) => {
                                    // console.log(res);
                                    $(this).parent().remove();
                                },
                                error : (err) => {
                                    console.log(err);
                                },
                            })
                        })
                    },
                    error : (err) => {
                        console.log(err);
                    },
                });
            })
        },
        error : (err) => {
            console.log(err);
        },
    })
})
