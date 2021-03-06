# node-3-assignment

Day 3 - Sales Tax Problem
-----------------------------------------------
Subject: node NodeJS_Training_Day_3_Sales_Tax_Problem.js
-----------------------------------------------
Hey Guys,


In your school days, you might have solved an unseen passage. This time we bring you the memories of the same unseen passage. Well, it is more than that, you are expected to go through this once and try to program it in Ruby.

~~~~~~~~~~~~~~~~~~~~~~~~~~~
Passage  -  SALES TAXES
~~~~~~~~~~~~~~~~~~~~~~~~~~~
Basic sales tax is applicable at a rate of 10% on all goods, except books, food, and medical products that are exempt. Import duty is an additional sales tax applicable to all imported goods at a rate of 5%, with no exemptions.

When I purchase items I receive a receipt that lists the name of all the items and their price (including tax), finishing with the total cost of the items, and the total amounts of sales taxes paid. The rounding rules for sales tax are that for a tax rate of n%, a shelf price of p contains (np/100 rounded up to the nearest 0.05) amount of sales tax.

Write an application that prints out the receipt details for a shopping basket.

INPUT
Input 1:
1 book at 12.49
1 music CD at 14.99
1 chocolate bar at 0.85

Input 2:
1 imported box of chocolates at 10.00
1 imported bottle of perfume at 47.50

Input 3:
1 imported bottle of perfume at 27.99
1 bottle of perfume at 18.99
1 packet of headache pills at 9.75
1 box of imported chocolates at 11.25

OUTPUT
Output 1:
1 book: 12.49
1 music CD: 16.49
1 chocolate bar: 0.85
Sales Taxes: 1.50
Total: 29.83

Output 2:
1 imported box of chocolates: 10.50
1 imported bottle of perfume: 54.65
Sales Taxes: 7.65
Total: 65.15

Output 3:
1 imported bottle of perfume: 32.19
1 bottle of perfume: 20.89
1 packet of headache pills: 9.75
1 imported box of chocolates: 11.85
Sales Taxes: 6.70
Total: 74.68
~~~~~~~~~~~~~~~~~~~~~~~~~~~
-----------------------------------------------


{
    "items":[
        {
            "item_name":"book",
            "category":"study_material",
            "imported":0,
            "price":12.49,
            "quantity":1
        },
        {
            "item_name":"CD",
            "category":"device",
            "imported":0,
            "price":14.99,
            "quantity":1
        },
        {
            "item_name":"Chocolate",
            "category":"food",
            "imported":0,
            "price":0.85,
            "quantity":1
        }
    ]
}

{
    "items":[
        {
            "item_name":"imported box of chocolates",
            "category":"food",
            "imported":1,
            "price":10.00,
            "quantity":1
        },
        {
            "item_name":"imported bottle of perfume",
            "category":"perfume",
            "imported":1,
            "price":47.50,
            "quantity":1
        }
    ]
}


{
    "items":[
        {
            "item_name":"imported bottle of perfume",
            "category":"perfume",
            "imported":1,
            "price":27.99,
            "quantity":1
        },
        {
            "item_name":"bottle of perfume",
            "category":"perfume",
            "imported":0,
            "price":18.99,
            "quantity":1
        },
        {
            "item_name":"packet of headache pills",
            "category":"medical_product",
            "imported":0,
            "price":9.75,
            "quantity":1
        },
        {
            "item_name":"box of imported chocolates",
            "category":"food",
            "imported":1,
            "price":11.25,
            "quantity":1
        }
    ]
}