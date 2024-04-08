CREATE TABLE `usuarios` (
    nit INTEGER PRIMARY KEY AUTO_INCREMENT, email VARCHAR(150) NOT NULL, passw VARCHAR(200) Not NULL
);

CREATE TABLE `guia` (
    nit INTEGER PRIMARY KEY AUTO_INCREMENT, nombre VARCHAR(150) NOT NULL, apellido VARCHAR(150), n_telefono INTEGER(150) NOT NULL, idiomas VARCHAR(200) NOT NULL, n_idiomas VARCHAR(100) NOT NULL, edad INTEGER(100) NOT NULL, sexo VARCHAR(100) NOT NULL, s_email VARCHAR(150) NULL
);

CREATE TABLE `turista` (
    nit INTEGER PRIMARY KEY AUTO_INCREMENT, nombre VARCHAR(150) NOT NULL, apellido VARCHAR(150), edad INTEGER(100) NOT NULL, sexo VARCHAR(100) NOT NULL, interas VARCHAR(300) NULL, s_email VARCHAR(150) NULL, n_telefono INTEGER(150) NOT NULL, c_emergencia VARCHAR(200) NOT NULL, n_idiomas VARCHAR(100) NOT NULL, idiomas VARCHAR(200) NOT NULL
);

CREATE TABLE `proveedor` (
    nit INTEGER PRIMARY KEY AUTO_INCREMENT, nombre VARCHAR(150) NOT NULL, nombre_empresa VARCHAR(150) NULL, tipo_servicio VARCHAR(150) NOT NULL, tarifa INTEGER(200) NOT NULL, condiciones_pago VARCHAR(150) NOT NULL, n_telefono INTEGER(200) NOT NULL, s_email VARCHAR(150) NULL
);

CREATE TABLE `paqueteTuristicos` (
    nit INTEGER PRIMARY KEY AUTO_INCREMENT, nombre VARCHAR(150) NOT NULL, destinos VARCHAR(200) NOT NULL, fecha_salida DATE NOT NULL, fecha_llegada DATE NOT NULL, actividades VARCHAR(300) NOT NULL, alojamiento VARCHAR(150) NULL, comidas VARCHAR(300) NULL, costo_total INTEGER(250) NOT NULL, estado BOOLEAN NOT NULL DEFAULT 0
);

CREATE TABLE `itinerarios` (
    nit INTEGER PRIMARY KEY AUTO_INCREMENT, nombre VARCHAR(150) NOT NULL, destinos VARCHAR(150) NOT NULL, fecha_inicio DATE NOT NULL, fecha_final DATE NOT NULL, actividades VARCHAR(300) NOT NULL, transporte VARCHAR(200) NOT NULL, costo_total INTEGER(300) NOT NULL, duracion VARCHAR(150) NOT NULL, estado BOOLEAN NOT NULL DEFAULT 0
);

CREATE TABLE `reservas` (
    nit INTEGER PRIMARY KEY AUTO_INCREMENT, n_cliente VARCHAR(150) NOT NULL, n_personas INTEGER(200) NOT NULL, nombre_paquete VARCHAR(200) NOT NULL, nombre_guia VARCHAR(150) NOT NULL, nit_itinerario INTEGER(100) NOT NULL anticipo INTEGER(300) NULL
);

CREATE TABLE `chat` (
    nit INTEGER PRIMARY KEY AUTO_INCREMENT, nombre VARCHAR(150) NOT NULL, mensaje VARCHAR(300) NOT NULL
);

CREATE TABLE `contactenos` (
    nit INTEGER PRIMARY KEY AUTO_INCREMENT, email VARCHAR(150) NOT NULL, mensaje VARCHAR(300) NOT NULL
);

CREATE TABLE `factura` (
    n_factura INTEGER PRIMARY KEY AUTO_INCREMENT, nombre VARCHAR(150) NOT NULL, cliente VARCHAR(150) NOT NULL, fecha_emision DATE NOT NULL, subtotal INTEGER(300) NO NULL, descuentos INTEGER(300) NULL, total INTEGER(300) NOT NULL
);