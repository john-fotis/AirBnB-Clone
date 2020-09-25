/*------------------ Roles --------------------*/
INSERT INTO airbnb.roles(id,name) VALUES(1,'ROLE_ADMIN');
INSERT INTO airbnb.roles(id,name) VALUES(2,'ROLE_HOST');
INSERT INTO airbnb.roles(id,name) VALUES(3,'ROLE_GUEST');

/*------------------ Users --------------------*/

INSERT INTO `airbnb`.`user`
(
`user_id`,
`email`,
`first_name`,
`last_name`,
`password`,
`username`,
`number`,
`user_since`,
`approved`)
VALUES
(1,
"admin@airbnb.test",
"Admin",
"",
"$2a$10$YHVRGOscVYeMbIjkf5qRg.lYqB43jrIh1baf2SyeI5K3DfL8Mvj4G",
"admin",
"6987939000",
NOW(),
null);

INSERT INTO `airbnb`.`user_roles` (`user_id`,`role_id`)
VALUES (1,1);

INSERT INTO `airbnb`.`user`
(
`user_id`,
`email`,
`first_name`,
`last_name`,
`password`,
`username`,
`number`,
`user_since`,
`approved`)
VALUES
(2,
"petros@airbnb.test",
"Petros",
"Bakolas",
"$2a$10$YHVRGOscVYeMbIjkf5qRg.lYqB43jrIh1baf2SyeI5K3DfL8Mvj4G",
"petros",
"6988654120",
NOW(),
true);

INSERT INTO `airbnb`.`user_roles` (`user_id`,`role_id`)
VALUES (2,2);

INSERT INTO `airbnb`.`user`
(
`user_id`,
`email`,
`first_name`,
`last_name`,
`password`,
`username`,
`number`,
`user_since`,
`approved`)
VALUES
(3,
"giannis@airbnb.test",
"Giannis",
"Fotis",
"$2a$10$YHVRGOscVYeMbIjkf5qRg.lYqB43jrIh1baf2SyeI5K3DfL8Mvj4G",
"giannis",
"6990564871",
NOW(),
null);

INSERT INTO `airbnb`.`user_roles` (`user_id`,`role_id`)
VALUES (3,3);

INSERT INTO `airbnb`.`user`
(
`user_id`,
`email`,
`first_name`,
`last_name`,
`password`,
`username`,
`number`,
`user_since`,
`approved`)
VALUES
(4,
"giovani@airbnb.test",
"Giovani",
"Ratouri",
"$2a$10$YHVRGOscVYeMbIjkf5qRg.lYqB43jrIh1baf2SyeI5K3DfL8Mvj4G",
"giovani",
"6998451220",
NOW(),
false);

INSERT INTO `airbnb`.`user_roles` (`user_id`,`role_id`)
VALUES(4,2);
INSERT INTO `airbnb`.`user_roles` (`user_id`,`role_id`)
VALUES(4,3);

INSERT INTO `airbnb`.`user`
(
`user_id`,
`email`,
`first_name`,
`last_name`,
`password`,
`username`,
`number`,
`user_since`,
`approved`)
VALUES
(5,
"giorgos@airbnb.test",
"Giorgos",
"Karamanos",
"$2a$10$YHVRGOscVYeMbIjkf5qRg.lYqB43jrIh1baf2SyeI5K3DfL8Mvj4G",
"giorgos",
"6988574635",
NOW(),
true);

INSERT INTO `airbnb`.`user_roles` (`user_id`,`role_id`)
VALUES (5,2);

INSERT INTO `airbnb`.`user`
(
`user_id`,
`email`,
`first_name`,
`last_name`,
`password`,
`username`,
`number`,
`user_since`,
`approved`)
VALUES
(6,
"mixalis@airbnb.test",
"Mixalis",
"Papageorgioy",
"$2a$10$YHVRGOscVYeMbIjkf5qRg.lYqB43jrIh1baf2SyeI5K3DfL8Mvj4G",
"mixalis",
"6987564738",
NOW(),
false);

INSERT INTO `airbnb`.`user_roles` (`user_id`,`role_id`)
VALUES (6,2);

INSERT INTO `airbnb`.`user`
(
`user_id`,
`email`,
`first_name`,
`last_name`,
`password`,
`username`,
`number`,
`user_since`,
`approved`)
VALUES
(7,
"kostas@airbnb.test",
"Κώστας",
"Σουλιώτης",
"$2a$10$YHVRGOscVYeMbIjkf5qRg.lYqB43jrIh1baf2SyeI5K3DfL8Mvj4G",
"kostas",
"6987564730",
NOW(),
null);

INSERT INTO `airbnb`.`user_roles` (`user_id`,`role_id`)
VALUES (7,3);

INSERT INTO `airbnb`.`user`
(
`user_id`,
`email`,
`first_name`,
`last_name`,
`password`,
`username`,
`number`,
`user_since`,
`approved`)
VALUES
(8,
"dimitris@airbnb.test",
"Δημήτρης",
"Καραμανλής",
"$2a$10$YHVRGOscVYeMbIjkf5qRg.lYqB43jrIh1baf2SyeI5K3DfL8Mvj4G",
"dimitris",
"6985712098",
NOW(),
null);

INSERT INTO `airbnb`.`user_roles` (`user_id`,`role_id`)
VALUES (8,3);

INSERT INTO `airbnb`.`user`
(
`user_id`,
`email`,
`first_name`,
`last_name`,
`password`,
`username`,
`number`,
`user_since`,
`approved`)
VALUES
(9,
"anestis@airbnb.test",
"Anestis",
"Triantafilou",
"$2a$10$YHVRGOscVYeMbIjkf5qRg.lYqB43jrIh1baf2SyeI5K3DfL8Mvj4G",
"anestis",
"6932685740",
NOW(),
null);

INSERT INTO `airbnb`.`user_roles` (`user_id`,`role_id`)
VALUES (9,3);

