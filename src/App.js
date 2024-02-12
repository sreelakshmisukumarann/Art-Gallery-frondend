import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import LoginRegister from './components/LoginRegister';
import Header from './components/Header/Header';
import Artist from './pages/Artist/Artist';
import Artwork from './pages/Artwork/Artwork';
import Checkout from './pages/Checkout/Checkout';
import ViewArtist from './pages/Artist/ViewArtist';
import ArtistDashboard from './components/Artistpage/ArtistDashboard';
import AdminDashboard from './pages/Admin/AdminDashboard';
import AdminSidebar from './pages/Admin/AdminSidebar';
import Addwork from './pages/Addwork';
import AddArtWork from './pages/Artist/AddArtWork';
import AddArtistDetails from './pages/Artist/AddArtistDetails';
import AdminLogin from './pages/Admin/Login/AdminLogin';
import AdminArtDisplay from './pages/Admin/Login/AdminArtDisplay';
import AdminUserDisplay from './pages/Admin/AdminUserDisplay';
import Wishlist from './pages/Wishlist';
import Cart from './pages/Cart';
import AdminArtisView from './pages/Admin/AdminArtisView';

function App() {
  
  return (
    <div className="App">
      {/* <Header/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<LoginRegister/>}/>
        <Route path='/register' element={<LoginRegister register/>}/>
        <Route path='/artist' element={<Artist/>}/>
        <Route path='/artwork' element={<Artwork/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/view-artist/:id' element={<ViewArtist/>}/>
        <Route path='/artist-dashboard' element={<ArtistDashboard/>}/>
        <Route path='/admin-dashboard' element={<AdminDashboard/>}/>
        <Route path='/admin-sidebar' element={<AdminSidebar/>}/>
        {/* <Route path='/add-work' element={<Addwork/>}/> */}
        <Route path='/addwork' element={<AddArtWork/>}/>
        <Route path='/add-profiledetails' element={<AddArtistDetails/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
        <Route path='/cart' element={<Cart/>}/>



        <Route path='/admin-login' element={<AdminLogin/>}/>
        <Route path='/adminview-work' element={<AdminArtDisplay/>}/>
        <Route path='/adminview-userlist' element={<AdminUserDisplay/>}/>
        <Route path='/adminview-artist' element={<AdminArtisView/>}/>


      </Routes>
    </div>
  );
}

export default App;
