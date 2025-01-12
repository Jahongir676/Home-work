CREATE TABLE Mualliflar (
    id SERIAL PRIMARY KEY,
    ism VARCHAR(255),
    tugilgan_yili DATE
);

CREATE TABLE Kitoblar (
    id SERIAL PRIMARY KEY,
    nomi VARCHAR(255),
    muallif_id INTEGER REFERENCES Mualliflar(id) ON DELETE CASCADE,
    narxi DECIMAL(10, 2),
    sahifa_soni INTEGER
);

CREATE TABLE KitobSotuvlari (
    id SERIAL PRIMARY KEY,
    kitob_id INTEGER REFERENCES Kitoblar(id) ON DELETE CASCADE,
    sana DATE,
    sotilgan_soni INTEGER
);

CREATE TABLE KitobSharhlari (
    id SERIAL PRIMARY KEY,
    kitob_id INTEGER REFERENCES Kitoblar(id) ON DELETE CASCADE,
    mijoz_id INTEGER,
    matn TEXT,
    baho INTEGER
);

INSERT INTO Mualliflar (ism, tugilgan_yili) VALUES
('J.K. Rowling', '1965-07-31'),
('George R.R. Martin', '1948-09-20');

INSERT INTO Kitoblar (nomi, muallif_id, narxi, sahifa_soni) VALUES
('Harry Potter', 1, 19.99, 500),
('Game of Thrones', 2, 24.99, 800);

INSERT INTO KitobSotuvlari (kitob_id, sana, sotilgan_soni) VALUES
(1, '2024-01-10', 150),
(2, '2024-02-12', 200);

INSERT INTO KitobSharhlari (kitob_id, mijoz_id, matn, baho) VALUES
(1, 101, 'Juda ajoyib kitob!', 5),
(2, 102, 'Yaxshi, lekin uzoq', 4);

SELECT Mualliflar.ism, SUM(KitobSotuvlari.sotilgan_soni) AS umumiy_sotuvlar, 
SUM(KitobSotuvlari.sotilgan_soni * Kitoblar.narxi) AS umumiy_daromad
FROM KitobSotuvlari
JOIN Kitoblar ON KitobSotuvlari.kitob_id = Kitoblar.id
JOIN Mualliflar ON Kitoblar.muallif_id = Mualliflar.id
GROUP BY Mualliflar.ism;

SELECT Kitoblar.nomi, AVG(KitobSharhlari.baho) AS ortacha_baho
FROM KitobSharhlari
JOIN Kitoblar ON KitobSharhlari.kitob_id = Kitoblar.id
GROUP BY Kitoblar.nomi
ORDER BY ortacha_baho DESC
LIMIT 5;

SELECT Mualliflar.ism, MAX(Kitoblar.narxi) AS eng_qimmat, MIN(Kitoblar.narxi) AS eng_arzon
FROM Kitoblar
JOIN Mualliflar ON Kitoblar.muallif_id = Mualliflar.id
GROUP BY Mualliflar.ism;

SELECT Kitoblar.nomi, SUM(KitobSotuvlari.sotilgan_soni) AS jami_sotilgan
FROM KitobSotuvlari
JOIN Kitoblar ON KitobSotuvlari.kitob_id = Kitoblar.id
GROUP BY Kitoblar.nomi
ORDER BY jami_sotilgan DESC
LIMIT 5;
