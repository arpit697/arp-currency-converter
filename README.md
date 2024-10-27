
<!-- An npm package to convert currency. -->
<p align="center">
  <img width="150px" src="https://static.vecteezy.com/system/resources/previews/013/399/321/non_2x/currency-exchange-illustration-in-minimal-style-png.png" alt="currency converter"/>
</p>

# arp-currency-converter
[![Buy me a coffee](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://buymeacoffee.com/arpit_dwivedi)

## Installation

### npm
```shell
npm i arp-currency-converter
```

## Import

```js
import {convertCurrency} from 'arp-currency-converter'
```

## Usage

```js
convertCurrency('USD' , 'INR' , 5).then((res) =>{
    console.log(res , 'response')
})
```