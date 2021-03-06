<?php

// start database class

class Database{

    public $conn;      // pdo connect
    public $prepare;  // pdo prepare

    public function __construct(){
        $this -> connect();
    }
    // start function connect
    public function connect(){
        try{
            $dns = "mysql:host=localhost;dbname=ecommerce;charset=utf8";
            $options = [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION ,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
            ];
            $this -> conn = new PDO($dns, 'root', '', $options);
        }catch(PDOException $e){
            echo $e -> getMessage();
        }
    }
    // end function connect

    //start function query
    public function query($sql){
        $this -> prepare = $this -> conn -> prepare($sql);
    }
    // end function query

    // start function bind
    public function bind($key, $value){
        $this -> prepare -> bindParam($key, $value);
    }
    // end function bind

    public function execute()
    {
        $ex = $this -> prepare -> execute();
        return $ex ? true : false ;
    }

    public function selectAll(){
        $this -> execute();
        return $this -> prepare -> fetchAll();
    }

    public function select(){
        $this -> execute();
        return $this -> prepare -> fetch();
    }

    public function count(){
        // $this -> execute();
        return $this -> prepare -> rowCount();
    }
    // method return number of row table
    public function count_row($table){
        $this -> query("SELECT id FROM $table");
        $data = $this -> selectAll();
        return $this -> count();
    }
    public function last_id(){
        return $this -> conn -> lastInsertId();
    }
}
// end databasse class
