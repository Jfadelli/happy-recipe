# Works In Progress
* Add user login, and dynamic home screen content based on account

# Jobs done
   * Update postgres server to have accountID and passwords
   * Added SSH to server and can access from windows with cmd -> `ssh jason@myipaddress`

# Postgres Server Controls
Access server from terminal

```
sudo -u postgres psql
```

# Nginx default config
```
server {
        listen 80;
        listen [::]:80;

         root /home/ubuntu/apps/yelp-app/client/build;

        # Add index.php to the list if you are using PHP
        index index.html index.htm index.nginx-debian.html;

        server_name sanjeev.xyz www.sanjeev.xyz;

        location / {
                try_files $uri /index.html;
        }

         location /api {
            proxy_pass http://localhost:3001;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
        }

}
```
must use `sudo systemctl restart nginx` after any changes

# Links
* [og guide for hosting PERN application on Ubuntu 20.04](https://github.com/Sanjeev-Thiyagarajan/PERN-STACK-DEPLOYMENT)
* [postgres configuration basics](https://stackoverflow.com/questions/22080307/access-postgresql-server-from-lan)
* [postgres control basics](https://www.tutorialspoint.com/postgresql/postgresql_select_database.htm)
  

# Log

02-08-23
* Resolved breaking issue to application & nginx configuration files.
  1. Confirmed Firewall settings in Ubuntu (sudo ufw)
  2. Created new Nginx config file /etc/nginx/sites-available (example of working file
  3. Updated postgres server on ubuntu to allow LAN traffic with pg_hba.conf
  4. Merged login & main (local environment & main)