INSERT INTO `airbnb`.`user`
(
`user_id`,
`email`,
`first_name`,
`last_name`,
`password`,
`username`,
`number`,
`user_since`,
`approved`)
VALUES
(10,
"giorgio@airbnb.test",
"Giorgio",
"Gutten",
"$2a$10$YHVRGOscVYeMbIjkf5qRg.lYqB43jrIh1baf2SyeI5K3DfL8Mvj4G",
"giorgio",
"699584736",
NOW(),
true);

INSERT INTO `airbnb`.`user_roles` (`user_id`,`role_id`)
VALUES(10,2);
INSERT INTO `airbnb`.`user_roles` (`user_id`,`role_id`)
VALUES(10,3);

INSERT INTO `airbnb`.`user`
(
`user_id`,
`email`,
`first_name`,
`last_name`,
`password`,
`username`,
`number`,
`user_since`,
`approved`)
VALUES
(11,
"mpampis@airbnb.test",
"Mpampis",
"Deloglou",
"$2a$10$YHVRGOscVYeMbIjkf5qRg.lYqB43jrIh1baf2SyeI5K3DfL8Mvj4G",
"mpampis",
"6990564471",
NOW(),
false);

INSERT INTO `airbnb`.`user_roles` (`user_id`,`role_id`)
VALUES (11,2);

INSERT INTO `airbnb`.`user`
(
`user_id`,
`email`,
`first_name`,
`last_name`,
`password`,
`username`,
`number`,
`user_since`,
`approved`)
VALUES
(12,
"katerina@airbnb.test",
"Katerina",
"Papadopoulou",
"$2a$10$YHVRGOscVYeMbIjkf5qRg.lYqB43jrIh1baf2SyeI5K3DfL8Mvj4G",
"katerina",
"6933564871",
NOW(),
true);

INSERT INTO `airbnb`.`user_roles` (`user_id`,`role_id`)
VALUES (12,2);

INSERT INTO `airbnb`.`user`
(
`user_id`,
`email`,
`first_name`,
`last_name`,
`password`,
`username`,
`number`,
`user_since`,
`approved`)
VALUES
(13,
"maria@airbnb.test",
"Maria",
"Ioannou",
"$2a$10$YHVRGOscVYeMbIjkf5qRg.lYqB43jrIh1baf2SyeI5K3DfL8Mvj4G",
"maria",
"6990564571",
NOW(),
null);

INSERT INTO `airbnb`.`user_roles` (`user_id`,`role_id`)
VALUES (13,3);

INSERT INTO `airbnb`.`user`
(
`user_id`,
`email`,
`first_name`,
`last_name`,
`password`,
`username`,
`number`,
`user_since`,
`approved`)
VALUES
(14,
"ioanna@airbnb.test",
"Ioanna",
"Xaniwth",
"$2a$10$YHVRGOscVYeMbIjkf5qRg.lYqB43jrIh1baf2SyeI5K3DfL8Mvj4G",
"ioanna",
"6997364871",
NOW(),
null);

INSERT INTO `airbnb`.`user_roles` (`user_id`,`role_id`)
VALUES (14,3);

INSERT INTO `airbnb`.`user`
(
`user_id`,
`email`,
`first_name`,
`last_name`,
`password`,
`username`,
`number`,
`user_since`,
`approved`)
VALUES
(15,
"eugenia@airbnb.test",
"Eugenia",
"Krhtikou",
"$2a$10$YHVRGOscVYeMbIjkf5qRg.lYqB43jrIh1baf2SyeI5K3DfL8Mvj4G",
"eugenia",
"6990004871",
NOW(),
true);

INSERT INTO `airbnb`.`user_roles` (`user_id`,`role_id`)
VALUES (15,2);
INSERT INTO `airbnb`.`user_roles` (`user_id`,`role_id`)
VALUES (15,3);

/*------------------ Listings --------------------*/

INSERT INTO `airbnb`.`listing`
(
`listing_id`,
`title`,
`type`,
`num_of_beds`,
`num_of_wc`,
`num_of_rooms`,
`living_room`,
`square_footage`,
`description`,
`smoking`,
`animals`,
`parties`,
`min_rent_days`,
`max_guests`,
`latitude`,
`longitude`,
`address`,
`country`,
`city`,
`postal_code`,
`neighborhood`,
`transportation`,
`min_cost`,
`cost_per_extra_guest`,
`wifi`,
`ac`,
`heating`,
`kitchen`,
`tv`,
`parking`,
`elevator`,
`start_date`,
`end_date`,
`num_of_reviews`,
`average_rating`,
`user_id`)
VALUES
(
1,
"Room for two in Santorini",
"PRIVATE_ROOM",
1,
1,
1,
1,
40.3,
"Very large with open space and view to the caldera",
0,
1,
1,
2,
3,
36.419255,
25.432139,
"-",
"Greece",
"Santorini",
"84700",
"Thira",
"Bus stop 100m from the apartment",
68.5,
30.2,
1,
1,
0,
1,
1,
1,
0,
"2020-01-18",
"2020-10-20",
1,
4.0,
2
);

INSERT INTO `airbnb`.`listing`
(
`listing_id`,
`title`,
`type`,
`num_of_beds`,
`num_of_wc`,
`num_of_rooms`,
`living_room`,
`square_footage`,
`description`,
`smoking`,
`animals`,
`parties`,
`min_rent_days`,
`max_guests`,
`latitude`,
`longitude`,
`address`,
`country`,
`city`,
`postal_code`,
`neighborhood`,
`transportation`,
`min_cost`,
`cost_per_extra_guest`,
`wifi`,
`ac`,
`heating`,
`kitchen`,
`tv`,
`parking`,
`elevator`,
`start_date`,
`end_date`,
`num_of_reviews`,
`average_rating`,
`user_id`)
VALUES
(
2,
"Room for one in Santorini",
"SHARED_ROOM",
1,
1,
1,
1,
50.3,
"Very large with open space and view to the caldera",
0,
1,
1,
1,
1,
36.417400,
25.435035,
"-",
"Greece",
"Santorini",
"84700",
"Thira",
"Bus stop 100m from the apartment",
48.5,
0,
1,
1,
0,
1,
1,
1,
0,
"2020-01-18",
"2020-10-20",
1,
3.0,
2
);

