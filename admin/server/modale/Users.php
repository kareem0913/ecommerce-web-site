<?php


// start calss users
class Users
{
    public $db;
    public function __construct($dbname){
        $this -> db = $dbname ;
    }

    public function readAll(){
        
        // select all without password
        $this -> db -> query("SELECT * FROM users");
        $user = $this -> db -> selectAll();
        return json_encode($user);
    }

    public function read($id){
        $this -> db -> query("SELECT * FROM users WHERE id = $id");
        $user = $this -> db -> select();
        unset($user['password']);
        return json_encode($user);
    }

    //  insert user [register]
    public function insert($data){

        if (array_key_exists('email', $data)) {
            $email = $data['email'];
            $this -> db -> query("SELECT * FROM users WHERE email = '$email'");
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

        $this -> db -> query("INSERT INTO users ($keys) VALUES ($values)");

        $keys = array_keys($data);
        $i = 1;
        foreach ($data as $value) {
            $this -> db -> bind($i++ , $value);
        }

        $this -> db -> execute();
        session_start();
        $_SESSION['login'] = $this -> db -> last_id();
        return json_encode([
            'success' => 'success insert',
        ]);
    }

    // start function update
    public function update($data){

        $id = $data['id'];
        unset($data['id']);

        if (array_key_exists('password', $data)) {
            $data['password'] = md5($data['password']);
        }

        if (array_key_exists('email', $data)) {
            $user = $this -> read($id);
            $user = json_decode($user, true);

            if ($user['email'] != $data['email']) {
                $email = $data['email'];
                $this -> db -> query("SELECT * FROM users WHERE email = '$email'");
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
        // return $str;
        $query = $this -> db -> query("UPDATE users SET $str WHERE id =  ?");
        $i = 1;
        foreach ($data as $value) {
            $this -> db -> bind($i++, $value);
        }
        $this -> db -> bind($i++, $id);
        $ex = $this -> db -> execute();
        // read row ecull id
        $this -> read($id);
        $cheak = $this -> db -> count();
        if ($cheak > 0) {
            $user = $this -> db -> select();  /// return  update data;
            unset($user['password']);
            return json_encode([
                'message' => 'update success',
                'user' => $user,    /// return update data
            ]);
        }else{
            return json_encode([
                'message' => 'somthing is wrong',
            ]);
        }

    }
    // delete user
    public function del($id)
    {
        $this -> read($id);
        $chick = $this -> db -> count();
        if ($chick === 0) {
            return json_encode([
                'error' => 'somthing wrong in your requist',
            ]);
        }
        $this -> db -> query("DELETE FROM users WHERE id = ?");
        $this -> db -> bind(1, $id);
        $this -> db -> execute();
        return json_encode([
            'success' => 'success delete',
        ]);

    }
    // delete user profile image 
    public function del_profile_img($data){
        $id = $data['id'];
        $this -> db -> query("UPDATE users SET image = '' WHERE id = $id");
        $this -> db -> execute();
        unlink("../../api/users/images/{$data['image']}");
        return json_encode([
            'user' => $this -> read($id),   // return new data
        ]);
    }
    // [login]
    public function login($data){
        // Password encryption equal to the one in the database
        if (array_key_exists('password', $data)) {
            $data['password'] = md5($data['password']);
        }else{
            return json_encode(['message' => 'somthing is wrong']);
        }
        $this -> db -> query("SELECT * FROM users WHERE email = ? && password = ?");
        $this -> db -> bind(1, $data['email']);
        $this -> db -> bind(2, $data['password']);
        $user = $this -> db -> select();
        $count  = $this -> db -> count();
         // if email and password true return data user ** else cheak if email exist in database if exist return 'password is wrong' ** if not exist return email is not exist in database
        if ($count > 0) {
            session_start();
            $_SESSION['login'] = $user['id'];
            return json_encode([
                'data' => $user,
            ]);
        }
        $this -> db -> query("SELECT * FROM users WHERE email = ? ");
        $this -> db -> bind(1, $data['email']);
        $user = $this -> db -> select();
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
    // add comment 
    public function contact($data){
        // $data['unread'] = 0;    // 0 = unread, 1 = read
        $keys = array_keys($data);
        $keys = implode(',', $keys);
        $values = '';
        foreach ($data as $key => $value) {
            $values .= '?, ';
        }
        $values = rtrim($values, ', ');
        $this -> db -> query("INSERT INTO contact ($keys) VALUES ($values)");
        $i = 1;
        foreach ($data as $value) {
            $this -> db -> bind($i++ , $value);
        }
        $this -> db -> execute();
        return json_encode([
            'success' => 'insert success',
        ]);
    }
   

}

// end class users
