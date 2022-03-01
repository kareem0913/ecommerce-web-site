
$('.comment form').on('submit', function(event){
    event.preventDefault();
    const data = $(this).serializeArray();
    let editdata = {};
    data.forEach((item, i) => {
        editdata[item.name] = item.value;
    });
    const obj = new Checkdata(editdata);
    if (obj.contact_validate()) {
        const data = new FormData(this);
        $.ajax({
            url : "http://localhost/ecommerce/admin/server/api/users/contact.php",
            method : 'post',
            data : new FormData(this),
            success : res => {
                $('.err').html(``);
                $('input, textarea').val('');
            },
            error : err => console.log(err),
            contentType : false,
            processData : false,
            cache : false,
        })
    }else{
        const error = obj.err;
        // console.log(error);
        const input = this.querySelectorAll('.comment input, .comment textarea');
        $(input).each((i , item) => {
            let n = $(item).attr('name');
            if (n in error) {
                $(item).siblings('.err').html(`<small style=color:#f1baba;font-size:15px>${error[n]}</small>`);
            }else{
                $(item).siblings('.err').html(``);
            }
        })
    }
})