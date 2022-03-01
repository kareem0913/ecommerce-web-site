<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>SB Admin 2 - Tables</title>

    <!-- Custom fonts for this template -->
    <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
    <link
        href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
        rel="stylesheet">

     <!-- pagination js -->
    <!--===============================================================================================-->
    <link rel="stylesheet/less" type="text/css" href="..\node_modules\paginationjs\src\pagination.less" />
    <!--===============================================================================================-->

    <!-- Custom styles for this template -->
    <link href="css/sb-admin-2.min.css" rel="stylesheet">

    <!-- Custom styles for this page -->
    <link href="vendor/datatables/dataTables.bootstrap4.min.css" rel="stylesheet">
    <link rel="stylesheet" href="addcss/style.css">
</head>

<body id="page-top">

    <!-- Page Wrapper -->
    <div id="wrapper">

        <!-- Sidebar -->
        <?php include "include/sidebar.php" ?>
        <!-- End of Sidebar -->

        <!-- Content Wrapper -->
        <div id="content-wrapper" class="d-flex flex-column">

            <!-- Main Content -->
            <div style="background-color:#0c1e0c" id="content">

                <!-- Topbar -->
                <?php include "include/tobar.php" ?>
                <!-- End of Topbar -->

                <!-- Begin Page Content -->
                <div class="container-fluid">
                    <!-- Page Heading -->
                    <h1 class="h3 mb-2 ml-4 text-gray-800">PRODUCTS</h1>
                    <button type="button" class="but-addpro mb-3 ml-3 btn btn-primary" data-toggle="modal" data-target="#addproduct">
                    Add Product
                    </button>
                    <button type="button" class="but-addpro mb-3 ml-3 btn btn-primary" data-toggle="modal" data-target="#addcategory">
                    Add New Category
                    </button>
                    <div style="overflow-y:auto" class="parent">
                        <div class="header">
                            <input class="search" type="text" name="search" value="" placeholder="  search for ...">
                            <p style="color:white" class="count ml-2 mt-3"></p>
                        </div>
                        <div style="color: white" class="table">
                            <table>
                                <thead style="background-color:#8c91864d">
                                    <tr>
                                        <th>id</th>
                                        <th>name</th>
                                        <th>Description</th>
                                        <th>size</th>
                                        <th>color</th>
                                        <th>price</th>
                                        <th>sale</th>
                                        <th>image</th>
                                        <th>start_date</th>
                                        <th>category</th>
                                        <th>cat-child</th>
                                        <th>control</th>
                                    </tr>
                                </thead>
                                <tbody>

                                </tbody>
                            </table>
                            <div id="pagination" class="mt-4">

                            </div>
                        </div>
                    </div>

                    <!-- modale addproduct -->
                    <div class="addproduct modal fade" id="addproduct" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLongTitle">Add Product</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">

                                    <form>
                                      <div class="form-group">
                                        <label for="exampleInputName">name</label>
                                        <input type="text" name="name" value="" class="form-control" id="exampleInputName">
                                        <div class="err"></div>
                                      </div>
                                      <div class="form-group">
                                        <label for="exampleInputDescription">Description</label>
                                        <textarea name="description" rows="5" class="form-control" id="exampleInputDescription"></textarea>
                                        <div class="err"></div>
                                      </div>
                                      <div class="form-group">
                                        <label for="exampleInputSize">Size <span style="color:red">option</span></label>
                                        <div class="size add-ons mb-2"></div>
                                        <input type="text" name="size" value="" class="form-control" id="exampleInputSize">
                                        <div class="err"></div>
                                        <button type="button" class="addition btn btn-warning mt-2 ml-3">Add</button>
                                      </div>
                                      <div class="form-group">
                                        <label for="exampleInputColor">Color <span style="color:red">option</span></label>
                                        <div class="color add-ons mb-2"></div>
                                        <input type="text" name="color" value="" class="form-control" id="exampleInputColor">
                                        <div class="err"></div>
                                        <button type="button" class="addition btn btn-warning mt-2 ml-3">Add</button>
                                      </div>
                                        <div class="form-group">
                                        <label for="exampleInputPrice">price</label>
                                        <input type="number" name="price"  class="form-control" id="exampleInputPrice">
                                        <div class="err">

                                        </div>
                                      </div>
                                        <div class="form-group">
                                        <label for="exampleInputSale">sale</label>
                                        <input type="text" name="sale" value="" class="form-control" id="exampleInputSale" >
                                        <div class="err">

                                        </div>
                                      </div>
                                     <div class="form-group">
                                        <label for="exampleInputImage"> image</label>
                                        <input type="file" name="file[]" multiple value="" class="form-control" id="exampleInputImage" >
                                        <div class="err">

                                        </div>
                                      </div>
                                       <div class="form-group">
                                          <label for="exampleInputDate"> Start date </label>
                                          <input type="date" name="start_date" value="" class="form-control" id="exampleInputDate" >
                                          <div class="err">

                                          </div>
                                        </div>
                                      <div class="form-group">
                                        <label for="exampleFormControlSelect1">category</label>
                                        <select name="cat_id" class="form-control" id="exampleFormControlSelect1">

                                        </select>
                                      </div>
                                      <div class="form-group">
                                        <label for="cat">category</label>
                                        <div class="cat_child">

                                        </div>
                                      </div>

                                      <button type="submit" class="btn btn-primary">Submit</button>
                                    </form>

                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- end modale addproduct -->

                    <!-- modale show image -->
                    <div class="modal fade" id="image" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title title-img-desc" id="exampleModalLongTitle"></h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div style="word-break:break-word" class="modal-image modal-description modal-body">

                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- end modale show image -->

                    <!-- stat modal delete product -->
                    <div class="delete modal fade" id="delete" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLongTitle">Delete Product</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="del-body modal-body">

                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button class="del-pro btn btn-secondary" type="button" name="button">confirm</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- end modale delet product -->

                    <!-- stat modal edit product -->
                    <div class="editproduct modal fade" id="Edit" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLongTitle">Edit product</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <form>
                                      <div class="form-group">

                                        <label for="exampleInputName">name</label>
                                        <input type="text" name="name" value="" class="form-control" id="exampleInputName">
                                        <div class="err"></div>
                                      </div>
                                      <div class="form-group">
                                        <label for="exampleInputDescription">Description</label>
                                        <textarea name="description" rows="8" class="form-control" id="exampleInputDescription"></textarea>
                                        <div class="err"></div>
                                      </div>
                                      <div class="form-group">
                                        <label for="exampleInputSize">Size <span style="color:red">option</span></label>
                                        <div class="size add-ons mb-2"></div>
                                        <input type="text" name="size" value="" class="form-control" id="exampleInputSize">
                                        <div class="err"></div>
                                        <button type="button" class="addition btn btn-warning mt-2 ml-3">Add</button>
                                      </div>
                                      <div class="form-group">
                                        <label for="exampleInputColor">Color <span style="color:red">option</span></label>
                                        <div class="color add-ons mb-2"></div>
                                        <input type="text" name="color" value="" class="form-control" id="exampleInputColor">
                                        <div class="err"></div>
                                        <button type="button" class="addition btn btn-warning mt-2 ml-3">Add</button>
                                      </div>
                                        <div class="form-group">
                                        <label for="exampleInputPrice">price</label>
                                        <input type="number" name="price"  class="form-control" id="exampleInputPrice">
                                        <div class="err"></div>
                                      </div>
                                        <div class="form-group">
                                        <label for="exampleInputSale">sale</label>
                                        <input type="text" name="sale" value="" class="form-control" id="exampleInputSale" >
                                        <div class="err">

                                        </div>
                                      </div>
                                     <div class="form-group">
                                        <label for="exampleInputImage"> image</label>
                                        <input type="file" name="file[]" multiple value="" class="form-control" id="exampleInputImage" >
                                        <div class="err">

                                        </div>
                                      </div>
                                       <div class="form-group">
                                          <label for="exampleInputDate"> Start date </label>
                                          <input type="date" name="start_date" value="" class="form-control" id="exampleInputDate" >
                                          <div class="err">

                                          </div>
                                        </div>
                                      <div class="form-group">
                                        <label for="exampleFormControlSelect1">category</label>
                                        <select name="cat_id" class="form-control" id="exampleFormControlSelect1">

                                        </select>
                                      </div>
                                      <div class="form-group">
                                        <label for="cat">category</label>
                                        <div class="cat_child">

                                        </div>
                                      </div>

                                      <button type="submit" class="subedit btn btn-primary">Submit</button>
                                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- end modale edit product -->

                    <!-- start modal add category -->
                    <div class="addcategory modal fade" id="addcategory" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLongTitle">add Category</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <button type="button" class="addcat btn btn-primary" name="button">add Category</button>
                                    <button type="button" class="addchild-cat btn btn-primary" name="button">add Child Category</button>
                                    <div class="modal-body-category">
                                        <form>

                                        </form>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- end modal add category -->
                </div>
                <!-- /.container-fluid

            </div>
            <!-- End of Main Content -->

        </div>
        <!-- End of Content Wrapper -->

    </div>
    <!-- End of Page Wrapper -->

    <!-- Scroll to Top Button-->
    <a class="scroll-to-top rounded" href="#page-top">
        <i class="fas fa-angle-up"></i>
    </a>

    <!-- Logout Modal-->
    <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                    <button class="logout-admin btn btn-primary" type='submit'>Logout</button>
                </div>
            </div>
        </div>
    </div>

     <!-- admin info  -->
     <div class="modal fade" id="admininfo" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Profile</h5>
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div style="text-align:center" class="modal-body modal-body-profile"></div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" type="button" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Bootstrap core JavaScript-->

    <script src="vendor/jquery/jquery.min.js"></script>
    <!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script> -->
    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

    <!-- Core plugin JavaScript-->
    <script src="vendor/jquery-easing/jquery.easing.min.js"></script>

    <!-- Custom scripts for all pages-->
    <script src="js/sb-admin-2.min.js"></script>

    <!-- Page level plugins -->
    <script src="vendor/datatables/jquery.dataTables.min.js"></script>
    <script src="vendor/datatables/dataTables.bootstrap4.min.js"></script>
    <!--===============================================================================================-->
    <!-- pagination js -->
    <script src="..\node_modules\paginationjs\src\pagination.js" charset="utf-8"></script>
    <!--===============================================================================================-->

    <!-- Page level custom scripts -->
    <script src="js/demo/datatables-demo.js"></script>
    <script src="ajax/product/products.js"></script>
    <script src="ajax\administration\admin-info.js"></script>    <!-- admin info -->

</body>

</html>
