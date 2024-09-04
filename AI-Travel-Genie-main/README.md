 # Link:-
[AI Travel Genie](https://ai-travel-genie-ipk2.vercel.app/)


  
# Trip Planner App  :earth_asia:	:mountain_snow:

<div style="text-align: center;"> 
 
## :star: Developed a Fullstack AI Trip Planner with React, Gemini AI, TailwindCSS & Firebase
 


  ### Features: 

- Environment,Vite set up
- Firebase, Database creation
- Google Authentication
- Generate Trip From Gemini AI
- React Routing
- Shadcn/ui
- React Google Autocomplete
- Display place photo using Google Photo API
- Full responsiveness on all pages
- Deploy App on Vercel


<br />


## About the Project  :star2:
![11](https://github.com/user-attachments/assets/81bdf33b-95b8-4ba0-b7f6-ab517ec54690)
![3](https://github.com/user-attachments/assets/3d648acd-0c95-4d80-a257-4f1395edade7)
![2](https://github.com/user-attachments/assets/35b35f6e-dbe2-4a3d-88a0-c14536688a4e)
![1](https://github.com/user-attachments/assets/48151eb5-770f-4d8b-8149-c28a12a6fa39) 

<br />





## Installation

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Steps

1. **Clone the Repository**



2. **Install Dependencies**

    ```sh
    npm install    
    ```

3. **Run the Application**

    ```sh
    npm run dev
    ```

## Firebase Setup

1. **Create a Firebase Project**

    - Go to the [Firebase Console](https://console.firebase.google.com/)
    - Click on "Add project" and follow the instructions

2. **Add Firebase to Your Web App**

    - Navigate to Project Settings > General
    - Under "Your apps", click on the Firebase SDK snippet for your web app
    - Copy the Firebase config object

3. **Configure Firebase in Your Project**

    - Create a `.env` file in the root of your project
    - Add your Firebase config:

    ```env
    VITE_FIREBASE_API_KEY=your-api-key
    VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
    VITE_FIREBASE_PROJECT_ID=your-project-id
    VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
    VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
    VITE_FIREBASE_APP_ID=your-app-id
    ```


## React OAuth Google Setup

1. **Install the Package**

    ```sh
    npm install react-oauth/google
    ```

2. **Configure Google OAuth**

    - Go to the [Google Cloud Console](https://console.cloud.google.com/)
    - Create a new project or select an existing one
    - Navigate to APIs & Services > Credentials
    - Create OAuth 2.0 Client IDs for your application

3. **Set Up Environment Variables**

    - Add the following to your `.env` file:

    ```env
    VITE_GOOGLE_CLIENT_ID=your-google-client-id
    ```

4. **Implement Google OAuth in Your App**

    - Add the following code to your main application file, e.g., `src/App.js`:

    ```javascript
    import React from 'react';
    import { GoogleOAuthProvider } from '@react-oauth/google';
    import YourComponent from './YourComponent';

    const App = () => {
      return (
        <GoogleOAuthProvider clientId={process.env.VITE_GOOGLE_CLIENT_ID}>
          <YourComponent />
        </GoogleOAuthProvider>
      );
    };

    export default App;
    ```

## Setup .env file
### :key: Environment Variables


```js
VITE_GOOGLE_PLACES_API_KEY
VITE_GOOGLE_GEMINI_AI_API_KEY
VITE_GOOGLE_AUTH_CLIENT_ID
```





