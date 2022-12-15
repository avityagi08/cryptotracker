function onClick() {
  const coin = document.querySelector('#coinType').value;
  
  getCoinDetails(coin);
}

//function to call API and get coin details
async function getCoinDetails(coin) {
  const data = await fetch(`https://api.coinstats.app/public/v1/coins/${coin}?currency=INR`);
  const data_json = await data.json();
  const coinName = data_json.coin.name;
  const price = data_json.coin.price;
  const volume = data_json.coin.volume;
  const priceChange = data_json.coin.priceChange1d;
  const icon = data_json.coin.icon;
  
  document.querySelector('#result').innerHTML = `<tr>
    <th>Property</th>
    <th>Value</th>
  </tr>
  <tr>
    <td>${coinName}</td>
    <td>${price} INR</td>
  </tr>
 
  <tr>
    <td>Icon</td>
    <td><img src=${icon} height="50" width="50"></td>
  </tr>
  

  <tr>
    <td>Volume</td>
    <td>${volume}</td>
  </tr>
  
  <tr>
    <td>1 Day Change</td>
    <td>${priceChange}</td>
  </tr>`;

}

