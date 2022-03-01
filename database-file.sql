-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 01, 2022 at 05:00 PM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 8.0.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ecommerce`
--

-- --------------------------------------------------------

--
-- Table structure for table `administration`
--

CREATE TABLE `administration` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `adress` varchar(255) NOT NULL,
  `gander` int(11) NOT NULL,
  `priv` int(11) NOT NULL,
  `start_date` date NOT NULL,
  `age` int(11) NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `administration`
--

INSERT INTO `administration` (`id`, `name`, `email`, `password`, `adress`, `gander`, `priv`, `start_date`, `age`, `image`) VALUES
(196, 'kareem', 'kareem.345@yahoo.com', 'fb3d6ab2375fb023b3c904838590e5ad', 'damita', 0, 200, '2021-11-10', 34, '6214f549214dd'),
(232, 'hoda', 'kareem.34@yahoo.com', '0b6a4a1f2468f024d0266e8207d51f8f', 'damita', 1, 300, '2021-11-11', 34, ''),
(233, 'kareem', 'kareem.33@yahoo.com', 'fa9b67723b8a081a14b17493dbc4981b', 'damita', 0, 300, '2021-11-11', 30, ''),
(238, 'kareem', 'kareem.345@outlook.com', 'fb3d6ab2375fb023b3c904838590e5ad', 'atwi', 0, 300, '2022-02-17', 22, ''),
(239, 'mohamed', 'mohamed.345@yahoo.com', 'fb3d6ab2375fb023b3c904838590e5ad', 'atwi', 0, 100, '2022-02-18', 31, ''),
(240, 'hoda', 'hoda.345@yahoo.com', 'fb3d6ab2375fb023b3c904838590e5ad', 'atwi', 1, 300, '2022-02-18', 23, ''),
(241, 'kareem', 'kareem.510@yahoo.com', 'fb3d6ab2375fb023b3c904838590e5ad', 'atwi', 0, 300, '2022-02-19', 22, '');

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `cat_id` int(11) NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `name`, `cat_id`, `image`) VALUES
(48, 'WOMAN', 0, '621bd99828fbc'),
(49, 'FASHION', 0, '621bd9d817379'),
(50, 'MAN', 0, '621bda4ec0d4a'),
(51, 'ELECTRONICS', 0, '621bdaf7cefa2'),
(52, 'HOME', 0, '621be094c8ff9'),
(53, 'te-shirt', 48, '0'),
(54, 'dress', 48, '0'),
(55, 'dress', 49, '0'),
(56, 'te-shirt', 50, '0'),
(57, 'trouser', 50, '0'),
(58, 'mopile', 51, '0'),
(59, 'watches', 51, '0'),
(60, 'laptop', 51, '0'),
(61, 'computer', 51, '0'),
(62, 'Kitchen', 52, '0'),
(63, 'bage', 48, '0'),
(64, 'bage', 50, '0');

-- --------------------------------------------------------

--
-- Table structure for table `comment`
--

CREATE TABLE `comment` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `comment` varchar(255) NOT NULL,
  `time` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `comment`
--

INSERT INTO `comment` (`id`, `user_id`, `product_id`, `comment`, `time`) VALUES
(34, 18, 181, 'this product is great', '2022-03-01 10:55:18');

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `id` int(11) NOT NULL,
  `username` varchar(100) NOT NULL,
  `phone` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  `message` text NOT NULL,
  `unread` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`id`, `username`, `phone`, `email`, `message`, `unread`) VALUES
(6, 'kareem', '01016899037', 'kareem.510@yahoo.com', 'kdkdkkd kdkdkkd kdkdkkd kkdkdkdk kdkkdkdkdkd kdkdkdk kdkdkdk kddkdk\r\n', 1),
(7, 'kareem', '01016899037', 'kareem.510@yahoo.com', 'kdkdkkd kdkdkkd kdkdkkd kkdkdkdk kdkkdkdkdkd kdkdkdk kdkdkdk kddkdk\r\nlllllllllllllllllllllllllllllllllllllllllll', 1),
(8, 'kareem', '01016899037', 'kareem.510@yahoo.com', 'kdkdkkd kdkdkkd kdkdkkd kkdkdkdk kdkkdkdkdkd kdkdkdk kdkdkdk kddkdk\r\nllllllllllllllllllllllllllllllllllllllllllljdjdjdj', 0),
(9, 'kareem', '01013030858', 'kareem.510@yahoo.com', 'kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk', 0),
(10, 'kareem', '01012838898', 'kareem.510@yahoo.com', '\r\nkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk', 0),
(11, 'kareem', '010168990343', 'kareem.510@yahoo.com', 'kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk\r\n', 1);

-- --------------------------------------------------------

--
-- Table structure for table `message`
--

CREATE TABLE `message` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `email` varchar(20) NOT NULL,
  `message` text NOT NULL,
  `value` int(11) NOT NULL,
  `id_row` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `message`
--

INSERT INTO `message` (`id`, `name`, `phone`, `email`, `message`, `value`, `id_row`) VALUES
(12, 'kareeem', '+666666666', 'kareem.510@yahoo.com', 'ggggggggggggggggggggggggggg', 1, 1),
(13, 'kareem', '+66666666', 'kareem.510@yahoo.com', 'ddddddddddddddddd', 1, 2),
(14, 'kareeem', '+3333333333333', 'kareem.510@yahoo.com', 'fgggggggggggggggg', 1, 3),
(15, 'kareeem', '+666666666', 'kareem.510@yahoo.com', 'bbbbbbbbbbbbb', 1, 4),
(16, 'kareeem', '+666666666', 'kareem.510@yahoo.com', 'bbbbbbbbbbbbbbbbbbbbb', 1, 5),
(17, 'kareeem', '+666666666', 'kareem.510@yahoo.com', 'tttttttttttttttt', 0, 6),
(18, 'kareeem', '+666666666', 'kareem.510@yahoo.com', 'yyyyyyyyyyyy', 0, 7),
(19, 'kareeem', '+666666666', 'kareem.510@yahoo.com', 'ssssssssss', 0, 8),
(25, 'kareeem', '+666666666', 'kareem.510@yahoo.com', 'eeeeeeeeeeeeeeeeee', 0, 9),
(26, 'kareeem', '+666666666', 'kareem.510@yahoo.com', 'tttttttttttttttt', 0, 10),
(27, 'kareeem', '+666666666', 'ffffffff', 'eeeeeeeeee', 0, 11),
(31, 'kareeem', '+666666666', 'kareem.510@yahoo.com', 'bbbbbbbbbbbbb', 0, 12),
(32, 'kareeem', 'ffffff', 'kareem.510@yahoo.com', 'ffffff', 0, 13),
(36, 'kareeem', '+666666666', 'kareem.510@yahoo.com', 'hi there i wonder if you .............', 0, 14),
(37, 'kareeem', '+666666666', 'kareem.510@yahoo.com', 'hhhhhhhhhhhhhhhhh', 0, 15),
(38, 'kareeem', '+666666666', 'kareem.510@yahoo.com', 'ffffffffffffff', 0, 16),
(39, 'kareeem', '+666666666', 'kareem.510@yahoo.com', 'bbbbbbbbbbbbbb', 0, 17),
(40, 'kareem', '+666666666', 'kareem.510@yahoo.com', 'hello kareem', 0, 18),
(41, 'kareeem', '+666666666', 'kareem.510@yahoo.com', 'hello there', 0, 19),
(42, 'kareeem', '+666666666', 'kareem.510@yahoo.com', 'hello world ', 0, 20),
(43, 'kareeem', '+666666666', 'kareem.510@yahoo.com', 'jkjkjkjkjkjk', 0, 21);

-- --------------------------------------------------------

--
-- Table structure for table `priv`
--

CREATE TABLE `priv` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `priv_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `priv`
--