INSERT INTO `airbnb`.`listing`
(
`listing_id`,
`title`,
`type`,
`num_of_beds`,
`num_of_wc`,
`num_of_rooms`,
`living_room`,
`square_footage`,
`description`,
`smoking`,
`animals`,
`parties`,
`min_rent_days`,
`max_guests`,
`latitude`,
`longitude`,
`address`,
`country`,
`city`,
`postal_code`,
`neighborhood`,
`transportation`,
`min_cost`,
`cost_per_extra_guest`,
`wifi`,
`ac`,
`heating`,
`kitchen`,
`tv`,
`parking`,
`elevator`,
`start_date`,
`end_date`,
`num_of_reviews`,
`average_rating`,
`user_id`)
VALUES
(
3,
"Apartment for 3 in Kithira",
"FULL_APARTMENT",
3,
2,
2,
1,
60.48,
"Perfect for 3 guests near the center",
1,
1,
1,
1,
4,
36.411290,
25.447246,
"-",
"Greece",
"Santorini",
"84700",
"Karterados",
"Center with taxi and bus 500m away",
40.5,
20.2,
1,
1,
1,
1,
1,
1,
1,
"2020-01-01",
"2020-12-30",
0,
0.0,
5
);

INSERT INTO `airbnb`.`listing`
(
`listing_id`,
`title`,
`type`,
`num_of_beds`,
`num_of_wc`,
`num_of_rooms`,
`living_room`,
`square_footage`,
`description`,
`smoking`,
`animals`,
`parties`,
`min_rent_days`,
`max_guests`,
`latitude`,
`longitude`,
`address`,
`country`,
`city`,
`postal_code`,
`neighborhood`,
`transportation`,
`min_cost`,
`cost_per_extra_guest`,
`wifi`,
`ac`,
`heating`,
`kitchen`,
`tv`,
`parking`,
`elevator`,
`start_date`,
`end_date`,
`num_of_reviews`,
`average_rating`,
`user_id`)
VALUES
(
4,
"Private room in Santorini with parking",
"PRIVATE_ROOM",
2,
2,
2,
1,
80.48,
"Perfect for 4 guests with a lot of room for cars and activities",
1,
1,
1,
1,
4,
36.411886,
25.452948,
"-",
"Greece",
"Santorini",
"84700",
"Karterados",
"Bus stop close and renting cars near by",
80.5,
30.2,
1,
1,
1,
1,
1,
1,
1,
"2020-01-01",
"2020-12-30",
1,
5.0,
2
);

INSERT INTO `airbnb`.`listing`
(
`listing_id`,
`title`,
`type`,
`num_of_beds`,
`num_of_wc`,
`num_of_rooms`,
`living_room`,
`square_footage`,
`description`,
`smoking`,
`animals`,
`parties`,
`min_rent_days`,
`max_guests`,
`latitude`,
`longitude`,
`address`,
`country`,
`city`,
`postal_code`,
`neighborhood`,
`transportation`,
`min_cost`,
`cost_per_extra_guest`,
`wifi`,
`ac`,
`heating`,
`kitchen`,
`tv`,
`parking`,
`elevator`,
`start_date`,
`end_date`,
`num_of_reviews`,
`average_rating`,
`user_id`)
VALUES
(
5,
"Very big apartment at the center of Thira",
"FULL_APARTMENT",
4,
1,
3,
1,
83.48,
"Ideally located a unique house in a very peaceful neighborhood of Thira, at the center. It is a traditional house in the heart of the historical center. ",
0,
1,
0,
2,
5,
36.375470,
25.482676,
"-",
"Greece",
"Santorini",
"84700",
"Kamari",
"Bus stop close and renting cars near by",
30.5,
15.2,
1,
1,
0,
1,
1,
1,
0,
"2020-01-01",
"2020-12-30",
1,
1.0,
2
);

INSERT INTO `airbnb`.`listing`
(
`listing_id`,
`title`,
`type`,
`num_of_beds`,
`num_of_wc`,
`num_of_rooms`,
`living_room`,
`square_footage`,
`description`,
`smoking`,
`animals`,
`parties`,
`min_rent_days`,
`max_guests`,
`latitude`,
`longitude`,
`address`,
`country`,
`city`,
`postal_code`,
`neighborhood`,
`transportation`,
`min_cost`,
`cost_per_extra_guest`,
`wifi`,
`ac`,
`heating`,
`kitchen`,
`tv`,
`parking`,
`elevator`,
`start_date`,
`end_date`,
`num_of_reviews`,
`average_rating`,
`user_id`)
VALUES
(
6,
"ATHENS DESIGNER''S LOFT DOWNTOWN ",
"PRIVATE_ROOM",
2,
1,
1,
0,
23.48,
"Designer's down town loft, constructed by an architect, more than once published in architectural magazines (like ''House & Garden'', ''Maison & Decoration'', etc.). ",
1,
1,
0,
1,
2,
37.979523,
23.723668,
"Pallados 12",
"Greece",
"Athens",
"10554",
"Psyri",
"metro station MONASTIRAKI",
40.5,
16.2,
1,
1,
0,
0,
1,
0,
1,
"2020-01-01",
"2020-12-30",
0,
0.0,
5
);

