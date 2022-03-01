$('form').on('submit', function(event){
    event.preventDefault();
    const d = {email : $('input[name=email]').val()};
    const obj = new Checkdata(d);     // this class check If the email is written correctly
    if (obj.email()) {
        $.ajax({
            url : "http://localhost/ecommerce/admin/server/api/administration/login.php",
            method : 'post',
            data : new FormData(this),
            success : (res) => {
                console.log(res);
                // clean div error if he hade error
                $('input[name=email]').siblings('.err').html(``);

                // cheak if respons have error
                if ('email' in res){
                    $('input[name=email]').siblings('.err').html(`<small style=color:red;font-size:15px>${res['email']}</small>`);
                    return false;
                }else if ('password' in res){
                    $('input[name=password]').siblings('.err').html(`<small style=color:red;font-size:15px>${res['password']}</small>`);
                    return false;
                }else{
                    $('input[name=email]').siblings('.err').html(``);
                    $('input[name=password]').siblings('.err').html(``);
                }
                window.location = "http://localhost/ecommerce/admin/index.php";
            },
            error : (err) => {
                console.log(err);
            },
            contentType : false,
            processData : false,
            cache : false,
        })
    }else{
        const error = obj.err;
        if ('email' in error) {
            $('input[name=email]').siblings('.err').html(`<small style=color:red;font-size:15px>${error['email']}</small>`);
        }else{
            $('input[name=email]').siblings('.err').html(``);
        }
    }
})