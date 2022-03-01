var products;
var object_category = {};
var object_description = {};
// get product from database
$(document).ready(function(){
    $.ajax({
        url : "http://localhost/ecommerce/admin/server/api/products/readAll.php",
        method : 'post',
        success : (res) => {
            let product = JSON.parse(res.product);
            let category = JSON.parse(res.category);
            products = product;
            // object product description
            product.forEach((item, i) => {
                object_description[item.id] = item.description;
            });
            // get name category 
            product.forEach(element => {
               const name_category = category.filter(el => element.cat_id == el.id);
               const category_child = category.filter(el => element.category == el.id);
               object_category[element.id] = {'category' : name_category[0].name, 'category_child' : category_child[0].name}
            });
            // [show]
            $('#pagination').pagination({
                dataSource : products,
                callback : (data, pagination) => {
                    $('tbody').html(``);
                    data.forEach((item, i) => {
                        $('tbody').append(`
                            <tr>
                                <td>${++i}</td>
                                <td class=na>${item.name}</td>
                                <td>
                                    <button  type='button' class='modal-show-description btn btn-primary' data-toggle='modal' data-target='#image' data_id=${item.id}>
                                        description
                                    </button>
                                </td>
                                <td>${item.size != '' ? item.size : 'no size for this producdt'}</td>
                                <td>${item.color != '' ? item.color : 'no color for this producdt'}</td>
                                <td>${item.price}</td>
                                <td>${item.sale}</td>
                                <td class='product-image'>
                                    <button  type='button' class='modal-show-img btn btn-primary' data-toggle='modal' data-target='#image' data_id=${item.img}>
                                        image
                                    </button>
                                </td>
                                <td>${item.start_date}</td>
                                <td class='cat-pro' data_id = ${item.cat_id}>${object_category[item.id].category}</td>
                                <td data_id = ${item.category}>${object_category[item.id].category_child}</td>
                                <td>
                                    <button  type='button' class='edit btn btn-primary' data-toggle='modal' data-target='#Edit' data_id=${item.id}>
                                        Edit
                                    </button>
                                    <button  type='button' class='del btn btn-primary' data-toggle='modal' data-target='#delete' data_id=${item.id}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                            `)
                    });
                },
                pageSize : 10,
                activeClassName : 'pag-active',
            })
        },
        complete : () => {
            // search about product 
            $('.search').keyup(function(){
                let name = $('.search').val();
                name = name.replaceAll(/ /g, '');
                $('tbody').html(``);
                $('#pagination').pagination({
                    dataSource : (done) => {
                        const filter_products = products.filter(el => el.name.includes(name));
                        done(filter_products);
                    },
                    callback : (data, pagination) => {
                        $('tbody').html(``);
                        data.forEach((item, i) => {
                            $('tbody').append(`
                                <tr>
                                    <td>${++i}</td>
                                    <td class=na>${item.name}</td>
                                    <td>
                                        <button  type='button' class='modal-show-description btn btn-primary' data-toggle='modal' data-target='#image' data_id=${item.id}>
                                            description
                                        </button>
                                    </td>
                                    <td>${item.size != '' ? item.size : 'no size for this producdt'}</td>
                                    <td>${item.color != '' ? item.color : 'no color for this producdt'}</td>
                                    <td>${item.price}</td>
                                    <td>${item.sale}</td>
                                    <td class='product-image'>
                                        <button  type='button' class='modal-show-img btn btn-primary' data-toggle='modal' data-target='#image' data_id=${item.img}>
                                            image
                                        </button>
                                    </td>
                                    <td>${item.start_date}</td>
                                    <td class='cat-pro' data_id = ${item.cat_id}>${object_category[item.id].category}</td>
                                    <td data_id = ${item.category}>${object_category[item.id].category_child}</td>
                                    <td>
                                        <button  type='button' class='edit btn btn-primary' data-toggle='modal' data-target='#Edit' data_id=${item.id}>
                                            Edit
                                        </button>
                                        <button  type='button' class='del btn btn-primary' data-toggle='modal' data-target='#delete' data_id=${item.id}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                                `)
                        });
                    },
                    pageSize : 10,
                    activeClassName : 'pag-active',
                })
            })
        },
        error : err => console.log(err),
    })
})
$(document).on('click', '.modal-show-description', function(){
    let id = $(this).attr('data_id');
    $('.title-img-desc').text('description');
    $('.modal-description').html(object_description[id]);
})
// start show image in modale
$(document).on('click', '.modal-show-img', function(){
    $('.title-img-desc').text('image');
    var img = $(this).attr('data_id');
    img = img.split(",")
    var image = '';
      img.forEach((item, i) => {
         image +=  `<img style='width:100%' src=server/api/products/images/${item}>`
      });

      $('.modal-image').html(`
             ${image}
          `);

})

