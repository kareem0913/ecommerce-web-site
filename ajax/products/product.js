

var data;
// get product from database
$(document).ready(function(){
    $.ajax({
        url : "http://localhost/ecommerce/admin/server/api/products/readAll.php",
        method : 'post',
        success : (res) => {
            var product = JSON.parse(res.product);
            var category = JSON.parse(res.category);
            data = product;

            // event show cards by scroll
            var countShow = 10;
            var a = 10;
            $(document).on('scroll',  () => {
                let element = document.querySelectorAll('.block2');
                 element = element[element.length-1]   // last element
                let rect = element.getBoundingClientRect().top;
                rect = parseInt(rect);
                let screenH = $(window).height();

                if (rect <= screenH) {
                    for (var i = 0; i < 10; i++) {
                        if (countShow == 10) {
                            break;
                        }else{
                            var image = product[a].img.split(',');
                            if (id == undefined && catid == undefined) {
                                $('.show-product').append(`
                                            <div class='col-lg-4 col-sm-6 col-12 p-b-50' data-aos=${i % 2 == 0 ? 'fade-right' : 'fade-left'}>
                                                <!-- Block2 -->
                                                <div class='block2'>
                                                    <div class='block2-img wrap-pic-w of-hidden pos-relative ${product[a].sale == 0 ? 'block2-labelnew' : 'block2-labelsale'}'>
                                                        <img src='admin/server/api/products/images/${image[0]}' alt='IMG-PRODUCT'>

                                                        <div class='block2-overlay trans-0-4'>
                                                            <a href='#' class='block2-btn-addwishlist hov-pointer trans-0-4'>
                                                                <i class='icon-wishlist icon_heart_alt' aria-hidden='true'></i>
                                                                <i class="icon-wishlist icon_heart dis-none" aria-hidden="true"></i>
                                                            </a>

                                                            <div class='block2-btn-addcart w-size1 trans-0-4'>
                                                                <!-- Button -->
                                                                <button class='add-to-cart flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4' data_id='${product[a].id}'>
                                                                    Add to Cart
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class='block2-txt p-t-20 text-center'>
                                                        <a href='product-detail.php?id=${product[a].id}' class='block2-name dis-block s-text3 p-b-5'>
                                                            ${product[a].name}
                                                        </a>

                                                        <span class='block2-price m-text6 p-r-5'>
                                                            ${product[a].sale == 0 ? '$'+product[a].price : `
                                                                <span style='text-decoration:line-through;color:#6f706a' class='m-text-7 p-r-5'>$${product[a].price}</span>
                                                                <span style='color:#e65540' class='m-text-7 p-r-5'>$${product[a].price - product[a].sale}</span>
                                                                `}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            `)
                            }
                            if (a == product.length -1) {
                                $(document).unbind('scroll');
                                break;
                            }
                            a++;
                        }
                    }
                    countShow += 10;
                }
            })
            // end event sohw cards by scrolly

            const id = $('input[name=get-id]').val();
            const catid = $('input[name=get-category]').val();

            if (id == undefined == false) {
                // select product have one category child
                const filter_product = product.filter(el => el.category == id);
                html_product('.show-product', filter_product);
            }else if (catid == undefined == false) {
                // select products have one category parent
                const filter_product = product.filter(el => el.cat_id == catid);
                html_product('.show-product', filter_product);
            }else{
                // * [get frist 10 products] * //
               const filter_product = product.filter((el, i) => i < countShow);
               html_product('.show-product', filter_product);
            }


            // show category
            var parentCat = [];
            category.forEach((item, i) => {
                var array = [];
                if (item.cat_id == 0) {
                    parentCat.push({
                        'name' : item.name,
                        'id' : item.id,
                        'cat_id' : item.cat_id,
                        'array' : array
                    })
                    category.forEach((cat, a) => {
                        if (item.id == cat.cat_id) {
                            array.push({
                                'name' : cat.name,
                                'id' : cat.id,
                                'cat_id' : cat.cat_id
                            })
                        }
                    });
                }
            });
            parentCat.forEach((item, i) => {
                var child_cat = item.array;
                var str = '';
                child_cat.forEach((item, i) => {
                    str += `<a class='dropdown-item' href='?id=${item.id}'>${item.name}</a>`
                });
                $('#category').append(`
                    <div class='dropdown'>
                        <button style='min-width:200px;background-color:rebeccapurple;color:aliceblue' class='btn dropdown-toggle mb-2' type='button' id='dropdownMenuButton' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false' data_id=${item.id}>
                            ${item.name}
                        </button>
                        <div style='background-color:yellow' class='dropdown-menu' aria-labelledby='dropdownMenuButton'>
                            ${str}
                        </div>
                    </div>
                    `)
            });
            // end show category

        },
        complete : () => {
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
            // search 
            $(document).on('submit', '.search', function(event){
                event.preventDefault();
                let value = $('input[name=search-product]').val();
                value = value.replace(/\s/g, '');
                value.length == 0 ? '' : $('.show-product').html(``) && $(document).unbind('scroll');
                const filter_product = data.filter(el => el.name.includes(value));
                html_product('.show-product', filter_product);
            });
            // filter 
            $(document).on('click', '.filter-event', function(){
                $(document).unbind('scroll');
                const lower_price = parseInt($('#value-lower').text());
                const uper_price = parseInt($('#value-upper').text());
                $('.show-product').html(``);
                const id = $('input[name=get-id]').val();     //this variable cheak if category selected or not
                let filter_product;
                if (id == undefined) {
                    filter_product = data.filter(el => [el.price - el.sale] >= lower_price && [el.price - el.sale] <= uper_price)
                }else{
                    filter_product = data.filter(el => el.category == id && [el.price - el.sale] >= lower_price && [el.price - el.sale] <= uper_price)
                }
                html_product('.show-product', filter_product);
            });
        },
        error : (err) => {
            console.log(err);
        },
        contentType :false,
        processData : false,
        cache : false,
    })
})


