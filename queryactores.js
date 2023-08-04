/*Seleccionar las columnas film_id y title de la tabla film*/
SELECT film_id, title FROM film;

/*Seleccionar 5 filas de la tabla film, obteniendo todas las columnas*/

SELECT * FROM film LIMIT 5;

/*Seleccionar filas de la tabla film donde film_id sea menor que 4*/
SELECT * FROM film WHERE film_id < 4;

/*Seleccionar filas de la tabla film donde el rating sea PG o G*/

SELECT * FROM film WHERE rating IN ('PG', 'G');

/*Seleccionar filas de la tabla actor donde el nombre sea Angela, Angelina o Audrey usando IN*/

SELECT * FROM actor WHERE name IN ('Angela', 'Angelina', 'Audrey');

/*Obtener una lista de actores con el nombre Julia*/
SELECT * FROM actor WHERE name = 'Julia';

/*Obtener una lista de actores con los nombres Chris, Cameron o Cuba*/
SELECT * FROM actor WHERE name IN ('Chris', 'Cameron', 'Cuba');

/*Seleccionar la fila de la tabla customer para el cliente con el nombre Jamie Rice*/

SELECT * FROM customer WHERE first_name = 'Jamie' AND last_name = 'Rice';

/*Seleccionar el monto y la fecha de pago de la tabla payment donde el monto pagado sea menor a $*/

SELECT amount, payment_date FROM payment WHERE amount < 1;

/*¿Cuáles son las diferentes duraciones de alquiler permitidas por la tienda? */

SELECT DISTINCT rental_duration FROM film;

/*Ordenar las filas en la tabla city por country_id y luego por city*/

SELECT * FROM city ORDER BY country_id, city;

/*¿Cuáles son los ID de los últimos 3 clientes que devolvieron un alquiler?*/

SELECT customer_id FROM rental ORDER BY return_date DESC LIMIT 3;

/*¿Cuántas películas tienen clasificación NC-17? ¿Cuántas tienen clasificación PG o PG-13?*/

SELECT COUNT(*) FROM film WHERE rating = 'NC-17';
SELECT COUNT(*) FROM film WHERE rating IN ('PG', 'PG-13');

/*¿Cuántos clientes diferentes tienen registros en la tabla rental?*/
SELECT COUNT(DISTINCT customer_id) FROM rental;

/*¿Hay algún cliente con el mismo apellido?*/

SELECT last_name, COUNT(*) FROM customer GROUP BY last_name HAVING COUNT(*) > 1;

/*¿Qué película (id) tiene la mayor cantidad de actores?*/

SELECT film_id, COUNT(*) as actor_count FROM film_actor GROUP BY film_id ORDER BY actor_count DESC LIMIT 1;

/*¿Qué actor (id) aparece en la mayor cantidad de películas?*/

SELECT actor_id, COUNT(*) as movie_count FROM film_actor GROUP BY actor_id ORDER BY movie_count DESC LIMIT 1;

/*Contar el número de ciudades para cada country_id en la tabla city. Ordenar los resultados por count(*)*/
SELECT country_id, COUNT(*) as city_count FROM city GROUP BY country_id ORDER BY city_count;

/*¿Cuál es la tarifa de alquiler promedio de las películas? ¿Puedes redondear el resultado a 2 decimales?
sql*/

SELECT ROUND(AVG(rental_rate), 2) FROM film;

/*Seleccionar los 10 actores que tienen los nombres más largos (nombre y apellido combinados)*/

SELECT CONCAT(first_name, ' ', last_name) AS full_name FROM actor ORDER BY LENGTH(CONCAT(first_name, last_name)) DESC LIMIT 10;
