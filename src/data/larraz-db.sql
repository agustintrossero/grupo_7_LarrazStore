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
    avatar VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

LOCK TABLES usuarios write;
/*!40000 ALTER TABLE usuarios DISABLE KEYS */;
INSERT INTO usuarios (name, surname, email)
VALUES ('Marc', 'Villanueva', 'marcvillanueva@gmail.com'),
('Juan', 'Larraz', 'juanlarraz@gmail.com'),
('Ignacio', 'Maldonado', 'ignaciomaldonado@gmail.com'),
('Agustin', 'Trossero', 'agustintrossero@gmail.com');
/*!40000 ALTER TABLE usuarios ENABLE KEYS */;
UNLOCK TABLES;


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
    image VARCHAR(255) NOT NULL,
    id_check int not null,
    primary key(id),
    key check_id_sp_check_foreign (id_check),
    constraint check_id_sp_check_foreign foreign key(id_check)references sp_check (id)
);

LOCK TABLES productos write;
/*!40000 ALTER TABLE productos DISABLE KEYS */;
INSERT INTO productos (nombre, precio, description, image)
VALUES ('PLACA MSI RTX 3080 VENTUS X 10G OC 10GB GDDR6 LHR (G3080V3X10CL)', '349999', 'PLACA MSI RTX 3080 VENTUS X 10G OC 10GB GDDR6 LHR (G3080V3X10CL)','/images/RTX3080.jpg'),
		('TV Led 65 65NANO80 -Ultra Hd - Smart - HDR - Web Os - Magic Remote - Bluetooth', '189999', 'Viví en 4K La cantidad de pixeles que ofrece es 4 veces mayor que la Full HD, ¿el resultado? Escenas mucho más realistas y con un nivel de detalle increíble. Ahora vas a conocer una aventura de inmersión que no va a dejar de sorprenderte. Más allá de ver televisión Su función Screen Share permite duplicar la pantalla de tu smartphone, tablet o PC para que aparezca en la TV. De esta forma vas a poder visualizar todo tipo de contenido: material audiovisual, documentos de trabajo, correos electrónicos y más.', '/images/LGNANOCELL.jpg'),
		('Lenovo Ip D330-10Igl N4020 4G 64G 10S (82H0001Mar)', '39999', 'Donde una laptop y una tablet se fusionan - Rendimiento de una portátil, pero con la libertad de una tablet - Repleta de funciones a pesar de su práctico tamaño - Conectividad 4G LTE opcional - Rápida y con procesamiento fluido - Cuenta con dos cámaras y una batería de larga duración La potencia de una laptop, con la diversión de una tablet Con los procesadores Intel® Celeron®, la IdeaPad D330 tiene toda la potencia informática y toda la diversión y movilidad de una tablet liviana. Desde la realización de varias tareas a la conexión con amigos en línea y la visualización de programas o películas, la portátil-tablet IdeaPad D330 te ofrece la libertad de hacer más cosas donde sea. Disfruta de la vida por la vía rápida Siempre vale la pena elegir un dispositivo con 4G LTE*. Esta tecnología de comunicaciones móviles súper rápida te proporciona una conexión más firme y estable, que da lugar a una experiencia más rápida cada vez que navegas por internet.', '/images/LENOVOIPD330-10LGL.jpg'),
		('Notebook Acer I7-10510U 8Gb 512Gb Ssd 156 Black W10Hsl (A515-54-77Je)(NxHmdal01P)', '149999', 'Notebook Acer I7-10510U 8Gb 512Gb Nvme 15.6 Black W11Hsl (A515-54-77Je)(Nx.Hmdal.01P)', '/images/ACERI7.jpg'),
		('AURICULAR CMIC LOGITECH G335 35 MM GAMING VER COLOR', '9999', 'Ligeros y atractivos. En los G335 se combinan el color y la comodidad. El diseño de diadema con suspensión con cinta ajustable permite el ajuste idóneo. Con Plug and Play y controles integrados podrás conectarte y meterte de lleno en el juego rápidamente. Elige el color que más se ajuste a tu increíble estilo. El diseño de diadema con suspensión distribuye el peso y alivia la presión. Las suaves almohadillas transpirables, de espuma viscoelástica y malla deportiva, envuelven el oído con la presión justa para una buena sujeción. Con sólo 240 gramos, los G335 son una versión más pequeña y ligera de los galardonados G733 LIGHTSPEED inalámbricos.', '/images/G335.jpg'),
		('Placa Powercolor Red Dragon Rx550 4Gb Gddr5 (AXRX 550 4GBD5-HLE)', '33999', 'Placa Powercolor Red Dragon Rx550 4Gb Gddr5 (AXRX 550 4GBD5-HLE)', '/images/RX550.jpg'),
		('TECLADO LOGITECH GAMING G815 RGB MECHANICAL 920-008984', '29999', 'TECLADO LOGITECH GAMING G815 RGB MECHANICAL 920-008984', '/images/G815.jpg'),
		('Tablet Lenovo Yoga Tab 3 10 Smart 4Gb 64Gb', '44999', 'Processor -Qualcomm Snapdragon 439 (8C, 8x A53 @2.0GHz). Sistema operativo. -Android Pie. Pantalla. -FHD de 25,65 cm (10,1) 1920 x 1200. Memoria. -RAM: 4 GB. Almacenamiento: 64 GB. Batería. -7000 mAh. -Navegación web: hasta 11 horas', '/images/LENOVOYOGA.jpg'),
		('TABLET LENOVO TB M10 PLUS -X606F -BUNDLE 1032 GB 2GB (ZA5W0109AR)', '39999', 'TABLET LENOVO TB M10 PLUS -X606F -BUNDLE 1032 GB 2GB (ZA5W0109AR)', '/images/LENOVOTBM10PLUS.jpg'),
		('Impresora Laser Hp Neverstop 1200W Usb', '54999', 'Imprima grandes volúmenes con facilidad gracias al primer tanque de tóner de HP: incluye tóner para imprimir 5000 páginas. Cuente con la calidad y la confiabilidad de HP a un costo muy bajo, además de la versatilidad de un equipo multifunción. Imprima y escanee prácticamente desde cualquier lugar con la aplicación HP Smart. Impresora apta para seguridad dinámica. ( No incluye el cable USB ).', '/images/HPNEVERSTOP.jpg'),
		('Monopatin Eléctrico Plegable 10 Kany 10X', '249999', 'Monopatín Eléctrico Plegable 10 Kany Modelo Max10X - Carga máxima: 150 kg - Carga mínima: 40 kg - Velocidad máxima: 60km/h - Potencia del motor: 2000W DUAL - Autonomía máxima: 45km (Dependiendo del suelo, inclinación, velocidad, estilo de conducción) - Gradiente de escalada: 30 ° - Tres Niveles de Potencia - Suspensión frontal y trasera - Freno a Disco Delantero y Trasero - Información del cargador: • Tensión de entrada: AC 100-240V, 50/60Hz, 2.0A (MAX) • Tensión de salida: DC58.8V - 1.8A - Batería: Batería de litio - Potencia de la batería: 105.84WH - Voltaje de la batería: 52V - Capacidad de la batería: 20,8Ah - Temperatura de carga: 0°C - 40°C - Tiempo de carga: 6 horas - Color Negro - Plegable - Luz frontal y Stop trasera - EAN: 7798360100470 - Resistencia al agua: IP55 - Humedad relativa de Almacenamiento: 5% -95% - Distancia al suelo: cerca de 15cm - Dimensiones del cuerpo: 110*46*116 cm - Dimensiones plegado: 116*46*50 cm. - Tamaño del embalaje: 116*32*60 cm - Peso neto: 29kg. - Peso bruto: 34Kg - Diámetro de la rueda: 10 pulgadas Off Road', '/images/KANY10X.jpg'),
		('Placa Pny Geforce RTX 2060 6GB XLR8 Gaming Overclocked Edition', '119999', 'Placa Pny Geforce Rtx 2060 6Gb Xlr8 Gaming Overclocked Edition Doble Fan Edition (Vcg20606Df2Mpb)', '/images/20606GB.jpg'),
		('TELEFONO CELULAR SAMSUNG GALAXY Z FLIP3 5G - NEGRO 66 OCORE 128GB 12MP (SM-F711BZKBARO)', '155000', 'Samsung Galaxy Z Flip 3, elegido como uno de los mejores inventos de 2021 según la revista TIME. Se pliega en el bolsillo. Entra en tu cartera. Se desliza en tus jeans más apretados. Cuando lo sacás, se abre un smartphone 5G con pantalla completa que se adapta a tus ángulos favoritos.No hay dudas. Queríamos rediseñar el concepto del teléfono, y lo hicimos.', '/images/ZFLIP3.jpg'),
		('Telefono Celular Samsung Galaxy A52 Negro', '69999', 'Disfruta de los detalles realmente vibrantes con la pantalla Super AMOLED Display FHD+, que alcanza los 800 nits¹ para mayor claridad, incluso con la luz de día brillante. Eye Comfort Shield² reduce la luz azul y la pantalla extra fluida mantiene la vista relajada, ya sea que estés jugando o navegando. Todo en la amplia pantalla Infinity-O Display de 6,5 pulgadas. El Galaxy A52 presenta curvas cómodas y elegantes en un diseño perfecto. El mínimo borde de la cámara combina con el acabado mate en la parte posterior para lograr un aspecto icónico y unificado. El sistema de cámaras con múltiples lentes del Galaxy A52 lleva las fotos al siguiente nivel. Conseguí una resolución ultra alta en la cámara principal de 64 MP con OIS para tomar fotos nítidas y claras durante todo el día. Expandí el ángulo de visión con la cámara ultra ancha. Personaliza el enfoque con la cámara de profundidad o mira los detalles de cerca con la cámara macro. Olvídate de las fotos y los videos borrosos. La estabilización óptica de imagen (Optical Image Stabilization, OIS) ayuda a estabilizar tus tomas para mantener el movimiento fluido y las imágenes nítidas, incluso cuando hay poca luz. La cámara capta más luz para mejorar las tomas con poca luz. En el modo Super Steady, el Galaxy A52 mantiene tus videos listos con un aspecto fluido y estable. Graba como una cámara de acción de alta calidad, ya que utiliza la cámara ultra ancha y un software predictivo. La cámara de profundidad de 5 MP te permite ajustar la profundidad de campo en tus fotos. Con un simple toque, podrás ajustar fácilmente el desenfoque de fondo detrás del sujeto fotografiado para obtener tomas de retratos de alta calidad que realmente se destacan.', '/images/A52.jpg'),
		('TELEFONO CELULAR SAMSUNG GALAXY S20 - AZUL 65 OCORE 6GB 128GB 64MPX', '98999', 'Descubrí el Galaxy S20. Con captura de video en 8K que cambia tu forma de tomar no solo videos, sino también fotos. Al agregar la seguridad de Samsung Knox, batería inteligente, procesador potente y una gran capacidad de almacenamiento, la serie Galaxy S20 presenta un universo completamente nuevo para smartphones. Un salto gigantesco hacia adelante en resolución y zoom para la fotografía móvil ALTA RESOLUCIÓN Con 108 MP podes agrandar y seguir agrandando. Amplia 100X para encontrar fotos que nunca supiste que existían.', '/images/S20FE.jpg'),
		('Micro Amd (Am4) Ryzen 5 5600G 39Ghz 6C12T', '42999', 'Micro Amd (Am4) Ryzen 5 5600G 3.9Ghz 6C/12T (100-100000252Box)', '/images/5600G.jpg'),
		('Pc Pcbox Amd Ryzen 5 Pro 4650g 8gb 240gb (cteclymouse)', '59999', 'Contiene: - GABINETE PCBOX PCB-260 BLACK KIT 500W(TECLADO+PARLANTE+MOUSE) - MB AMD (AM4) ASUS PRIME A320M-K (90MB0TV0-M0EAY0) RYZEN 3000 READY, Y DDR4 - MEMORIA UDIMM NEO FORZA DDR4 8GB 2666MHZ - BULK (NMUD480E82-2666EA00) - COOLER AEROCOOL VERKHO A-3P (AM4/AM3+/AM3/AM2+/AM2/ FM2/FM1) - DISCO SSD ADATA SU650 240GB BLISTER (ASU650SS-240GT-R) - MICRO AMD (AM4) RYZEN 5 PRO 4650G TRAY 6CORE (100-000000143)', '/images/PCBOX4650G.jpg'),
		('SILLA GAMER AEROCOOL C/ DETALLES EN ROJO', '49000', 'Silla de alta gama gamer ajustable color a eleccion soporta peso de hasta 300 kilos', '/images/silla-gamer-aerocool.jpg'),
		('SAMSUNG GALAXY NOTE 20 128GB', '350000', 'SAMSUNG GALAXY NOTE 20 128GB', '/images/note-20.jpg'),
		('MOUSE GAMER LOGITECH G203 LILA', '15000', 'MOUSE GAMER LOGITECH G203 LILA', '/images/mouse-gamer-logitech.jpg'),
		('CPU GAMER AEROCOOL', '25999', 'CPU GAMER AEROCOOL', '/images/silla-gamer-aerocool.jpg'),
		('Servicio de Limpieza Celular', '2000', 'Limpieza de todo tipo de celulares al mejor precio con los mejore productos de limpieza del mercado', '/images/A52.jpg');
/*!40000 ALTER TABLE productos ENABLE KEYS */;
UNLOCK TABLES;



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