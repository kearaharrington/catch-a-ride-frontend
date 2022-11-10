# Catch A Ride (United States)

Catch-A-Ride is an American online marketplace for carpooling. Our website connects drivers and passengers willing to travel together between cities at an agreed upon price.


# Catch A Ride App

Visit Catch A Ride app website at: <a href=""> Catch-A-Ride</a>
<hr />

## Getting Started

`1` `Fork` & `Clone` this repo to your local computer.

`2` Install the current dependencies that are listed inside of `package.json`
```text
npm install
```
<hr />

## Technologies

* React App
* Deployed to `Heroku`
* `GraphQL`
* `MongoDB` 

<hr />

## What it includes

* Settings for `MongoDB`, `Mongoose`
* Passport and passport-local for authentication
* Flash messages for errors and successes
* EJS Templating and EJS Layouts

<hr />

## WireFrame
<img width="1239" alt="WireFrameP3" src="https://user-images.githubusercontent.com/106926062/200982556-15df1df5-28ba-486d-a072-e06e6c6a1c24.png">


<hr />

## User Stories

* As a user, I want to be able to search for existing travelers headed to the same destination and then request to join their ride depending on their available seats. I would also like to create my own journeys and accept passengers who send requests; depending on how much $ they have to contribute.

<hr />

## App Pictures

* Map Search / Home Page
<img width="782" alt="Screen Shot 2022-11-09 at 4 16 59 PM" src="https://user-images.githubusercontent.com/106926062/200979586-805639cc-d3fb-46e0-8c07-c484d3b1f4e6.png">

<br/>

* Profile Page
<img width="969" alt="Screen Shot 2022-11-09 at 4 09 33 PM" src="https://user-images.githubusercontent.com/106926062/200979557-bbc75088-00eb-4052-80be-a969dcba3ee9.png">

<br/>

* Add vehicle
<img width="969" alt="Screen Shot 2022-11-09 at 4 13 00 PM" src="https://user-images.githubusercontent.com/106926062/200979564-5085bbc5-3e5a-4105-8a30-2f07d9dc3f67.png">

<br/>

* journey Form page
<img width="797" alt="Screen Shot 2022-11-09 at 4 13 24 PM" src="https://user-images.githubusercontent.com/106926062/200979572-12beaf64-fe93-4169-9487-ee2166538507.png">

<br/>

* Request Form page
<img width="797" alt="Screen Shot 2022-11-09 at 4 13 29 PM" src="https://user-images.githubusercontent.com/106926062/200979575-312db5c5-de82-4b3b-8a6c-7bfb00395c7b.png">

<br/>

* Journey Details page
<img width="797" alt="Screen Shot 2022-11-09 at 4 16 39 PM" src="https://user-images.githubusercontent.com/106926062/200979579-cf23dba7-02f2-4c0a-bcc1-e7386505242f.png">

<br/>



<hr />

## API's used

* Third party API: 
<br/>
<a href="https://suite.imagin.studio/?&customer=usalejandromorenocompany&make=abarth&modelFamily=124-spider&modelRange=124-spider&modelVariant=ca&modelYear=2018&powerTrain=fossil&transmission=0&bodySize=2&trim=0&paintId=imagin-grey">Vehicle Api</a>
<br/>
<a href="https://developers.google.com/maps/apis-by-platform">Google Maps Api</a>

## Developers 

<div align="center">
 <h3> David Escotto </h3>
    <a href="https://github.com/Descotto">
    <img src="https://i.imgur.com/Crnv0HA.jpg"
      alt="Contributors"
      width="15%" target="_blank"/> 
  </a>
   <h3> Keara Harrington </h3>
    <a href="https://github.com/kearaharrington">
    <img src="https://i.imgur.com/JVs443j.jpg"
      alt="Contributors"
      width="15%" target="_blank"/>
  </a>
   <h3> Calvin Moldenhauer </h3>
  <a href="https://github.com/Calvickauer">
    <img src="https://i.imgur.com/ZLZ3EaT.jpg"
      alt="Contributors"
      width="15%" target="_blank"/>
    </a>
  </a>
    <h3> Alejandro Moreno </h3>
    <a href="https://github.com/amoreno16003">
    <img src="https://i.imgur.com/83FhrYR.jpg"
      alt="Contributors"
      width="15%" target="_blank"/>
  </a>