/// start requste get category from database
///// get parent category
$(document).ready(function(){
    $.ajax({
        url : "http://localhost/ecommerce/admin/server/api/products/category.php",
        method : 'get',
        success : (res) => {
            res.forEach((item, i) => {
                $('select[name=cat_id]').append(`
                    <option value=${item.id}>${item.name}</option>
                    `)
            });
        },
        error : (err) => {
            console.log(err);
        },
    })
})

/// this for get child category
$(document).on('click', '.but-addpro', function(){
    var id = $('select[name=cat_id]').val();
    $.ajax({
        url : "http://localhost/ecommerce/admin/server/api/products/cat_child.php",
        method : 'post',
        data : {id},
        success : (res) => {
            var option = '';
            res.forEach((item, i) => {
                option += `<option value=${item.id}>${item.name}</option>`;
            });

            $('.cat_child').html(`
                    <select name=category class=form-control>
                        ${
                        option
                        }
                    </select>
                `)

        },
        error : (err) => {
            console.log(err);
        },
    })
})

/// get child category where parent category change
$('select[name=cat_id]').change(function(){
    var id = $(this).val();
    $.ajax({
        url : "http://localhost/ecommerce/admin/server/api/products/cat_child.php",
        method : 'post',
        data : {id},
        success : (res) => {
            var option = '';
            res.forEach((item, i) => {
                option += `<option value=${item.id}>${item.name}</option>`;
            });

            $('.cat_child').html(`
                    <select name=category class=form-control>
                        ${
                        option
                        }
                    </select>
                `)

        },
        error : (err) => {
            console.log(err);
        },
    })
})

// [ADD PRODUCT]
// ADD SIZE OR COLOR
$('.addition').click(function(){
    let error = {};
    let value = $(this).siblings('input').val();
    value = value.replace(/ /g, '');
    if (value.length == 0) {
        error['value'] = `<span style='color:red'>it cant be empty [option]</span>`;
        $(this).siblings('.err').html(error.value)
        return;
    }else if (value.length > 12) {
        error['value'] = `<span style='color:red'>your text It must not exceed 12 characters</span>`;
        $(this).siblings('.err').html(error.value)
        return;
    }else if (value.replace(/[?<>()$&@]/g, '$quot') != value) {
        error['value'] = `<span style='color:red'>please insert correct text dont contain [?<>()$&@]</span>`;
        $(this).siblings('.err').html(error.value)
        return;
    }else{
        $(this).siblings('input').val('');
        $(this).siblings('.err').html(``);
        $(this).siblings('.add-ons').append(`<span class='del-Col-Siz'>${value}</span>`);
        // remove size - color
        $('.del-Col-Siz').on('click', function(){
            $(this).remove();
        })
    }
})

