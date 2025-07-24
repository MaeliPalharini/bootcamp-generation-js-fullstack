CREATE DATABASE db_generation_game_online;
USE db_generation_game_online;

CREATE TABLE tb_classes (
    id_classe      INT AUTO_INCREMENT PRIMARY KEY,
    nome_classe    VARCHAR(40)  NOT NULL,
    arma_principal VARCHAR(40),          
    descricao      TEXT                  
);

CREATE TABLE tb_personagens (
    id_personagem  INT AUTO_INCREMENT PRIMARY KEY,
    nome           VARCHAR(50)  NOT NULL,
    poder_ataque   INT          NOT NULL,
    poder_defesa   INT          NOT NULL,
    recompensa     BIGINT,              
    id_classe      INT,
    FOREIGN KEY (id_classe) REFERENCES tb_classes(id_classe)
);

INSERT INTO tb_classes (nome_classe, arma_principal, descricao) VALUES
('Espadachim','Katana', 'Especialista em técnicas de espada'),
('Atirador','Estilingue', 'Ataques de longa distância com projéteis'),
('Lutador','Punhos/Chutes','Combate corpo-a-corpo de alto impacto'),
('Navegador','Clima-Tact', 'Manipulação climática e navegação precisa'),
('Médico','Rumble Ball', 'Suporte e cura em batalha');

INSERT INTO tb_personagens (nome, poder_ataque, poder_defesa, recompensa, id_classe) VALUES
('Roronoa Zoro',    3200, 2500, 320000000, 1),  -- Espadachim
('Dracule Mihawk',  3500, 2700, 600000000, 1),  -- Espadachim
('Brook',           2100, 1500,  83000000, 1),  -- Espadachim
('Usopp',           1800, 1000, 200000000, 2),  -- Atirador
('Sanji',           2900, 2200, 330000000, 3),  -- Lutador
('Jinbe',           3000, 2800, 438000000, 3),  -- Lutador
('Nami',            1500, 1200,  66000000, 4),  -- Navegador
('Tony Tony Chopper',900, 1600,       100, 5);  -- Médico

SELECT * FROM tb_personagens
WHERE poder_ataque > 2000;

SELECT * FROM tb_personagens
WHERE poder_defesa BETWEEN 1000 AND 2000;

SELECT * FROM tb_personagens
WHERE nome LIKE '%C%';

SELECT p.*, c.nome_classe
FROM   tb_personagens AS p
       INNER JOIN tb_classes AS c ON p.id_classe = c.id_classe;

SELECT p.*, c.nome_classe
FROM   tb_personagens AS p
       INNER JOIN tb_classes AS c ON p.id_classe = c.id_classe
WHERE  c.nome_classe = 'Espadachim';

