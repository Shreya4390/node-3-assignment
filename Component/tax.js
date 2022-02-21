import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

export default async function tax() {
    const rl = readline.createInterface({ input, output });

    const answer = await rl.question('Perform Operation \n Input 1 \n Input 2 \n Input 3 \n input 4');
    if (parseInt(answer) < 1 || parseInt(answer) > 4) {
        console.log(`Please enter valid input!`);
        rl.close();
    } else {
        let book=0,cd=0,choclate=0,sales_tax=0,total=0,choclate_box=0,perfume_box=0,choclate_tax=0,perfume_tax=0,pills=0,imported_perfume=0,pills_tax=0,imported_perfume_tax=0;
        switch (parseInt(answer)) {
            case 1:
                book = Number(await rl.question('1 book at: ')), cd = Number(await rl.question('1 music CD at: ')), choclate = Number(await rl.question('1 chocolate bar at: '));
                if (cd) {
                    sales_tax = Number(sales_tax + ((cd * 10) / 100)).toFixed(2);
                    cd = Number(cd + Number(sales_tax)).toFixed(2);
                }
                total = Number(book) + Number(cd) + Number(choclate);
                console.log('Output 1:' + '\n' + '1 book at: ' + book + '\n' + '1 music CD at: ' + cd + '\n' + '1 chocolate bar at: ' + choclate + '\n' + 'Sales Taxes: ' + sales_tax + '\n' + 'Total: ' + total)
                break;
            case 2:
                choclate_box = Number(await rl.question('1 imported box of chocolates at: ')),perfume_box=Number(await rl.question('1 imported bottle of perfume at: '));
                if(choclate_box){
                   choclate_tax = Number(choclate_tax + ((choclate_box * 5) / 100)).toFixed(2);
                   choclate_box = Number(choclate_box + Number(choclate_tax)).toFixed(2);
                }
                if(perfume_box){
                    perfume_tax = Number(perfume_tax + ((perfume_box * 10) / 100) + ((perfume_box * 5) / 100)).toFixed(2);
                    perfume_box = Number(perfume_box + Number(perfume_tax)).toFixed(2);
                }
                sales_tax = Number(choclate_tax) + Number(perfume_tax);
                total = Number(choclate_box) + Number(perfume_box);
                console.log('Output 2:' + '\n' + '1 imported box of chocolates: ' + choclate_box + '\n' + '1 imported bottle of perfume: ' + perfume_box + '\n' + 'Sales Taxes: ' + sales_tax + '\n' + 'Total: ' + total)
                break;
            case 3:
                imported_perfume = Number(await rl.question('1 imported bottle of perfume at: '));
                perfume_box = Number(await rl.question('1 imported bottle of perfume at: '));
                pills = Number(await rl.question('1 packet of headache pills at: '));
                choclate_box = Number(await rl.question('1 box of imported chocolates at: '));
                if(imported_perfume){
                    imported_perfume_tax = Number(imported_perfume_tax + ((imported_perfume * 10) / 100) + ((imported_perfume * 5) / 100)).toFixed(2);
                    imported_perfume = Number(imported_perfume + Number(imported_perfume_tax)).toFixed(2);
                }
                if(perfume_box){
                    perfume_tax = Number(perfume_tax + ((perfume_box * 10) / 100)).toFixed(2);
                    perfume_box = Number(perfume_box + Number(perfume_tax)).toFixed(2);
                }
                if(choclate_box){
                    choclate_tax = Number(choclate_tax + ((choclate_box * 5) / 100)).toFixed(2);
                    choclate_box = Number(choclate_box + Number(choclate_tax)).toFixed(2);
                }
                sales_tax = Number(choclate_tax) + Number(perfume_tax) + Number(pills_tax) + Number(imported_perfume_tax);
                total = Number(choclate_box) + Number(perfume_box) + pills + Number(imported_perfume);
                console.log('Output 3:' + '\n' + '1 imported bottle of perfume: ' + imported_perfume + '\n' + '1 bottle of perfume: ' + perfume_box + '\n'+ '1 packet of headache pills: ' + pills + '\n' + '1 imported box of chocolates: ' + choclate_box +'\n' + 'Sales Taxes: ' + sales_tax + '\n' + 'Total: ' + total)
                break;
            default:
                console.log('Please choose any option to calculate tax.')
                break;
        }
        rl.close();
    }
}
