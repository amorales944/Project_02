DROP DATABASE IF EXISTS work_schedule;

CREATE DATABASE work_schedule;

CREATE TABLE `schedule` (
  `id` Int( 11 ) AUTO_INCREMENT NOT NULL,
  `employee` VARCHAR( 255) NOT NULL,
  `work_date` DATETIME( 6 ) NOT NULL,
  `start_hour` VARCHAR(20) NOT NULL,
  `end_hour` VARCHAR(20) NOT NULL,
  PRIMARY KEY ( `id` ) 
);

