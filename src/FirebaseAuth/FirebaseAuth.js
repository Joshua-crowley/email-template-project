const firebaseConfig = {
  apiKey: "AIzaSyBv0annVoq5z7DtwIPwaZQ7PaboEqnMbn0",
  authDomain: "josh-ginger-project.firebaseapp.com",
  databaseURL: "https://josh-ginger-project.firebaseio.com",
  projectId: "josh-ginger-project",
  storageBucket: "josh-ginger-project.appspot.com",
  messagingSenderId: "861032287817",
  appId: "1:861032287817:web:74adbe2fb1cb0f0bd47998"
};

firebase.initializeApp(config);
firebase.firestore();
export default firebase;