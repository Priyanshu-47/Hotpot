Use HotPotDataBase;

select * from States;

Insert into States(Name)
Values('Maharashtra'),
	  ('TamilNadu');

Select * From Cities;

Insert into Cities(Name, StateId)
Values('Shirdi',1),
('Pune',1),
('Chennai',2);

select * from Restaurants;

Insert into Restaurants(RestaurantName,Phone,Email,CityId,RestaurantImage)
Values('Swasitik','1122334455','swastik@mail.com',1,'swastik.jpg'),
('SaiMaya','2233445566','saimaya@gmail.com',1,'saimaya.jpg'),
('A2B','2211445566','a2b@gmail.com',3,'a2b.jpg'),
('Royal','6633445522','royal@gmail.com',2,'royal.jpg');

select * from NutritionalInfos;

Insert into NutritionalInfos(Calories,Fats,Proteins,Carbohydrates)
Values('7','30','25','2'),
('4','45','14','6'),
('7','20','28','4')

select * from Menus;

Insert into Menus(Name,Type,Price,Description,Cuisine,CookingTime,TasteInfo,ItemImage,NutritionId,RestaurantId)
Values('Veg-Biryani','Veg',10.99,'Delicious Biryani with veg Toppings','American','00:30:00','medium-spicy','Veg-Biryani.jpg',1,1),
('Pizza','Veg',8.99,'Thin Crust pizza with fresh Toppings','Italian','00:45:00','chezzy','pizza.jpg',2,1),
('Pasta','Non-Veg',16.99,'Handmade pasta with creamy sauce','American','00:25:00','sour','pasta.jpg',1,4),
('Pancakes','Veg',20,'Fluffu pancakes with maple syrup','American','00:30:00','soupy','pancakes.jpg',1,1),
('Dosa','Veg',15,'Yummy Dosa with veggies','South Indian','00:35:00','paper-type','Dosa.jpg',3,3),
('Waffles','Non-Veg',25,'Crispy waffles with whipped cream','South Indian','00:20:00','creamy','waffle.jpg',3,3),
('Chocolate Sundae','Veg',10,'Rich Chocolate Ice cream','American','00:05:00','Chilled','sundae.jpg',1,2),
('Strawberry','Veg',12,'Creamy strawberry icecream','American','00:05:00','strawberry','strawberry.jpg',2,2),
('Pav-Bhaji','Veg',30,'Delicious Bhaji with Pav','Punjabi','00:40:00','Spicy','pavbhaji.jpg',2,1);

select * from RestaurantSpecialities;

Insert into RestaurantSpecialities(RestaurantId, CategoryName, CategoryImage)
Values(1, 'Indian','/'),
(1, 'Italian','/'),
(4, 'Biryani','/'),
(1, 'Indian','/'),
(3, 'Indian','/'),
(3, 'Punjabi','/'),
(2, 'American','/'),
(2, 'South Indian','/'),
(1, 'Indian','/')

select * from Customers;

select * from Users;

select * from CustomerAddresses;