INSERT INTO `airbnb`.`listing`
(
`listing_id`,
`title`,
`type`,
`num_of_beds`,
`num_of_wc`,
`num_of_rooms`,
`living_room`,
`square_footage`,
`description`,
`smoking`,
`animals`,
`parties`,
`min_rent_days`,
`max_guests`,
`latitude`,
`longitude`,
`address`,
`country`,
`city`,
`postal_code`,
`neighborhood`,
`transportation`,
`min_cost`,
`cost_per_extra_guest`,
`wifi`,
`ac`,
`heating`,
`kitchen`,
`tv`,
`parking`,
`elevator`,
`start_date`,
`end_date`,
`num_of_reviews`,
`average_rating`,
`user_id`)
VALUES
(
7,
"A 2-bdrm house in Plaka of Athens",
"PRIVATE_ROOM",
2,
1,
2,
1,
53.48,
"Ideally located a unique house in a very peaceful neighborhood of Plaka, near Acropolis. It is a traditional house in the heart of the historical center of Athens, in Plaka. ",
1,
1,
1,
1,
3,
37.969470,
23.729083,
"Vyronos 22",
"Greece",
"Athens",
"10558",
"Plaka",
"-",
50.5,
26.2,
1,
1,
1,
0,
1,
0,
1,
"2020-01-01",
"2020-12-30",
2,
4.0,
5
);

INSERT INTO `airbnb`.`listing`
(
`listing_id`,
`title`,
`type`,
`num_of_beds`,
`num_of_wc`,
`num_of_rooms`,
`living_room`,
`square_footage`,
`description`,
`smoking`,
`animals`,
`parties`,
`min_rent_days`,
`max_guests`,
`latitude`,
`longitude`,
`address`,
`country`,
`city`,
`postal_code`,
`neighborhood`,
`transportation`,
`min_cost`,
`cost_per_extra_guest`,
`wifi`,
`ac`,
`heating`,
`kitchen`,
`tv`,
`parking`,
`elevator`,
`start_date`,
`end_date`,
`num_of_reviews`,
`average_rating`,
`user_id`)
VALUES
(
8,
"Just 200m from Acropolis, Athens",
"SHARED_ROOM",
1,
1,
1,
0,
13.48,
"Sunny & Quiet room at the first floor in a beauty full building. Just 100 meters from Acropolis & 30 meters from the Acropolis Musuem. Bedroom with double futon bed, a kitchen, wireless internet, landline and a confortable bathroom.",
1,
0,
0,
1,
1,
37.968869,
23.728969,
"Chatzichristou 218",
"Greece",
"Athens",
"11742",
"Akropoli",
"-",
30.5,
0.0,
1,
1,
0,
0,
0,
0,
1,
"2020-01-01",
"2020-12-30",
0,
0.0,
5
);

INSERT INTO `airbnb`.`listing`
(
`listing_id`,
`title`,
`type`,
`num_of_beds`,
`num_of_wc`,
`num_of_rooms`,
`living_room`,
`square_footage`,
`description`,
`smoking`,
`animals`,
`parties`,
`min_rent_days`,
`max_guests`,
`latitude`,
`longitude`,
`address`,
`country`,
`city`,
`postal_code`,
`neighborhood`,
`transportation`,
`min_cost`,
`cost_per_extra_guest`,
`wifi`,
`ac`,
`heating`,
`kitchen`,
`tv`,
`parking`,
`elevator`,
`start_date`,
`end_date`,
`num_of_reviews`,
`average_rating`,
`user_id`)
VALUES
(
9,
"Center of Athens (Akropoli)",
"FULL_APARTMENT",
2,
1,
1,
1,
48.96,
"A comfortable appartment very close to the center ( monastiraki, thisio , akropoli, kerameiko, plaka) , metro station kerameikos (blue line) and train station petralona (green line) Very close to the Center, two foltable bikes, washing machine, oven , fridge, king size bed, balcony, close to super market, kafe - bar LOLA. You can host a third person without charges We have to bikes which you are allowed to use!!!",
1,
1,
1,
1,
3,
37.973318,
23.711678,
"Thessalonikis 18",
"Greece",
"Athens",
"11854",
"Petralona",
"1.Metro station KERAMEIKOS(blue line ) 8 minutes , 650 metres 2. Train station PETRALONA ( green line ) 9 minutes 750 metres 3. Bike  4. Walk to center 20 minutes  1,6 km",
40.5,
26.0,
1,
1,
1,
1,
1,
1,
1,
"2020-01-01",
"2020-12-30",
0,
0.0,
10
);

INSERT INTO `airbnb`.`listing`
(
`listing_id`,
`title`,
`type`,
`num_of_beds`,
`num_of_wc`,
`num_of_rooms`,
`living_room`,
`square_footage`,
`description`,
`smoking`,
`animals`,
`parties`,
`min_rent_days`,
`max_guests`,
`latitude`,
`longitude`,
`address`,
`country`,
`city`,
`postal_code`,
`neighborhood`,
`transportation`,
`min_cost`,
`cost_per_extra_guest`,
`wifi`,
`ac`,
`heating`,
`kitchen`,
`tv`,
`parking`,
`elevator`,
`start_date`,
`end_date`,
`num_of_reviews`,
`average_rating`,
`user_id`)
VALUES
(
10,
"Great apt! amazing Athens location!",
"FULL_APARTMENT",
2,
1,
1,
1,
49.96,
"Great apt newly renovated but with an old world charm, fully furnished and equipped,  with the feel of HOME because it is my home when I am in Athens. Quiet neighborhood, the greenest of central Athens.  Walking distance from Athens center (Syntagma sq. Kolonaki, all Museums and Acropolis) and with lots of quick public transportation.",
1,
1,
1,
1,
3,
37.965430,
23.740246,
"Anthippou 54",
"Greece",
"Athens",
"11636",
"1Ο ΝΕΚΡΟΤΑΦΕΙΟ",
"Very convenient public transportation (4 trolley lines and 3 buses)  and a taxi stand  One can walk to many places of interest (Acropolis and most Museums)",
41.5,
28.0,
1,
1,
1,
1,
1,
1,
1,
"2019-01-01",
"2020-12-30",
0,
0.0,
10
);

