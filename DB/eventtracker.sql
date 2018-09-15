-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema eventtrackerdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `eventtrackerdb` ;

-- -----------------------------------------------------
-- Schema eventtrackerdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `eventtrackerdb` DEFAULT CHARACTER SET utf8 ;
USE `eventtrackerdb` ;

-- -----------------------------------------------------
-- Table `activity`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `activity` ;

CREATE TABLE IF NOT EXISTS `activity` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `body_part` VARCHAR(45) NULL,
  `activity_name` VARCHAR(45) NULL,
  `sets_performed` VARCHAR(45) NULL,
  `reps_per_set` VARCHAR(45) NULL,
  `video` VARCHAR(1000) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS etuser@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'etuser'@'localhost' IDENTIFIED BY 'etuser';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'etuser'@'localhost';
GRANT SELECT, INSERT, TRIGGER ON TABLE * TO 'etuser'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `activity`
-- -----------------------------------------------------
START TRANSACTION;
USE `eventtrackerdb`;
INSERT INTO `activity` (`id`, `date`, `body_part`, `activity_name`, `sets_performed`, `reps_per_set`, `video`) VALUES (1, DEFAULT, 'Full', 'Incline', '1', '1', NULL);
INSERT INTO `activity` (`id`, `date`, `body_part`, `activity_name`, `sets_performed`, `reps_per_set`, `video`) VALUES (2, DEFAULT, 'Hamstrings', 'Romanian Deadlift', '4', '8', NULL);
INSERT INTO `activity` (`id`, `date`, `body_part`, `activity_name`, `sets_performed`, `reps_per_set`, `video`) VALUES (3, DEFAULT, 'Triceps', 'Dips', '4', '10', NULL);
INSERT INTO `activity` (`id`, `date`, `body_part`, `activity_name`, `sets_performed`, `reps_per_set`, `video`) VALUES (4, DEFAULT, 'Full', 'Traditional Deadlift', '3', '8', NULL);
INSERT INTO `activity` (`id`, `date`, `body_part`, `activity_name`, `sets_performed`, `reps_per_set`, `video`) VALUES (5, DEFAULT, 'Full', 'Powerclean', '3', '8', NULL);

COMMIT;

