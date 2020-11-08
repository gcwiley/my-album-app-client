import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container } from '@material-ui/core'

// Import Pages
import HomePage from './pages/HomePage';
import AlbumDetails from './components/Album/AlbumDetails';
import ArtistPage from './pages/ArtistPage';
import ArtistDetails from './components/Artist/ArtistDetails';
import AboutPage from './pages/AboutPage';

// Import Layout Components
import MenuAppBar from './components/Layout/MenuAppBar';
import NavBar from './components/Layout/NavBar';
import StatusBar from './components/Layout/StatusBar';
import Footer from './components/Layout/Footer';

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
            <StatusBar />
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
                </Switch>
          </Container>
          <Footer />
        </BrowserRouter>  
      </>
    );
}
