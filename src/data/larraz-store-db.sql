CREATE OR REPLACE DATABASE larraz_store_db;
USE larraz_store_db;

-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: larraz_store_db
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.24-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categoria`
--

DROP TABLE IF EXISTS `categoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categoria` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoria`
--

LOCK TABLES `categoria` WRITE;
/*!40000 ALTER TABLE `categoria` DISABLE KEYS */;
INSERT INTO `categoria` VALUES (1,'Componentes de PC'),(2,'Perifericos'),(3,'Celulares'),(4,'Impresoras'),(5,'Articulos para el Hogar'),(6,'Computadoras de escritorio'),(7,'Notebooks y Tablets'),(8,'Notebooks'),(9,'Celulares'),(10,'Computadoras de escritorio'),(11,'Impresoras'),(12,'Televisores');
/*!40000 ALTER TABLE `categoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(30) NOT NULL,
  `precio` decimal(10,2) DEFAULT NULL,
  `description` text NOT NULL,
  `image` varchar(255) NOT NULL,
  `id_check` int(11) NOT NULL,
  `id_category` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `check_id_sp_check_foreign` (`id_check`),
  KEY `productos_FK` (`id_category`),
  CONSTRAINT `check_id_sp_check_foreign` FOREIGN KEY (`id_check`) REFERENCES `sp_check` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `productos_FK` FOREIGN KEY (`id_category`) REFERENCES `categoria` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,'PLACA MSI RTX 3080 VENTUS X 10',349999.00,'PLACA MSI RTX 3080 VENTUS X 10G OC 10GB GDDR6 LHR (G3080V3X10CL)','/images/RTX3080.jpg',1,1),(2,'TV Led 65 65NANO80 -Ultra Hd -',189999.00,'Viví en 4K La cantidad de pixeles que ofrece es 4 veces mayor que la Full HD, ¿el resultado? Escenas mucho más realistas y con un nivel de detalle increíble. Ahora vas a conocer una aventura de inmersión que no va a dejar de sorprenderte. Más allá de ver televisión Su función Screen Share permite duplicar la pantalla de tu smartphone, tablet o PC para que aparezca en la TV. De esta forma vas a poder visualizar todo tipo de contenido: material audiovisual, documentos de trabajo, correos electrónicos y más.','/images/LGNANOCELL.jpg',1,5),(3,'Lenovo Ip D330-10Igl N4020 4G ',39999.00,'Donde una laptop y una tablet se fusionan - Rendimiento de una portátil, pero con la libertad de una tablet - Repleta de funciones a pesar de su práctico tamaño - Conectividad 4G LTE opcional - Rápida y con procesamiento fluido - Cuenta con dos cámaras y una batería de larga duración La potencia de una laptop, con la diversión de una tablet Con los procesadores Intel® Celeron®, la IdeaPad D330 tiene toda la potencia informática y toda la diversión y movilidad de una tablet liviana. Desde la realización de varias tareas a la conexión con amigos en línea y la visualización de programas o películas, la portátil-tablet IdeaPad D330 te ofrece la libertad de hacer más cosas donde sea. Disfruta de la vida por la vía rápida Siempre vale la pena elegir un dispositivo con 4G LTE*. Esta tecnología de comunicaciones móviles súper rápida te proporciona una conexión más firme y estable, que da lugar a una experiencia más rápida cada vez que navegas por internet.','/images/LENOVOIPD330-10LGL.jpg',1,7),(5,'AURICULAR CMIC LOGITECH G335 3',9999.00,'Ligeros y atractivos. En los G335 se combinan el color y la comodidad. El diseño de diadema con suspensión con cinta ajustable permite el ajuste idóneo. Con Plug and Play y controles integrados podrás conectarte y meterte de lleno en el juego rápidamente. Elige el color que más se ajuste a tu increíble estilo. El diseño de diadema con suspensión distribuye el peso y alivia la presión. Las suaves almohadillas transpirables, de espuma viscoelástica y malla deportiva, envuelven el oído con la presión justa para una buena sujeción. Con sólo 240 gramos, los G335 son una versión más pequeña y ligera de los galardonados G733 LIGHTSPEED inalámbricos.','/images/G335.jpg',1,2),(6,'Placa Powercolor Red Dragon Rx',33999.00,'Placa Powercolor Red Dragon Rx550 4Gb Gddr5 (AXRX 550 4GBD5-HLE)','/images/RX550.jpg',1,1),(7,'TECLADO LOGITECH GAMING G815 R',29999.00,'TECLADO LOGITECH GAMING G815 RGB MECHANICAL 920-008984','/images/G815.jpg',1,2),(8,'Tablet Lenovo Yoga Tab 3 10 Sm',44999.00,'Processor -Qualcomm Snapdragon 439 (8C, 8x A53 @2.0GHz). Sistema operativo. -Android Pie. Pantalla. -FHD de 25,65 cm (10,1) 1920 x 1200. Memoria. -RAM: 4 GB. Almacenamiento: 64 GB. Batería. -7000 mAh. -Navegación web: hasta 11 horas','/images/LENOVOYOGA.jpg',1,7),(9,'TABLET LENOVO TB M10 PLUS -X60',39999.00,'TABLET LENOVO TB M10 PLUS -X606F -BUNDLE 1032 GB 2GB (ZA5W0109AR)','/images/LENOVOTBM10PLUS.jpg',1,7),(10,'Impresora Laser Hp Neverstop 1',54999.00,'Imprima grandes volúmenes con facilidad gracias al primer tanque de tóner de HP: incluye tóner para imprimir 5000 páginas. Cuente con la calidad y la confiabilidad de HP a un costo muy bajo, además de la versatilidad de un equipo multifunción. Imprima y escanee prácticamente desde cualquier lugar con la aplicación HP Smart. Impresora apta para seguridad dinámica. ( No incluye el cable USB ).','/images/HPNEVERSTOP.jpg',1,4),(11,'Monopatin Eléctrico Plegable 1',249999.00,'Monopatín Eléctrico Plegable 10 Kany Modelo Max10X - Carga máxima: 150 kg - Carga mínima: 40 kg - Velocidad máxima: 60km/h - Potencia del motor: 2000W DUAL - Autonomía máxima: 45km (Dependiendo del suelo, inclinación, velocidad, estilo de conducción) - Gradiente de escalada: 30 ° - Tres Niveles de Potencia - Suspensión frontal y trasera - Freno a Disco Delantero y Trasero - Información del cargador: • Tensión de entrada: AC 100-240V, 50/60Hz, 2.0A (MAX) • Tensión de salida: DC58.8V - 1.8A - Batería: Batería de litio - Potencia de la batería: 105.84WH - Voltaje de la batería: 52V - Capacidad de la batería: 20,8Ah - Temperatura de carga: 0°C - 40°C - Tiempo de carga: 6 horas - Color Negro - Plegable - Luz frontal y Stop trasera - EAN: 7798360100470 - Resistencia al agua: IP55 - Humedad relativa de Almacenamiento: 5% -95% - Distancia al suelo: cerca de 15cm - Dimensiones del cuerpo: 110*46*116 cm - Dimensiones plegado: 116*46*50 cm. - Tamaño del embalaje: 116*32*60 cm - Peso neto: 29kg. - Peso bruto: 34Kg - Diámetro de la rueda: 10 pulgadas Off Road','/images/KANY10X.jpg',1,5),(12,'Placa Pny Geforce RTX 2060 6GB',119999.00,'Placa Pny Geforce Rtx 2060 6Gb Xlr8 Gaming Overclocked Edition Doble Fan Edition (Vcg20606Df2Mpb)','/images/20606GB.jpg',1,1),(13,'TELEFONO CELULAR SAMSUNG GALAX',155000.00,'Samsung Galaxy Z Flip 3, elegido como uno de los mejores inventos de 2021 según la revista TIME. Se pliega en el bolsillo. Entra en tu cartera. Se desliza en tus jeans más apretados. Cuando lo sacás, se abre un smartphone 5G con pantalla completa que se adapta a tus ángulos favoritos.No hay dudas. Queríamos rediseñar el concepto del teléfono, y lo hicimos.','/images/ZFLIP3.jpg',1,3),(14,'Telefono Celular Samsung Galax',69999.00,'Disfruta de los detalles realmente vibrantes con la pantalla Super AMOLED Display FHD+, que alcanza los 800 nits¹ para mayor claridad, incluso con la luz de día brillante. Eye Comfort Shield² reduce la luz azul y la pantalla extra fluida mantiene la vista relajada, ya sea que estés jugando o navegando. Todo en la amplia pantalla Infinity-O Display de 6,5 pulgadas. El Galaxy A52 presenta curvas cómodas y elegantes en un diseño perfecto. El mínimo borde de la cámara combina con el acabado mate en la parte posterior para lograr un aspecto icónico y unificado. El sistema de cámaras con múltiples lentes del Galaxy A52 lleva las fotos al siguiente nivel. Conseguí una resolución ultra alta en la cámara principal de 64 MP con OIS para tomar fotos nítidas y claras durante todo el día. Expandí el ángulo de visión con la cámara ultra ancha. Personaliza el enfoque con la cámara de profundidad o mira los detalles de cerca con la cámara macro. Olvídate de las fotos y los videos borrosos. La estabilización óptica de imagen (Optical Image Stabilization, OIS) ayuda a estabilizar tus tomas para mantener el movimiento fluido y las imágenes nítidas, incluso cuando hay poca luz. La cámara capta más luz para mejorar las tomas con poca luz. En el modo Super Steady, el Galaxy A52 mantiene tus videos listos con un aspecto fluido y estable. Graba como una cámara de acción de alta calidad, ya que utiliza la cámara ultra ancha y un software predictivo. La cámara de profundidad de 5 MP te permite ajustar la profundidad de campo en tus fotos. Con un simple toque, podrás ajustar fácilmente el desenfoque de fondo detrás del sujeto fotografiado para obtener tomas de retratos de alta calidad que realmente se destacan.','/images/A52.jpg',1,3),(15,'TELEFONO CELULAR SAMSUNG GALAX',98999.00,'Descubrí el Galaxy S20. Con captura de video en 8K que cambia tu forma de tomar no solo videos, sino también fotos. Al agregar la seguridad de Samsung Knox, batería inteligente, procesador potente y una gran capacidad de almacenamiento, la serie Galaxy S20 presenta un universo completamente nuevo para smartphones. Un salto gigantesco hacia adelante en resolución y zoom para la fotografía móvil ALTA RESOLUCIÓN Con 108 MP podes agrandar y seguir agrandando. Amplia 100X para encontrar fotos que nunca supiste que existían.','/images/S20FE.jpg',1,3),(16,'Micro Amd (Am4) Ryzen 5 5600G ',42999.00,'Micro Amd (Am4) Ryzen 5 5600G 3.9Ghz 6C/12T (100-100000252Box)','/images/5600G.jpg',1,1),(17,'Pc Pcbox Amd Ryzen 5 Pro 4650g',59999.00,'Contiene: - GABINETE PCBOX PCB-260 BLACK KIT 500W(TECLADO+PARLANTE+MOUSE) - MB AMD (AM4) ASUS PRIME A320M-K (90MB0TV0-M0EAY0) RYZEN 3000 READY, Y DDR4 - MEMORIA UDIMM NEO FORZA DDR4 8GB 2666MHZ - BULK (NMUD480E82-2666EA00) - COOLER AEROCOOL VERKHO A-3P (AM4/AM3+/AM3/AM2+/AM2/ FM2/FM1) - DISCO SSD ADATA SU650 240GB BLISTER (ASU650SS-240GT-R) - MICRO AMD (AM4) RYZEN 5 PRO 4650G TRAY 6CORE (100-000000143)','/images/PCBOX4650G.jpg',1,2),(18,'SILLA GAMER AEROCOOL C/ DETALL',49000.00,'Silla de alta gama gamer ajustable color a eleccion soporta peso de hasta 300 kilos','/images/silla-gamer-aerocool.jpg',1,2),(19,'SAMSUNG GALAXY NOTE 20 128GB',350000.00,'SAMSUNG GALAXY NOTE 20 128GB','/images/note-20.jpg',1,3),(20,'MOUSE GAMER LOGITECH G203 LILA',15000.00,'MOUSE GAMER LOGITECH G203 LILA','/images/mouse-gamer-logitech.jpg',1,3),(21,'CPU GAMER AEROCOOL',25999.00,'CPU GAMER AEROCOOL','/images/silla-gamer-aerocool.jpg',1,1),(22,'Servicio de Limpieza Celular',2000.00,'Limpieza de todo tipo de celulares al mejor precio con los mejore productos de limpieza del mercado','/images/A52.jpg',2,9),(29,'Computadora apple',2323.00,'una computadora','/public/images/image-1652390048460.png',1,3),(42,'una compu',23423424.00,'aaassdasd','/images/image-1652744569750.jpeg',1,3),(43,'asdasd',232323.00,'\"\"asdasds\"\"','/images/image-1652745962224.jpeg',1,2);
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sp_check`
--

DROP TABLE IF EXISTS `sp_check`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sp_check` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sp_check`
--

LOCK TABLES `sp_check` WRITE;
/*!40000 ALTER TABLE `sp_check` DISABLE KEYS */;
INSERT INTO `sp_check` VALUES (1,'Producto'),(2,'Servicio');
/*!40000 ALTER TABLE `sp_check` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(30) DEFAULT NULL,
  `name` varchar(30) DEFAULT NULL,
  `surname` varchar(30) DEFAULT NULL,
  `email` varchar(30) DEFAULT NULL,
  `password` varchar(60) DEFAULT NULL,
  `legal_buy` tinyint(4) DEFAULT 1,
  `avatar` varchar(255) NOT NULL,
  `isAdmin` tinyint(4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES ('Nacho','Ignacio','Maldonado','ignaciomaldonado@gmail.com','$2b$10$xEnjdADlVIdfRitG.0oIVe13ezGb55BcJ4ztDvLfHK9UdNEniq0CG',0,'DefaultAvatar.jpg',1),
	 ('Agus','Agustin ','Trossero','agustintrossero@gmail.com','$2b$10$oh9Lb1obhClIY/acR1DymuEsMKDzAzmfuDGOsfrXTiW5Hdqi853S6',0,'DefaultAvatar.jpg',1),
	 ('Juan','Juan','Larraz','juanlarraz@gmail.com','$2b$10$WZRiu8ji/xKjGZA.LOjOjOLP3GEiACuQaOhE50Wq1ZJfOZGnbJQIC',0,'DefaultAvatar.jpg',1),
	 ('Marc','Marcos','Villanueva','marcvillanueva@gmail.com','$2b$10$11bO8LfQgIDChWvqyODWf.YdCa6RHx.Es5m8mOsDLi5vawB0HtMEG',0,'DefaultAvatar.jpg',1);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios_producto`
--

DROP TABLE IF EXISTS `usuarios_producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios_producto` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_usuario` int(11) NOT NULL,
  `id_productos` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_usuario_usuarios_id_foreign` (`id_usuario`),
  KEY `id_nota_notas_id` (`id_productos`),
  CONSTRAINT `id_productos_notas_id` FOREIGN KEY (`id_productos`) REFERENCES `productos` (`id`),
  CONSTRAINT `id_usuario_usuarios_id_foreign` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios_producto`
--

LOCK TABLES `usuarios_producto` WRITE;
/*!40000 ALTER TABLE `usuarios_producto` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuarios_producto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'larraz_store_db'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-25 11:43:13