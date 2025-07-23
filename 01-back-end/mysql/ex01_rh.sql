CREATE DATABASE db_rh;
use db_rh;

CREATE TABLE tb_colaboradores(
    id BIGINT AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    cargo VARCHAR(255),
    salario DECIMAL(10, 2),
    data_admissao DATE,
    PRIMARY KEY (id)
);

INSERT INTO tb_colaboradores(nome, cargo, salario, data_admissao) 
VALUES 
('Ana Silva', 'Desenvolvedora Jr', 3500.00, '2023-01-15'),
('Bruno Costa', 'Analista de RH', 4200.00, '2022-08-20'),
('Carla Dias', 'Estagiária de Marketing', 1800.00, '2024-02-01'),
('Daniel Souza', 'Gerente de Projetos', 8500.00, '2020-05-10'),
('Elisa Ferreira', 'Assistente Administrativo', 1950.50, '2023-11-22'),
('Fernando Lima', 'Cientista de Dados', 7800.00, '2023-09-01'),
('Gabriela Mota', 'Designer UX/UI', 5100.00, '2024-04-10'),
('Lucas Martins', 'Analista de Sistemas Pleno', 5800.00, '2022-03-12'),
('Helena Oliveira', 'Analista Financeiro', 4800.00, '2021-07-22'),
('Ricardo Mendes', 'Especialista de Suporte Técnico', 3950.00, '2024-05-15');

SELECT * FROM tb_colaboradores WHERE salario > 2000;
SELECT * FROM tb_colaboradores WHERE salario < 2000;

UPDATE tb_colaboradores 
SET cargo = 'Analista de Marketing Jr', salario = 2800.00 
WHERE id = 3;

SELECT MAX(salario) AS maior_salario FROM tb_colaboradores;
SELECT MIN(salario) AS menor_salario FROM tb_colaboradores;

SELECT * FROM tb_colaboradores ORDER BY nome ASC;
SELECT * FROM tb_colaboradores WHERE nome LIKE '%Silva%';

SELECT * FROM tb_colaboradores;
