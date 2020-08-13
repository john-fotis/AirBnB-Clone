INSERT INTO airbnb.roles(name) VALUES('ROLE_ADMIN');
INSERT INTO airbnb.roles(name) VALUES('ROLE_HOST');
INSERT INTO airbnb.roles(name) VALUES('ROLE_ADMIN');

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
"petros@airbnb.test",
"Petros",
"Bakolas",
"$2a$10$YHVRGOscVYeMbIjkf5qRg.lYqB43jrIh1baf2SyeI5K3DfL8Mvj4G",
"petros",
"6987939000",
NOW());

INSERT INTO `airbnb`.`user_roles`
(`user_id`,
`role_id`)
VALUES
(1,
3);

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
0,
0.0,
1
);

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
1);

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
1);

