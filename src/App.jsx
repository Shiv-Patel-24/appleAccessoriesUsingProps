import './App.css'
import Navbar from './Navbar'
import Poster from './Poster'
import Product from './Product'
import ItemProduct from './ItemProduct'
import Title from './Title'
// import Mother from './Mother'
import Delete from './Delete'
import FeaturediPhone from './FeaturediPhone'
import Footer from './Footer'

function App() {
  

 return (
  <>
    <Navbar />
    <Title  title="Accessories"/>
    <Poster title="Accessorize  in a snap" info="Find a MagSafe case, wallet, or charger that's right for you" button="Shop MagSafe"/>
    <Product />
    {/* <Mother small ="New" info="iphone 16e Silicone Case- Fuchsia"/> */}

    {/* <Delete /> */}
    <FeaturediPhone header="Featured iPhone Accessories" 
    image1="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MDGR4?wid=532&hei=582&fmt=png-alpha&.v=bXQvcU1lQTg0UStaSzdHb1dtZWoxQUhqc0NvK2RZTVd5TWVhUDFuQlo0MVptZG9ZaDhLMkJpN2ZaUituUFVMNHI0azhUYWliOU1iV0NuNnloZndPQlE"
    firstTitle = "iPhone 16 Plus Silicone Case with Magsafe-Peony"
    price1="$49.00"
    

    image2="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MA7E4?wid=532&hei=582&fmt=png-alpha&.v=YUh1WmZPWkw0dEhkbkZIdTkvaEJEQUhqc0NvK2RZTVd5TWVhUDFuQlo0MkhoU3N5YWlZTnh5R3ZKWVM3RHkybU9wbjdVczVOaXdLa0tZc2FheFJSTHc"
    secondTitle = "iPhone 16 Pro Clear Case with Magsafe"
    price2="$49.00"

    image3="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MD3Q4?wid=532&hei=582&fmt=png-alpha&.v=anNmdTZ3NkgzbktVV0JyamhOd3J2QUhqc0NvK2RZTVd5TWVhUDFuQlo0MUpGT0J3WDRydHdiVWx6eGtJQmdHUGhpdm9UcXU4MWdiN05PY0xuS0dldlE"
    lastTitle = "iPhone 16e Silicone Case - Winter Blue"
    price3="$39.00"
    moreItems="Show all iPhone accessories"

    />


    <FeaturediPhone header="Featured iPad Accessories" 
    image1="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MUWA3?wid=532&hei=582&fmt=png-alpha&.v=MWxxejZka05YVWIrWnl0NXZuUklYQUhqc0NvK2RZTVd5TWVhUDFuQlo0MGorUDVBOUI1cTBZQVBWUytzNUoxSEdTU21VeUx6cEpCL0VEQm9uN1FQSlE"
    firstTitle = "Apple Pencil (USB-C)"
    price1="$79.00"

    image2="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MQDP3?wid=532&hei=582&fmt=png-alpha&.v=ekdNWGRyOTZjVmxDTTNjRzZ6ZnIzZ0hqc0NvK2RZTVd5TWVhUDFuQlo0MDB0Y0lkeVg2OHRld3lCWVNZZVFRRXVTbDlvM1pMVlNzZEJDMFh0bDl2RlE"
    secondTitle = "Magic  Keyboard Folio for iPad (A16)"
    price2="$242.00"

    image3="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MDEQ4?wid=532&hei=582&fmt=png-alpha&.v=RDlibjM5YWlnVnJJd01aVDBHWmpNQUhqc0NvK2RZTVd5TWVhUDFuQlo0M2xaSUF5TlhjbHFERCtLWTV0WkE5MzFSS1RsVmppTFZ3UlU1RzBzaU9Pd1E"
    lastTitle = "Smart Folio for iPad (A16) - Sky"
    price3="$79.00"
    moreItems="Show all iPhone accessories"
    />

    <FeaturediPhone header="Apple Watch Bands" 
    image1="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MDWF4ref?wid=532&hei=582&fmt=png-alpha&.v=UitUOEdkNWdjNEtMVjNTR2RkTTMxMUxrd3NRTzUwSGh2QVAzV3JWV0JLZVRpZGJOeG1CT1NkNThkakJ2Zk1WYmVQME5TTzhCS2h5RnBUN3c5c0UrRkE"
    firstTitle = "46mm Pride Edition Sport Band - M/L"
    price1="$49.00"

    image2="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MDV54?wid=532&hei=582&fmt=png-alpha&.v=WEFsc0twRGdlZk8rRDdNQUNPTTJLQUhqc0NvK2RZTVd5TWVhUDFuQlo0M1V0OFRXMXBKeWJVdGh0b28vdkJvVm1mMG52WEZxZ3VRV1dLL1pja1dtTUE"
    secondTitle = "46mm Periwinkle Sport Loop"
    price2="$49.00"

    image3="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MDT54ref?wid=532&hei=582&fmt=png-alpha&.v=b3M5R09kYnh0WTExY0pHUFdsdVB6Vkxrd3NRTzUwSGh2QVAzV3JWV0JLZmh6QUZBNlVUR2RYcjYyR2hPZE5xc3FZQlh5Q2tFR2UyL3pvZEQyUGo1b0E"
    lastTitle = "46mm Tangerine Sport Band - M/L"
    price3="$79.00"
    moreItems="Show all bands "
    />

    <FeaturediPhone header="Featured Mac Accessories" 
    image1="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYJG3?wid=532&hei=582&fmt=png-alpha&.v=SHVlSjJvdTBva0FVeEhhNVAzaVZQd0hqc0NvK2RZTVd5TWVhUDFuQlo0MDk4dHRvbitMTzJyVUpJTUtNdWlxZUovM3pNQUsvU0hWcll5UWtzNW1TekE"
    firstTitle = "Studio Display"
    price1="$1599.00"

    image2="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXK83?wid=532&hei=582&fmt=png-alpha&.v=eFlJa0thaHg0Zk5Uc3lIcElEZThBZ0hqc0NvK2RZTVd5TWVhUDFuQlo0MWlQcU93cWwvb0J4b2lHc01aQ3FTRmpTVDErb2pvVFNyNGl4TzdpOGhXQnc"
    secondTitle = "Magic Keyboard with Touch ID and Numeric Keypad"
    price2="$199.00"

    image3="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXK63?wid=532&hei=582&fmt=png-alpha&.v=QnNzVEw4ZWFrcDAyd0dVR2h6eGpMUUhqc0NvK2RZTVd5TWVhUDFuQlo0MFgyc013MCtPWGVtdXJJZ0RZeUVsYTAyRDl6R2VMekg2TUo4L1RVSE5EZ2c"
    lastTitle = "Magic Mouse"
    price3="$99.00"
    moreItems="Show all Mac accessories"
    />

    <FeaturediPhone header="Sound Essentials" 
    image1="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airpods-pro-2-hero-select-202409?wid=532&hei=582&fmt=png-alpha&.v=WTk1dTl5UTBnZXdKN2tua2pFb1hvQ3hmVXd6RnorM2pzUlRIKzNkUEN0Um5ybFVoUG5ONDlkK2JkbHErdVFSNVM0TjRWdzF2UjRGVEY0c3dBQVZ6VFlzTzMzTWtab2pIeHlsaExOT2tuUjQ"
    firstTitle = "AirPods Pro 2"
    price1="$249.00"

    image2="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airpods-4-anc-select-202409?wid=532&hei=582&fmt=png-alpha&.v=Qklmb1JJend3cVIxSUxIeFBIRk96bThJMURFZUhTTm9tejgvK2t1SGM0Z2o5Z1E1ellDTTZFb0JncEN1V1JWSkoyZWdNMk9CcVkreUdEWkc5LzhTdmhnYWU4aDlESWZ0ano5VnZaZFRrblU"
    secondTitle = "AirPods 4 with Active Noise Cancellation"
    price2="$179.00"

    image3="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airpods-max-select-202409-midnight?wid=532&hei=582&fmt=png-alpha&.v=azQxRkVJKzd6V3J0aGNqWFhLMzBmdmVWNWdHYnp5cHkwMldsSElEOHpydzVnNEpSU25rZDdFWXRRajVqcEhqRlNIVjdYdVpHUzVnakg0UTYvWXlHaWNzNkh1dXhBL3hoTFhpMitUTmx4MTMrNmVjbmk5c1V4VVk2VEt3TGcxekg"
    lastTitle = "AirPods Max - Midnight"
    price3="$549.00"
    moreItems="Show Headphones and Speakers"
    />

    <FeaturediPhone header="AirTag" 
    image1="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airtag-single-select-202104?wid=532&hei=582&fmt=png-alpha&.v=a2ZqcUtUS1VMaUZQNkl6T3JzY1ZmM2VtMnRWRDBsa0dSNys0czlzRGpsWWo5Z1E1ellDTTZFb0JncEN1V1JWSlZteGEzNVp4NTM3L3RtY2xQVFhwMWxuQThqMldCYkZ6ak1jOFJtRHRHZ0U"
    firstTitle = "AirTag"
    price1="$29.00"

    image2="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airtag-4pack-select-202104?wid=532&hei=582&fmt=png-alpha&.v=QVI2eUgvdU1qT1VRdEZUOXVUVHgrWFlsRFpuU0J3NGtvQ1NzNjRLc0t4MktnZmtxNjIrTXJQRDA5VVdUdkt0QS9kWjB1cnAzR2MwQ3NwMzZ2T2hsbURrWERwZnF6bTdoQmF6dTREZGNSOWM"
    secondTitle = "AirTag 4 pack"
    price2="$99.00"

    image3="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MA7K4?wid=532&hei=582&fmt=png-alpha&.v=cEs0dGdQaGVnVWtVcEpiQTd0VllRUUhqc0NvK2RZTVd5TWVhUDFuQlo0Mk5pOFlxQXRBVTRaTmo1d3ZFa241aGZNZnZENjRyZ09reEx4QkVBaWt4UHc"
    lastTitle = "AirTag FineWoven Key Ring - Blackberry"
    price3="$35.00"
    />

    <Footer/>
    
  </>
 )
}

export default App


{/* <Mother info="iphone 16e Silicone Case- Fuchsia"/>
    <Mother info="iphone 16e Silicone Case- Fuchsia"/> */}
    {/* <ItemProduct image="" model="Mac"/> */}