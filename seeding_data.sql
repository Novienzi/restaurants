insert into restaurants ("name", balance, created_at, updated_at)
values ('Ulu Ocean Grill and Sushi Lounge', 4483.84, now(), now()),
('024 Grille', 4882.81,now(), now()),
('100% Mexicano Restaurant', 1320.19, now(), now()),
('100% de Agave', 4629.91, now(), now()),
('12 Baltimore', 2614.96, now(), now()),
('12th Ave. Grill', 3478.03, now(), now()),
('13 Coins', 960.2, now(), now()),
('1515 Restaurant', 4841.8, now(), now()),
('5Fifty - Sheraton - Starwood', 3211.97, now(), now()),
('17 at The Sam Houston Hotel-Houston',  4260.93, now(), now());


insert into schedules (day, opening_hours, closing_hours, restaurant_id, created_at, updated_at)
values ('Fri', '14:30:00', '20:00:00' , 1, now(), now()),
('Tue', '11:00:00', '14:00:00' , 1, now(), now());


insert into menus (dish_name, price, restaurant_id, created_at, updated_at)
values ('Postum cereal coffee', 13.88, 1, now(), now()),
('GAI TOM KA: CHICKEN IN COCONUT CREAM SOUP WITH LIME JUICE GALANGA AND CHILI', 10.64, 1, now(), now()),
('Coffee Cocktail (Port Wine', 12.45, 1, now(), now()),
('La Romaine Braisée au Fond de Veau', 10.59, 1, now(), now()),
('DRY LIGHT IMPORTED WINE', 13.5, 1, now(), now()),
('Broiled Pompano', 13.5, 1, now(), now()),
('Dean Yale School of Medicine', 12.56, 1, now(), now()),
('Place here Stamp', 12.38, 1, now(), now()),
('1908 Berncasteler', 11.64, 1, now(), now()),
('Hummersuppe Filetsteak Nelson', 10.51, 1, now(), now()),
('Hominy', 10.2, 1, now(), now()),
('Baltimore terrapine', 14.0, 1, now(), now()),
('Lettuce and Tomato Salads', 11.79, 1, now(), now()),
('Sweet Virginia Pickles', 10.15, 1, now(), now()),
--resto 2
('Sweetbreads', 13.57, 2, now(), now()),
('Old pepper bourbon', 10.15, 2, now(), now()),
('Whiskey Cocktails', 10.25, 2, now(), now()),
('Filets de poularde', 11.15, 2, now(), now()),
('Baked Weakfish with Boiled Potatoes', 10.25, 2, now(), now()),
('Ox=tail Ragout with Vegetables', 10.35, 2, now(), now()),
('1952er Gau Algesheimer Stolzenberg natur', 12.34, 2, now(), now()),
('Caneton à lOrange', 11.09, 2, now(), now()),
('*COLD-Mayonnaise of Fish Printaniere', 12.0, 2, now(), now()),
('Rum & Raisin Ice Cream', 13.86, 2, now(), now()),
('Fried',10.25, 2, now(), now()),
('German potato salad', 10.1, 2, now(), now()),
--resto 3
('Chicken Bouillon with Rice (10 min.)', 13.95, 3, now(), now()),
('Frogs legs in every style', 11.95, 3, now(), now()),
('Komarinon', 12.81, 3, now(), now()),
('1Le Fromage Assortie', 12.13, 3, now(), now()),
('Frog legs saute', 11.0, 3, now(), now()),
('Broiled Redfish Steak', 10.1, 3, now(), now()),
('Filet of kingfish', 12.13, 3, now(), now()),
('Marinated Mackerel',13.3, 3, now(), now()),
('Beefsteak braise', 12.8, 3, now(), now()),
--rest0 4
('Fillet of Sole', 10.9, 4, now(), now()),
('Consomme Dame Blanche',10.3, 4, now(), now()),
('Fasan in Speck', 13.3, 4, now(), now()),
--resto 5
('Rasher of Bacon served with Broiled Meats', 12.93, 5, now(), now()),
('Ugnstekt Apple', 10.43, 5, now(), now()),
('small beefsteak with fried potatoes', 10.7, 5, now(), now()),
('Chateau Siran (Margaux) 1970',11.76, 5, now(), now()),
('Filtre', 11.17, 5, now(), now());



























