# IngressosFullCycle

Imersão FullCycle - Sistema de Vendas de Ingressos

# Setup Project Initial

$npm install -g npm@10.8.1 to update
$npm install -g @nestjs/cli
$nest new nestjs-partners-api
$npm run start

# MYSQL

$mysql -uroot -proot

# PRISMA

$npx prisma init
$npx prisma migrate dev

# NEST

$nest g resource
$nest g module prisma
$nest g service prisma

- EXEMPLO
✔ Enter a name for the new migration: …
Applying migration `20240618152917_`

The following migration(s) have been created and applied from new schema changes:

migrations/
  └─ 20240618152917_/
    └─ migration.sql

Your database is now in sync with your schema.
