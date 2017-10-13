
   var headers = {
       headers: {
         // https://www.base64encode.org/
         // You need to do a base64 encoding of your client_id:clinet_secret
           "Authorization": "Basic Y2Y4MjM2NWFlOGE5NGE2MGFhMWUwZTFmZGY2ZGNkYzM6YWViY2Q2OWVkZDk3NDA1ZjgzZTgzFjZDg4NmM5MjM=",
           "Content-Type": "application/x-www-form-urlencoded"
       }
   }

   var body = {
       grant_type: "client_credentials"
   }
   // We supply our body parameters through the url.  That's what the x-www-form-urlencoded section is doing.
   axios.post('https://accounts.spotify.com/api/token?grant_type=clinet_credentials', null , headers).then(response => {
     // We can set the token on the app to be used in other requests.
     app.set('token', response.data.access_token);
     console.log(response.data);
   }).catch(err => {
       console.error(err);
   })
