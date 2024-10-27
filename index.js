import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi('fca_live_nIvQVAaOwHZ4xPnzSess8LUdlxgDhxFSatHKJs2d');

export async function convertCurrency(fromCurrency , toCurrency , units) {
    const res  =  await freecurrencyapi.latest({
        base_currency: fromCurrency,
        currencies: toCurrency
    });
    const multiplyer = res.data[toCurrency];
    return multiplyer * units;
}

// console.log(convertCurrency('USD' , 'INR' , 1).then((res) => {
//     console.log(res)
// }))


// freecurrencyapi.latest({
//     base_currency: 'USD',
//     currencies: 'INR'
// }).then(response => {
//     console.log(response);
// });