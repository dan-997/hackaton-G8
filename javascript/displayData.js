function displayData() {
    // Retrieve the search term from the input field
    var searchTerm = document.querySelector(".searchinput").value;
    
    const array = [
        'Hua Ho Department Store',
        'The Mall Gadong',
        'Supasave',
        'Soon Lee Mega Mart',
        'OneCity Shopping Centre',
        'Yappee Department Store',
        'Grand City Mall',
        'The Store',
        'Times Square Shopping Centre',
        'Giant Hypermarket',
        'NBT (Brunei) Sdn Bhd',
        'Tamu Kianggeh',
        'Teguh Raya Department Store',
        'F&N Beverages Marketing Sdn Bhd',
        'The Coffee Bean & Tea Leaf',
        'Hock Lee Department Store',
        'Department Store Haji Tarif',
        'Tasek Brasserie Restaurant',
        'Pertama Complex',
        'Syarikat Perniagaan Malar Setia Sdn Bhd',
        'Aifa Trading Sdn Bhd',
        'The Face Shop',
        'Glorious Restaurant',
        'All Seasons Restaurant',
        'Sweet As Sara',
        'Happy Star Restaurant',
        'Supermart@Seria',
        'The Body Shop',
        'Unique Store'
      ];
      

    function getRandomItem(arr) {

        // get random index value
        const randomIndex = Math.floor(Math.random() * arr.length);
    
        // get random item
        const item = arr[randomIndex];
    
        return item;
    }
    // TODO: Implement your own logic to retrieve data from a database or API based on the search term

    // For demo purposes, let's assume that the data is returned in the following format:

    let data = [];
    let randomcount = Math.floor(Math.random() * 7) + 1;

    for (let i = 0; i < randomcount; i++) {
    data.push({
        item: searchTerm,
        price: "$"+(Math.floor(Math.random()*10)+1),
        location: getRandomItem(array),
      });
    }

    
  
    // Clear the existing table rows
    var tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = "";
  
    // Loop through the data and create a new row for each item that matches the search term
    for (var i = 0; i < data.length; i++) {
      if (data[i].item.toLowerCase().includes(searchTerm.toLowerCase())) {
        var row = tableBody.insertRow();
        var itemCell = row.insertCell(0);
        var priceCell = row.insertCell(1);
        var locationCell = row.insertCell(2);
        itemCell.innerHTML = data[i].item;
        priceCell.innerHTML = data[i].price;
        locationCell.innerHTML = data[i].location;
      }
    }
  }
  