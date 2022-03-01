<?php


//start trait
trait file
{
    public $file;
    public $imageName = [];
    public function file()
    {
        if (!$this -> exists()) {
            $this -> error('file', 'no file uploaded');
            return false;
        }
        if (!$this -> ext()) {
            $this -> error('file', 'wrong extension');
            return false;
        }
        if (!$this -> size()) {
            $this -> error('file', 'this file is too big');
            return false;
        }
        return true;
        // move file to folder image /// one file
        // $new_name = uniqid();
        // move_uploaded_file($this -> getdata('tmp_name'), 'images/' .$new_name);
        // array_push($this -> imageName, $new_name);
        // return true;
    }

    public function exists(){
        // multiple files
        foreach ($this -> getdata('error') as $value) {
            if ($value != 0) {
                return false;
            }
        }
        return true;
        // one file
        // $data = $this -> getdata('error');
        // if ($data != 0) {
        //     return false;
        // }
        // return true;
    }

    public function ext(){
        // multiple files
        $extensions = ['jpg', 'gif', 'png'];
        foreach ($this -> getdata('name') as $value) {
            $extension = pathinfo($value, 4);
            // array_push($this -> ext, $value);
            if (!in_array($extension, $extensions)) {
                return false;
            }
        }
        return true;
        // one file
        // $data = $this ->  getdata('name');
        // $data = pathinfo($data, 4);
        // $extensions = ['jpg', 'png', 'gif'];
        // if (!in_array($data, $extensions)) {
        //     return false;
        // }
        // return true;
    }

    public function size(){
        // multiple files
        foreach ($this -> getdata('size') as $value) {
            if ($value > 20000000) {
                return false;
            }
        }
        return true;
        // one file
        // $data = $this -> getdata('size');
        // if ($data > 200000) {
        //     return false;
        // }
        // return true;
    }

    public function move(){
        // move file to folder image /// multiple files
        foreach ($this -> getdata('tmp_name') as $value) {
            $new_name = uniqid();
            move_uploaded_file($value, 'images/' .$new_name);
            array_push($this -> imageName, $new_name);
        }
        return true;
    }

    public function getdata($value){
         $key = array_keys($this -> file)[0];
         return $this -> file[$key][$value];
    }
}
// end trait
