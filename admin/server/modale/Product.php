<?php

// start class product
class Product
{
    public $db;
    public function __construct($db){
        $this -> db = $db;
    }
    // start method read all product
    public function readAll(){
        $this -> db -> query("SELECT * FROM products");
        $data = $this -> db -> selectAll();
        return json_encode($data);
    }
    // end method read all product

    // start method read one product
    public function read($id){
        $this -> db -> query("SELECT * FROM products WHERE id = ?");
        $this -> db -> bind(1, $id);
        $data = $this -> db -> select();
        return json_encode($data);
    }
    // end method read one product

    // start method read cart
    public function readCart($data){
        $cart_product = [];
        foreach ($data as $key => $value) {
            $id = $value['id'];
            $this -> db -> query("SELECT * FROM products WHERE id = $id");
            $product = $this -> db -> select();
            unset($product['description']);
            array_key_exists('count', $value) ? $product['numpro'] = $value['count'] : '';
            if (array_key_exists('size', $value)) {
                $product['size'] = $value['size'];
            }else{
                unset($product['size']);
            }
            if (array_key_exists('color', $value)) {
                $product['color'] = $value['color'];
            }else{
                unset($product['color']);
            }
            array_push($cart_product, $product);
        }
        echo json_encode($cart_product);
    }
    // end method read cart

    // start method read all product had some category
    public function product_one_category($id)
    {
        $this -> db -> query("SELECT * FROM products WHERE cat_id = ? ");
        $this -> db -> bind(1, $id);
        $data = $this -> db -> selectAll();
        return json_encode($data);
    }
    // end method read all product had some category

    // start method insert
    public function insert($data, $file){
        $file = implode(',', $file);
        $str = '';
        foreach ($data as $key => $value) {
            $str .= '?, ' ;
        }
        // plus for image becuse data nont have key image
        $str .= '?, ' ;
        $str = rtrim($str, ', ');
        $keys = array_keys($data);
        // this key must be equle database column
        array_push($keys, 'img');
        $keys = implode(',', $keys);
        $this -> db -> query("INSERT INTO products($keys) VALUES ($str)");
        $i = 1;
        foreach ($data as $key => $value) {
            $this -> db -> bind($i, $value);
            $i++;
        }
        $this -> db -> bind($i, $file);
        $this -> db -> execute();
        return json_encode([
            'message' => 'success insert',
        ]);
    }
    // end method insert

    // satrt method update
    public function update($data, $file){
        $count = count($file);
        $count = $count / 2;
        array_splice($file, count($file) - $count , $count);
        // return $count;
        // return json_encode([
        //     'file' => $file,
        // ]);
        $str = '';
        foreach ($data as $key => $value) {
            $key == 'id' ? '' : $str .= $key .'= ?, ';
        }
        if (!empty($file)) {
            $str .= 'img' .'= ?, ';
        }
        $str = rtrim($str, ', ');
        // return json_encode($file);
        // return $str;
        $this -> db -> query("UPDATE products SET $str WHERE id = ?");
        $i = 1;
        foreach ($data as $key => $value) {
            $this -> db -> bind($i, $value);
            $i++;
        }
        if (!empty($file)) {
            $file = implode(',', $file);
            $this -> db -> bind($i-1, $file);
            $id = $data['id'];
            $this -> db -> bind($i, $id);
        }else{
            $id = $data['id'];
            $this -> db -> bind($i-1, $id);
        }
        $this -> db -> execute();
        return json_encode([
            'success' => 'update success',
        ]);
    }
    // end method update

    // start method delete product
    public function del($data){
        $id = $data['id'];
        $this -> read($id);
        $chick = $this -> db -> count();
        if ($chick === 0) {
            return json_encode([
                'error' => 'somthing wrong in your requist',
            ]);
        }
        $this -> db -> query("DELETE FROM products WHERE id = ?");
        $this -> db -> bind(1, $id);
        $this -> db -> execute();
        $image = explode(',', $data['image']);
        foreach ($image as $key => $value) {
            unlink("../../api/products/images/{$value}");
        }
        return json_encode([
            'success' => 'success delete',
        ]);
    }
    // end method delete

    // all category
    public function allcat(){
        $this -> db -> query("SELECT * FROM category ");
        $data = $this -> db -> selectAll();
        return json_encode($data);
    }
    // end all category

    // start method get category parent
    public function category(){
        $this -> db -> query("SELECT * FROM category WHERE cat_id = 0");
        $data = $this -> db -> selectAll();
        return json_encode($data);
    }
    // end method get category

