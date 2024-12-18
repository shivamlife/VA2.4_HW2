console.log('Hello!');
const product = document.getElementById('product');
const quantity = document.getElementById('quantity');
const btn = document.getElementById('btn');
const address = document.getElementById('address');
const deliverySpeed = document.getElementById('deliverySpeed');
const output = document.getElementById('output');

btn.addEventListener('click', () => {
  const pro = product.value;
  const quan = quantity.value;
  const add = address.value;
  const ds = deliverySpeed.value;
  const payment = document.querySelector('input[name="method"]:checked').value;
  const val = `<h1>Order Details</h1>
  <p><strong>Product Name:${pro}</strong></p>
  <p><strong>Quantity:${quan}</strong></p>
  <p><strong>Address:${add}</strong></p>
  <p><strong>Payment Method:${payment}</strong></p>
  <p><strong>Delivery Speed:${ds}</strong></p>
  `;
  output.innerHTML = val;
  console.log(pro, add, payment, ds, quan);
});
