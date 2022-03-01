<?php


class image
{
    public static $file;
    public static $imageName;
    public static $error = [];

    public function __construct($file)
    {
        static::$file = $file;
    }

    public static function validate(){
        if (!self::exists()) {
            self::error('file', 'no file uploaded');
            return false;
        }
        if (!self::ext()) {
            self::error('file', 'wrong extension');
            return false;
        }
        if (!self::size()) {
            self::error('file', 'this file is too big');
            return false;
        }

        // move file to folder image /// one file
        $new_name = uniqid();
        move_uploaded_file(self::getdata('tmp_name'), 'images/' .$new_name);
        self::$imageName = $new_name;
        return true;
    }

    public static function exists(){
        $data = self::getdata('error');
        if ($data != 0) {
            return false;
        }
        return true;
    }

    public static function ext(){
        $data = self::getdata('name');
        $data = pathinfo($data, 4);
        $extensions = ['jpg', 'png', 'gif'];
        if (!in_array($data, $extensions)) {
            return false;
        }
        return true;
    }

    public static function size(){
        $data = self::getdata('size');
        if ($data > 20000000) {
            return false;
        }
        return true;
    }

    public static function getdata($value){
         $key = array_keys(self::$file)[0];
         return self::$file[$key][$value];
    }
    public static function error($key, $value){
        return self::$error[$key] = $value;
    }

}
