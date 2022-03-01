
var datapro;

$(document).ready(function(){
    $.ajax({
        url : "http://localhost/ecommerce/admin/server/api/products/readAll.php",
        method : 'post',
        success : (res) => {
            var products = JSON.parse(res.product);
            var category = JSON.parse(res.category)
            datapro = products;
            // [category banner]
            category.forEach((item, i) => {
                if (item.cat_id == 0) {
                    var image = item.image.split(',');
                    $('#category-banner').append(`
                        <li class='glide__slide' >
                            <div style='width:88%' class='m-l-r-auto'>
                             <!-- block1 -->
                             <div class='block1 hov-img-zoom pos-relative m-b-30'>
                                 <img src='admin/server/api/products/images/${image[0]}' alt='IMG-BENNER'>

                                 <div class='block1-wrapbtn w-size2'>
                                     <!-- Button -->
                                     <a href='product.php?category=${item.id}' class='flex-c-m size2 m-text2 bg3 hov1 trans-0-4'>
                                         ${item.name}
                                     </a>
                                 </div>
                             </div>
                         </div>
                        </li>
                        `)
                }
            });

        },
        complete : () => {
            // glid.js banner
            var h = {
                type: 'carousel',
                autoplay: 2000,
                hoverpause: true,
                perView: 3,
                focusAt: 'center',
                breakpoints: {
                    1024: {
                     perView: 3
                    },
                    900 : {
                        perView: 2
                    },
                    600: {
                     perView: 1
                    },
                    500: {
                        perView: 1
                    },
                },
            };
            new Glide('.glide', h).mount();
            // sale pagination 
            $('#sale-pagina').pagination({
                dataSource : (done) => {
                    const filter_product = datapro.filter(el => el.sale != 0);
                    done(filter_product)
                },
                callback: function(data, pagination) {
                    $('.sale-pane').html(``);
                    data.forEach((item, i) => {
                        var image = item.img.split(',');
                        $('.sale-pane').append(`
                            <div class='col-sm-6 col-md-4 col-lg-3 p-b-50'>
                                <!-- Block2 -->
                                <div class='block2'>
                                    <div class='block2-img wrap-pic-w of-hidden pos-relative ${item.sale == 0 ? 'block2-labelnew' : 'block2-labelsale'}' >
                                        <img style='width:100%' src='admin/server/api/products/images/${image[0]}' alt='IMG-PRODUCT'>

                                        <div class='block2-overlay trans-0-4'>
                                            <a href='#' class='block2-btn-addwishlist hov-pointer trans-0-4'>
                                                <i class='icon-wishlist icon_heart_alt' aria-hidden='true'></i>
                                                <i class='icon-wishlist icon_heart dis-none' aria-hidden='true'></i>
                                            </a>

                                            <div class='block2-btn-addcart w-size1 trans-0-4'>
                                                <!-- Button -->
                                                <button data-id=${item.id} class='add-to-cart flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4' data_id='${item.id}'>
                                                    Add to Cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div class='block2-txt p-t-20'>
                                        <a href='product-detail.php?id=${item.id}' class='block2-name dis-block s-text3 p-b-5'>
                                            ${item.name}
                                        </a>

                                        <span class='block2-price m-text6 p-r-5'>
                                        ${item.sale == 0 ? '$' + item.price : `
                                            <span style='text-decoration:line-through;color:#6f706a' class='m-text-7 p-r-5'>$${item.price}</span>
                                            <span style='color:#e65540' class='m-text-7 p-r-5'>$${item.price - item.sale}</span>
                                            `}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            `)
                    });

                },
                pageSize : 8,
                activeClassName : 'pag-active'

            });
            // best saler pagination 
            $('#best-saler-pagina').pagination({
                dataSource : (done) => {
                    const url = "http://localhost/ecommerce/admin/server/api/products/top.php"
                    $.get(url, data => done(data));
                },
                callback: function(data, pagination) {
                    $('.best-saler-pane').html(``);
                    data.forEach((item, i) => {
                        var image = item.img.split(',');
                        $('.best-saler-pane').append(`
                            <div class='col-sm-6 col-md-4 col-lg-3 p-b-50'>
                                <!-- Block2 -->
                                <div class='block2'>
                                    <div class='block2-img wrap-pic-w of-hidden pos-relative ${item.sale == 0 ? 'block2-labelnew' : 'block2-labelsale'}' >
                                        <img style='width:100%' src='admin/server/api/products/images/${image[0]}' alt='IMG-PRODUCT'>

                                        <div class='block2-overlay trans-0-4'>
                                            <a href='#' class='block2-btn-addwishlist hov-pointer trans-0-4'>
                                                <i class='icon-wishlist icon_heart_alt' aria-hidden='true'></i>
                                                <i class='icon-wishlist icon_heart dis-none' aria-hidden='true'></i>
                                            </a>

                                            <div class='block2-btn-addcart w-size1 trans-0-4'>
                                                <!-- Button -->
                                                <button data-id=${item.id} class='add-to-cart flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4' data_id='${item.id}'>
                                                    Add to Cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div class='block2-txt p-t-20'>
                                        <a href='product-detail.php?id=${item.id}' class='block2-name dis-block s-text3 p-b-5'>
                                            ${item.name}
                                        </a>

                                        <span class='block2-price m-text6 p-r-5'>
                                        ${item.sale == 0 ? '$' + item.price : `
                                            <span style='text-decoration:line-through;color:#6f706a' class='m-text-7 p-r-5'>$${item.price}</span>
                                            <span style='color:#e65540' class='m-text-7 p-r-5'>$${item.price - item.sale}</span>
                                            `}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            `)
                    });

                },
                pageSize : 8,
                activeClassName : 'pag-active'

            });
            // add to cart 
            $(document).on('click', '.add-to-cart', function(){
                let id = $(this).attr('data_id');
                $.ajax({
                    url : "http://localhost/ecommerce/admin/server/api/products/addtocart.php",
                    method : 'post',
                    data : {id},
                    success : (res) => {
                        if ('error' in res) {
                            console.log(res.error);
                        }else{
                            let val = $('.header-icons-noti').contents();
                            val = parseInt(val[0].data);
                            val++;
                            $('.header-icons-noti').text(val);
                        }
    
                    },
                    error : (err) => {
                        console.log(err);
                    },
                })
            });
        },
        error : (err) => console.log(err),
        contentType : false,
        processData : false,
        cache : false,
    })
})


// $(document).ajaxComplete(() => {
 

// })
