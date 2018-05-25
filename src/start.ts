import { Account } from "./config";

console.log('app:begin');

const api = require('binance');
const binanceRest = new api.BinanceRest({
  key: Account.Binance.apiKey, // Get this from your account on binance.com
  secret: Account.Binance.secret, // Same for this
  timeout: 15000, // Optional, defaults to 15000, is the request time out in milliseconds
  recvWindow: 10000, // Optional, defaults to 5000, increase if you're getting timestamp errors
}) as BinanceRest;