INSERT INTO `priv` (`id`, `name`, `priv_id`) VALUES
(1, 'owner', 300),
(2, 'assistant', 200),
(3, 'super', 100);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `price` int(11) NOT NULL,
  `sale` int(11) NOT NULL,
  `img` varchar(255) NOT NULL,
  `start_date` date NOT NULL,
  `size` varchar(255) NOT NULL,
  `color` varchar(255) NOT NULL,
  `cat_id` int(11) NOT NULL,
  `category` int(11) NOT NULL,
  `count_sales` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `price`, `sale`, `img`, `start_date`, `size`, `color`, `cat_id`, `category`, `count_sales`) VALUES
(181, 'mopile', 'The common components found on all mobile phones are: A central processing unit CPU, the processor of phones. The CPU is a microprocessor fabricated on a metal–oxide–semiconductor MOS integrated circuit IC chip.A battery, providing the power source for the phone functions', 5000, 0, '621cc72110e3a,621cc72111364,621cc72111858', '2022-02-28', '', 'black', 51, 58, 1),
(182, 'mopile', 'The common components found on all mobile phones are: A central processing unit CPU, the processor of phones. The CPU is a microprocessor fabricated on a metal–oxide–semiconductor MOS integrated circuit IC chip.A battery, providing the power source for the phone functions', 6000, 200, '621cc7aa28054,621cc7aa28834,621cc7aa28eaa', '2022-02-28', '', 'yellow', 51, 58, 0),
(183, 'laptop-dell', 'The common components found on all mobile phones are: A central processing unit CPU, the processor of phones. The CPU is a microprocessor fabricated on a metal–oxide–semiconductor MOS integrated circuit IC chip.A battery, providing the power source for the phone functions', 12000, 0, '621cc945eefec,621cc945ef4db,621cc945efa02', '2022-02-28', '', 'black,white', 51, 60, 0),
(184, 'te-shirt', 'T-Shirt Woman is a fictional character from the 1999 film Runaway Bride.\r\n\r\n', 150, 10, '621ccbfe430e7,621ccbfe43649,621ccbfe43b0d', '2022-02-28', 'x2,xl3', 'black,green,white,blue', 48, 53, 0),
(186, 'te-shirt', 'T-Shirt Woman is a fictional character from the 1999 film Runaway Bride.', 200, 20, '621ccda47d3da', '2022-02-28', 'x2,xl2', 'blue', 48, 53, 0),
(187, 'te-shirt', 'T-Shirt Woman is a fictional character from the 1999 film Runaway Bride.', 200, 20, '621cce33b28fd,621cce33b317a', '2022-02-28', 'x2,xl2', 'blue', 50, 56, 0),
(188, 'mopile', 'The common components found on all mobile phones are: A central processing unit CPU, the processor of phones. The CPU is a microprocessor fabricated on a metal–oxide–semiconductor MOS integrated circuit IC chip.A battery, providing the power source for the phone functions', 3000, 0, '621ccec8e13b3', '2022-02-28', '', '', 51, 58, 0),
(189, 'laptop-lenovo', 'The common components found on all mobile phones are: A central processing unit CPU, the processor of phones. The CPU is a microprocessor fabricated on a metal–oxide–semiconductor MOS integrated circuit IC chip.A battery, providing the power source for the phone functions', 10000, 200, '621cd4fa88a1b,621cd4fa890e3', '2022-02-28', '', 'red,black,white', 51, 60, 0),
(190, 'dress', 'kdkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk', 2000, 100, '621cd684032a9', '2022-02-28', 'xl3', 'white', 48, 54, 0),
(194, 'watche', 'The common components found on all mobile phones are: A central processing unit CPU, the processor of phones. The CPU is a microprocessor fabricated on a metal–oxide–semiconductor MOS integrated circuit IC chip.A battery, providing the power source for the phone functions', 200, 0, '621cdaec0250c,621cdaec02b7b', '2022-02-28', '', '', 51, 59, 0),
(195, 'shirt', 'jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj', 300, 0, '621cdc5c5f924', '2022-02-28', 'xl2,xl3', 'black,white', 49, 55, 0),
(196, 'shirt', 'jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj', 400, 0, '621cddbb4c767', '2022-02-28', 'xl2,xl3', 'white', 49, 55, 0),
(197, 'example', 'it just example, no more, it just example, no more, it just example, no more', 200, 0, '621cdf81efe02,621cdf81f0576,621cdf81f0b07', '2022-02-28', '', 'black', 51, 59, 0),
(198, 'example', 'it just example, no more, it just example, no more, it just example, no more', 200, 0, '621cdf932a31a,621cdf932a871,621cdf932ad90', '2022-02-28', '', 'black', 51, 59, 0),
(199, 'example', 'it just example, no more, it just example, no more, it just example, no more', 200, 0, '621cdf93afd97,621cdf93b0365,621cdf93b092e', '2022-02-28', '', 'black', 51, 59, 0),
(200, 'example', 'it just example, no more, it just example, no more, it just example, no more', 200, 0, '621cdf942e347,621cdf942e89b,621cdf942edc0', '2022-02-28', '', 'black', 51, 59, 0),
(201, 'example', 'it just example, no more, it just example, no more, it just example, no more', 200, 0, '621cdf947dbe5,621cdf947e12a,621cdf947e662', '2022-02-28', '', 'black', 51, 59, 0),
(202, 'example', 'it just example, no more, it just example, no more, it just example, no more', 200, 0, '621cdf94835f2,621cdf9484bcd,621cdf9485176', '2022-02-28', '', 'black', 51, 59, 0),
(203, 'example', 'it just example, no more, it just example, no more, it just example, no more', 200, 0, '621cdf94d8556,621cdf94d8ac5,621cdf94d8ff1', '2022-02-28', '', 'black', 51, 59, 0),
(204, 'example', 'it just example, no more, it just example, no more, it just example, no more', 200, 0, '621cdf94dd797,621cdf94ddd3f,621cdf94de243', '2022-02-28', '', 'black', 51, 59, 0),
(205, 'example', 'it just example, no more, it just example, no more, it just example, no more', 200, 0, '621cdf9539616,621cdf9539efc,621cdf953a435', '2022-02-28', '', 'black', 51, 59, 0),
(206, 'example', 'it just example, no more, it just example, no more, it just example, no more', 200, 0, '621cdf953e4c5,621cdf953ea7a,621cdf953f00e', '2022-02-28', '', 'black', 51, 59, 0),
(207, 'example', 'it just example, no more, it just example, no more, it just example, no more', 200, 0, '621cdf958b04f,621cdf958b58b,621cdf958ba9a', '2022-02-28', '', 'black', 51, 59, 0),
(208, 'example', 'it just example, no more, it just example, no more, it just example, no more', 200, 0, '621cdf959046e,621cdf95909d3,621cdf9590ea5', '2022-02-28', '', 'black', 51, 59, 0),
(209, 'example', 'it just example, no more, it just example, no more, it just example, no more', 200, 0, '621cdf95dcb63,621cdf95dd0c2,621cdf95dd609', '2022-02-28', '', 'black', 51, 59, 0),
(210, 'example', 'it just example, no more, it just example, no more, it just example, no more', 200, 0, '621cdf95e23be,621cdf95e29ff,621cdf95eb9f4', '2022-02-28', '', 'black', 51, 59, 0),
(211, 'example', 'it just example, no more, it just example, no more, it just example, no more', 200, 0, '621cdf964086d,621cdf9640dbf,621cdf96412cb', '2022-02-28', '', 'black', 51, 59, 0),
(212, 'example', 'it just example, no more, it just example, no more, it just example, no more', 200, 0, '621cdf9645e5e,621cdf9646449,621cdf9646970', '2022-02-28', '', 'black', 51, 59, 0),
(213, 'example', 'it just example, no more, it just example, no more, it just example, no more', 200, 0, '621cdf9695ce2,621cdf96962e6,621cdf96969ae', '2022-02-28', '', 'black', 51, 59, 0),
(214, 'example', 'it just example, no more, it just example, no more, it just example, no more', 200, 0, '621cdf969b2ad,621cdf969b7ef,621cdf969bd1d', '2022-02-28', '', 'black', 51, 59, 0),
(215, 'example', 'it just example, no more, it just example, no more, it just example, no more', 200, 0, '621cdf96f340d,621cdf96f394e,621cdf96f3f95', '2022-02-28', '', 'black', 51, 59, 0),
(216, 'example', 'it just example, no more, it just example, no more, it just example, no more', 200, 0, '621cdf97048cc,621cdf9704e21,621cdf970538c', '2022-02-28', '', 'black', 51, 59, 0),
(217, 'example', 'it just example, no more, it just example, no more, it just example, no more', 200, 0, '621cdf975a1d8,621cdf975a731,621cdf975ac35', '2022-02-28', '', 'black', 51, 59, 0),
(218, 'example', 'it just example, no more, it just example, no more, it just example, no more', 200, 0, '621cdf976dc9f,621cdf976f236,621cdf97706e1', '2022-02-28', '', 'black', 51, 59, 0),
(219, 'example', 'it just example, no more, it just example, no more, it just example, no more', 200, 0, '621cdf97b2414,621cdf97b2963,621cdf97b2e77', '2022-02-28', '', 'black', 51, 59, 0),
(220, 'example', 'it just example, no more, it just example, no more, it just example, no more', 200, 0, '621cdf97b7130,621cdf97b763f,621cdf97cb8b2', '2022-02-28', '', 'black', 51, 59, 0),
(221, 'example', 'it just example, no more, it just example, no more, it just example, no more', 200, 0, '621cdf981823a,621cdf9818793,621cdf9818ca0', '2022-02-28', '', 'black', 51, 59, 0),
(222, 'example', 'it just example, no more, it just example, no more, it just example, no more', 200, 0, '621cdf981daa8,621cdf981dffd,621cdf981e572', '2022-02-28', '', 'black', 51, 59, 0),
(223, 'example', 'it just example, no more, it just example, no more, it just example, no more', 200, 0, '621cdf9873455,621cdf9873991,621cdf9873ea3', '2022-02-28', '', 'black', 51, 59, 0),
(224, 'example', 'it just example, no more, it just example, no more, it just example, no more', 200, 0, '621cdf98784c0,621cdf9878c2a,621cdf98791b4', '2022-02-28', '', 'black', 51, 59, 0),
(225, 'example', 'it just example, no more, it just example, no more, it just example, no more', 200, 0, '621cdf98cabd7,621cdf98cb167,621cdf98cb88b', '2022-02-28', '', 'black', 51, 59, 0),
(226, 'example', 'it just example, no more, it just example, no more, it just example, no more', 200, 0, '621cdf98d03b7,621cdf98d09dc,621cdf98d0f54', '2022-02-28', '', 'black', 51, 59, 0),
(227, 'example', 'it just example, no more, it just example, no more, it just example, no more', 200, 0, '621cdfafbdcc2,621cdfafbe45d,621cdfafbea4b', '2022-02-28', '', 'black', 51, 59, 0),
(228, 'example', 'it just example, no more, it just example, no more, it just example, no more', 200, 0, '621cdfafc3669,621cdfafc3bc9,621cdfafc41fa', '2022-02-28', '', 'black', 51, 59, 0),
(229, 'example', 'it just example, no more, it just example, no more, it just example, no more', 200, 0, '621cdfb020f9e,621cdfb02151b,621cdfb021b5c', '2022-02-28', '', 'black', 51, 59, 0),
(230, 'example', 'it just example, no more, it just example, no more, it just example, no more', 200, 0, '621cdfb02637c,621cdfb0268e5,621cdfb026e48', '2022-02-28', '', 'black', 51, 59, 0),
(231, 'example', 'it just example, no more, it just example, no more, it just example, no more', 200, 0, '621cdfb0758c8,621cdfb075e49,621cdfb07648e', '2022-02-28', '', 'black', 51, 59, 0),
(232, 'example', 'it just example, no more, it just example, no more, it just example, no more', 200, 0, '621cdfb07b41e,621cdfb07b98d,621cdfb07c17e', '2022-02-28', '', 'black', 51, 59, 0),
(233, 'example', 'it just example, no more, it just example, no more, it just example, no more', 200, 0, '621cdfb0cd8a5,621cdfb0cdec9,621cdfb0ce58e', '2022-02-28', '', 'black', 51, 59, 0),
(234, 'example', 'it just example, no more, it just example, no more, it just example, no more', 200, 0, '621cdfb0d33a6,621cdfb0d391c,621cdfb0d3eae', '2022-02-28', '', 'black', 51, 59, 0),
(235, 'example', 'it just example, no more, it just example, no more, it just example, no more', 200, 0, '621cdfb131248,621cdfb1317af,621cdfb131e20', '2022-02-28', '', 'black', 51, 59, 0),
(236, 'example', 'it just example, no more, it just example, no more, it just example, no more', 200, 0, '621cdfb1368bb,621cdfb136e01,621cdfb1374d5', '2022-02-28', '', 'black', 51, 59, 0),
(237, 'example', 'it just example, no more, it just example, no more, it just example, no more', 200, 0, '621cdfb1891d4,621cdfb189754,621cdfb189cbb', '2022-02-28', '', 'black', 51, 59, 0),
(238, 'example', 'it just example, no more, it just example, no more, it just example, no more', 200, 0, '621cdfb18e9d9,621cdfb18efd5,621cdfb18f463', '2022-02-28', '', 'black', 51, 59, 0),
(239, 'example', 'it just example, no more, it just example, no more, it just example, no more', 200, 0, '621cdfb1e191a,621cdfb1e1f4b,621cdfb1e24cd', '2022-02-28', '', 'black', 51, 59, 0),
(240, 'example', 'it just example, no more, it just example, no more, it just example, no more', 200, 0, '621cdfb1e6e66,621cdfb1e73c9,621cdfb1e7917', '2022-02-28', '', 'black', 51, 59, 0),
(241, 'example', 'it just example, no more, it just example, no more, it just example, no more', 200, 0, '621cdfb244b39,621cdfb245083,621cdfb24559c', '2022-02-28', '', 'black', 51, 59, 0),
(242, 'example', 'it just example, no more, it just example, no more, it just example, no more', 200, 0, '621cdfb24ae50,621cdfb24b3b4,621cdfb24b9b7', '2022-02-28', '', 'black', 51, 59, 0),
(243, 'example', 'it just example, no more, it just example, no more, it just example, no more', 200, 0, '621cdfc7a2bf3,621cdfc7a3221,621cdfc7a3730', '2022-02-28', '', 'black', 51, 59, 0),
(244, 'example', 'it just example, no more, it just example, no more, it just example, no more', 200, 0, '621cdfc7a851a,621cdfc7a8a15,621cdfc7a8f74', '2022-02-28', '', 'black', 51, 59, 0),
(245, 'example', 'it just example, no more, it just example, no more, it just example, no more', 200, 0, '621cdfc80636f,621cdfc8068fd,621cdfc806eab', '2022-02-28', '', 'black', 51, 59, 0),
(246, 'example', 'it just example, no more, it just example, no more, it just example, no more', 200, 0, '621cdfc80b4c8,621cdfc815891,621cdfc8166ef', '2022-02-28', '', 'black', 51, 59, 0),
(247, 'example', 'it just example, no more, it just example, no more, it just example, no more', 200, 0, '621cdfc85e7e0,621cdfc85ed79,621cdfc85f2b6', '2022-02-28', '', 'black', 51, 59, 0),
(248, 'example', 'it just example, no more, it just example, no more, it just example, no more', 200, 0, '621cdfc8636c8,621cdfc863c0c,621cdfc864164', '2022-02-28', '', 'black', 51, 59, 0),
(249, 'example', 'it just example, no more, it just example, no more, it just example, no more', 200, 0, '621cdfc8b5bca,621cdfc8b6128,621cdfc8b667b', '2022-02-28', '', 'black', 51, 59, 0),
(250, 'example', 'it just example, no more, it just example, no more, it just example, no more', 200, 0, '621cdfc8bb290,621cdfc8bb84e,621cdfc8bbe9a', '2022-02-28', '', 'black', 51, 59, 0),
(251, 'example', 'it just example, no more, it just example, no more, it just example, no more', 200, 0, '621cdfc91ca0b,621cdfc91cfb0,621cdfc91d4ee', '2022-02-28', '', 'black', 51, 59, 0),
(252, 'example', 'it just example, no more, it just example, no more, it just example, no more', 200, 0, '621cdfc921ca9,621cdfc92235d,621cdfc922a02', '2022-02-28', '', 'black', 51, 59, 0),
(253, 'example', 'it just example, no more, it just example, no more, it just example, no more', 200, 0, '621cdfc9779d3,621cdfc9780a9,621cdfc978536', '2022-02-28', '', 'black', 51, 59, 0),
(254, 'example', 'it just example, no more, it just example, no more, it just example, no more', 200, 0, '621cdfc97cbc9,621cdfc97d12a,621cdfc97d696', '2022-02-28', '', 'black', 51, 59, 0),
(255, 'example', 'it just example, no more, it just example, no more, it just example, no more', 200, 0, '621cdfc9d2788,621cdfc9d2d34,621cdfc9d3261', '2022-02-28', '', 'black', 51, 59, 0),
(256, 'example', 'it just example, no more, it just example, no more, it just example, no more', 200, 0, '621cdfc9d762c,621cdfc9d7c49,621cdfc9d8353', '2022-02-28', '', 'black', 51, 59, 0),
(257, 'example', 'it just example, no more, it just example, no more, it just example, no more', 200, 0, '621cdfca32acf,621cdfca3301b,621cdfca3358d', '2022-02-28', '', 'black', 51, 59, 0),
(258, 'example', 'it just example, no more, it just example, no more, it just example, no more', 200, 0, '621cdfca37f8e,621cdfca384d3,621cdfca389df', '2022-02-28', '', 'black', 51, 59, 0),
(259, 'example', 'it just example, no more, it just example, no more, it just example, no more', 200, 0, '621cdfca8d86d,621cdfca8ddbd,621cdfca8e2ce', '2022-02-28', '', 'black', 51, 59, 0),
(260, 'example', 'it just example, no more, it just example, no more, it just example, no more', 200, 0, '621cdfca93556,621cdfca93c2f,621cdfca9428d', '2022-02-28', '', 'black', 51, 59, 0),
(261, 'example', 'it just example, no more, it just example, no more, it just example, no more', 200, 0, '621cdfcae2836,621cdfcae2db3,621cdfcae3381', '2022-02-28', '', 'black', 51, 59, 0),
(262, 'example', 'it just example, no more, it just example, no more, it just example, no more', 200, 0, '621cdfcae8143,621cdfcae872a,621cdfcae8d6f', '2022-02-28', '', 'black', 51, 59, 0),
(263, 'example', 'it just example, no more, it just example, no more, it just example, no more', 200, 0, '621cdfcb43584,621cdfcb43ac5,621cdfcb4404b', '2022-02-28', '', 'black', 51, 59, 0),
(264, 'example', 'it just example, no more, it just example, no more, it just example, no more', 200, 0, '621cdfcb48dd1,621cdfcb49464,621cdfcb49a6b', '2022-02-28', '', 'black', 51, 59, 0),
(265, 'example', 'it just example, no more, it just example, no more, it just example, no more', 200, 0, '621cdfcb9db4a,621cdfcb9e0a5,621cdfcb9e5e2', '2022-02-28', '', 'black', 51, 59, 0),
(266, 'example', 'it just example, no more, it just example, no more, it just example, no more', 200, 0, '621cdfcba39b0,621cdfcba3efd,621cdfcba44c1', '2022-02-28', '', 'black', 51, 59, 0),
(267, 'example', 'it just example, no more, it just example, no more, it just example, no more', 200, 0, '621cdfcbf0151,621cdfcbf072e,621cdfcbf0c84', '2022-02-28', '', 'black', 51, 59, 0),
(268, 'example', 'it just example, no more, it just example, no more, it just example, no more', 200, 0, '621cdfcc01b39,621cdfcc020e3,621cdfcc02687', '2022-02-28', '', 'black', 51, 59, 0),
(269, 'example', 'it just example, no more, it just example, no more, it just example, no more', 200, 0, '621cdfcc508de,621cdfcc50dc2,621cdfcc51338', '2022-02-28', '', 'black', 51, 59, 0),
(270, 'example', 'it just example, no more, it just example, no more, it just example, no more', 200, 0, '621cdfcc562e6,621cdfcc568d1,621cdfcc56e36', '2022-02-28', '', 'black', 51, 59, 0),
(271, 'example', 'it just example, no more, it just example, no more, it just example, no more', 200, 0, '621cdfccae4f5,621cdfccaeaa3,621cdfccaf1d1', '2022-02-28', '', 'black', 51, 59, 0),
(272, 'example', 'it just example, no more, it just example, no more, it just example, no more', 200, 8, '621cdfd3ef686,621cdfd3f01ab,621cdfd3f0e90', '2022-02-28', '', 'black', 51, 59, 0),
(273, 'example', 'it just example, no more, it just example, no more, it just example, no more', 200, 8, '621cdfd4014a2,621cdfd401b04,621cdfd4020b7', '2022-02-28', '', 'black', 51, 59, 0),
(274, 'example', 'it just example, no more, it just example, no more, it just example, no more', 200, 8, '621cdfd4553c1,621cdfd455960,621cdfd455ea1', '2022-02-28', '', 'black', 51, 59, 0),
(275, 'example', 'it just example, no more, it just example, no more, it just example, no more', 200, 8, '621cdfd45a4cf,621cdfd45aa45,621cdfd45b0ab', '2022-02-28', '', 'black', 51, 59, 0),
(276, 'example', 'it just example, no more, it just example, no more, it just example, no more', 200, 8, '621cdfd4b318f,621cdfd4b389a,621cdfd4b3e80', '2022-02-28', '', 'black', 51, 59, 0),
(277, 'example', 'it just example, no more, it just example, no more, it just example, no more', 200, 8, '621cdfd4b86f9,621cdfd4b8fa0,621cdfd4b9782', '2022-02-28', '', 'black', 51, 59, 0),
(278, 'example', 'it just example, no more, it just example, no more, it just example, no more', 200, 8, '621cdfd51c917,621cdfd51cf38,621cdfd51d6be', '2022-02-28', '', 'black', 51, 59, 0),
(279, 'example', 'it just example, no more, it just example, no more, it just example, no more', 200, 8, '621cdfd5222f0,621cdfd522831,621cdfd522d96', '2022-02-28', '', 'black', 51, 59, 0),
(280, 'example', 'it just example, no more, it just example, no more, it just example, no more', 200, 8, '621cdfd577b76,621cdfd5780d0,621cdfd5785e2', '2022-02-28', '', 'black', 51, 59, 0),
(281, 'example', 'it just example, no more, it just example, no more, it just example, no more', 200, 8, '621cdfd57d048,621cdfd57d604,621cdfd57dbf0', '2022-02-28', '', 'black', 51, 59, 0),
(282, 'example', 'it just example, no more, it just example, no more, it just example, no more', 200, 8, '621cdfd5d2a52,621cdfd5d30b2,621cdfd5d3610', '2022-02-28', '', 'black', 51, 59, 0),
(283, 'example', 'it just example, no more, it just example, no more, it just example, no more', 200, 8, '621cdfd5d842a,621cdfd5d89f4,621cdfd5d8f5a', '2022-02-28', '', 'black', 51, 59, 0),
(284, 'example', 'it just example, no more, it just example, no more, it just example, no more', 200, 8, '621cdfd635f5f,621cdfd63657d,621cdfd636a86', '2022-02-28', '', 'black', 51, 59, 0),
(285, 'example', 'it just example, no more, it just example, no more, it just example, no more', 200, 8, '621cdfd63b567,621cdfd63bab1,621cdfd63c0c2', '2022-02-28', '', 'black', 51, 59, 0),
(286, 'example', 'it just example, no more, it just example, no more, it just example, no more', 200, 8, '621cdfd68aa86,621cdfd68afdc,621cdfd68b598', '2022-02-28', '', 'black', 51, 59, 0),
(287, 'example', 'it just example, no more, it just example, no more, it just example, no more', 200, 8, '621cdfd690477,621cdfd690b0d,621cdfd6911fb', '2022-02-28', '', 'black', 51, 59, 0),
(288, 'example', 'it just example, no more, it just example, no more, it just example, no more', 200, 8, '621cdfd6dfc8c,621cdfd6e0224,621cdfd6e06d4', '2022-02-28', '', 'black', 51, 59, 0),
(289, 'example', 'it just example, no more, it just example, no more, it just example, no more', 200, 8, '621cdfd6e5747,621cdfd6e5caa,621cdfd6e6286', '2022-02-28', '', 'black', 51, 59, 0),
(290, 'example', 'it just example, no more, it just example, no more, it just example, no more', 200, 0, '621cdfdb5d093,621cdfdb5d6be,621cdfdb5dea9', '2022-02-28', '', 'black', 51, 59, 0),
(291, 'example', 'it just example, no more, it just example, no more, it just example, no more', 200, 0, '621cdfdb629ce,621cdfdb62f37,621cdfdb63417', '2022-02-28', '', 'black', 51, 59, 0),
(292, 'example', 'it just example, no more, it just example, no more, it just example, no more', 200, 0, '621cdfdbb1575,621cdfdbb1b21,621cdfdbb2041', '2022-02-28', '', 'black', 51, 59, 0);

