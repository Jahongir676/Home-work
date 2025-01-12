CREATE TABLE Telefonlar (
    telefon_id SERIAL PRIMARY KEY,
    model VARCHAR(255),
    narxi FLOAT,
    ishlab_chiqaruvchi VARCHAR(255),
    xotira INT
);

CREATE TABLE Mijozlar (
    mijoz_id SERIAL PRIMARY KEY,
    ism VARCHAR(255),
    familiya VARCHAR(255),
    telefon VARCHAR(20) UNIQUE NOT NULL
);

CREATE TABLE Xodimlar (
    xodim_id SERIAL PRIMARY KEY,
    ism VARCHAR(255),
    familiya VARCHAR(255),
    lavozimi VARCHAR(255)
);

CREATE TABLE Sotuvlar (
    sotuv_id SERIAL PRIMARY KEY,
    telefon_id INT REFERENCES Telefonlar(telefon_id) ON DELETE CASCADE,
    mijoz_id INT REFERENCES Mijozlar(mijoz_id) ON DELETE CASCADE,
    xodim_id INT REFERENCES Xodimlar(xodim_id) ON DELETE CASCADE,
    sotuv_sanasi TIMESTAMP,
    miqdori INT,
    umumiy_narx FLOAT
);

INSERT INTO Telefonlar (model, narxi, ishlab_chiqaruvchi, xotira) VALUES
('iPhone 12', 999.99, 'Apple', 64),
('Galaxy S21', 799.99, 'Samsung', 128),
('Pixel 5', 699.99, 'Google', 128);

INSERT INTO Mijozlar (ism, familiya, telefon) VALUES
('Ali', 'Valiyev', '998901234567'),
('Olim', 'Aliyev', '998902345678');

INSERT INTO Xodimlar (ism, familiya, lavozimi) VALUES
('Aziz', 'Karimov', 'Sotuvchi'),
('Diyor', 'Abdullayev', 'Sotuvchi');

INSERT INTO Sotuvlar (telefon_id, mijoz_id, xodim_id, sotuv_sanasi, miqdori, umumiy_narx) VALUES
(1, 1, 1, '2024-10-20 14:30', 1, 999.99),
(2, 2, 2, '2024-10-21 10:15', 2, 1599.98);

SELECT ishlab_chiqaruvchi, AVG(narxi) AS ortacha_narx
FROM Telefonlar
GROUP BY ishlab_chiqaruvchi;

SELECT Mijozlar.ism, Mijozlar.familiya, COUNT(Sotuvlar.telefon_id) AS sotib_olgan_telefonlar_soni
FROM Sotuvlar
JOIN Mijozlar ON Sotuvlar.mijoz_id = Mijozlar.mijoz_id
GROUP BY Mijozlar.ism, Mijozlar.familiya;

SELECT Xodimlar.ism, Xodimlar.familiya, COUNT(Sotuvlar.sotuv_id) AS sotuvlar_soni
FROM Sotuvlar
JOIN Xodimlar ON Sotuvlar.xodim_id = Xodimlar.xodim_id
GROUP BY Xodimlar.ism, Xodimlar.familiya
ORDER BY sotuvlar_soni DESC
LIMIT 1;

SELECT model, narxi
FROM Telefonlar
ORDER BY narxi DESC
OFFSET 4 LIMIT 5;

SELECT ishlab_chiqaruvchi, AVG(narxi) AS ortacha_narx, MAX(narxi) AS eng_qimmat, MIN(narxi) AS eng_arzon
FROM Telefonlar
GROUP BY ishlab_chiqaruvchi;

SELECT ishlab_chiqaruvchi, model, MAX(xotira) AS eng_kop_xotira
FROM Telefonlar
GROUP BY ishlab_chiqaruvchi, model
ORDER BY MAX(xotira) DESC;

SELECT Telefonlar.model, AVG(Sotuvlar.umumiy_narx / Sotuvlar.miqdori) AS ortacha_narx, SUM(Sotuvlar.miqdori) AS jami_sotilgan
FROM Sotuvlar
JOIN Telefonlar ON Sotuvlar.telefon_id = Telefonlar.telefon_id
GROUP BY Telefonlar.model
ORDER BY jami_sotilgan DESC;
