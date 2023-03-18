// import MainTodoLayout from './TodoApp/Layout/index'
// import RestaurantLayout from './Restaurant/components/index'
// import DropDown from './DropDown';
import './App.css'
// import Layout from './DropDownWithApi/Layout'
// import MainPage from './Practice/Components/index'
import { Container } from '@mui/material';
// import Layout from './PracticTodo/layouts';
// import BasicSwitches from './Practice/SwitchButton'
// import MainCloths from './Practice/ClothsList';
import ProductMainpage from './Practice/Product'
import PaginationIndex from './Practice/Pagination'
function App() {
  return (
    <div className="App">
      {/* <MainTodoLayout/> */}
      {/* <RestaurantLayout/> */}
      {/* <Layout/> */}
      {/* <Layout/> */}
      {/* <DropDown/> */}
      <Container>
      {/* <MainPage/>
      <BasicSwitches/> */}
      {/* <Main  desc="ram at home"/> */}
      {/* <MainCloths/> */}
      <ProductMainpage/>
      <PaginationIndex/>
      </Container>
    </div>
  );
}

export default App;
