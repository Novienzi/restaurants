CREATE TABLE "users" (
  "id" serial PRIMARY KEY NOT NULL,
  "fullname" varchar(36) NOT NULL,
  "username" varchar(36) UNIQUE NOT NULL,
  "password" varchar NOT NULL,
  "balance" real default 0,
  "created_at" timestamptz default CURRENT_TIMESTAMP,
  "updated_at" timestamptz default CURRENT_TIMESTAMP
);

CREATE TABLE "restaurants" (
  "id" serial PRIMARY KEY NOT NULL,
  "name" varchar(36) NOT NULL,
  "balance" real,
  "created_at" timestamptz default CURRENT_TIMESTAMP,
  "updated_at" timestamptz default CURRENT_TIMESTAMP
);

CREATE TABLE "menus" (
  "id" serial PRIMARY KEY NOT NULL,
  "dish_name" varchar NOT NULL,
  "price" real,
  "restaurant_id" int,
  "created_at" timestamptz default CURRENT_TIMESTAMP,
  "updated_at" timestamptz default CURRENT_TIMESTAMP
);

CREATE TABLE "schedules" (
  "id" serial PRIMARY KEY NOT NULL,
  "day" varchar,
  "opening_hours" time not null,
  "closing_hours" time not null,
  "restaurant_id" int,
  "created_at" timestamptz default CURRENT_TIMESTAMP,
  "updated_at" timestamptz default CURRENT_TIMESTAMP
);

CREATE TABLE "purchase_histories" (
  "id" serial PRIMARY KEY NOT NULL,
  "user_id" int,
  "menu_id" int,
  "amount" real,
  "qty" int,
  "created_at" timestamptz default CURRENT_TIMESTAMP,
  "updated_at" timestamptz
);

ALTER TABLE "schedules" ADD FOREIGN KEY ("restaurant_id") REFERENCES "restaurants" ("id");

ALTER TABLE "menus" ADD FOREIGN KEY ("restaurant_id") REFERENCES "restaurants" ("id");

ALTER TABLE "purchase_histories" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "purchase_histories" ADD FOREIGN KEY ("menu_id") REFERENCES "menus" ("id");