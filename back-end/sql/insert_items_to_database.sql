# MUST RUN -- Insert roles
INSERT INTO airbnb.roles(name) VALUES('ROLE_ADMIN');
INSERT INTO airbnb.roles(name) VALUES('ROLE_HOST');
INSERT INTO airbnb.roles(name) VALUES('ROLE_GUEST');


# ---------------------------------------------------------------- #
# Add Users
INSERT INTO `airbnb`.`user`
(
`user_id`,
`email`,
`first_name`,
`last_name`,
`password`,
`username`,
`number`,
`user_since`)
VALUES
(1,
"admin@airbnb.test",
"Admin",
"",
"$2a$10$YHVRGOscVYeMbIjkf5qRg.lYqB43jrIh1baf2SyeI5K3DfL8Mvj4G",
"admin",
"6987939000",
NOW());

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
`user_since`)
VALUES
(2,
"petros@airbnb.test",
"Petros",
"Bakolas",
"$2a$10$YHVRGOscVYeMbIjkf5qRg.lYqB43jrIh1baf2SyeI5K3DfL8Mvj4G",
"petros",
"6988654120",
NOW());

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
`user_since`)
VALUES
(3,
"giannis@airbnb.test",
"Giannis",
"Fotis",
"$2a$10$YHVRGOscVYeMbIjkf5qRg.lYqB43jrIh1baf2SyeI5K3DfL8Mvj4G",
"giannis",
"6990564871",
NOW());

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
`user_since`)
VALUES
(4,
"giovani@airbnb.test",
"Giovani",
"Ratouri",
"$2a$10$YHVRGOscVYeMbIjkf5qRg.lYqB43jrIh1baf2SyeI5K3DfL8Mvj4G",
"giovani",
"6998451220",
NOW());

INSERT INTO `airbnb`.`user_roles` (`user_id`,`role_id`)
VALUES(4,2);
INSERT INTO `airbnb`.`user_roles` (`user_id`,`role_id`)
VALUES(4,3);


# ---------------------------------------------------------------- #
# Add listings
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
20.123456,
21.123456,
"Santorinioy 25",
"Greece",
"Santorini",
"15234",
"Fira",
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
20.123456,
21.123456,
"Santorinioy 24",
"Greece",
"Santorini",
"15234",
"Fira",
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
0,
0.0,
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
30.123456,
41.123456,
"Kithiraiou 25",
"Greece",
"Santorini",
"15234",
"Poli",
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
4
);


# ---------------------------------------------------------------- #
# Add bookings
INSERT INTO `airbnb`.`booking`
(
`booking_id`,
`date`,
`listing_id`,
`user_id`)
VALUES
(
1,
NOW(),
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
NOW(),
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
3,
NOW(),
3,
3);


# ---------------------------------------------------------------- #
# Add reviews
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
NOW(),
4,
1,
3);

# ---------------------------------------------------------------- #
# Add messages
INSERT INTO `airbnb`.`message`
(
`message_id`,
`seen`,
`send_date`,
`text`,
`listing_id`,
`user_id`)
VALUES
(
1,
1,
NOW(),
"Καλησπέρα σας",
1,
3);