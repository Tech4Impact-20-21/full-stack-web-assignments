# Introduction and Design Database with MongoDB Assignment

1. Create a schema for profile data in Skiljek app and determine the appropriate relationship for that data! Data needed: Full Name, Email, Phone Number.

- Answer:

  The appropriate relationship: one to one.

  Schema:

  ```{json}
  {
      "_id" : "ObjectId('ABC')",
      "fullName" : "Dion",
      "email" : "dion@gmail.com",
      "phoneNumber" : "08135791113"
  }
  ```

2. Create a schema for address data in SkilShop app and determine the appropriate relationship for that data! Data needed: Full Name, Phone Number, Address (Max 2).

- Answer:

  The appropriate relationship: one to many.

  Schema:

  ```{json}
  {
      "_id" : "ObjectId('ABC')",
      "fullName" : "Dion",
      "phoneNumber" : "08135791113",
      "address" : ["Malang", "BSD"]
  }
  ```

3. Create a schema for products data with many variants in SkilShop app and determine the appropriate relationship for that data! Data needed:

Product

- Product Name: Kaos Polos

- Brand Name: SkilShirt

Varian Pertama

- Varian Name 1: Kaos Polos Hitam

- Color: Hitam

- Quantity: 12

- Price: Rp 99.000

Varian Kedua

- Varian Name 2: Kaos Polos Navy

- Color: Navy

- Quantity: 10

- Price: Rp 99.000

- Answer:

  The appropriate relationship: one to many.

  Products Schema:

  ```{json}
  {
      "_id" : "ObjectId('ABC')",
      "productName" : "Kaos Polos",
      "brandName" : "SkillShirt",
      "variants" : ["ObjectId('DEF')", "ObjectId('GHI')"]
  }
  ```

  Variants Schema:

  ```{json}
  {
      "_id" : "ObjectId('DEF')",
      "variantName" : "Kaos Polos Hitam",
      "color" : "Hitam",
      "quantity" : 12,
      "price" : 99000
  },
  {
      "_id" : "ObjectId('GHI')",
      "variantName" : "Kaos Polos Navy",
      "color" : "Navy",
      "quantity" : 10,
      "price" : 99000
  }
  ```

4. Create a schema for a cinema called SkilFlix app and determine the appropriate relationship for that data! Data needed:

First Cinema

- Cinema Name: CGF
- Films:
  - Venom 2
  - Spiderman No Way Home
- Location: Pondok Indah Mall

Second Cinema

- Cinema Name: Cinema31
- Films:
  - Venom 2
  - Spiderman No Way Home
- Location: Mall Kelapa Gading

- Answer:

  The appropriate relationship: one to one for the cinema & the location. Many to many for the cinema & the movies.

  Cinema Schema:

  ```{json}
  {
      "_id" : "ObjectId('ABC')",
      "cinemaName" : "CGF",
      "films" : ["ObjectId('DEF')", "ObjectId('GHI')"],
      "location" : "Pondok Indah Mall"
  },
  {
      "_id" : "ObjectId('JKL')",
      "cinemaName" : "Cinema31",
      "films" : ["ObjectId('DEF')", "ObjectId('GHI')"],
      "location" : "Mall Kelapa Gading"
  }
  ```

  Movie Schema:

  ```{json}
  {
      "_id" : "ObjectId('DEF')",
      "filmName" : "Venom 2",
      "playedByCinema" : ["ObjectId('ABC')", "ObjectId('JKL')"]
  },
  {
      "_id" : "ObjectId('GHI')",
      "filmName" : "Spiderman No Way Home",
      "playedByCinema" : ["ObjectId('ABC')", "ObjectId('JKL')"]
  }
  ```