INSERT INTO `airbnb`.`listing`
(
`listing_id`,
`title`,
`type`,
`num_of_beds`,
`num_of_wc`,
`num_of_rooms`,
`living_room`,
`square_footage`,
`description`,
`smoking`,
`animals`,
`parties`,
`min_rent_days`,
`max_guests`,
`latitude`,
`longitude`,
`address`,
`country`,
`city`,
`postal_code`,
`neighborhood`,
`transportation`,
`min_cost`,
`cost_per_extra_guest`,
`wifi`,
`ac`,
`heating`,
`kitchen`,
`tv`,
`parking`,
`elevator`,
`start_date`,
`end_date`,
`num_of_reviews`,
`average_rating`,
`user_id`)
VALUES
(
11,
"NEW luxury flat 80m from metro 3brs",
"PRIVATE_ROOM",
2,
1,
1,
0,
59.5,
"Newly renovated, easy access to the center of athens",
0,
1,
1,
1,
2,
37.965430,
23.740228,
"Georgiou Maridaki",
"Greece",
"Athens",
"11143",
"Patisia",
"Train stop closeby",
60.5,
33.2,
1,
1,
0,
1,
1,
1,
0,
"2019-03-18",
"2020-11-21",
2,
2.0,
12
);

INSERT INTO `airbnb`.`listing`
(
`listing_id`,
`title`,
`type`,
`num_of_beds`,
`num_of_wc`,
`num_of_rooms`,
`living_room`,
`square_footage`,
`description`,
`smoking`,
`animals`,
`parties`,
`min_rent_days`,
`max_guests`,
`latitude`,
`longitude`,
`address`,
`country`,
`city`,
`postal_code`,
`neighborhood`,
`transportation`,
`min_cost`,
`cost_per_extra_guest`,
`wifi`,
`ac`,
`heating`,
`kitchen`,
`tv`,
`parking`,
`elevator`,
`start_date`,
`end_date`,
`num_of_reviews`,
`average_rating`,
`user_id`)
VALUES
(
12,
"City Center flat at Metro Station",
"SHARED_ROOM",
3,
1,
1,
1,
59.5,
"Cozy place, with various options for activities during your stay",
0,
1,
1,
2,
3,
37.965430,
23.740148,
"Psarwn 21",
"Greece",
"Athens",
"11143",
"Metaxourgeio",
"Metro station at 150m",
45.5,
30.2,
1,
1,
0,
1,
1,
1,
0,
"2020-07-18",
"2020-12-21",
3,
4.0,
12
);

INSERT INTO `airbnb`.`listing`
(
`listing_id`,
`title`,
`type`,
`num_of_beds`,
`num_of_wc`,
`num_of_rooms`,
`living_room`,
`square_footage`,
`description`,
`smoking`,
`animals`,
`parties`,
`min_rent_days`,
`max_guests`,
`latitude`,
`longitude`,
`address`,
`country`,
`city`,
`postal_code`,
`neighborhood`,
`transportation`,
`min_cost`,
`cost_per_extra_guest`,
`wifi`,
`ac`,
`heating`,
`kitchen`,
`tv`,
`parking`,
`elevator`,
`start_date`,
`end_date`,
`num_of_reviews`,
`average_rating`,
`user_id`)
VALUES
(
13,
"Beautiful central flat with veranda",
"SHARED_ROOM",
3,
1,
3,
1,
54.5,
"Modern space with great view",
0,
1,
1,
2,
3,
37.965440,
23.740248,
"Granikou 47",
"Greece",
"Athens",
"10435",
"Larissis",
"Taxi and Tram at 100m",
65.5,
50.2,
1,
1,
0,
1,
1,
1,
0,
"2020-04-18",
"2021-02-01",
2,
3.0,
15
);

INSERT INTO `airbnb`.`listing`
(
`listing_id`,
`title`,
`type`,
`num_of_beds`,
`num_of_wc`,
`num_of_rooms`,
`living_room`,
`square_footage`,
`description`,
`smoking`,
`animals`,
`parties`,
`min_rent_days`,
`max_guests`,
`latitude`,
`longitude`,
`address`,
`country`,
`city`,
`postal_code`,
`neighborhood`,
`transportation`,
`min_cost`,
`cost_per_extra_guest`,
`wifi`,
`ac`,
`heating`,
`kitchen`,
`tv`,
`parking`,
`elevator`,
`start_date`,
`end_date`,
`num_of_reviews`,
`average_rating`,
`user_id`)
VALUES
(
14,
"Sunny Penthouse in heart of Athens",
"FULL_APARTMENT",
4,
2,
3,
1,
94.5,
"Very large space",
0,
1,
1,
2,
5,
37.965433,
23.740248,
"Iasonos 17",
"Greece",
"Athens",
"10436",
"Larissis",
"Tram, bus and metro options",
55.5,
49.2,
1,
1,
0,
1,
1,
1,
0,
"2020-04-18",
"2021-02-01",
3,
4.67,
15
);

INSERT INTO `airbnb`.`listing`
(
`listing_id`,
`title`,
`type`,
`num_of_beds`,
`num_of_wc`,
`num_of_rooms`,
`living_room`,
`square_footage`,
`description`,
`smoking`,
`animals`,
`parties`,
`min_rent_days`,
`max_guests`,
`latitude`,
`longitude`,
`address`,
`country`,
`city`,
`postal_code`,
`neighborhood`,
`transportation`,
`min_cost`,
`cost_per_extra_guest`,
`wifi`,
`ac`,
`heating`,
`kitchen`,
`tv`,
`parking`,
`elevator`,
`start_date`,
`end_date`,
`num_of_reviews`,
`average_rating`,
`user_id`)
VALUES
(
15,
"Studio near Plato's Academy",
"PRIVATE_ROOM",
2,
1,
2,
1,
44.5,
"Modern place, ideal for young travellers",
0,
1,
0,
2,
2,
37.965430,
23.740248,
"Argous 36",
"Greece",
"Athens",
"10441",
"Larissis",
"Next to metro station",
45.5,
32.2,
1,
1,
0,
1,
1,
1,
0,
"2020-04-18",
"2021-03-11",
2,
3.5,
12
);