/// insert product to database
$('.addproduct form').on('submit', function(event){
    event.preventDefault();
    const size_el = document.querySelectorAll('.addproduct .size  span');
    const color_el = document.querySelectorAll('.addproduct .color span');
    let size = '';
    let color = '';
    size_el.forEach((item, i) => {
        size += $(item).text() + ',';
    });
    color_el.forEach((item, i) => {
        color += $(item).text() + ',';
    });
    size = size.slice(0, -1);
    color = color.slice(0, -1);
    const data = new FormData(this);
    data.append('size', size);
    data.append('color', color);
    $.ajax({
        url : "http://localhost/ecommerce/admin/server/api/products/insert.php",
        method : 'post',
        data : data,
        success : (res) => {
            if ('message' in res) {
                setTimeout(() => {
                    $('input, textarea').val('');
                    $('#addproduct').modal('toggle');
                }, 300)
                return;
            }
            var input = this.querySelectorAll('input, textarea');
            $(input).each((i , item) => {
                var n = $(item).attr('name');
                n = n.replace('[]', '');
                if (res.hasOwnProperty(n)) {
                    $(item).siblings('.err').html(`<small style=color:red;font-size:15px>${res[n]}</small>`);
                }else{
                    $(item).siblings('.err').html(``);
                }
            })
        },
        error : (err) => {
            console.log(err);
        },
        contentType : false ,
        processData : false ,
        cache : false
    });
})

// [EDIT PRODUCT]
// get value from table
$(document).on('click', '.edit', function(){
    const id = $(this).attr('data_id');
    $('.subedit').attr('data_id',id);
    let td = $(this).parent().parent().find('td');
    let categoryid = $(this).parent().parent().find('.cat-pro').attr('data_id');
    categoryid = parseInt(categoryid);
    // console.log(typeof(categoryid));
    // return
    let data = {};
    let name = ['id_table', 'name', 'description', 'size', 'color', 'price', 'sale', 'image', 'start_date', 'category', 'cat_child'];
    $(td).each((i, item) => {
        data[name[i]] = $(item).text();
    });
    $('.editproduct form input[name=name]').attr('value', data.name);
    $('.editproduct textarea[name=description]').text(object_description[id]);
    $('.editproduct form input[name=price]').attr('value', data.price);
    $('.editproduct form input[name=sale]').attr('value', data.sale);
    $('.editproduct form input[name=start_date]').attr('value', data.start_date);
    $(`.editproduct option[value=${categoryid}]`).attr('selected', 'selected');
    // $(".editproduct select[name=cat_id]").val(categoryid).change();
    // [COLOR AND SIZE]
    if (data.size != 'no size for this producdt') {
        if (data.size.replace(/[<>?$@*+&]/g, '$quot') != data.size) {
            return;
        }
        let str = ``;
        data.size.split(',').forEach((item, i) => {
            str += `<span class='del-Col-Siz'>${item}</span>`
        });
        $('.editproduct .size').html(str);
    }
    if (data.color != 'no color for this producdt') {
        if (data.color.replace(/[<>?$@*+&]/g, '$quot') != data.color) {
            return;
        }
        let str = ``;
        data.color.split(',').forEach((item, i) => {
            str += `<span class='del-Col-Siz'>${item}</span>`
        });
        $('.editproduct .color').html(str);
    }
    // remove size - color
    $('.del-Col-Siz').on('click', function(){
        $(this).remove();
    })

})
// end edit get value from table

