(function ($) {
  "use strict";

  /*[ Load page ]
    ===========================================================*/
  $(".animsition").animsition({
    inClass: "fade-in",
    outClass: "fade-out",
    inDuration: 1500,
    outDuration: 800,
    linkElement: ".animsition-link",
    loading: true,
    loadingParentElement: "html",
    loadingClass: "animsition-loading-1",
    loadingInner: '<div data-loader="ball-scale"></div>',
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: ["animation-duration", "-webkit-animation-duration"],
    overlay: false,
    overlayClass: "animsition-overlay-slide",
    overlayParentElement: "html",
    transition: function (url) {
      window.location.href = url;
    },
  });

  /*[ Back to top ]
    ===========================================================*/
  var windowH = $(window).height() / 2;

  $(window).on("scroll", function () {
    if ($(this).scrollTop() > windowH) {
      $("#myBtn").css("display", "flex");
    } else {
      $("#myBtn").css("display", "none");
    }
  });

  $("#myBtn").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 300);
  });

  /*[ Show header dropdown ]
    ===========================================================*/
  $(".js-show-header-dropdown").on("click", function () {
    $(this).parent().find(".header-dropdown");
  });

  var menu = $(".js-show-header-dropdown");
  var sub_menu_is_showed = -1;

  for (var i = 0; i < menu.length; i++) {
    $(menu[i]).on("click", function () {
      if (jQuery.inArray(this, menu) == sub_menu_is_showed) {
        $(this)
          .parent()
          .find(".header-dropdown")
          .toggleClass("show-header-dropdown");
        sub_menu_is_showed = -1;
      } else {
        for (var i = 0; i < menu.length; i++) {
          $(menu[i])
            .parent()
            .find(".header-dropdown")
            .removeClass("show-header-dropdown");
        }

        $(this)
          .parent()
          .find(".header-dropdown")
          .toggleClass("show-header-dropdown");
        sub_menu_is_showed = jQuery.inArray(this, menu);
      }
    });
  }

  $(".js-show-header-dropdown, .header-dropdown").click(function (event) {
    event.stopPropagation();
  });

  $(window).on("click", function () {
    for (var i = 0; i < menu.length; i++) {
      $(menu[i])
        .parent()
        .find(".header-dropdown")
        .removeClass("show-header-dropdown");
    }
    sub_menu_is_showed = -1;
  });

  /*[ Fixed Header ]
    ===========================================================*/
  var posWrapHeader = $(".topbar").height();
  var header = $(".container-menu-header");

  $(window).on("scroll", function () {
    if ($(this).scrollTop() >= posWrapHeader) {
      $(".header1").addClass("fixed-header");
      $(header).css("top", -posWrapHeader);
    } else {
      var x = -$(this).scrollTop();
      $(header).css("top", x);
      $(".header1").removeClass("fixed-header");
    }

    if ($(this).scrollTop() >= 200 && $(window).width() > 992) {
      $(".fixed-header2").addClass("show-fixed-header2");
      $(".header2").css("visibility", "hidden");
      $(".header2")
        .find(".header-dropdown")
        .removeClass("show-header-dropdown");
    } else {
      $(".fixed-header2").removeClass("show-fixed-header2");
      $(".header2").css("visibility", "visible");
      $(".fixed-header2")
        .find(".header-dropdown")
        .removeClass("show-header-dropdown");
    }
  });

  /*[ Show menu mobile ]
    ===========================================================*/
  $(".btn-show-menu-mobile").on("click", function () {
    $(this).toggleClass("is-active");
    $(".wrap-side-menu").slideToggle();
  });

  var arrowMainMenu = $(".arrow-main-menu");

  for (var i = 0; i < arrowMainMenu.length; i++) {
    $(arrowMainMenu[i]).on("click", function () {
      $(this).parent().find(".sub-menu").slideToggle();
      $(this).toggleClass("turn-arrow");
    });
  }

  $(window).resize(function () {
    if ($(window).width() >= 992) {
      if ($(".wrap-side-menu").css("display") == "block") {
        $(".wrap-side-menu").css("display", "none");
        $(".btn-show-menu-mobile").toggleClass("is-active");
      }
      if ($(".sub-menu").css("display") == "block") {
        $(".sub-menu").css("display", "none");
        $(".arrow-main-menu").removeClass("turn-arrow");
      }
    }
  });

  /*[ remove top noti ]
    ===========================================================*/
  $(".btn-romove-top-noti").on("click", function () {
    $(this).parent().remove();
  });

  /*[ Block2 button wishlist ]
    ===========================================================*/
  $(".block2-btn-addwishlist").on("click", function (e) {
    e.preventDefault();
    $(this).addClass("block2-btn-towishlist");
    $(this).removeClass("block2-btn-addwishlist");
    $(this).off("click");
  });

  /*[ +/- num product ]
    ===========================================================*/
  $(document).ajaxComplete(() => {
    // add to Cart
    $(".block2-btn-addcart").each(function () {
      var nameProduct = $(this)
        .parent()
        .parent()
        .parent()
        .find(".block2-name")
        .html();
      $(this).on("click", function () {
        swal(nameProduct, "is added to cart !", "success");
      });
    });
    $(".block2-btn-addwishlist").each(function () {
      var nameProduct = $(this)
        .parent()
        .parent()
        .parent()
        .find(".block2-name")
        .html();
      $(this).on("click", function () {
        swal(nameProduct, "is added to wishlist !", "success");
      });
    });
  });

  /*[ Show content Product detail ]
    ===========================================================*/
  $(".active-dropdown-content .js-toggle-dropdown-content").toggleClass(
    "show-dropdown-content"
  );
  $(".active-dropdown-content .dropdown-content").slideToggle("fast");

  $(".js-toggle-dropdown-content").on("click", function () {
    $(this).toggleClass("show-dropdown-content");
    $(this).parent().find(".dropdown-content").slideToggle("fast");
  });

  /*[ Play video 01]
    ===========================================================*/
  var srcOld = $(".video-mo-01").children("iframe").attr("src");

  $('[data-target="#modal-video-01"]').on("click", function () {
    $(".video-mo-01").children("iframe")[0].src += "&autoplay=1";

    setTimeout(function () {
      $(".video-mo-01").css("opacity", "1");
    }, 300);
  });

  // $('[data-dismiss="modal"]').on('click',function(){
  //     $('.video-mo-01').children('iframe')[0].src = srcOld;
  //     $('.video-mo-01').css('opacity','0');
  // });

  // show year
  const date = new Date();
  $(".year").text(date.getFullYear());

  // ** [dorpdown user data] ** //
  var dataUser;
  $(document).ready(function () {
    const session = $("input[name=session-user]").val();
    if (session == undefined) {
      $(".user-dropdown").html(`
                <button class='dropdown-toggle' type='button' id='dropdownMenuButton' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                  <img src='images/icons/icon-header-01.png' class='header-icon1' alt='ICON'>
                </button>
                <div class='dropdown-menu' aria-labelledby='dropdownMenuButton'>
                  <a class='dropdown-item' href='login.html'>login</a>
                  <a class='dropdown-item' href='register.html'>register acount </a>
                </div>
                `);
    } else {
      const session_user = $("input[name=session-user]").val();
      $.ajax({
        url: "http://localhost/ecommerce/admin/server/api/users/read.php",
        method: "post",
        data: { session_user },
        success: (res) => {
          dataUser = res;
          $(".user-dropdown").html(`
                        <button style='height:0' class='data-user' type='button' data-toggle="modal" data-target='#userModal'>
                            <img class='imageuser' style='width:45px;border-radius:50%' src='${
                              dataUser.image == ""
                                ? "images/icons/icon-header-01.png"
                                : "admin/server/api/users/images/" +
                                  dataUser.image
                            }' class='header-icon1 mb-3' alt='ICON'>
                        </button>
                        `);
        },
        complete: () => {
          $(".data-user").on("click", function () {
            $(".user-data-modalbody").css({ textAlign: "center" });
            $(".edit-datauser").show();
            $(".user-data-modalbody").html(`
                                <img style='width:200px;border-radius:50%' src='${
                                  dataUser.image == ""
                                    ? "images/icons/icon-header-01.png"
                                    : "admin/server/api/users/images/" +
                                      dataUser.image
                                }' class='header-icon1 mb-3' alt='ICON'>
                                <p>   name  :  ${dataUser.username}</p>
                                <p>   email  :  ${dataUser.email}</p>
                                <p>   phone  :  ${dataUser.phone}</p>
                                <p>   address  :  ${dataUser.address}</p>
                            `);
          });
          // **[edit data user]** //
          $(".edit-datauser").on("click", function () {
            $(".edit-datauser").hide();
            $(".user-data-modalbody").css({ textAlign: "inherit" });
            $(".user-data-modalbody").html(`
                            <form>
                                <div class='mb-4 user-image'>
                                    <img style='width:200px;border-radius:50%' src='${
                                      dataUser.image == ""
                                        ? "images/icons/icon-header-01.png"
                                        : "admin/server/api/users/images/" +
                                          dataUser.image
                                    }' class='header-icon1 mb-3' alt='ICON'>
                                    ${
                                      dataUser.image != ""
                                        ? `<span class='times'><i class='fa fa-times'></i></span>`
                                        : ""
                                    }
                                </div>
                                <div class='form-group mb-3'>
                                    <label for='exampleInputImg'>Image</label>
                                    <input type="file" id='exampleInputImg' name='image' class='form-control' />
                                    <div class="err"></div>
                                </div>
                                <div class='form-group mb-3'>
                                    <label for='exampleInputName'>Name</label>
                                    <input name='username' style='background-color:#e7e7e7' type='text' class='form-control' id='exampleInputName' placeholder='Enter name' value=${
                                      dataUser.username
                                    }>
                                    <div class="err"></div>
                                </div>
                                <div class='form-group mb-3'>
                                    <label for='exampleInputEmail'>Email</label>
                                    <input name = 'email' style='background-color:#e7e7e7' type='text' class='form-control' id='exampleInputEmail' placeholder='Email' value='${
                                      dataUser.email
                                    }'>
                                    <div class="err"></div>
                                </div>
                                <div class='form-group mb-3'>
                                    <label for='exampleInputaddress'>password</label>
                                    <input name = 'password' style='background-color:#e7e7e7' type='text' class='form-control' id='exampleInputaddress' placeholder='password'>
                                    <div class="err"></div>
                                </div>
                                <div class='form-group mb-3'>
                                    <label for='exampleInputPhone'>Phone</label>
                                    <input name = 'phone' style='background-color:#e7e7e7' type='text' class='form-control' id='exampleInputPhone' placeholder='Phone' value='${
                                      dataUser.phone
                                    }'>
                                    <div class="err"></div>
                                </div>
                                <div class='form-group mb-3'>
                                    <label for='exampleInputaddress'>address</label>
                                    <input name = 'address' style='background-color:#e7e7e7' type='text' class='form-control' id='exampleInputaddress' placeholder='address' value='${
                                      dataUser.address
                                    }'>
                                    <div class="err"></div>
                                </div>
                                <button type='submit' class='btn btn-primary'>Submit</button>
                            </form>
                            `);

            // delte profile image
            $(".user-image").click(function () {
              const id = dataUser.id;
              const image = dataUser.image;
              $.ajax({
                url: "http://localhost/ecommerce/admin/server/api/users/del-profile-img.php",
                method: "post",
                data: { id, image },
                success: (res) => {
                  $(".imageuser").attr(
                    "src",
                    "images/icons/icon-header-01.png"
                  );
                  $(".user-image").html(
                    `<img style='width:200px;border-radius:50%' src='images/icons/icon-header-01.png' class='header-icon1' alt='ICON'>`
                  );
                  dataUser = JSON.parse(res.user); // refresh datauser;
                },
                error: (err) => {
                  console.log(err);
                },
              });
            });
            // send data
            $("form").on("submit", function (event) {
              event.preventDefault();
              const data = $(this).serializeArray();
              var editdata = {};
              data.forEach((item, i) => {
                editdata[item.name] = item.value;
              });
              // console.log(editdata);
              // return;
              const obj = new Checkdata(editdata);
              if (obj.validateEdit() && obj.Editpassword()) {
                let data = new FormData(this);
                data.append("id", dataUser.id);
                if (
                  obj.err.password == "your password has not changing optional"
                ) {
                  data.delete("password");
                }
                $.ajax({
                  url: "http://localhost/ecommerce/admin/server/api/users/update.php",
                  method: "post",
                  data: data,
                  success: (res) => {
                    const elm = this.querySelectorAll("input");
                    elm.forEach((item, i) => {
                      $(item).siblings(".err").html();
                    });

                    if (res.message == "update success") {
                      setTimeout(() => {
                        $(".modaldataUser").modal("toggle");
                        $(".imageuser").attr(
                          "src",
                          `${
                            dataUser.image == ""
                              ? "images/icons/icon-header-01.png"
                              : "admin/server/api/users/images/" +
                                dataUser.image
                          }`
                        );
                      }, 300);
                      dataUser = res.user; // refresh datauser;
                    } else {
                      const errEmail = $(
                        ".user-data-modalbody form input[name=email]"
                      ).siblings(".err");
                      $(errEmail).html(
                        `<small style=color:red;font-size:15px>${res.message}</small>`
                      );
                    }
                  },
                  error: (err) => {
                    console.log(err);
                  },
                  contentType: false,
                  processData: false,
                  cache: false,
                });
              } else {
                const error = obj.err;
                const elm = this.querySelectorAll("input");
                elm.forEach((item, i) => {
                  const name = $(item).attr("name");
                  if (name in obj.err) {
                    $(item)
                      .siblings(".err")
                      .html(
                        `<small style=color:red;font-size:15px>${error[name]}</small>`
                      );
                  } else {
                    $(item).siblings(".err").html();
                  }
                });
              }
            });
          });
          // logout
          $(".logout").on("click", function () {
            $.ajax({
              url: "http://localhost/ecommerce/admin/server/api/users/logout.php",
              method: "post",
              success: (res) => {
                setTimeout(() => {
                  $(".modaldataUser").modal("toggle");
                  window.location = "http://localhost/ecommerce/index.php";
                }, 300);
              },
              error: (err) => {
                console.log(err);
              },
            });
          });
        },
        error: (err) => {},
      });
    }
  });

  // **[header wrapicon cart]** //
  var price_cart = {};
  $(document).ready(function () {
    const session = $("input[name=get-session]").val();
    if (session != undefined) {
      $(".header-icons-noti").text(session);
    }
    $(".js-show-header-dropdown").click(function () {
      $.ajax({
        url: "http://localhost/ecommerce/admin/server/api/products/readCart.php",
        method: "post",
        success: (res) => {
          if ("message" in res) {
            return;
          }
          $(".header-icons-noti").text(res.length);
          let total = 0;
          let element = "";
          res.forEach((item, i) => {
            "numpro" in item
              ? (total = total + [item.price - item.sale] * item.numpro)
              : (total = item.price - item.sale + total);
            price_cart[item.id] =
              "numpro" in item
                ? [item.price - item.sale] * item.numpro
                : item.price - item.sale; // make Object for cart;
            let image = item.img.split(",");
            element += `<li class='header-cart-item'>
                                <div data_id='${
                                  item.id
                                }' class='header-cart-item-img'>
                                    <img src='admin/server/api/products/images/${
                                      image[0]
                                    }' alt='IMG'>
                                </div>

                                <div class='header-cart-item-txt'>
                                    <a href='product-detail.php?id=${
                                      item.id
                                    }' class='header-cart-item-name'>
                                        ${item.name}
                                    </a>

                                    <span class='header-cart-item-info'>
                                        ${
                                          "numpro" in item ? item.numpro : 1
                                        }x$${item.price - item.sale}
                                    </span>
                                </div>
                            </li>`;
          });
          $(".header-cart-wrapitem").html(element);
          $(".header-cart-total-sh").text(total);
          price_cart["total"] = total;
        },
        complete: () => {
          $(".header-cart-item-img").click(function () {
            const id = $(this).attr("data_id");
            $.ajax({
              url: "http://localhost/ecommerce/admin/server/api/products/del-from-cart.php",
              method: "post",
              data: { id },
              success: (res) => {
                // remove product form cart
                $(this).parent().remove();
                $(".header-cart-total-sh").text(
                  price_cart.total - price_cart[id]
                );
                price_cart["total"] = price_cart.total - price_cart[id];

                // change count product in cart
                let val = $(".header-icons-noti").contents();
                val = parseInt(val[0].data);
                val--;
                $(".header-icons-noti").text(val);
              },
              error: (err) => {
                console.log(err);
              },
            });
          });
        },
        error: (err) => {
          console.log(err);
        },
      });
    });
  });

  // footer category
  $(document).ready(() => {
    const url =
      "http://localhost/ecommerce/admin/server/api/products/category.php";
    $.get(url, (res) => {
      res.forEach((element) => {
        $(".category-footer").append(`
                    <li class="p-b-9">
                        <a href="product.php?category=${element.id}" class="s-text10">
                        ${element.name}
                        </a>
                    </li>
            `);
      });
    });
  });
})(jQuery);
