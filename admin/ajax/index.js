(function($){
    $(document).ready(function(){
        const url = "http://localhost/ecommerce/admin/server/api/administration/dashboard-info.php";
        $.ajax({
            url : url,
            method: 'post',
            success : res => {
                const {count_admins, count_products, count_users} = res;
                $('.admin-count').text(count_admins)
                $('.products-count').text(count_products)
                $('.users-count').text(count_users)
            },
            error : err => console.log(err),
        })
    //    $.get(url, res => console.log(res));
    })
})(jQuery)