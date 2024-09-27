## 1. skema untuk kebutuhan data proffile aplikasi skiljek dan relasi yang tepat untuk data tersebut ##  
Relasi one to one.  
```
{
    "_id": ObjectId("61bcc87a5b8f782f635178a0"),  
    "full_name": "lathifaaaz",  
    "email": "lathifaaaz@mail.com",  
    "phone_number": "08123456789"
}
```  

## 2. skema untuk kebutuhan data alamat pengguna skilshop dimana alamat yang didaftarkan max. 2 ##  
Relasi one to many.
```
{  
    "_id":ObjectId("61bcc9ef5b8f782f635178a1"),  
    "full_name":"lathifaaaz",  
    "phone_number":"08123456789",  
    "address":["Antartika","samudra pasifik"]  
}
```  

## 3. skema untuk kebutuhan data dari suatu produk yang akan mempunyai banyak varian dari aplikasi skilshop ##  
Relasi one to one.  
```
{
    "_id": ObjectId("61bcc9ef5b8f782f659378a9"),
    "product_name": "Kaos polos",
    "brand_name": "SkilShirt",
    "variant": [
        {
        "variant_name_1": "Kaos polos hitam",
        "color": "Hitam",
        "quantity": 12,
        "price": "Rp 99.000",
        },
        {
        "variant_name_2": "Kaos polos navy",
        "color": "Navy",
        "quantity": 10,
        "price": "Rp 99.000",
        }
    ]
}
```  

## 4. skema untuk kebutuhan data dari suatu aplikasi bioskop bernama Skilflix. Data yang ingin ditampilkan adalah list bioskop pada suatu kota dan film yang ditanyangkan pada setiap bioskop tsb ##  
Relasi one to many.
``` 
[
    {
    "_id": ObjectId("61bcc9ef5b8f782g756778a5")",
    "cinema_name": "CGF",
    "films": [
        "Venom2", "Spiderman No Way Home"
    ],
    "location": "Pondok Indah Mall"
    },
    {
    "_id": ObjectId("61bcc9ef5b8f782a535179a8"),
    "cinema_name": "Cinema31",
    "film": [
        "Venom2", "Spiderman No Way Home"
    ],
     "location": "Mall kelapa gading"
    }
]
```