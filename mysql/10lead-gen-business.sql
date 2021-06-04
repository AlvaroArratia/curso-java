# 1.
SELECT CONCAT('March 2012') AS period, SUM(billing.amount) AS total_billing FROM billing WHERE MONTH(billing.charged_datetime)='03' AND YEAR(billing.charged_datetime)='2012';

# 2.
SELECT clients.client_id, CONCAT(clients.first_name, ' ', clients.last_name) AS client, SUM(billing.amount) AS amount FROM billing JOIN clients ON clients.client_id=billing.client_id WHERE billing.client_id=2;

# 3.
SELECT sites.site_id, sites.domain_name, clients.client_id, CONCAT(clients.first_name, ' ', clients.last_name) AS client_name FROM sites JOIN clients ON clients.client_id=sites.client_id WHERE sites.client_id=10;

# 4.
SELECT CONCAT(YEAR(sites.created_datetime),'-',MONTH(sites.created_datetime)) AS creation_date, clients.client_id, COUNT(*) AS website_num FROM sites JOIN clients ON clients.client_id=sites.client_id WHERE sites.client_id=1 GROUP BY creation_date ORDER BY creation_date ASC;

# 5.
SELECT sites.site_id, sites.domain_name, COUNT(*) AS leads_num FROM leads JOIN sites ON sites.site_id=leads.site_id WHERE leads.registered_datetime>='2011-01-01' AND leads.registered_datetime<='2011-02-15' GROUP BY sites.domain_name ORDER BY leads_num DESC;

# 6.
SELECT clients.first_name, COUNT(*) AS leads_num FROM leads JOIN sites ON sites.site_id=leads.site_id JOIN clients ON clients.client_id=sites.client_id WHERE leads.registered_datetime>='2011-01-01' AND leads.registered_datetime<='2011-12-31' GROUP BY clients.first_name;

# 7.
SELECT clients.first_name, COUNT(leads.leads_id) AS leads_num, MONTHNAME(leads.registered_datetime) AS month FROM clients JOIN sites ON sites.client_id=clients.client_id JOIN leads ON leads.site_id=sites.site_id WHERE YEAR(leads.registered_datetime)='2011' AND MONTH(leads.registered_datetime) BETWEEN '01' AND '06' GROUP BY leads.leads_id;

# 8.
SELECT CONCAT(clients.first_name, ' ', clients.last_name) AS client_name, sites.domain_name, COUNT(*) AS leads_num FROM sites JOIN leads ON leads.site_id=sites.site_id JOIN clients ON clients.client_id=sites.client_id WHERE leads.registered_datetime>='2011/01/01' AND leads.registered_datetime<='2011/12/31' GROUP BY sites.site_id;
SELECT CONCAT(clients.first_name, ' ', clients.last_name) AS client_name, sites.domain_name, COUNT(*) AS leads_num FROM sites JOIN leads ON leads.site_id=sites.site_id JOIN clients ON clients.client_id=sites.client_id GROUP BY sites.site_id;

# 9.
SELECT CONCAT(clients.first_name, ' ', clients.last_name) AS client_name, MONTHNAME(billing.charged_datetime) AS month, SUM(billing.amount) AS total_amount FROM clients JOIN billing ON billing.client_id=clients.client_id GROUP BY client_name, month;

# 10.
SELECT CONCAT(clients.first_name, ' ', clients.last_name) AS client_name, GROUP_CONCAT(sites.domain_name) AS domain_name FROM sites JOIN clients ON sites.client_id=clients.client_id GROUP BY client_name;