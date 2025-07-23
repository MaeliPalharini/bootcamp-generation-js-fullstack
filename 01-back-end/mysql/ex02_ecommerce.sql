CREATE DATABASE db_cosmeticos_store;
USE db_cosmeticos_store;

CREATE TABLE tb_produtos(
    id BIGINT AUTO_INCREMENT,
    nome_produto VARCHAR(255) NOT NULL,
    marca VARCHAR(100),
    categoria VARCHAR(100),
    preco DECIMAL(10, 2),
    PRIMARY KEY (id)
);

INSERT INTO tb_produtos(nome_produto, marca, categoria, preco) 
VALUES 
('Perfume La Vie Est Belle 50ml', 'Lancôme', 'Perfumaria', 699.90),
('Base Fit Me', 'Maybelline', 'Maquiagem', 79.90),
('Creme Hidratante Nivea Lata', 'Nivea', 'Cuidados com a Pele', 25.50),
('Perfume Sauvage Dior 100ml', 'Dior', 'Perfumaria', 850.00),
('Kit Shampoo e Condicionador Absolut Repair', 'L''Oréal', 'Cabelo', 250.80),
('Paleta de Sombras Naked Heat', 'Urban Decay', 'Maquiagem', 350.00),
('Protetor Solar Anthelios Airlicium', 'La Roche-Posay', 'Cuidados com a Pele', 89.99),
('Perfume 212 VIP Rosé 80ml', 'Carolina Herrera', 'Perfumaria', 579.00),
('Batom Líquido Matte', 'Bruna Tavares', 'Maquiagem', 35.90),
('Óleo Capilar Oil Reflections', 'Wella', 'Cabelo', 120.00);

SELECT * FROM tb_produtos WHERE preco > 500;

SELECT * FROM tb_produtos WHERE preco < 500;

UPDATE tb_produtos 
SET preco = 649.90 
WHERE id = 1;

SELECT * FROM tb_produtos ORDER BY preco DESC LIMIT 1;

SELECT * FROM tb_produtos WHERE categoria = 'Maquiagem';

SELECT * FROM tb_produtos ORDER BY nome_produto ASC;

SELECT * FROM tb_produtos;
