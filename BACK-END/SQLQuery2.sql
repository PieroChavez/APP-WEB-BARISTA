USE CAPUCCINO_1
GO

CREATE TABLE dbo.Usuarios
	(UsuariosId int PRIMARY KEY NOT NULL,
	UsuariosNombre varchar (25) NOT NULL,
	Region varchar (25) NOT NULL,
	Oficio varchar (25) NOT Null,
	)

SELECT * from Usuarios;

CREATE TABLE cafeterias(
	CafeteriasId INT PRIMARY KEY NOT NULL,
	CafeteriasNombre varchar (25) NOT NULL,
	CafeteriasRegion varchar (25) NOT NULL,
)

SELECT * FROM cafeterias;

ALTER TABLE Cafeterias
	ADD CafeteriasProvincias VARCHAR (25) NULL, CaferiasDistrito VARCHAR NULL;
	
	
	
-- the creations table data from user and CoffeShops
