/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

CREATE OR REPLACE DATABASE larraz_store_db;
USE larraz_store_db;

CREATE OR REPLACE TABLE usuarios(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30), 
    surname VARCHAR(30),
    email VARCHAR(30),
    password VARCHAR(60) ,
    passwordConfirm VARCHAR(60),
    legal_buy TINYINT DEFAULT 1,
    avatar longblob NOT NULL,
    PRIMARY KEY (id)
);

CREATE OR REPLACE TABLE usuarios_producto(
    id int primary key NOT NULL AUTO_INCREMENT,
    id_usuario int not null,
    id_productos int not null,
    key id_usuario_usuarios_id_foreign (id_usuario),
    key id_nota_notas_id (id_productos),
    constraint id_usuario_usuarios_id_foreign foreign key (id_usuario) references usuarios (id),
    constraint id_productos_notas_id foreign key (id_productos) references productos (id)
);

CREATE OR REPLACE TABLE productos(
    id INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(30) not null,
    precio decimal(10,2) DEFAULT NULL,
    description TEXT not null,
    image longblob NOT NULL,
    id_check int not null,
    primary key(id),
    key check_id_sp_check_foreign (id_check),
    constraint check_id_sp_check_foreign foreign key(id_check)references sp_check (id)
);



CREATE OR REPLACE TABLE sp_check(
    id INT NOT NULL AUTO_INCREMENT,
    producto TINYINT DEFAULT null,
    servicio TINYINT DEFAULT null,
    id_categoria int not null,
    primary key(id),
    key id_categoria_foreign(id_categoria),
    constraint id_categoria_foreign foreign key (id_categoria) references categoria(id)
);


CREATE OR REPLACE TABLE categoria(
    id INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(30),
    PRIMARY KEY (id)
);
