<?php
!isset($_GET['id']) ? header("location:product.php") : '';
 ?>

<!DOCTYPE html>
<html lang="en">
<head>
	<title>Product Detail</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
<!--===============================================================================================-->
	<link rel="icon" type="image/png" href="images/icons/favicon.png"/>
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/bootstrap/css/bootstrap.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="fonts/font-awesome-4.7.0/css/font-awesome.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="fonts/themify/themify-icons.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="fonts/Linearicons-Free-v1.0.0/icon-font.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="fonts/elegant-font/html-css/style.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/animate/animate.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/css-hamburgers/hamburgers.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/animsition/css/animsition.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/select2/select2.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/slick/slick.css">
<!--===============================================================================================-->
<!--===============================================================================================-->
<link rel="stylesheet/less" type="text/css" href="node_modules\paginationjs\src\pagination.less" />
<!--===============================================================================================-->
<link rel="stylesheet" href="node_modules/@glidejs/glide/dist/css/glide.core.min.css">
<link rel="stylesheet" href="node_modules/@glidejs/glide/src/assets/sass/glide.core">
<link rel="stylesheet" href="node_modules/@glidejs/glide/dist/css/glide.theme.min.css">
<!--===============================================================================================-->

	<link rel="stylesheet" type="text/css" href="css/util.css">
	<link rel="stylesheet" type="text/css" href="css/main.css">
<!--===============================================================================================-->
</head>
<body style="background-color:#261338" class="animsition">

	<!-- Header -->
	<?php include "include/nav.php" ?>

	<!-- breadcrumb -->
	<div style="background-color:#261338" class="bread-crumb bgwhite flex-w p-l-52 p-r-15 p-t-30 p-l-15-sm">
		<a href="index.php" class="s-text16">
			Home
			<i class="fa fa-angle-right m-l-8 m-r-9" aria-hidden="true"></i>
		</a>

        <a href="" class="cat-name s-text16">

			<i class="fa-cat-name fa fa-angle-right m-l-8 m-r-9" aria-hidden="true"></i>
		</a>

		<a href="" class="pro-name s-text16">

		</a>
	</div>

	<!-- Product Detail -->
	<div style="background-color:#261338" class="container bgwhite p-t-35 p-b-80">
		<div class="flex-w flex-sb">
			<div class="w-size13 p-t-30 respon5">
				<div class="wrap-slick3 flex-sb flex-w">
                    <div style="width:14%" class="img-product d-flex flex-column">
                        <ul data-guide-el='controls[nav]'>

                        </ul>
                    </div>

					<div class="slick3">
                        <div class="glide">
                              <div class="glide__track" data-glide-el="track">
                                    <ul id="img-product" class="glide__slides">

                                    </ul>
                              </div>
                            <div class="glide__arrows" data-glide-el="controls">
                                <button class="glide__arrow glide__arrow--left" data-glide-dir="<">prev</button>
                                <button class="glide__arrow glide__arrow--right" data-glide-dir=">">next</button>
                            </div>
                        </div>
					</div>

				</div>
			</div>

			<div class="w-size14 p-t-30 respon5">
				<h4 class="product-detail-name m-text16 p-b-13 pl-5">

				</h4>

				<span class="pro-price m-text17 pl-5">

				</span>

				<p class="s-text8-name s-text8 p-t-10">

				</p>

				<!--  -->
				<div class="p-t-33 p-b-60">
					<div class="size flex-m flex-w p-b-10">
						<div class="s-text15 w-size15 t-center">
							Size
						</div>

						<div class="rs2-select2 rs3-select2 bo4 of-hidden w-size16">
							<select class="selection-2" name="size">
								
							</select>
						</div>
					</div>

					<div class="color flex-m flex-w">
						<div class="s-text15 w-size15 t-center">
							Color
						</div>

						<div class="rs2-select2 rs3-select2 bo4 of-hidden w-size16">
							<select class="selection-2" name="color">

							</select>
						</div>
					</div>

					<div class="flex-r-m flex-w p-t-10">
						<div class="w-size16 flex-m flex-w">
							<div class="flex-w bo5 of-hidden m-r-22 m-t-10 m-b-10">
								<button class="btn-num-product-down color1 flex-c-m size7 bg8 eff2">
									<i class="fs-12 fa fa-minus" aria-hidden="true"></i>
								</button>

								<input class="size8 m-text18 t-center num-product" type="number" name="num-product" value="1">

								<button class="btn-num-product-up color1 flex-c-m size7 bg8 eff2">
									<i class="fs-12 fa fa-plus" aria-hidden="true"></i>
								</button>
							</div>

							<div class="btn-addcart-product-detail size9 trans-0-4 m-t-10 m-b-10">
								<!-- Button -->
								<button class="PATC flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4">
									Add to Cart
								</button>
							</div>
						</div>
					</div>
				</div>

				<div class="p-b-45">
					<span class="s-text8 m-r-35">SKU: MUG-01</span>
                    <a href="" class="cat-name s-text16">

            			<i class="fa-cat-name fa fa-angle-right m-l-8 m-r-9" aria-hidden="true"></i>
            		</a>
                    <a href="" class="pro-name s-text16"></a>
					<!-- <span class="s-text8">Categories: Mug, Design</span> -->
				</div>

				<!--  -->
				<div class="wrap-dropdown-content bo6 p-t-15 p-b-14 active-dropdown-content">
					<h5 class="js-toggle-dropdown-content flex-sb-m cs-pointer m-text19 color0-hov trans-0-4">
						Description
						<i class="down-mark fs-12 color1 fa fa-minus dis-none" aria-hidden="true"></i>
						<i class="up-mark fs-12 color1 fa fa-plus" aria-hidden="true"></i>
					</h5>

					<div class="dropdown-content dis-none p-t-15 p-b-23">
						<p class="description s-text8">

						</p>
					</div>
				</div>

				<div class="wrap-dropdown-content bo7 p-t-15 p-b-14">
                    <h5 class="js-toggle-dropdown-content flex-sb-m cs-pointer m-text19 color0-hov trans-0-4">
						<span id="count-reviews">(Reviews(0))</span>
						<i class="down-mark fs-12 color1 fa fa-minus dis-none" aria-hidden="true"></i>
						<i class="up-mark fs-12 color1 fa fa-plus" aria-hidden="true"></i>
					</h5>
					<div class="comment-pare dropdown-content dis-none p-t-15 p-b-23">
                        <div style="display:flex">
                            <button style="background-color:#e41ae7;color:white" class="btn mr-3 add-comment" type="button" name="button">add commet</button>
                            <div style="width:70%" class="info">

                            </div>
                        </div>
                        <hr>
						<div class="comm-depratment">

                        </div>
                        <div id="pagination"></div>
					</div>
				</div>
			</div>
		</div>
	</div>


	<!-- Relate Product -->
	<section style="background-color:#261338" class="relateproduct bgwhite p-t-45 p-b-138">
		<div class="container">
			<div class="sec-title p-b-60">
				<h3 class="m-text5 t-center">
					Related Products
				</h3>
			</div>

			<!-- Slide2 -->
			<div class="wrap-slick2">
                <div class="glide">
                      <div class="glide__track" data-glide-el="track">
                            <ul id="products" class="glide__slides">

                            </ul>
                      </div>
                    <div class="glide__arrows" data-glide-el="controls">
                        <button class="glide__arrow glide__arrow--left" data-glide-dir="<">prev</button>
                        <button class="glide__arrow glide__arrow--right" data-glide-dir=">">next</button>
                    </div>
                </div>
			</div>

		</div>
	</section>


	<!-- Footer -->
	<?php include "include/footer.php" ?>




	<!-- Back to top -->
	<div class="btn-back-to-top bg0-hov" id="myBtn">
		<span class="symbol-btn-back-to-top">
			<i class="fa fa-angle-double-up" aria-hidden="true"></i>
		</span>
	</div>

	<!-- Container Selection -->
	<div id="dropDownSelect1"></div>
	<div id="dropDownSelect2"></div>



