
var dataAdmin;
var session_priv_admin = $('input[name=session_priv_admin').val();
$(document).ready(function(){
    const session_login_admin = $('input[name=session_login_admin]').val();
    $.ajax({
        url : 'http://localhost/ecommerce/admin/server/api/administration/read.php',
        method : 'post',
        data : {session_login_admin},
        success : res => {
            $('.count-message').text(res.count_unread_message);
            dataAdmin = res;
            $('.admin-name').text(res.name);
           res.image == '' ? $('.img-profile').attr('src', 'img/undraw_profile.svg') : $('.img-profile').attr('src', `server/api/administration/images/${res.image}`);
        },
        error : err => console.log(err),
    });
    // profile 
    const priv = {300:'admin', 200:'assistant', 100:'super'};
    $('.admin-profile').click(() => {
        $('.modal-body-profile').html(`
            <div class='admin-image'>
                <img style='width:200px;border-radius:5%' src='${dataAdmin.image == '' ? 'img/undraw_profile.svg' : 'server/api/administration/images/'+dataAdmin.image}' class='imageadmin header-icon1 mb-2' alt='ICON'>
                ${dataAdmin.image != '' ? `<span class='close'><i class='fa fa-times'></i></span>` : ''}
            </div>
            <button class='edit-image btn btn-primary mb-3' type='button'>Edit</button>
            <p>   name  :  ${dataAdmin.name}</p>
            <p>   email  :  ${dataAdmin.email}</p>
            <p>   priv  :  ${priv[session_priv_admin]}</p>
            <p>   address  :  ${dataAdmin.adress}</p>
            

        `)
    });
    // edit image profile
    $(document).on('click', '.edit-image', () => {
        $('.modal-body-profile').html(`
            <div class='admin-image'>
                <img style='width:200px;border-radius:5%' src='${dataAdmin.image == '' ? 'img/undraw_profile.svg' : 'server/api/administration/images/'+dataAdmin.image}' class='imageadmin header-icon1 mb-2' alt='ICON'>
                ${dataAdmin.image != '' ? `<span class='close'><i class='fa fa-times'></i></span>` : ''}
            </div>
            <form>
                <input name='admin-img' type='file'>
                <div class='err'></div>
                <button class='btn btn-primary' type='submit'>submit</button>
            </form>
        `)
    });
    // submit image 
    $(document).on('submit', '.modal-body-profile form', function(event){
        event.preventDefault();
        const data = new FormData(this);
        data.append('id', session_login_admin)
        $.ajax({
            url : 'http://localhost/ecommerce/admin/server/api/administration/edit-admin-image.php',
            method : 'post',
            data : data,
            success : res => {
                console.log(res);
                if ('file' in res) {
                    $(this).find('.err').html(`<small style=color:red;font-size:15px>${res.file}</small>`);
                    return;
                }
                $('.imageadmin').attr('src', `server/api/administration/images/${res.image}`);
                // $('.close').css({
                //     display : 'none',
                // });
                dataAdmin['image'] = res.image;
            },
            error : err => console.log(err),
            contentType : false,
            processData : false,
            cache : false,
        })
    })
    // delete admin image 
    $(document).on('click', '.admin-image', () => {
        const image = dataAdmin.image;
        if (image == '') {
            return;
        }
        const id = session_login_admin;
        $.ajax({
            url : 'http://localhost/ecommerce/admin/server/api/administration/del-profile-img.php',
            method : 'post',
            data : {id, image},
            success : res => {
                $('.imageadmin').attr('src', 'img/undraw_profile.svg');
                $('.close').css({
                    display : 'none',
                });
                dataAdmin['image'] = '';
                
            },
            error : err => console.log(err)
        });
    })
    // logout amdmin
    $('.logout-admin').on('click', function(event){
        event.preventDefault();
        const url = "http://localhost/ecommerce/admin/server/api/administration/logout.php";
        $.post(url, res => window.location="http://localhost/ecommerce/admin/login.html");
    });
})