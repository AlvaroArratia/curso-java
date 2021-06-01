# 1.
SELECT users.first_name, users.last_name FROM friendships JOIN users ON users.id=friendships.user_id JOIN users AS users2 ON users2.id=friendships.friend_id WHERE users2.first_name='Kermit';

# 2.
SELECT CONCAT(users.first_name, ' ', users.last_name) AS user_name, COUNT(*) AS friends_num FROM users JOIN friendships ON users.id=friendships.user_id JOIN users AS user2 ON user2.id=friendships.friend_id GROUP BY user_name ORDER BY friends_num DESC;

# 3.
SELECT CONCAT(users.first_name, ' ', users.last_name) AS user_name, COUNT(*) AS friends_num FROM users JOIN friendships ON users.id=friendships.user_id JOIN users AS user2 ON user2.id=friendships.friend_id GROUP BY user_name ORDER BY friends_num DESC LIMIT 1;

# 4.
#INSERT INTO users (first_name, last_name) VALUES ('Alvaro','Arratia');
#INSERT INTO friendships (user_id, friend_id) SELECT users.id FROM users WHERE CONCAT(users.first_name, ' ', users.last_name)='Eli Byers' UNION SELECT users.id FROM users WHERE CONCAT(users.first_name, ' ', users.last_name)='Alvaro Arratia';

# 5.
SELECT CONCAT(users2.first_name,' ', users2.last_name) AS friends_name FROM friendships JOIN users ON users.id=friendships.user_id JOIN users AS users2 ON users2.id=friendships.friend_id WHERE users.first_name='Eli' ORDER BY friends_name ASC;

# 6.
DELETE FROM friendships WHERE friendships.friend_id IN (SELECT users.id FROM users WHERE CONCAT(users.first_name, ' ', users.last_name)='Marky Mark') AND friendships.user_id IN (SELECT users.id FROM users WHERE users.first_name='Eli');

# 7.
SELECT CONCAT(users.first_name,' ', users.last_name) AS user_name, CONCAT(users2.first_name,' ', users2.last_name) AS friends_name FROM friendships JOIN users ON users.id=friendships.user_id JOIN users AS users2 ON users2.id=friendships.friend_id;