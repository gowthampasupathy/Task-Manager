
function fetchData() {
  return new Promise((resolve, reject) => {
    fetch("./user.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((er) => {
        reject(er);
      });
  });
}

function logincheck(event){

  event.preventDefault();
  fetchData()
  .then((data)=>{
    const email=document.getElementById("email").value;
  const pass=document.getElementById("password").value;
  console.log(data[0].password+" "+pass)
    const validate=data.find((d)=>d.email==email && d.password==pass)
    if(validate){
      window.location.href="main.html"
    }else{
      alert("No User Exist")
    }
  }) .catch((error) => {
    console.error("Error fetching data:", error);
  });
}