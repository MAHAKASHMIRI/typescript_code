let current_user:string[]=["admin","user1","user2","user3","user4"];
let new_user:string[]=["user3","user4","user5"];
new_user.forEach(new_user=>{
    if(
        current_user.some(current_user=>
            current_user.toLocaleLowerCase()===
            new_user.toLocaleLowerCase())
    )
    {
        console.log(`the username ${new_user} is not available`)
    }
    else{
        console.log(`${new_user} is available`);
    }
})