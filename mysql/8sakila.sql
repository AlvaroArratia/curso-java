# 1.
SELECT address.city_id, city.city, customer.first_name, customer.last_name, customer.email, address.address FROM customer JOIN address ON address.address_id=customer.address_id JOIN city ON city.city_id=address.city_id AND address.city_id=312;

# 2.
SELECT film.title, film.description, film.release_year, film.rating, film.special_features, category.name FROM film_category JOIN film ON film.film_id=film_category.film_id JOIN category ON category.category_id=film_category.category_id WHERE category.name='Comedy';

# 3.
SELECT actor.actor_id, actor.first_name, actor.last_name, film.title, film.description, film.release_year FROM film_actor JOIN actor ON actor.actor_id=film_actor.actor_id JOIN film ON film.film_id=film_actor.film_id WHERE film_actor.actor_id=5;

# 4.
SELECT customer.store_id, address.city_id, customer.first_name, customer.last_name, customer.email, address.address FROM customer JOIN address ON address.address_id=customer.address_id AND address.city_id IN (1, 42, 312, 459) AND customer.store_id=1;
# WHERE store_id=1 AND (address.city_id=1 OR address.city_id=42 OR address.city_id=312 OR address.city_id=459);

# 5.
SELECT actor.actor_id, actor.first_name, actor.last_name, film.title, film.description, film.release_year, film.rating, film.special_features FROM film_actor JOIN actor ON actor.actor_id=film_actor.actor_id JOIN film ON film.film_id=film_actor.film_id WHERE film_actor.actor_id=15 AND film.rating='G' AND film.special_features LIKE '%Behind the Scenes%';

# 6.
SELECT film.film_id, film.title, actor.actor_id, actor.first_name, actor.last_name FROM film_actor JOIN film ON film.film_id=film_actor.film_id JOIN actor ON actor.actor_id=film_actor.actor_id WHERE film_actor.film_id=369;

# 7.
SELECT film.title, film.description, film.release_year, film.rating, film.special_features, category.name AS category FROM film_category JOIN film ON film.film_id=film_category.film_id JOIN category ON category.category_id=film_category.category_id WHERE category.name='Drama' AND film.rental_rate=2.99;

# 8.
SELECT film.title, film.description, film.release_year, film.rating, film.special_features, category.name AS category, CONCAT(actor.first_name, ' ', actor.last_name) AS actor FROM film_category JOIN category ON category.category_id=film_category.category_id JOIN film ON film.film_id=film_category.film_id JOIN film_actor ON film_actor.film_id=film.film_id JOIN actor ON actor.actor_id=film_actor.actor_id WHERE category.name='Action' AND CONCAT(actor.first_name, ' ', actor.last_name)='SANDRA KILMER';