    // start method get child category
    public function child_category($id){
        $this -> db -> query("SELECT * FROM category WHERE cat_id = $id");
        $data = $this -> db -> selectAll();
        return json_encode($data);
    }
    // end method get child category

    // get category name
    public function catname($id){
        $this -> db -> query("SELECT name FROM category WHERE id = ?");
        $this -> db -> bind (1, $id);
        $data = $this -> db -> select();
        return json_encode($data);
    }
    // end method get catname

    // start method insert category
    public function insert_category($data){
        array_key_exists('cat_id', $data) ? $i = $data['cat_id'] : $i =0 ;
        array_key_exists('img', $data) ? $file = implode(',', $data['img']) : $file = 0;
        $this -> db -> query("INSERT INTO category (name, cat_id, image)  VALUES (?, ?, ?)");
        $this -> db -> bind(1, $data['name']);
        $this -> db -> bind(2, $i);
        $this -> db -> bind(3, $file);
        $this -> db -> execute();
        return json_encode([
            'success' => 'success insert',
        ]);
    }
    // end method add category

    // [isert comment]
    public function insert_comment($data){
        $date = new DateTime("now", new DateTimeZone('Africa/Cairo') );
        $time = $date->format('Y-m-d H:i:s');
        $data['time'] = $time;
        $keys = array_keys($data);
        $keys = implode(',', $keys);
        $str = '';
        foreach ($data as $key => $value) {
            $str .= '?, ' ;
        }
        $str = rtrim($str,', ');

        $this -> db -> query("INSERT INTO comment ($keys) VALUES ($str)");
        $i = 1;
        foreach ($data as $key => $value) {
            $this -> db -> bind($i, $value);
            $i++;
        }
        $this -> db -> execute();
        return json_encode([
            'message' => 'success insert',
        ]);
    }

    // [read comment]
    public function read_comment($id){
        $this -> db -> query("SELECT * FROM comment WHERE product_id = ?");
        $this -> db -> bind (1, $id);
        $comment = $this -> db -> selectAll();
        $date = new DateTime("now", new DateTimeZone('Africa/Cairo') );

        for ($i=0; $i < count($comment) ; $i++) {
            // [get data user] **
            $id = $comment[$i]['user_id'];
            $this -> db -> query("SELECT username, image FROM users WHERE id = $id");
            $user_data = $this -> db -> select();
            $comment[$i]['user_data'] = $user_data;
            // [get difference between comment time and time now] **
            $timeComment = new DateTime($comment[$i]['time'], new DateTimeZone('Africa/Cairo'));
            $interval = date_diff($date, $timeComment);
            if ($interval -> y != 0) {
                $comment[$i]['time'] = $interval -> y. ' years ,' . $interval -> m . ' months ago';
            }else if ($interval -> y == 0 && $interval -> m != 0) {
                $comment[$i]['time'] = $interval -> m. ' months ago';
            }else if ($interval -> y == 0 && $interval -> m == 0 && $interval -> d != 0) {
                $comment[$i]['time'] = $interval -> d. 'd ago';
            }else if ($interval -> y == 0 && $interval -> m == 0 && $interval -> d == 0 && $interval -> h != 0) {
                $comment[$i]['time'] = $interval -> h. 'h ago';
            }else if ($interval -> y == 0 && $interval -> m == 0 && $interval -> d == 0 && $interval -> h == 0 && $interval -> i != 0) {
                $comment[$i]['time'] = $interval -> i. 'm ago';
            }else if ($interval -> y == 0 && $interval -> m == 0 && $interval -> d == 0 && $interval -> h == 0 && $interval -> i == 0) {
                $comment[$i]['time'] = $interval -> s. 's ago';
            }

        }
        return json_encode(array_reverse($comment));
    }
    
