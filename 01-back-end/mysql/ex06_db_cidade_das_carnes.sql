DROP DATABASE IF EXISTS db_cidade_das_carnes;
CREATE DATABASE db_cidade_das_carnes;
USE db_cidade_das_carnes;

CREATE TABLE tb_categorias (
    id_categoria INT AUTO_INCREMENT PRIMARY KEY,
    nome_categoria VARCHAR(40) NOT NULL,
    tipo_corte VARCHAR(40),
    origem_animal VARCHAR(40)
);

CREATE TABLE tb_produtos (
    id_produto INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(60) NOT NULL,
    valor DECIMAL(7,2) NOT NULL,
    peso_kg DECIMAL(5,2),
    estoque INT DEFAULT 0,
    id_categoria INT,
    FOREIGN KEY (id_categoria) REFERENCES tb_categorias(id_categoria)
);

INSERT INTO tb_categorias (nome_categoria, tipo_corte, origem_animal) VALUES
('Bovinos','Nobre','Boi'),
('Aves','Filé','Frango'),
('Suínos','Costela','Porco'),
('Ovinos','Pernil','Ovelha'),
('Peixes','Posta','Peixe');

INSERT INTO tb_produtos (nome, valor, peso_kg, estoque, id_categoria) VALUES
('Picanha Bovina',95.00,1.20,30,1),
('Filé de Peito de Frango',24.50,1.00,50,2),
('Costela Suína',48.90,1.50,25,3),
('Pernil de Cordeiro',120.00,2.00,10,4),
('Salmão Posta',130.00,1.00,15,5),
('Alcatra Bovino',65.00,1.30,20,1),
('Coxa e Sobrecoxa',22.90,1.20,40,2),
('Costela Bovina',54.00,2.00,18,1);

SELECT * FROM tb_produtos WHERE valor > 50.00;
SELECT * FROM tb_produtos WHERE valor BETWEEN 50.00 AND 150.00;
SELECT * FROM tb_produtos WHERE nome LIKE '%C%';
SELECT p.*, c.nome_categoria FROM tb_produtos p INNER JOIN tb_categorias c ON p.id_categoria = c.id_categoria;
SELECT p.*, c.nome_categoria FROM tb_produtos p INNER JOIN tb_categorias c ON p.id_categoria = c.id_categoria WHERE c.nome_categoria = 'Aves';
