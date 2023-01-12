import fetch from 'node-fetch';
import config from 'config';
import ApiError from '../errors/ApiError.js';

export const getRates = async (to, from) => {

  const url = `https://api.apilayer.com/fixer/latest?symbols=${to}&base=${from}`;
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: { 'apikey': config.get('fixer.apikey')}
  };

  const response = await fetch(url, requestOptions);
  const data = await response.json();

  if (!data.success) ApiError.badRequest('Fail to get current rates.');

  return data.rates;
};

export const convertProductsCurrency = async (products, to, from = 'EUR') => {

  const rates = await getRates(to, from);

  for (const product of products) {
    product.price = Math.round(product.price * rates[to] * 100) / 100;
  }

  return products;
};