<!--===============================================================================================-->
	<script type="text/javascript" src="vendor/jquery/jquery-3.2.1.min.js"></script>
<!--===============================================================================================-->
	<script type="text/javascript" src="vendor/animsition/js/animsition.min.js"></script>
<!--===============================================================================================-->
	<script type="text/javascript" src="vendor/bootstrap/js/popper.js"></script>
	<script type="text/javascript" src="vendor/bootstrap/js/bootstrap.min.js"></script>
<!--===============================================================================================-->
	<script type="text/javascript" src="vendor/select2/select2.min.js"></script>
    <script src="node_modules/@glidejs/glide/dist/glide.min.js"></script>
<!--===============================================================================================-->
<!--===============================================================================================-->
<script src="node_modules\paginationjs\src\pagination.js" charset="utf-8"></script>
<!--===============================================================================================-->
	<script type="text/javascript">
		$(".selection-1").select2({
			minimumResultsForSearch: 20,
			dropdownParent: $('#dropDownSelect1')
		});

		$(".selection-2").select2({
			minimumResultsForSearch: 20,
			dropdownParent: $('#dropDownSelect2')
		});
	</script>
<!--===============================================================================================-->
	<script type="text/javascript" src="vendor/slick/slick.min.js"></script>
	<script type="text/javascript" src="js/slick-custom.js"></script>
<!--===============================================================================================-->
	<script type="text/javascript" src="vendor/sweetalert/sweetalert.min.js"></script>
	<script type="text/javascript">
		$(document).ajaxComplete(() => {
            $('.block2-btn-addcart').each(function(){
    			var nameProduct = $(this).parent().parent().parent().find('.block2-name').html();
    			$(this).on('click', function(){
    				swal(nameProduct, "is added to cart !", "success");
    			});
    		});

    		$('.block2-btn-addwishlist').each(function(){
    			var nameProduct = $(this).parent().parent().parent().find('.block2-name').html();
    			$(this).on('click', function(){
    				swal(nameProduct, "is added to wishlist !", "success");
    			});
    		});

    		$('.btn-addcart-product-detail').each(function(){
    			var nameProduct = $('.product-detail-name').html();
    			$(this).on('click', function(){
    				swal(nameProduct, "is added to wishlist !", "success");
    			});
    		});
            // $(document).unbind('ajaxComplete');
        })
	</script>

<!--===============================================================================================-->
    <script src="ajax/products/product-detil.js" charset="utf-8"></script>
    <script src="ajax\users\insert.js" charset="utf-8"></script>  <!-- this class for validate data user when user edit data  -->
	<script src="js/main.js"></script>

</body>
</html>
