document.getElementById("xhr-get-content").addEventListener("click",e =>{
   const respons = new XMLHttpRequest();
  respons.onreadystatechange = function(){
   if(respons.readyState===4 &&respons.status ===200)
   {
      document.getElementById("html-content").innerHTML=respons.responseText;
   }
  };
  respons.open('get','index-for-Ukraine.html?r='+Math.random());
  respons.send();
});

document.getElementById("xhr-get-content2").addEventListener("click",e =>{
   const respons = new XMLHttpRequest();
  respons.onreadystatechange = function(){
   if(respons.readyState===4 &&respons.status ===200)
   {
      document.getElementById("html-content").innerHTML=respons.responseText;
   }
  };
  respons.open('get','index-for-English.html?r='+Math.random());
  respons.send();
});

const login = document.querySelector('#login');
login.addEventListener('focus',()=>{
   console.log('sfdvsd')
   login.value= "sf";
})

console.log('dfgfjbndkgjf')