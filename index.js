import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';

// New app using express module
const app = express();


// configure the app to use bodyParser()
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

function roundNumber(num) {
    return Math.round(num / 0.05) * 0.05;
}

app.post('/taxcalculator', async function (req, res) {
    const data = req.body.items;
    let total = 0, sales_tax = 0, obj = {};
    if (data.length > 0) {
        await data.map(element => {
            let basic_tax = (element.price * 10) / 100,imported_tax= (element.price * 5) / 100;
            if (element.imported == 0) {
                if (element.category == 'study_material' || element.category == 'food' || element.category == 'medical_product') {
                    total += element.price;
                    Object.assign(obj, { [element.quantity + ' ' + element.item_name + ' at: ']: Number(element.price).toFixed(2), total: Number(total).toFixed(2) });
                } else {
                    sales_tax+= roundNumber(basic_tax);
                    element.price += roundNumber(basic_tax);
                    total += element.price;
                    Object.assign(obj, { [element.quantity + ' ' + element.item_name + ' at: ']: Number(element.price).toFixed(2), total: Number(total).toFixed(2), sales_tax: Number(sales_tax).toFixed(2) });
                }
            }
            
            if (element.imported == 1) {
                if (element.category == 'study_material' || element.category == 'food' || element.category == 'medical_product') {
                    sales_tax += roundNumber(imported_tax);
                    element.price += roundNumber(imported_tax);
                    total += element.price;
                    Object.assign(obj, { [element.quantity + ' ' + element.item_name + ' at: ']: Number(element.price).toFixed(2), total: Number(total).toFixed(2), sales_tax: sales_tax });
                } else {
                    sales_tax += roundNumber(basic_tax+imported_tax);
                    element.price += roundNumber(basic_tax+imported_tax);
                    total += element.price;
                    Object.assign(obj, { [element.quantity + ' ' + element.item_name + ' at: ']: Number(element.price).toFixed(2), total: Number(total).toFixed(2), sales_tax: sales_tax});
                }
            }
        });
    }
    await res.send(obj)
})

app.listen(3000, () =>
    console.log('App listening on port 3000!'),
);