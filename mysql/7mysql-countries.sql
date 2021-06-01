# 1.
SELECT countries.name, languages.language, languages.percentage FROM languages JOIN countries ON countries.id=languages.country_id WHERE language = 'Slovene';

# 2.
SELECT countries.name AS country_name, COUNT(*) AS cities_number FROM cities JOIN countries ON countries.id=cities.country_id GROUP BY countries.name ORDER BY COUNT(*) DESC;

# 3.
SELECT countries.name, countries.population FROM countries WHERE countries.population>500000 ORDER BY countries.population DESC;

# 4.
SELECT countries.name, languages.language, languages.percentage FROM languages JOIN countries ON countries.id=languages.country_id WHERE languages.percentage>89 ORDER BY languages.percentage DESC;

# 5.
SELECT * FROM countries WHERE countries.surface_area<501 AND countries.population>100000;

# 6.
SELECT * FROM countries WHERE countries.government_form='Constitutional Monarchy' AND countries.capital>200 AND countries.life_expectancy>75;

# 7.
SELECT countries.name AS country_name, cities.name AS city_name, cities.district, cities.population FROM cities JOIN countries ON countries.id=cities.country_id WHERE cities.country_code='ARG' AND cities.district='Buenos Aires' AND cities.population>500000;

# 8.
SELECT countries.region, COUNT(*) AS countries_num FROM countries GROUP BY countries.region ORDER BY countries_num DESC;