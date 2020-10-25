import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container } from '@material-ui/core'

// Import Pages
import HomePage from './pages/HomePage';
import AlbumDetails from './components/Album/AlbumDetails';
import ArtistPage from './pages/ArtistPage';
import ArtistDetails from './components/Artist/ArtistDetails';
// import ForgotPassword from './components/Auth/ForgotPassword';
import AboutPage from './pages/AboutPage';

// Import Layout Components
import MenuAppBar from './components/layout/MenuAppBar';
import NavBar from './components/layout/NavBar';
import AppStatus from './components/layout/AppStatus';

// ADD FOOTER HERE

// Sign IN/UP Components
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import AlbumForm from './components/Album/AlbumForm';
import ArtistForm from './components/Artist/ArtistForm';

export default function App() {
    return (
      <>
        <BrowserRouter>
          <MenuAppBar />
          <Container maxWidth="md">
            <AppStatus />
            <NavBar />
                <Switch>
                    <Route exact path="/" component={HomePage} /> 
                    <Route path="/album/:_id" component={AlbumDetails} />
                    <Route path="/addalbum" component={AlbumForm} />
                    <Route path="/artists" component={ArtistPage} />
                    <Route path='/artist/:_id' component={ArtistDetails} />
                    <Route path="/addartist" component={ArtistForm} />
                    <Route path="/about" component={AboutPage} />
                    <Route path="/signin" component={SignIn} />
                    <Route path="/signup" component={SignUp} />
                    <Route path="/forgotpassword" component={ForgotPassword} />
                </Switch>
          </Container>
        </BrowserRouter>  
      </>
    );
}
