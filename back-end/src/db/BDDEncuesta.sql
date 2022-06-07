create database encuesta;
use encuesta;
create table pregunta (
idPregunta int auto_increment primary key,
pregunta varchar(50)
);
create table respuesta(
idRespuesta int auto_increment primary key,
respuesta varchar(100),
idPregunta int,
CONSTRAINT fkIdPregunta FOREIGN KEY (idPregunta) REFERENCES pregunta(idPregunta)
);