     // [insert sales]
     public function insert_sales($data){
        $id = $data['session_user'];
        $i = 0;
        foreach ($data['product_cart'] as $key => $value) {
            $id_product = $value['id'];
            !array_key_exists('size', $value) ? $value['size'] = '' : '';
            !array_key_exists('color', $value) ? $value['color'] = '' : '';
            $size = $value['size'];
            $color = $value['color'];
            $this -> db -> query("SELECT * FROM sales WHERE id_user = '$id' && id_product = '$id_product' && size = '$size' && color = '$color'");
            $product = $this -> db -> select();
            $count = $this -> db -> count();

            $this -> db -> query("SELECT count_sales FROM products WHERE id = $id_product");
            $count_sales = $this -> db -> select();
            $count_sales = $count_sales['count_sales'] + $value['numpro'];
            $this -> db -> query("UPDATE products SET count_sales = $count_sales WHERE id = $id_product");
            $this -> db -> execute();

            if ($count > 0) {
                    $i++;
                    $count_product = $value['numpro'] + $product['count'];
                    $product_id = $product['id'];
                    $this -> db -> query("UPDATE sales SET count = $count_product WHERE id = $product_id");
                    $this -> db -> execute();
                }else{
                    $this -> db -> query("INSERT INTO sales (id_user, id_product, size, color, count) VALUES (?, ?, ?, ?, ?)");
                    $this -> db -> bind(1, $id);
                    $this -> db -> bind(2, $value['id']);
                    $this -> db -> bind(3, $value['size']);
                    $this -> db -> bind(4, $value['color']);
                    $this -> db -> bind(5, $value['numpro']);
                    $this -> db -> execute();
            }
        }
        if ($i > 0) {
            return json_encode([
                'message' => 'We found some products already in your orders, We just increased the number of orders, Please check your orders',
            ]);
        }
        return json_encode([
            'message' => 'insert success',
        ]);
   }

    // read orders for one user
   public function read_orders($id){
        $this -> db -> query("SELECT * FROM sales WHERE id_user = $id");
        $orders = $this -> db -> selectAll();
        $id_product = array_column($orders, 'id_product');
        $products = [];
        foreach ($id_product as $key => $value) {
            $this -> db -> query("SELECT id, name, price, sale, img, cat_id, category FROM products WHERE id = $value");
            $product = $this -> db -> select();
            $product['size'] = $orders[$key]['size'];
            $product['color'] = $orders[$key]['color'];
            $product['count'] = $orders[$key]['count'];
            array_push($products, $product);
        }
        return json_encode($products);
}
    // read all orders for admin 
    public function All_orders(){
        $this -> db -> query("SELECT * FROM sales");
        $orders = $this -> db -> selectAll(); // all orders
        // return json_encode($orders);
        $id_user = array_column($orders, 'id_user');  // all id users in table sales
        $id_users = array_unique($id_user);   // unique array [id]
        $sales = [];
        $i = 0;
        foreach ($id_users as $value) {
            $products = [];
            $this -> db -> query("SELECT * FROM sales WHERE id_user = $value");  // get orders from table sales
            $user_orders = $this -> db -> selectAll();
            $this -> db -> query("SELECT username, phone, email FROM users WHERE id = $value");  // get name, email, phone user from table users
            $user = $this -> db -> select();
            $id_product = array_column($user_orders, 'id_product');
            foreach ($id_product as $key => $value) {
                $this -> db -> query("SELECT id, name, price, sale FROM products WHERE id = $value");
                $product = $this -> db -> select();
                $product['size'] = $orders[$i]['size'];
                $product['color'] = $orders[$i]['color'];
                $product['count'] = $orders[$i]['count'];
                $product['id_user'] = $orders[$i]['id_user'];
                $product['username'] = $user['username'];
                $product['email'] = $user['email'];
                $product['phone'] = $user['phone'];
                $product['count'] = $orders[$i]['count'];
                $product['id_order'] = $orders[$i]['id']; 
                $i++;
                array_push($products, $product);
            }
            array_push($sales, $products);
        }
        return json_encode($sales);
    }
    // del order for user
    public function del_order($data){
        // return json_encode($data);
        $id = $data['id'];
        $count = $data['count'];
        $this -> db -> query("DELETE FROM sales WHERE id_product = ? && id_user = ?");
        $this -> db -> bind(1, $id);
        $this -> db -> bind(2, $data['session_user']);
        $this -> db -> execute();
        $this -> db -> query("SELECT count_sales FROM products WHERE id = $id");
        $count_sales = $this -> db -> select();
        $count_sales = $count_sales['count_sales'] - $count;
        $this -> db -> query("UPDATE products SET count_sales = $count_sales WHERE id = $id");
        $this -> db -> execute();

        return json_encode([
            'message' => 'element is deleting   ' . $count_sales,
        ]);
    }
    // del order for admin [sold]
    public function sold_order($id){
        $this -> db -> query("DELETE FROM sales WHERE id = $id");
        $this -> db -> execute();
        return json_encode([
            'success' => 'success',
        ]);
    }
    // select top product
    public function top(){
        $this -> db -> query("SELECT * FROM products ORDER BY count_sales DESC LIMIT 20");
        $products = $this -> db -> selectAll();
        return json_encode($products);
    }
}
// end class product
