var length_produts;
var category;

// get product detil from database and get all products have one category
$(document).ready(function () {
  let id = window.location.href.split("=").slice(-1).toString();
  $.ajax({
    url: "http://localhost/ecommerce/admin/server/api/products/read.php",
    method: "post",
    data: { id: id },
    success: (res) => {
      category = res.cat_id;
      var image = res.img.split(",");
      image.forEach((item, i) => {
        $(".img-product ul").append(`
                        <li class='product-img' data-glide-dir='${i}'>
                            <img class='image' src='admin/server/api/products/images/${item}' alt=''>
                        </li>
                    `);
        $("#img-product").append(`
                    <li class='glide__slide' data-id=${i}>
                        <img style='width:100%' src='admin/server/api/products/images/${item}'>
                    </li>
                    `);
      });
      $(".product-detail-name").text(res.name);
      $(".pro-price").text("$" + res.price);
      $(".PATC").attr("data-id", res.id); // set id to but add to cart
      $(".pro-name").text(res.name);
      $(".pro-name").attr("href", `product.php?id=${res.category}`);
      $(".cat-name").attr("href", `product.php?category=${res.cat_id}`);
      $(".description").text(res.description);

      // SIZE AND COLOR
      if (res.size == "") {
        $(".size").remove();
      } else {
        let size = res.size.split(",");
        size.forEach((item, i) => {
          $("select[name=size]").append(`<option>${item}</option>`);
        });
      }
      if (res.color == "") {
        $(".color").remove();
      } else {
        let color = res.color.split(",");
        color.forEach((item, i) => {
          $("select[name=color]").append(`<option>${item}</option>`);
        });
      }
      /* [get category name] */
      const catid = res.cat_id;
      $.ajax({
        url: "http://localhost/ecommerce/admin/server/api/products/category-name.php",
        method: "post",
        data: { catid },
        success: (res) => {
          $(".fa-cat-name").before(res.name);
        },
        error: (err) => {
          console.log(err);
        },
      });

      // start get products have one category
      $.ajax({
        url: "http://localhost/ecommerce/admin/server/api/products/product_have_some_category.php",
        method: "post",
        data: { id: category },
        success: (res) => {
          length_produts = Object.keys(res).length;
          res.forEach((item, i) => {
            var image = item.img.split(",");
            $("#products").append(`
                            <li class='glide__slide'>
                                <div class='item-slick2 p-l-15 p-r-15'>
                                    <!-- Block2 -->
                                    <div class='block2'>
                                        <div class='block2-img wrap-pic-w of-hidden pos-relative ${
                                          item.sale == 0
                                            ? "block2-labelnew"
                                            : "block2-labelsale"
                                        }' >
                                            <img style='width:100%' src='admin/server/api/products/images/${
                                              image[0]
                                            }' alt='IMG-PRODUCT'>

                                            <div class='block2-overlay trans-0-4'>
                                                <a href='#' class='block2-btn-addwishlist hov-pointer trans-0-4'>
                                                    <i class='icon-wishlist icon_heart_alt' aria-hidden='true'></i>
                                                    <i class='icon-wishlist icon_heart dis-none' aria-hidden='true'></i>
                                                </a>

                                                <div class='block2-btn-addcart w-size1 trans-0-4'>
                                                    <!-- Button -->
                                                    <button data-id=${
                                                      item.id
                                                    } class='add-to-cart flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4' data_id='${
              item.id
            }'>
                                                        Add to Cart
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <div class='block2-txt p-t-20'>
                                            <a href='product-detail.php?id=${
                                              item.id
                                            }' class='block2-name dis-block s-text3 p-b-5'>
                                                ${item.name}
                                            </a>

                                            <span class='block2-price m-text6 p-r-5'>
                                            ${
                                              item.sale == 0
                                                ? "$" + item.price
                                                : `
                                                <span style='text-decoration:line-through;color:#6f706a' class='m-text-7 p-r-5'>$${
                                                  item.price
                                                }</span>
                                                <span style='color:#e65540' class='m-text-7 p-r-5'>$${
                                                  item.price - item.sale
                                                }</span>
                                                `
                                            }
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            `);
          });
        },
        error: (err) => {
          console.log(err);
        },
      });
    },
    error: (err) => {
      console.log(err);
    },
  });

  // read comment
  $.ajax({
    url: "http://localhost/ecommerce/admin/server/api/products/read_comment.php",
    method: "post",
    data: { id },
    success: (res) => {
      $("#count-reviews").text(`Reviews (${res.length})`);
      $("#pagination").pagination({
        dataSource: res,
        callback: (data, pagination) => {
          $(".comm-depratment").html(``);
          data.forEach((item, i) => {
            $(".comm-depratment").append(`
                            <div class='comment'>
                                <img class='imageuser' style='width:45px;border-radius:50%' src='${
                                  item.user_data.image == ""
                                    ? "images/icons/icon-header-01.png"
                                    : "admin/server/api/users/images/" +
                                      item.user_data.image
                                }' class='header-icon1 mb-3' alt='ICON'>
                                <small class='s-text17'>${
                                  item.user_data.username
                                }</small>
                                <small class='s-text17'>${item.time}</small>
                                <p class='s-text16'>${item.comment}</p>
                            </div>
                            `);
          });
        },
        pageSize: 4,
        activeClassName: "pag-active",
      });
    },
    error: (err) => {
      console.log(err);
    },
  });

  // increase and decrease number of product
  $(".btn-num-product-down").on("click", function (event) {
    event.preventDefault();
    const numProduct = Number($(this).parent().find(".num-product").val());
    if (numProduct > 1)
      $(this)
        .parent()
        .find(".num-product")
        .val(numProduct - 1);
  });
  $(".btn-num-product-up").on("click", function (event) {
    event.preventDefault();
    const numProduct = Number($(this).parent().find(".num-product").val());
    $(this)
      .parent()
      .find(".num-product")
      .val(numProduct + 1);
  });
});

