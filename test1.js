phantom.addCookie ({  
   //adding cookie with addcookie property 
   name: 'c1', 
   value: '1', 
   domain: 'localhost' 
}); 

console.log("Cookie Enabled value is : "+phantom.cookiesEnabled); 
phantom.exit();