// send data to server
$(document).on('submit', '.editproduct form', function(event){
    event.preventDefault();
    // COLOR AND SIZE
    const size_el = document.querySelectorAll('.editproduct .size  span');
    const color_el = document.querySelectorAll('.editproduct .color span');
    let size = '';
    let color = '';
    size_el.forEach((item, i) => {
        size += $(item).text() + ',';
    });
    color_el.forEach((item, i) => {
        color += $(item).text() + ',';
    });
    size = size.slice(0, -1);
    color = color.slice(0, -1);
    const id = $('.subedit').attr('data_id');
    const data = new FormData(this);
    data.append('id', id);
    data.append('size', size);
    data.append('color', color);
    $.ajax({
        url : "http://localhost/ecommerce/admin/server/api/products/update.php",
        method : 'post',
        data : data,
        success : (res) => {
            if ('success' in res) {
                setTimeout(() => {
                    $('#Edit').modal('toggle');
                }, 300);
                return;
            }
            var input = this.querySelectorAll('input, textarea');
            $(input).each((i , item) => {
                var n = $(item).attr('name');
                n = n.replace('[]', '');
                if (res.hasOwnProperty(n)) {
                    $(item).siblings('.err').html(`<small style=color:red;font-size:15px>${res[n]}</small>`);
                }else{
                    $(item).siblings('.err').html(``);
                }
            })
        },
        error : (err) => {
            console.log(err);
        },
        contentType : false,
        processData : false,
        cache : false,
    })
})
//// end edit producdt

/// start delete product form database
var image;
$(document).on('click', '.del', function(){
    const name = $(this).parent().siblings('.na').text();
    $('.del-body').text(`you showr you want delete ${name}`)
    const id = $(this).attr('data_id');
    $('.del-pro').attr('data_id',id);
    image = $(this).parent().siblings('.product-image').find('button').attr('data_id');
});

$(document).on('click', '.del-pro', function(){
    const id = $('.del-pro').attr('data_id');
    $.ajax({
        url : "http://localhost/ecommerce/admin/server/api/products/del.php",
        method : 'post',
        data : {id, image},
        success : (res) => {
            console.log(res);
            if ('error' in res) {
                alert(res.error);
            }else{
                const tr = $(`.del[data_id=${id}]`);
                $(tr).parent().parent().remove();
                setTimeout(() => {
                    $('#delete').modal('toggle');
                }, 300)
            }
        },
        error : err => console.log(err),
    })
})
/// end delete users from database

//// start add new category
// button add parent category
$(document).on('click', '.addcat', function(){
    $('.modal-body-category form').html(`
        <div class='form-group'>
            <label for='exampleInputName'>name</label>
            <input type='text' name='name' value='' class='form-control' id='exampleInputName'>
            <div style='color:red' class='err'></div>
            <label for="file">image</label>
            <input type="file" name='img[]' multiple class="form-control" />
            <div style='color:red' class='err'></div>
        </div>
        <button type='submit' class='btn btn-primary mt-5' name='button'>submit</button>
        `)
});

// add child category
$(document).on('click', '.addchild-cat', function(){
    var str = ''
    $('.addproduct select[name=cat_id] option').each((i, item) => {
        str += item.outerHTML;
    });

    $('.modal-body-category form').html(`
        <div class='form-group'>
            <label for='exampleInputName'>name</label>
            <input type='text' name='name' class='form-control' id='exampleInputName'>
            <div style='color:red' class='err'></div>
        </div>
        <div class='form-group'>
          <label for='exampleFormControlSelect1'>category</label>
          <select name='cat_id' class='form-control' id='exampleFormControlSelect1'>
          ${str}
          </select>
        </div>
        <button type='submit' class='btn btn-primary mt-5' name='button'>submit</button>
        `)
})

// send data to server
$('.addcategory form').submit(function(event){
    event.preventDefault();
    $.ajax({
        url : "http://localhost/ecommerce/admin/server/api/products/addcategory.php",
        method : 'post',
        data : new FormData(this),
        success : (res) => {
            if ('success' in res) {
                $(this).find('input[name=name]').val('');
                setTimeout(() => {
                    $('#addcategory').modal('toggle');
                }, 'slow');
            }else{
                'name' in res ? $(this).find('input[name=name]').next().text(res.name) : $(this).find('input[name=name]').next().text('');
                'file' in res ? $(this).find('input[type=file]').next().text(res.file) : $(this).find('input[type=file]').next().text('');
            }
        },
        error : (err) => {
            console.log(err);
        },
        contentType : false,
        processData : false,
        cache : false,
    })
})

//// end add new category
