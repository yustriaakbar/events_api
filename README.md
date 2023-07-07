# API Vaccine Registration NodeJS

Untuk step run project API ini sebagai berikut.

## Installation

Clone project dan lakukan npm install 

```bash
npm install
```

Setup database di file config.json (database menggunakan mysql). Kemudian lakukan migrate dengan command berikut :
```bash
npx sequelize-cli db:migrate
```

Step selanjutnya seeder file userTableSeeder
```bash
npx sequelize-cli db:seed:all
```

Run project
```bash
npm start
```