/*------------------ Bookings --------------------*/

INSERT INTO `airbnb`.`booking`
(
`booking_id`,
`date`,
`listing_id`,
`user_id`)
VALUES
(
1,
"2020-11-25",
1,
3);
INSERT INTO `airbnb`.`booking`
(
`booking_id`,
`date`,
`listing_id`,
`user_id`)
VALUES
(
2,
"2020-11-26",
1,
3);
INSERT INTO `airbnb`.`booking`
(
`booking_id`,
`date`,
`listing_id`,
`user_id`)
VALUES
(
3,
"2020-11-27",
1,
3);

INSERT INTO `airbnb`.`booking`
(
`booking_id`,
`date`,
`listing_id`,
`user_id`)
VALUES
(
4,
"2020-11-28",
2,
4);

INSERT INTO `airbnb`.`booking`
(
`booking_id`,
`date`,
`listing_id`,
`user_id`)
VALUES
(
5,
"2020-12-27",
3,
3);

INSERT INTO `airbnb`.`booking`
(
`booking_id`,
`date`,
`listing_id`,
`user_id`)
VALUES
(
6,
"2020-12-25",
4,
7);
INSERT INTO `airbnb`.`booking`
(
`booking_id`,
`date`,
`listing_id`,
`user_id`)
VALUES
(
7,
"2020-12-26",
4,
7);

INSERT INTO `airbnb`.`booking`
(
`booking_id`,
`date`,
`listing_id`,
`user_id`)
VALUES
(
8,
"2020-08-26",
5,
7);

INSERT INTO `airbnb`.`booking`
(
`booking_id`,
`date`,
`listing_id`,
`user_id`)
VALUES
(
9,
"2020-07-27",
4,
8);

INSERT INTO `airbnb`.`booking`
(
`booking_id`,
`date`,
`listing_id`,
`user_id`)
VALUES
(
10,
"2020-07-27",
6,
8);
INSERT INTO `airbnb`.`booking`
(
`booking_id`,
`date`,
`listing_id`,
`user_id`)
VALUES
(
11,
"2020-07-28",
6,
8);
INSERT INTO `airbnb`.`booking`
(
`booking_id`,
`date`,
`listing_id`,
`user_id`)
VALUES
(
12,
"2020-07-29",
6,
8);
INSERT INTO `airbnb`.`booking`
(
`booking_id`,
`date`,
`listing_id`,
`user_id`)
VALUES
(
13,
"2020-07-30",
6,
8);

INSERT INTO `airbnb`.`booking`
(
`booking_id`,
`date`,
`listing_id`,
`user_id`)
VALUES
(
14,
"2020-11-14",
7,
8);
INSERT INTO `airbnb`.`booking`
(
`booking_id`,
`date`,
`listing_id`,
`user_id`)
VALUES
(
15,
"2020-11-15",
7,
8);

INSERT INTO `airbnb`.`booking`
(
`booking_id`,
`date`,
`listing_id`,
`user_id`)
VALUES
(
16,
"2020-12-14",
9,
9);
INSERT INTO `airbnb`.`booking`
(
`booking_id`,
`date`,
`listing_id`,
`user_id`)
VALUES
(
17,
"2020-12-15",
9,
9);
INSERT INTO `airbnb`.`booking`
(
`booking_id`,
`date`,
`listing_id`,
`user_id`)
VALUES
(
18,
"2020-12-16",
9,
9);

INSERT INTO `airbnb`.`booking`
(
`booking_id`,
`date`,
`listing_id`,
`user_id`)
VALUES
(
19,
"2021-01-14",
10,
9);

INSERT INTO `airbnb`.`booking`
(
`booking_id`,
`date`,
`listing_id`,
`user_id`)
VALUES
(
20,
"2021-01-15",
10,
9);

INSERT INTO `airbnb`.`booking`
(
`booking_id`,
`date`,
`listing_id`,
`user_id`)
VALUES
(
21,
"2020-10-15",
11,
13);

INSERT INTO `airbnb`.`booking`
(
`booking_id`,
`date`,
`listing_id`,
`user_id`)
VALUES
(
22,
"2020-10-17",
12,
13);

INSERT INTO `airbnb`.`booking`
(
`booking_id`,
`date`,
`listing_id`,
`user_id`)
VALUES
(
23,
"2020-10-20",
13,
13);

INSERT INTO `airbnb`.`booking`
(
`booking_id`,
`date`,
`listing_id`,
`user_id`)
VALUES
(
24,
"2020-11-17",
14,
13);

INSERT INTO `airbnb`.`booking`
(
`booking_id`,
`date`,
`listing_id`,
`user_id`)
VALUES
(
25,
"2020-12-17",
15,
13);

INSERT INTO `airbnb`.`booking`
(
`booking_id`,
`date`,
`listing_id`,
`user_id`)
VALUES
(
26,
"2020-12-18",
12,
14);

INSERT INTO `airbnb`.`booking`
(
`booking_id`,
`date`,
`listing_id`,
`user_id`)
VALUES
(
27,
"2020-11-07",
13,
14);

INSERT INTO `airbnb`.`booking`
(
`booking_id`,
`date`,
`listing_id`,
`user_id`)
VALUES
(
28,
"2020-12-09",
14,
14);

INSERT INTO `airbnb`.`booking`
(
`booking_id`,
`date`,
`listing_id`,
`user_id`)
VALUES
(
29,
"2020-10-17",
15,
14);

