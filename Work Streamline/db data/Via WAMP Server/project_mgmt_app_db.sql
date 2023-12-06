-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Dec 06, 2023 at 12:52 PM
-- Server version: 8.0.28
-- PHP Version: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `project_mgmt_app_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `person`
--

DROP TABLE IF EXISTS `person`;
CREATE TABLE IF NOT EXISTS `person` (
  `Email` varchar(50) NOT NULL,
  `Password` varchar(20) NOT NULL,
  `Name` varchar(20) NOT NULL DEFAULT 'NO_NAME',
  `PersonType` varchar(5) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`Email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `person`
--

INSERT INTO `person` (`Email`, `Password`, `Name`, `PersonType`) VALUES
('admin@gmail.com', '1234', 'Test', 'Admin'),
('Ayush', 'ayush@gmail.com', '12', 'Empy');

-- --------------------------------------------------------

--
-- Table structure for table `project`
--

DROP TABLE IF EXISTS `project`;
CREATE TABLE IF NOT EXISTS `project` (
  `Title` varchar(50) NOT NULL,
  `StartDate` date NOT NULL,
  `EndDate` date NOT NULL,
  `TeamLead` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Status` varchar(20) NOT NULL,
  PRIMARY KEY (`Title`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `project`
--

INSERT INTO `project` (`Title`, `StartDate`, `EndDate`, `TeamLead`, `Status`) VALUES
('D MON', '2023-12-05', '2023-12-05', 'Test Team Lead', 'COMPLETED'),
('DLL_CS', '2023-12-05', '2023-12-05', 'Test Team Lead', 'STARTED'),
('File Browser', '2023-12-05', '2023-12-05', 'Test Team Lead', 'STARTED'),
('Hexa', '2023-12-05', '2023-12-05', 'Test Team Lead', 'STARTED'),
('Horde', '2023-12-05', '2023-12-05', 'Test Team Lead', 'ON_GOING'),
('Net Lib', '2023-12-05', '2023-12-05', 'Test Team Lead', 'ON_GOING'),
('Port File Dial', '2023-12-05', '2023-12-05', 'Test Team Lead', 'ON_GOING'),
('Skylicht', '2023-12-05', '2023-12-05', 'Test Team Lead', 'STARTED'),
('WS Client', '2023-12-05', '2023-12-05', 'Test Team Lead', 'COMPLETED');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
