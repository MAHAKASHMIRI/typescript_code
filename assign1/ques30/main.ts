let usernames:string[]=["admin","user1","user2","user3","user4"];
 usernames.forEach(username=>{
    if (username==="admin"){
        console.log("hello admin would you like you see the report");
    }
    else{
        console.log(`hey ${username} thanks for logging in`);
    }
 })

 