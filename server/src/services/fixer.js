import fetch from 'node-fetch';
import config from 'config';

export const convertCurrency = async (amount, to, from) => {

  const url = `https://api.apilayer.com/fixer/convert?to=${to}&from=${from}&amount=${amount}`;
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: { 'apikey': config.get('fixer.apikey')}
  };

  const response = await fetch(url, requestOptions);
  const data = await response.json();

  return data;
};

export const convertProductsCurrency = async (products, to, from = 'EUR') => {

  for (const product of products) {

    const convertion = await convertCurrency(product.price, to, from);
    if (convertion.success) {
      product.price = convertion.result;
    }

  }

  return products;
};
