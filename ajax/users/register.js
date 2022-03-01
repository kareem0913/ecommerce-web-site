
// [register]

$('form').on('submit', function(event){
    event.preventDefault();
    const data = $(this).serializeArray();
    var editdata = {};
    data.forEach((item, i) => {
        editdata[item.name] = item.value;
    });
    const obj = new Checkdata(editdata);
    if (obj.validate()) {
        const data = new FormData(this);
        data.delete('repeatPassword');
        $.ajax({
            url : "http://localhost/ecommerce/admin/server/api/users/adduser.php",
            method : 'post',
            data : data,
            success: (res) => {
                var input = this.querySelectorAll('input');
                input.forEach((item, i) => {
                    $(item).siblings('.err').html(``);
                });

                if ('email' in res) {
                    $('input[name=email]').siblings('.err').html(`<small style=color:red;font-size:15px>${res.email}</small>`)
                }else{
                    $('input[name=email]').siblings('.err').html(``);
                    window.location = "http://localhost/ecommerce/index.php";
                }
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
        // console.log(error);
        const input = this.querySelectorAll('input');
        $(input).each((i , item) => {
            let n = $(item).attr('name');
            if (n in error) {
                $(item).siblings('.err').html(`<small style=color:red;font-size:15px>${error[n]}</small>`);
            }else{
                $(item).siblings('.err').html(``);
            }
        })
    }
    console.log(obj.err);
})
