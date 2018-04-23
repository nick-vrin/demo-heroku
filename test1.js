phantom.addCookie ({ 
   name: 'c1', 
   value: '1', 
   domain: 'localhost' 
}); 
phantom.addCookie ({ 
   name: 'c2', 
   value: '2', 
   domain: 'localhost' 
}); 
phantom.addCookie ({ 
   name: 'c3', 
   value: '3', 
   domain: 'localhost' 
}); 
console.log(JSON.stringify(phantom.cookies)); 
phantom.exit();