</div>

# Catch A Ride Future Improvements:
To Improve
```
- [ ] Mark journeys as complete/expired after the date passes
- [ ] Add gender to User model
- [ ] Filter search by driver gender
- [ ] Search Journeys instead of displaying all
- [ ] Mark messages read
- [ ] Remove “accept passenger” button after it is clicked
- [ ] Prevent a user from being added as a passenger twice
- [ ] Prevent user from selecting a date in the past for their Journey/Ride Request
- [ ] Add ability to get directions
- [ ] Add ability to reply to messages
- [ ] Display replies to messages
- [ ] Alerts for new messages
- [ ] Specify max passengers and mark journey full when max is reached
```

| Components | Links to Code | Description |
| --- | --- | --- |
| `App`| [`App`](https://github.com/calvickauer/catch-a-ride-frontend#app-component) | The component that manages the entire app |
| `Signup`| [`Signup`](https://github.com/calvickauer/catch-a-ride-frontend/blob/main/docs/signup.md) | Allow the user to signup |
| `Login`| [`Login`](https://github.com/calvickauer/catch-a-ride-frontend/blob/main/docs/login.md) | Allows the user to login to the app |
| `Navbar`| [`Navbar`](https://github.com/calvickauer/catch-a-ride-frontend/blob/main/docs/navbar.md) | Make `App` class component |
| `Profile`| [`Profile`](#) | A component that displays the user profile information |
| `setAuthToken`| [`setAuthToken`](https://github.com/romebell/catch-a-ride-frontend/blob/main/docs/setAuthToken.md) | A utility function that adds a token to the `Authentication` header to manage current user |
| `About`| [`About`](https://github.com/romebell/catch-a-ride-frontend/blob/main/docs/other-components.md#about) | A component that decribes the app |
| `Footer`| [`Footer`](https://github.com/romebell/catch-a-ride-frontend/blob/main/docs/other-components.md#footer) | A footer that goes on each component |
| `Welcome`| [`Welcome`](https://github.com/romebell/catch-a-ride-frontend/blob/main/docs/other-components.md#welcome) | A welcome page for the user |
| `Welcome`| [`Welcome`](https://github.com/romebell/catch-a-ride-frontend/blob/main/docs/other-components.md#welcome) | A welcome page for the user |
| `Welcome`| [`Welcome`](https://github.com/romebell/catch-a-ride-frontend/blob/main/docs/other-components.md#welcome) | A welcome page for the user |
| `Welcome`| [`Welcome`](https://github.com/romebell/catch-a-ride-frontend/blob/main/docs/other-components.md#welcome) | A welcome page for the user |
| `Welcome`| [`Welcome`](https://github.com/romebell/catch-a-ride-frontend/blob/main/docs/other-components.md#welcome) | A welcome page for the user |
| `Welcome`| [`Welcome`](https://github.com/romebell/catch-a-ride-frontend/blob/main/docs/other-components.md#welcome) | A welcome page for the user |

### `App Component`

### Imports for `App`

```jsx
// Imports
import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';

// CSS
import './App.css';

// Components
import Signup from './components/Signup';
import About from './components/About';
import Footer from './components/Footer';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import VisitProfile from './components/VisitProfile';
import GoogleApiWrapper from './components/Welcome';
import Vehicle from './components/VehicleForm';
import JourneyOrRideForm from './components/JourneyOrRideReq';
import JourneyDetails from './components/JourneyDetails';
import Message from './components/MessageForm';
import VehicleEdit from './components/VehicleEdit';
import JourneyEdit from './components/JourneyEdit';
import Inbox from './components/Inbox';
import ProfileEdit from './components/ProfileEdit';
import Notfound from './components/404';
```

### `useState` inside `App.js`

```jsx
function App() {
  // Set state values
  const [currentUser, setCurrentUser] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(true);
}
```

### `useState` inside `Image.js`

```jsx
// State Values
 const [state, setState] = useState({
    profileImg: ''
 })
```

### `useState` inside `ImageContainer.js`

```jsx
const[img, setImg] = useState('');
    const[photoId, setPhotoId] = useState(props.photoId)
  ```

  ### `useState` inside `Inbox.js`

  ```jsx
  const [journeys, setJourneys] = useState([]);
  const [journeyId, setJourneyId] = useState([]);
  const [messages, setMessages] = useState([]);
  const [redirect, setRedirect] = useState(false);
  ```

  ### `useState` inside `JourneyDetails.js`

  ```jsx
    const [journey, setJourney] = useState();
    const { id } = useParams();
    const [redirect, setRedirect] = useState(false);

  
  ```

   ### `useState` inside `JourneyEdit.js`

  ```jsx
    const [journey, setJourney] = useState({
        origin: '',
        destination: '',
        contribution: '',
        openSeats: '',
        date: ''
    });
    const [passengerUids, setPassengerUids] = useState([])
    const { id } = useParams();
    const [redirect, setRedirect] = useState(false);

  
  ```

  ### `useState` inside `JourneyForm.js`

  ```jsx
    const [journey, setJourney] = useState({
        origin: '',
        destination: '',
        contribution: '',
        openSeats: '',
        date: ''
    });
    const [redirect, setRedirect] = useState(false);
    const [journeyId, setJourneyId] = useState('');

  
  ```

  ### `useState` inside `JourneyOrRideReq.js`

  ```jsx
  const [driver, setDriver] = useState(true);
  
  ```

  ### `useState` inside `Login.js`

  ```jsx
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
  ```

  ### `useState` inside `MessageForm.js`

  ```jsx
    
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [redirect, setRedirect] = useState(false);
  
  ```

  ### `useState` inside `Profile.js`

  ```jsx
   const [reviewsArr, setReviewsArr] = useState([]);
   const [profilePic, setProfilePic] = useState('');
  
  ```

  ### `useState` inside `ProfileEdit.js`

  ```jsx
    const { user, setUser } = props;
    const [redirect, setRedirect] = useState(false);
  
  ```

  ### `useState` inside `ProfilePic.js`

  ```jsx
    const[img, setImg] = useState('');
    const[photoId, setPhotoId] = useState(props.photoId)
  
  ```

  ### `useState` inside `ReviewsForm.js`

  ```jsx
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [redirect, setRedirect] = useState(false);
    const [id, setId] = useState('');

  
  ```


  ### `useState` inside `RideReqForm.js`

  ```jsx
    const [journey, setJourney] = useState({
        origin: '',
        destination: '',
        contribution: '',
        openSeats: '',
        date: ''
    });
    const [redirect, setRedirect] = useState(false);
    const [journeyId, setJourneyId] = useState('');
  
  ```


  ### `useState` inside `ShowVehicle.js`

  ```jsx
    const [results, setResults] = useState('');
  
  ```


  ### `useState` inside `Signup.js`

  ```jsx
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [redirect, setRedirect] = useState(false);
  
  ```


  ### `useState` inside `VehicleEdit.js`

  ```jsx
    const [vehicle, setVehicle] = useState({        
        make: '',
        model: '',
        year: '',
        seats: '',
        // date: ''
    });
    const [redirect, setRedirect] = useState(false);
  
  ```


  ### `useState` inside `VehiclesForm.js`

  ```jsx
    const [make, setMake] = useState('');
    const [model, setModel] = useState('');
    const [seats, setSeats] = useState('');
    const [year, setYear] = useState('');
    const [results, setResults] = useState('');
    const [url, setUrl] = useState('');
    const [redirect, setRedirect] = useState(false);

  
  ```

  ### `useState` inside `Vehicles.js`

  ```jsx
    const [make, setMake] = useState('');
    const [model, setModel] = useState('');
    const [seats, setSeats] = useState('');
    const [year, setYear] = useState('');
    const [results, setResults] = useState('');
    const [url, setUrl] = useState('');
    const [redirect, setRedirect] = useState(false);

  
  ```

  ### `useState` inside `VisitProfile.js`

  ```jsx
    const [ tuser, setTuser ] = useState({});
    const { idx } = useParams();
    const [reviewsArr, setReviewsArr] = useState([]);
    const [profilePic, setProfilePic] = useState([]);
  
  ```

  ### `useState` inside `Welcome.js`

  ```jsx
      this.state = {
      // for google map places autocomplete
      origin: '',
      destination: '',

      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
  
      mapCenter: {
        lat: 32.715738,
        lng: -117.1610838
      }
  ```
