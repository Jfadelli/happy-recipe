## Notes

### Links
* [og guide for hosting PERN application on Ubuntu 20.04](https://github.com/Sanjeev-Thiyagarajan/PERN-STACK-DEPLOYMENT)
* [postgres configuration basics](https://stackoverflow.com/questions/22080307/access-postgresql-server-from-lan)
* [postgres control basics](https://www.tutorialspoint.com/postgresql/postgresql_select_database.htm)

### Log

2.8.23
* Resolved breaking issue to application & nginx configuration files.
  1. Confirmed Firewall settings in Ubuntu (sudo ufw)
  2. Created new Nginx config file /etc/nginx/sites-available (example of working file
  3. Updated postgres server on ubuntu to allow LAN traffic with pg_hba.conf
  4. Merged login & main (local environment & main)