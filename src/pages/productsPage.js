import React, {useState} from 'react';
import useWindowSize from '../components/hooks/useWindowSize';
import MyCounter from '../components/mycounter';

const productFromServer = [
	{
	  id: 100,
	  title: 'Iphone 203',
	  price: 12000,
	  rest: 10,
	  cnt: 1
	},
	{
	  id: 101,
	  title: 'Samsung AAZ8',
	  price: 22000,
	  rest: 5,
	  cnt: 1
	},
	{
	  id: 103,
	  title: 'Nokia 7710',
	  price: 5000,
	  rest: 2,
	  cnt: 1
	},
	{
	  id: 105,
	  title: 'Huawei ZZ',
	  price: 15000,
	  rest: 8,
	  cnt: 1
	}
 ];

const ProductsPage = () => {

let windowSize = useWindowSize();
let [products, setProducts] = useState(productFromServer);
let total = products.reduce((acc, pr) => acc + pr.price * pr.cnt, 0);

let changeCnt = (id, cnt) => {
  setProducts(products.map(pr => pr.id !== id ? pr : { ...pr, cnt }));
}
let remove = (id) => {
  setProducts(products.filter(pr => pr.id !== id));
}

let productsRows = products.map(pr => (
  <tr key={pr.id}>
	 <td>{pr.title}</td>
	 <td>{pr.price}</td>
	 <td>
		<MyCounter 
		max={pr.rest} 
		current={pr.cnt}
		onChange={val => changeCnt(pr.id, val)} 
		key={pr.rest}
		/>
	 </td>
	 <td>{pr.cnt * pr.price}</td>
	 <td>
		<button type='button' onClick={() => remove(pr.id)}>X</button>
	 </td>
  </tr >
));

return (
<div>
	<header>
		header
	</header>
	<main>
		<h1>Cart</h1>
		<hr />
		<table>
		  <thead>
			<tr>
				<td>Title</td>
				<td>Price</td>
				<td>Count</td>
				{windowSize.width > 700 && <td>Total</td>}
			</tr>
		  </thead>
		  <tbody>
			 {productsRows}
		  </tbody>
		</table>
		<div>
		  <strong>{total}</strong>
		</div>
	 </main>
	 <footer>
		
	 </footer>
  </div>
)};

export default ProductsPage;