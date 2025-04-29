import './App.css'
import Navbar from './Navbar'
import Poster from './Poster'
import Product from './Product'
import ItemProduct from './ItemProduct'
import Title from './Title'

function App() {
  

 return (
  <>
    <Navbar />
    <Title  title="Accessories"/>
    <Poster title="Accessorize  in a snap" info="Find a MagSafe case, wallet, or charger that's right for you" button="Shop MagSafe"/>
    <Product />
    <ItemProduct image="<i class='fa-solid fa-laptop'></i>" model="Mac"/>
  </>
 )
}

export default App
