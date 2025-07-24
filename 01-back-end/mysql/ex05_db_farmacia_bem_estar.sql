CREATE DATABASE db_farmacia_bem_estar;
USE db_farmacia_bem_estar;

CREATE TABLE tb_categorias (
    id_categoria   INT AUTO_INCREMENT PRIMARY KEY,
    nome_categoria VARCHAR(40) NOT NULL,
    setor          VARCHAR(40),
    descricao      TEXT
);

CREATE TABLE tb_produtos (
    id_produto   INT AUTO_INCREMENT PRIMARY KEY,
    nome         VARCHAR(60) NOT NULL,
    valor        DECIMAL(7,2) NOT NULL,
    marca        VARCHAR(40),
    estoque      INT DEFAULT 0,
    id_categoria INT,
    FOREIGN KEY (id_categoria) REFERENCES tb_categorias(id_categoria)
);

INSERT INTO tb_categorias (nome_categoria, setor, descricao) VALUES
('Medicamentos','Saúde','Fármacos com e sem prescrição'),
('Vitaminas','Nutrição','Suplementos vitamínicos e minerais'),
('Cosméticos','Perfumaria','Produtos de beleza e cuidados pessoais'),
('Higiene Pessoal','Bem-estar','Itens de higiene diária'),
('Cuidados Infantis','Especial','Produtos específicos para bebês e crianças');

INSERT INTO tb_produtos (nome, valor, marca, estoque, id_categoria) VALUES
('Paracetamol 750 mg',6.90,'Genérico',120,1),
('Ibuprofeno 600 mg',12.50,'MedPharma',80,1),
('Multivitamínico A-Z',45.00,'VitaPlus',60,2),
('Colágeno Hidrolisado 200 g',58.75,'NutriLife',40,2),
('Creme Facial Hidratante',89.90,'BelleVie',35,3),
('Shampoo Anticaspa 300 ml',27.40,'HairCare',50,4),
('Lenço Umedecido 100 un',19.99,'BabySoft',70,5),
('Protetor Solar FPS 60 200 ml',69.00,'SunSafe',25,3);

SELECT * FROM tb_produtos WHERE valor > 50.00;
SELECT * FROM tb_produtos WHERE valor BETWEEN 5.00 AND 60.00;
SELECT * FROM tb_produtos WHERE nome LIKE '%C%';
SELECT p.*, c.nome_categoria FROM tb_produtos p INNER JOIN tb_categorias c ON p.id_categoria = c.id_categoria;
SELECT p.*, c.nome_categoria FROM tb_produtos p INNER JOIN tb_categorias c ON p.id_categoria = c.id_categoria WHERE c.nome_categoria = 'Cosméticos';