// After the end of AJAX and getting all the data we have some events
$(document).ajaxComplete(() => {
  // start glidejs script
  const glide = document.querySelectorAll(".glide");
  glide.forEach((item, i) => {
    if (i == 0) {
      let h = {
        // type: 'carousel',
        autoplay: 4000,
        hoverpause: true,
        perView: 1,
        focusAt: "center",
        breakpoints: {
          1024: {
            perView: 1,
          },
          900: {
            perView: 1,
          },
          800: {
            perView: 1,
          },
          700: {
            perView: 1,
          },
          600: {
            perView: 1,
          },
          500: {
            perView: 1,
          },
        },
      };
      new Glide(item, h).mount();
    } else {
      let h = {
        type: "carousel",
        autoplay: 3000,
        hoverpause: true,
        perView: 5, // length_produts < 5 ? length_produts : 5;
        focusAt: "center",
        breakpoints: {
          1024: {
            perView: 5, // length_produts < 5 ? length_produts : 5;
          },
          700: {
            perView: 3, // length_produts < 3 ? length_produts : 3;
          },
          500: {
            perView: 1,
          },
        },
      };
      new Glide(item, h).mount();
    }
  });

  // start select glide bullet
  $(".product-img").click(function () {
    var id = $(this).attr("data-glide-dir");
    $(".glide__slide").each((i, item) => {
      const data_id = $(item).attr("data-id");
      if (id == data_id) {
        new Glide(".glide", { startAt: i }).mount();
      }
    });
  });

  $(document).on("click", ".add-to-cart", function () {
    let id = $(this).attr("data_id");
    $.ajax({
      url: "http://localhost/ecommerce/admin/server/api/products/addtocart.php",
      method: "post",
      data: { id },
      success: (res) => {
        if ("error" in res) {
          console.log(res.error);
        } else {
          let val = $(".header-icons-noti").contents();
          val = parseInt(val[0].data);
          val++;
          $(".header-icons-noti").text(val);
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  });

  // but add product to cart
  $(".PATC").on("click", function () {
    const id = $(this).attr("data-id");
    const num_product = $(".num-product").val();
    const size = $("select[name=size]").val();
    const color = $("select[name=color]").val();
    let data = { id: id, count: num_product };
    size != undefined ? (data["size"] = size) : "";
    color != undefined ? (data["color"] = color) : "";
    $.ajax({
      url: "http://localhost/ecommerce/admin/server/api/products/addtocart.php",
      method: "post",
      data: data,
      success: (res) => {
        if ("error" in res) {
          console.log(res.error);
        } else {
          let val = $(".header-icons-noti").contents();
          val = parseInt(val[0].data);
          val++;
          $(".header-icons-noti").text(val);
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  });

  // review and add comment
  const session = $("input[name=session-user]").val();
  if (session == undefined) {
    $(".info").html(`
        <a style='background-color:#e41ae7;color:white' href="login.html" class="btn">login</a>
        <a style='background-color:#e41ae7;color:white' href="register.html" class="btn">register</a>
        `);
  } else {
    $(".info").html(`
           <input style='margin-left:10px;width:100%;padding-left:10px;height:40px' type='text' name='add-comment' />
        `);
  }

  $(".add-comment").on("click", function () {
    const session = $("input[name=session-user]").val();
    if (session == undefined) {
    } else {
      const id = window.location.href.split("=").slice(-1).toString();
      let comment = $("input[name=add-comment]").val();
      const ch_comment = comment.replace(/[<>?$%()]/g, "$quot;");
      if (comment != ch_comment || comment.length < 5) {
        console.log("false");
        return;
      }
      $.ajax({
        url: "http://localhost/ecommerce/admin/server/api/products/add-comment.php",
        method: "post",
        data: {
          user_id: session,
          product_id: id,
          comment,
        },
        success: (res) => {
          $("input[name=add-comment]").val("");
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  });

  $(document).unbind("ajaxComplete");
});
