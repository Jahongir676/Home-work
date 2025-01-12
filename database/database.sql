CREATE TABLE "Products" (
    "product_id" BIGINT PRIMARY KEY,
    "product_name" VARCHAR(255),
    "product_price" BIGINT,
    "product_rating" FLOAT,
    "comments" TEXT
);

CREATE TABLE "Comments" (
    "product_id" BIGINT REFERENCES "Products"("product_id"),
    "comment" TEXT
);

CREATE TABLE "Admin" (
    "admin_id" BIGINT PRIMARY KEY,
    "first_name" VARCHAR(255),
    "last_name" VARCHAR(255),
    "email" VARCHAR(255) UNIQUE,
    "password" BIGINT,
    "add_product" VARCHAR(255),
    "users_data" TEXT
);

CREATE TABLE "Orders" (
    "order_id" BIGINT PRIMARY KEY,
    "user_location" VARCHAR(255) REFERENCES "Users"("location"),
    "is_received" BOOLEAN
);

CREATE TABLE "Users" (
    "user_id" SERIAL PRIMARY KEY,
    "first_name" VARCHAR(255),
    "last_name" VARCHAR(255),
    "email" VARCHAR(255) UNIQUE,
    "password" BIGINT,
    "order_id" BIGINT REFERENCES "Orders"("order_id"),
    "location" VARCHAR(255)
);
