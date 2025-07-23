CREATE DATABASE db_escola_generation;
USE db_escola_generation;

CREATE TABLE tb_estudantes(
    id BIGINT AUTO_INCREMENT,
    nome_completo VARCHAR(255) NOT NULL,
    data_nascimento DATE,
    turma VARCHAR(50),
    nota_media DECIMAL(4, 2),
    PRIMARY KEY (id)
);

INSERT INTO tb_estudantes(nome_completo, data_nascimento, turma, nota_media) 
VALUES 
('Ana Clara Souza', '2008-05-12', '9º Ano A', 8.5),
('Bruno Oliveira', '2009-01-20', '8º Ano B', 6.8),
('Carlos Eduardo Lima', '2008-09-03', '9º Ano A', 9.2),
('Daniela Martins', '2007-11-15', '1º Ano C (Ensino Médio)', 7.5),
('Eduarda Ferreira', '2009-03-25', '8º Ano A', 5.5),
('Felipe Almeida', '2008-07-30', '9º Ano B', 6.9),
('Gabriela Costa', '2007-02-10', '1º Ano B (Ensino Médio)', 9.8),
('Heitor Rodrigues', '2009-06-05', '8º Ano B', 8.0);

SELECT * FROM tb_estudantes WHERE nota_media > 7.0;

SELECT * FROM tb_estudantes WHERE nota_media < 7.0;

UPDATE tb_estudantes 
SET nota_media = 7.2 
WHERE id = 2;

SELECT * FROM tb_estudantes ORDER BY nota_media DESC LIMIT 1;

SELECT * FROM tb_estudantes ORDER BY nota_media ASC LIMIT 1;

SELECT * FROM tb_estudantes WHERE turma = '9º Ano A';

SELECT * FROM tb_estudantes ORDER BY nome_completo ASC;

SELECT * FROM tb_estudantes;
