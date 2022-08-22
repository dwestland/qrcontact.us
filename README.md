# next-auth-prisma-blog

## A blog site with authentication

**Run local dev environment:**

```
npm run dev
```

## Stack

- Next 12
- TypeScript
- Prisma 4
- Postgres
- Next Auth 4
  - Google OAuth
  - GitHub OAuth
  - Passwordless
- React Query 3 (v4 is current)

### Set up database

## Build Database

**Re-establish the link between schema.prisma and .env file**

```
npx prisma generate
```

### Migrate Prisma

```
npx prisma migrate dev --name my-named-migration
```

**Push Prisma**

```
npx prisma db push
```

### Seed database

```
npx prisma db seed
```

## Nginx Server Blocks:

### Initial block:

```ini
server {
  listen 80;
  listen [::]:80;

  server_name next-auth-prisma-blog.westland.net;
  root /srv/www/next-auth-prisma-blog.westland.net;
  index index.html;

  access_log  /var/log/nginx/next-auth-prisma-blog.westland.net_access.log;
  error_log  /var/log/nginx/next-auth-prisma-blog.westland.net_error.log;

  location / {
    try_files $uri $uri/ =404;
  }
}
```

### Certbot block:

```ini
# Redirect from http to https
server {
  listen 80;
  listen [::]:80;
  access_log off;
  error_log off;
  server_name next-auth-prisma-blog.westland.net;
  return 301 https://$host$request_uri;
  root /srv/www/next-auth-prisma-blog.westland.net;
}

server {
  listen 443 ssl http2;
  listen [::]:443 ssl http2;

  server_name next-auth-prisma-blog.westland.net;
  root /srv/www/next-auth-prisma-blog.westland.net;
  index index.html;

  ssl_certificate /etc/letsencrypt/live/next-auth-prisma-blog.westland.net/fullchain.pem;
  ssl_certificate_key /etc/letsencrypt/live/next-auth-prisma-blog.westland.net/privkey.pem;

  access_log  /var/log/nginx/next-auth-prisma-blog.westland.net_access.log;
  error_log  /var/log/nginx/next-auth-prisma-blog.westland.net_error.log;
}
```

## stg.mybeachcams.com Server Blocks

### Initial block:

```ini
server {
  listen 80;
  listen [::]:80;

  server_name stg.mybeachcams.com;
  root /srv/www/stg.mybeachcams.com;
  index index.html;

  access_log  /var/log/nginx/stg.mybeachcams.com_access.log;
  error_log  /var/log/nginx/stg.mybeachcams.com_error.log;

  location / {
    try_files $uri $uri/ =404;
  }
}
```

### Certbot block:

```ini
# Redirect from http to https
server {
  listen 80;
  listen [::]:80;
  access_log off;
  error_log off;
  server_name stg.mybeachcams.com;
  return 301 https://$host$request_uri;
  root /srv/www/stg.mybeachcams.com;
}

server {
  listen 443 ssl http2;
  listen [::]:443 ssl http2;

  server_name stg.mybeachcams.com;
  root /srv/www/stg.mybeachcams.com;
  index index.html;

  ssl_certificate /etc/letsencrypt/live/stg.mybeachcams.com/fullchain.pem;
  ssl_certificate_key /etc/letsencrypt/live/stg.mybeachcams.com/privkey.pem;

  access_log  /var/log/nginx/stg.mybeachcams.com_access.log;
  error_log  /var/log/nginx/stg.mybeachcams.com_error.log;
}
```
