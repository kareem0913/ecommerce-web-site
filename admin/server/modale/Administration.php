<?php


// start calss administration
class Administration
{
    public $db;
    public function __construct($dbname){
        $this -> db = $dbname ;
    }

    public function readAll(){

        // select all without password
        $this -> db -> query("SELECT id,name,email,adress,gander,priv,start_date,age FROM administration");
        $user = $this -> db -> selectAll();
        return json_encode($user);
    }

    public function read($id){
        $this -> db -> query("SELECT * FROM administration WHERE id = $id");
        $user = $this -> db -> select();
        unset($user['password']);
        $this -> db -> query("SELECT id FROM contact WHERE unread = 0");   // read count massege for tobar
        $this -> db -> selectAll();
        $count = $this -> db -> count();  // count message
        $user['count_unread_message'] = $count;
        return json_encode($user);
    }

    // start method insert admin
    public function insert($data){
        session_start();
        if ($_SESSION['priv'] < $data['priv']) {
            return json_encode([
                'message' => 'somthing wrong plase try again',
            ]);
        }
        if (array_key_exists('email', $data)) {
            $email = $data['email'];
            $this -> db -> query("SELECT * FROM administration WHERE email = '$email'");
            $this -> db -> select();
            if ($this -> db -> count() > 0) {
                return json_encode([
                    'email' => 'email is alredy exists',
                ]);
            }
        }

        // encrypt the password
        if(array_key_exists('password' , $data)){
            $data['password'] = md5($data['password']);
        }


        $keys = array_keys($data);
        $keys = implode(',' , $keys);

        // get values with ?
        $values = '' ;
        foreach($data as $val){
            $values .=  "? ," ;
        }
        $values =  rtrim($values , ',') ;

        $this -> db -> query("INSERT INTO administration ($keys) VALUES ($values)");

        $keys = array_keys($data);
        $i = 1;
        foreach ($data as $value) {
            $this -> db -> bind($i++ , $value);
        }

        $this -> db -> execute();
        return json_encode([
            'success' => 'success insert',
        ]);
    }

    // start function update
    public function update($data){
        session_start();
        if ($_SESSION['priv'] < $data['priv']) {
            return json_encode([
                'message' => 'somthing wrong plase try again',
            ]);
        }
        if (array_key_exists('password', $data)) {
            if (empty($data['password'])) {
                unset($data['password']);
            }else{
                $data['password'] = md5($data['password']);
            }
        }

        if (array_key_exists('email', $data)) {
            $id = $data['id'];
            $user = $this -> read($id);
            $user = json_decode($user, true);

            if ($user['email'] != $data['email']) {
                $email = $data['email'];
                $this -> db -> query("SELECT * FROM administration WHERE email = '$email'");
                $this -> db -> select();
                $count = $this -> db -> count();
                if ($count > 0) {
                    return json_encode([
                        'message' => 'this email is alredy exists',
                    ]);
                }
            }

        }

        $str = '';
        foreach ($data as $key => $value) {
            $key == 'id' ? '' : $str .= $key .'= ?, ';
        }

        $str = rtrim($str, ', ');
        // echo $str;
        $query = $this -> db -> query("UPDATE administration SET $str WHERE id = ? ");
        $i = 1;
        foreach ($data as $value) {
            $this -> db -> bind($i++, $value);
        }
        $id = $data['id'];
        $this -> db -> bind($i-1, $id);
        $ex = $this -> db -> execute();
        // read row ecull id
        $this -> read($id);
        $cheak = $this -> db -> count();
        if ($cheak > 0) {
            return json_encode([
                'message' => 'update success',
            ]);
        }else{
            return json_encode([
                'message' => 'somthing is wrong',
            ]);
        }

    }

    public function priv_rall(){
        $this -> db -> query("SELECT * FROM priv");
        $data = $this -> db -> selectAll();
        return json_encode($data);
    }
    //  delete admin 
    public function del($id)
    {
        $this -> read($id);
        $chick = $this -> db -> count();
        if ($chick === 0) {
            return json_encode([
                'error' => 'somthing wrong in your requist',
            ]);
        }
        $this -> db -> query("DELETE FROM administration WHERE id = ?");
        $this -> db -> bind(1, $id);
        $this -> db -> execute();
        return json_encode([
            'success' => 'success delete',
        ]);

    }
    // read message
    public function contact(){
        $this -> db -> query("SELECT * FROM contact ORDER BY unread != 0");
        $messages = $this -> db -> selectAll();
        return json_encode($messages);
    }
    // delete message 
    public function del_message($id){
        $this -> db -> query("DELETE FROM contact WHERE id = ?");
        $this -> db -> bind(1, $id);
        $this -> db -> execute();
        return json_encode([
            'success' => 'success delete',
        ]);
    }
    // change read and unread message
    public function read_unread_message($id){
        $this -> db -> query("UPDATE contact SET unread = 1 WHERE id = $id");
        $this -> db -> execute();
        return json_encode([
            'success' => 'success'
        ]);
    }
    // login admin [Authentication]
    public function login($data){
         // Password encryption equal to the one in the database
         if (array_key_exists('password', $data)) {
            $data['password'] = md5($data['password']);
        }else{
            return json_encode(['message' => 'somthing is wrong']);
        }
        $this -> db -> query("SELECT * FROM administration WHERE email = ? && password = ?");
        $this -> db -> bind(1, $data['email']);
        $this -> db -> bind(2, $data['password']);
        $admin = $this -> db -> select();
        $count  = $this -> db -> count();
        if ($count > 0) {
            session_start();
            $_SESSION['login_admin'] = $admin['id'];
            $_SESSION['priv'] = $admin['priv'];
            return json_encode([
                'success' => 'success',
            ]);
        }
        $this -> db -> query("SELECT * FROM administration WHERE email = ? ");
        $this -> db -> bind(1, $data['email']);
        $admin = $this -> db -> select();
        $count = $this -> db -> count();
        if ($count > 0) {
            return json_encode([
                'password' => 'wrong password',
            ]);
        }else{
            return json_encode([
                'email' => 'this email dose not exist',
            ]);
        }
    }
    // edit admin image [profile]
    public function edit_profile_image($data){
        $id = $data['id'];
        $image = $data['image'];
        $this -> db -> query("UPDATE administration SET image = '$image' WHERE id = $id");
        $this -> db -> execute();
        return json_encode([
            'image' => $image,
        ]);
    }
    // del image profile
    public function del_profile_img($data){
        $id = $data['id'];
        $this -> db -> query("UPDATE administration SET image = '' WHERE id = $id");
        $this -> db -> execute();
        unlink("../../api/administration/images/{$data['image']}");
        return json_encode([
            'success' => 'success',
        ]);
    }
    // dashboard info
    public function dashboard_info(){
       try {
        $count_admins = $this -> db -> count_row('administration');
        $count_products = $this -> db -> count_row('products');
        $count_users = $this -> db -> count_row('users');
        return json_encode([
            'count_admins' => $count_admins,
            'count_products' => $count_products,
            'count_users' => $count_users
        ]);
       } catch (\Throwable $th) {
           echo $th -> getMessage();
       }
    }

}
// end class administration