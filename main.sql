CREATE TABLE Users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT UNIQUE,
    password TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER REFERENCES Users(id),
    title TEXT,
    content TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Comments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    post_id INTEGER REFERENCES Posts(id),
    user_id INTEGER REFERENCES Users(id),
    content TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Categories (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT UNIQUE
);

CREATE TABLE Post_Category (
    post_id INTEGER REFERENCES Posts(id),
    category_id INTEGER REFERENCES Categories(id),
    PRIMARY KEY (post_id, category_id)
);

CREATE TABLE Likes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER REFERENCES Users(id),
    post_id INTEGER REFERENCES Posts(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);



INSERT INTO Users (name, email, password) VALUES
('John Doe', 'john@example.com', 'password123'),
('Jane Smith', 'jane@example.com', 'password456'),
('Alice Johnson', 'alice@example.com', 'password789'),
('Bob Williams', 'bob@example.com', 'password111'),
('Charlie Brown', 'charlie@example.com', 'password222');

INSERT INTO Categories (name) VALUES
('Technology'),
('Science'),
('Health'),
('Travel'),
('Lifestyle');

INSERT INTO Posts (user_id, title, content) VALUES
(1, 'Introduction to SQL', 'This is a post about SQL basics.'),
(2, 'The Future of Technology', 'Exploring the latest trends in tech.'),
(3, 'Healthy Eating Habits', 'A guide to eating healthy and balanced meals.'),
(4, 'Top Travel Destinations', 'The best places to visit this year.'),
(5, 'Lifestyle Tips for 2024', 'How to improve your lifestyle this year.');

INSERT INTO Comments (post_id, user_id, content) VALUES
(1, 2, 'Great introduction to SQL!'),
(1, 3, 'Very informative. Thanks!'),
(2, 1, 'Exciting future ahead in technology!'),
(3, 4, 'I love these healthy tips!'),
(4, 5, 'Looking forward to my next vacation.');

INSERT INTO Post_Category (post_id, category_id) VALUES
(1, 1),
(2, 1),
(3, 3),
(4, 4),
(5, 5);

INSERT INTO Likes (user_id, post_id) VALUES
(1, 2),
(2, 1),
(3, 3),
(4, 4),
(5, 5);