INSERT INTO `airbnb`.`booking`
(
`booking_id`,
`date`,
`listing_id`,
`user_id`)
VALUES
(
30,
"2020-10-27",
11,
14);

/*------------------ Reviews --------------------*/

INSERT INTO `airbnb`.`review`
(
`review_id`,
`comment`,
`date`,
`rating`,
`listing_id`,
`user_id`)
VALUES
(
1,
"Τελειο ηταν",
"2020-11-27",
4,
1,
3);

INSERT INTO `airbnb`.`review`
(
`review_id`,
`comment`,
`date`,
`rating`,
`listing_id`,
`user_id`)
VALUES
(
2,
"Θεματακια υπηρχαν",
"2020-11-28",
3,
2,
4);

INSERT INTO `airbnb`.`review`
(
`review_id`,
`comment`,
`date`,
`rating`,
`listing_id`,
`user_id`)
VALUES
(
3,
"Το συνιστώ!",
"2020-12-26",
5,
4,
7);

INSERT INTO `airbnb`.`review`
(
`review_id`,
`comment`,
`date`,
`rating`,
`listing_id`,
`user_id`)
VALUES
(
4,
"Ηταν πολυ κακό",
"2020-08-26",
1,
5,
7);

INSERT INTO `airbnb`.`review`
(
`review_id`,
`comment`,
`date`,
`rating`,
`listing_id`,
`user_id`)
VALUES
(
5,
"Ηταν πολυ κακό",
"2020-08-26",
1,
5,
7);

INSERT INTO `airbnb`.`review`
(
`review_id`,
`comment`,
`date`,
`rating`,
`listing_id`,
`user_id`)
VALUES
(
6,
"Ηταν πολυ κακό",
"2020-12-26",
1,
11,
13);

INSERT INTO `airbnb`.`review`
(
`review_id`,
`comment`,
`date`,
`rating`,
`listing_id`,
`user_id`)
VALUES
(
7,
"Metria empeiria",
"2020-12-26",
3,
12,
13);

INSERT INTO `airbnb`.`review`
(
`review_id`,
`comment`,
`date`,
`rating`,
`listing_id`,
`user_id`)
VALUES
(
8,
"Arketa kalo",
"2020-12-26",
4,
13,
13);

INSERT INTO `airbnb`.`review`
(
`review_id`,
`comment`,
`date`,
`rating`,
`listing_id`,
`user_id`)
VALUES
(
9,
"Poly kalo, to sytino",
"2020-12-26",
5,
14,
13);

INSERT INTO `airbnb`.`review`
(
`review_id`,
`comment`,
`date`,
`rating`,
`listing_id`,
`user_id`)
VALUES
(
10,
"Tha ksanaphgaina",
"2020-12-28",
5,
14,
13);

INSERT INTO `airbnb`.`review`
(
`review_id`,
`comment`,
`date`,
`rating`,
`listing_id`,
`user_id`)
VALUES
(
11,
"Oxi kai toso katharo",
"2020-12-26",
2,
15,
13);

INSERT INTO `airbnb`.`review`
(
`review_id`,
`comment`,
`date`,
`rating`,
`listing_id`,
`user_id`)
VALUES
(
12,
"Arketa akrivo",
"2020-12-26",
3,
11,
14);

INSERT INTO `airbnb`.`review`
(
`review_id`,
`comment`,
`date`,
`rating`,
`listing_id`,
`user_id`)
VALUES
(
13,
"Poly orea empeiria",
"2020-12-26",
5,
12,
14);

INSERT INTO `airbnb`.`review`
(
`review_id`,
`comment`,
`date`,
`rating`,
`listing_id`,
`user_id`)
VALUES
(
14,
"Arketa kalo",
"2020-12-30",
4,
12,
14);

INSERT INTO `airbnb`.`review`
(
`review_id`,
`comment`,
`date`,
`rating`,
`listing_id`,
`user_id`)
VALUES
(
15,
"Den tha to ksanaekleina",
"2020-12-26",
2,
13,
14);

INSERT INTO `airbnb`.`review`
(
`review_id`,
`comment`,
`date`,
`rating`,
`listing_id`,
`user_id`)
VALUES
(
16,
"Emeina euxaristhmenh",
"2020-12-26",
4,
14,
14);

INSERT INTO `airbnb`.`review`
(
`review_id`,
`comment`,
`date`,
`rating`,
`listing_id`,
`user_id`)
VALUES
(
17,
"Poly eugenikoi idiokthtes kai katharo",
"2020-12-26",
5,
15,
14);

INSERT INTO `airbnb`.`review`
(
`review_id`,
`comment`,
`date`,
`rating`,
`listing_id`,
`user_id`)
VALUES
(
18,
"Kalh empeiria, to sytino",
"2020-12-26",
4,
7,
13);

INSERT INTO `airbnb`.`review`
(
`review_id`,
`comment`,
`date`,
`rating`,
`listing_id`,
`user_id`)
VALUES
(
19,
"Den tha sas apogohteusei",
"2020-12-26",
4,
7,
14);

/*------------------ Messages --------------------*/

INSERT INTO `airbnb`.`message`
(
`message_id`,
`seen`,
`way`,
`send_date`,
`text`,
`listing_id`,
`user_id`)
VALUES
(
1,
1,
0,
NOW(),
"Καλησπέρα σας",
1,
3);

INSERT INTO `airbnb`.`message`
(
`message_id`,
`seen`,
`way`,
`send_date`,
`text`,
`listing_id`,
`user_id`)
VALUES
(
2,
0,
1,
NOW(),
"Καλησπέρα και σε εσας",
1,
3);

INSERT INTO `airbnb`.`message`
(
`message_id`,
`seen`,
`way`,
`send_date`,
`text`,
`listing_id`,
`user_id`)
VALUES
(
3,
0,
0,
NOW(),
"Tha ithela na sas kano mia erotisi",
1,
3);

