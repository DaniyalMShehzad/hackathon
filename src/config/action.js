// function saveData() {
//     const db = getDatabase();
//     const newPostKey = push(child(ref(db), 'users')).key;
//     set(ref(db, 'users/' + newPostKey), {
//     })
//     .then(() => {
//       // Data saved successfully!
//       console.log("success");
      
//     })
//     .catch((error) => {
//       // The write failed...
//     });
//   }