const html_product = (className, data) => {
    return data.forEach((item, i) => {
                let image = item.img.split(',');
                $(className).append(`
                <div class='col-lg-4 col-sm-6 col-12 p-b-50' data-aos=${i % 2 == 0 ? 'fade-right' : 'fade-left'}>
                        <!-- Block2 -->
                        <div class='block2'>
                            <div class='block2-img wrap-pic-w of-hidden pos-relative ${item.sale == 0 ? 'block2-labelnew' : 'block2-labelsale'}'>
                                <img src='admin/server/api/products/images/${image[0]}' alt='IMG-PRODUCT'>

                                <div class='block2-overlay trans-0-4'>
                                    <a href='#' class='block2-btn-addwishlist hov-pointer trans-0-4'>
                                        <i class='icon-wishlist icon_heart_alt' aria-hidden='true'></i>
                                        <i class="icon-wishlist icon_heart dis-none" aria-hidden="true"></i>
                                    </a>

                                    <div class='block2-btn-addcart w-size1 trans-0-4'>
                                        <!-- Button -->
                                        <button class='add-to-cart flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4' data_id='${item.id}'>
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div class='block2-txt p-t-20 text-center'>
                                <a href='product-detail.php?id=${item.id}' class='block2-name dis-block s-text3 p-b-5'>
                                    ${item.name}
                                </a>

                                <span class='block2-price m-text6 p-r-5'>
                                    ${item.sale == 0 ? '$'+item.price : `
                                        <span style='text-decoration:line-through;color:#6f706a' class='m-text-7 p-r-5'>$${item.price}</span>
                                        <span style='color:#e65540' class='m-text-7 p-r-5'>$${item.price -item.sale}</span>
                                        `}
                                </span>
                            </div>
                        </div>
                    </div>
                `)
            });
}