INSERT INTO `airbnb`.`message`
(
`message_id`,
`seen`,
`way`,
`send_date`,
`text`,
`listing_id`,
`user_id`)
VALUES
(
4,
0,
0,
NOW(),
"Sxetika me thn aggelia sas",
1,
3);

INSERT INTO `airbnb`.`message`
(
`message_id`,
`seen`,
`way`,
`send_date`,
`text`,
`listing_id`,
`user_id`)
VALUES
(
5,
0,
0,
NOW(),
"Gia to domatio sth santorini",
1,
3);

INSERT INTO `airbnb`.`message`
(
`message_id`,
`seen`,
`way`,
`send_date`,
`text`,
`listing_id`,
`user_id`)
VALUES
(
6,
0,
0,
NOW(),
"Kalhspera",
1,
13);

INSERT INTO `airbnb`.`message`
(
`message_id`,
`seen`,
`way`,
`send_date`,
`text`,
`listing_id`,
`user_id`)
VALUES
(
7,
0,
0,
NOW(),
"Poso konta einai to domatio se stash leoforeiou?",
1,
13);

INSERT INTO `airbnb`.`message`
(
`message_id`,
`seen`,
`way`,
`send_date`,
`text`,
`listing_id`,
`user_id`)
VALUES
(
8,
0,
0,
NOW(),
"Einai eukolh h prosvash?",
1,
13);

INSERT INTO `airbnb`.`message`
(
`message_id`,
`seen`,
`way`,
`send_date`,
`text`,
`listing_id`,
`user_id`)
VALUES
(
9,
0,
0,
NOW(),
"Yparxei dynatotha proinou?",
1,
13);

INSERT INTO `airbnb`.`message`
(
`message_id`,
`seen`,
`way`,
`send_date`,
`text`,
`listing_id`,
`user_id`)
VALUES
(
10,
0,
0,
NOW(),
"Ti ora tha einai etoimaparadoto to domatio th mera pou thelo na to noikiaso?",
1,
13);

INSERT INTO `airbnb`.`message`
(
`message_id`,
`seen`,
`way`,
`send_date`,
`text`,
`listing_id`,
`user_id`)
VALUES
(
11,
0,
0,
NOW(),
"Geia sas",
1,
14);

INSERT INTO `airbnb`.`message`
(
`message_id`,
`seen`,
`way`,
`send_date`,
`text`,
`listing_id`,
`user_id`)
VALUES
(
12,
0,
0,
NOW(),
"Yparxoun magazia konta sto diamerisma?",
1,
14);

INSERT INTO `airbnb`.`message`
(
`message_id`,
`seen`,
`way`,
`send_date`,
`text`,
`listing_id`,
`user_id`)
VALUES
(
13,
0,
0,
NOW(),
"kalhspera sas",
1,
8);

INSERT INTO `airbnb`.`message`
(
`message_id`,
`seen`,
`way`,
`send_date`,
`text`,
`listing_id`,
`user_id`)
VALUES
(
14,
0,
0,
NOW(),
"Exo mia aporia sxetika me thn aggelia sas",
1,
8);

INSERT INTO `airbnb`.`message`
(
`message_id`,
`seen`,
`way`,
`send_date`,
`text`,
`listing_id`,
`user_id`)
VALUES
(
15,
0,
0,
NOW(),
"Poso konta einai to domatio sthn paralia?",
1,
8);

INSERT INTO `airbnb`.`message`
(
`message_id`,
`seen`,
`way`,
`send_date`,
`text`,
`listing_id`,
`user_id`)
VALUES
(
16,
0,
0,
NOW(),
"Epishs, poies einai oi dinatothtes gia faghto konta?",
1,
8);

INSERT INTO `airbnb`.`message`
(
`message_id`,
`seen`,
`way`,
`send_date`,
`text`,
`listing_id`,
`user_id`)
VALUES
(
17,
0,
0,
NOW(),
"Euxaristw ek twn proterwn",
1,
8);


INSERT INTO `airbnb`.`message`
(
`message_id`,
`seen`,
`way`,
`send_date`,
`text`,
`listing_id`,
`user_id`)
VALUES
(
18,
0,
0,
NOW(),
"Thelo na sas rotisw 2 pragmata gia to dwmatio",
1,
9);

INSERT INTO `airbnb`.`message`
(
`message_id`,
`seen`,
`way`,
`send_date`,
`text`,
`listing_id`,
`user_id`)
VALUES
(
19,
0,
0,
NOW(),
"Pote tha mporousa na sas kaleso?",
1,
9);

INSERT INTO `airbnb`.`message`
(
`message_id`,
`seen`,
`way`,
`send_date`,
`text`,
`listing_id`,
`user_id`)
VALUES
(
20,
0,
0,
NOW(),
"Euxaristw",
1,
9);

INSERT INTO `airbnb`.`message`
(
`message_id`,
`seen`,
`way`,
`send_date`,
`text`,
`listing_id`,
`user_id`)
VALUES
(
21,
0,
0,
NOW(),
"Epishs, poies einai oi dinatothtes gia faghto konta?",
1,
14);

INSERT INTO `airbnb`.`message`
(
`message_id`,
`seen`,
`way`,
`send_date`,
`text`,
`listing_id`,
`user_id`)
VALUES
(
22,
0,
0,
NOW(),
"peite moy ti ora mporeite na sas kaleso",
1,
14);

INSERT INTO `airbnb`.`message`
(
`message_id`,
`seen`,
`way`,
`send_date`,
`text`,
`listing_id`,
`user_id`)
VALUES
(
23,
0,
0,
NOW(),
"Euxaristw poly",
1,
14);

INSERT INTO `airbnb`.`message`
(
`message_id`,
`seen`,
`way`,
`send_date`,
`text`,
`listing_id`,
`user_id`)
VALUES
(
24,
0,
0,
NOW(),
"Yparxei stash leoforeiou konta?",
1,
3);