-- --------------------------------------------------------

--
-- Table structure for table `sales`
--

CREATE TABLE `sales` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_product` int(11) NOT NULL,
  `size` varchar(50) NOT NULL,
  `color` varchar(50) NOT NULL,
  `count` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phone` varchar(50) NOT NULL,
  `address` varchar(50) NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `email`, `phone`, `address`, `image`) VALUES
(18, 'mohamed', '1aaea31f1fa87bc7538fc07fef38549a', 'kareem.510@yahoo.com', '10104898439', 'atwi', '621ddfbfc8db6'),
(19, 'kareem', '1aaea31f1fa87bc7538fc07fef38549a', 'kareem.345@outlook.com', '01047843494', 'atwi', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `administration`
--
ALTER TABLE `administration`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `message`
--
ALTER TABLE `message`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `priv`
--
ALTER TABLE `priv`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sales`
--
ALTER TABLE `sales`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `administration`
--
ALTER TABLE `administration`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=242;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=65;

--
-- AUTO_INCREMENT for table `comment`
--
ALTER TABLE `comment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `message`
--
ALTER TABLE `message`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT for table `priv`
--
ALTER TABLE `priv`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=299;

--
-- AUTO_INCREMENT for table `sales`
--
ALTER TABLE `sales`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=77;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
