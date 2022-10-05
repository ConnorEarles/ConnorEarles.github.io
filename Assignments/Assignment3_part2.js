
const tax_rate = prompt('Enter tax rate (0.10)');
const shipping_threshold = prompt('Enter shipping threshold (1000)');

/* here is the array used for project 1 */

const cart = [
	{
		  product: {
				title: "Portrait of Marten Soolmans",
				filename: "105070.jpg",
				price: 75.0
		  },
		  quantity: 3
	},
	{
		  product: {
				title: "View of Houses in Delft",
				filename: "106060.jpg",
				price: 125.0
		  },
		  quantity: 1
	},
	{
		  product: {
				title: "Woman Reading a Letter",
				filename: "106050.jpg",
				price: 100.0
		  },
		  quantity: 2
	},      
];

function CalculateTotal(quantity, price){
	let total = quantity * price 
	return total
}
function CalculatebottomTable(){
	let subTotal = CalculateTotal(cart[0].quantity, cart[0].product.price) + CalculateTotal(cart[1].quantity, cart[1].product.price) + CalculateTotal(cart[2].quantity, cart[2].product.price)
	let table = document.getElementById("table-fill")
	
	var row = table.insertRow(4);

	row.className = "totals"
	var cell0 = row.insertCell(0);
	var cell1 = row.insertCell(1); //subtotal
	cell0.colSpan = "4"
	cell0.innerHTML = "Subtotal" 
	cell1.innerHTML =  "$" + subTotal.toFixed(2)

	var row2 = table.insertRow(5);
	row2.className = "totals"
	var cell0 = row2.insertCell(0);
	var cell1 = row2.insertCell(1); //tax

	cell0.colSpan = "4"
	cell0.innerHTML = "Tax" 
	cell1.innerHTML =  "$" + (subTotal * tax_rate).toFixed(2)

	var row3 = table.insertRow(6);
	row3.className = "totals"
	var cell0 = row3.insertCell(0);
	var cell1 = row3.insertCell(1); //shipping

	cell0.colSpan = "4"
	cell0.innerHTML = "Shipping" 
	let priceOfShipping = 40;
	if (subTotal > shipping_threshold){
		priceOfShipping = 0;
	}
	cell1.innerHTML ="$" + priceOfShipping.toFixed(2)

	var row4 = table.insertRow(7);
	row4.className = "totals"
	var cell0 = row4.insertCell(0);
	var cell1 = row4.insertCell(1); //Grand Total

	cell0.colSpan = "4"
	cell0.innerHTML = "Grand Total" 

	cell1.innerHTML = "$" + ((subTotal * tax_rate) + priceOfShipping + subTotal).toFixed(2)

}

function outputCartRow(item, total){
	let table = document.getElementById("table-fill")


	for (let i = 0; i < cart.length; i++) {
		var row = table.insertRow(i + 1); 
		var cell0 = row.insertCell(0); // Picture	
		var cell1 = row.insertCell(1); // Title
		var cell2 = row.insertCell(2); // Quantity
		var cell3 = row.insertCell(3); // Price
		var cell4 = row.insertCell(4); //Amount
		let img = "<img src=/images/" + cart[i].product.filename + "/>";

		cell0.innerHTML = img;
		cell1.innerHTML = cart[i].product.title // product
		cell2.innerHTML = cart[i].quantity // quantity
		cell3.innerHTML = '$' + cart[i].product.price.toFixed(2) // price
		cell4.innerHTML = '$' + CalculateTotal(cart[i].quantity, cart[i].product.price).toFixed(2)
	 
		
		
	}

	
}



