function ticketdetails(){
    fetch("https://newaccount1626936985753.freshdesk.com/api/v2/tickets", {
        method: "GET",
        headers:{
            Authorization: 'Basic ' + btoa("ZDB3A2KaFxXPKWRGBi")
        }
        
      })
        .then((data) => {
         return data.json();
        })
        .then((users) => loadUsers(users));
    }
    
    ticketdetails();
    
    
    function loadUsers(users) {
        const userList = document.createElement("div");
        userList.className = "user-list";
        users.forEach((user) => {
          const userContainer = document.createElement("div");
          userContainer.className = "user-container";
          
          userContainer.innerHTML = `
          
            <div>
               
              <p class="user-name"><span class="head">Id: </span>${user.id}</p>
              <p class="user-time" ><span class="head">Created_at: </span>${new Date(user.created_at).toDateString()}</p>
              <p class="user-time" ><span class="head">Due_by: </span>${new Date(user.created_at).toDateString()}</p>
              <p class="user-name"><span class="head">Subject: </span>${user.subject}</p>
              <p class="user-name"><span class="head">Status: </span>${user.status}</p>
              <p class="user-name"><span class="head">Type: </span>${user.type}</p>
              <p class="user-time" ><span class="head">Updated_at </span>${new Date(user.updated_at).toDateString()}</p>
    
    
              
    
              
            </div>
            `;
      
          userList.append(userContainer);
        });
      
        document.body.append(userList);
      }
     