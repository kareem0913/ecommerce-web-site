<?php

class Cheack
{
    use file;
    public $data;
    public $err =[];
    public function __construct($data, $file){
        $this -> data = $data;
        $this -> file = $file;
    }

    // * [validate image category parent] * //
    public function valimgcat(){
        $i= 0;
        if (!$this -> name()) {
            $i++;
        }
        if (!$this -> file()) {
            $i++;
        }
        if ($i > 0) {
            return false;
        }
        $this -> move();
        return true;
    }

    public function validate(){
        $i = 0;
        if (!$this -> name()) {
            $i++;
        }
        if (!$this -> description()) {
            $i++;
        }
        if (!$this -> price()) {
            $i++;
        }
        if (!$this -> sale()) {
            $i++;
        }
        if (!$this -> date()) {
            $i++;
        }
        if (!$this -> file()) {
            $i++;
        }

        if ($i > 0) {
            return false;
        }
        $this -> move();
        return true;
    }

    public function name(){
        $name = $this -> get('name');
        if (empty($name)) {
            $this -> error('name', 'is cant be empty');
            return false;
        }else if (preg_match('~[+=&$?<>$()0-9]~', $name)) {
            $this -> error('name', 'wrong username It should not contain numbers or (+=&$?<>$())');
            return false;
        }else if (strlen($name) < 3) {
            $this -> error('name', 'thie name is very short');
            return false;
        }
        return true;
    }

    public function description(){
        $description = $this -> get('description');
        $description = str_replace(' ', '', $description);
        if (empty($description)) {
            $this -> error('description', 'it cant be empty');
            return false;
        }elseif (preg_match('/[+=&$?<>$()]/', $description)) {
            $this -> error('description', 'you description musnt have any qute form (+=&$?<>$())');
            return false;
        }
        else if (strlen($description) < 50) {
            $this -> error('description', 'your description sholud not be less than 50 charecter');
            return false;
        }
        return true;
    }

    public function price(){
        $price = $this -> get('price');
        if (empty($price)) {
            $this -> error('price', 'it cant by empty');
            return false;
        }else if(preg_match('/[A-Za-z]/', $price)){
            $this -> error('price', 'thie price musnt have string');
            return false;
        }
        return true;
    }

    public function sale(){
        $sale = $this -> get('sale');
        if(preg_match('/[A-Za-z]/', $sale)){
            $this -> error('sale', 'thie price musnt have string');
            return false;
        }
        return true;
    }

    public function date(){
        $date = $this -> get('start_date');
        if (empty($date)) {
            $this -> error('start_date', 'it cant by empty');
            return false;
        }
        return true;
    }

    public function get($value){
        // return $this -> data[$value];
        return htmlspecialchars($this -> data[$value]);
    }

    public function error($key, $value){
        return $this -> err[$key] = $value;
    }
}
