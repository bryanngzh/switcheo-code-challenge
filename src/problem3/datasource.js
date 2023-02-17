// your code here:
class Datasource {
    // Define a static method called getPrices that fetches price data from an API and returns it as an array of objects
    static getPrices() {
      return fetch('https://interview.switcheo.com/test.json')
        .then(response => response.json())
        .then(json => {
            return json.data.prices.map(price => {
                return {
                    // Extract the currency pair from the price object
                    pair: price.pair,
                    // Calculate the mid price by averaging the buy and sell prices and return it as a function
                    mid: () => (price.buy + price.sell) / 2,
                    // Extract the quote currency from the currency pair and return it as a function
                    quote: () => price.pair.slice(3)
                }
            })
        });
    }

}
  
Datasource.getPrices()
.then(prices => {
    prices.forEach(price => {
        console.log(`Mid price for ${ price.pair } is ${ price.mid() } ${ price.quote() }.`);
    });
}).catch(error => {
    console.log(error);
});