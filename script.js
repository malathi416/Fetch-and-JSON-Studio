// TODO: add code here

window.addEventListener("load",function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response)
    {       response.json().then(function(json){
        let div=document.getElementById("container");      
        
        
        for(let i=0;i<json.length;i++){            
            div.innerHTML +=`           
            <div  class="bio" align="center"  >
            <div class="astronaut" >         
              <ul align ="left"> 
              <h3 >${json[i].firstName} ${json[i].lastName}</h3>             
              <li >Hours in Space : ${json[i].hoursInSpace}</li>
              <li><font color="green">Active : ${json[i].active}</li>          
              <li ><font color="black">Skills : ${json[i].skills}</li>      
              </ul>
              <img  class="avatar"  src="${json[i].picture}"/>  
            </div>
            </div>`
         }
         });
    });
}); 