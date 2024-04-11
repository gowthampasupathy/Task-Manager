let obj = [
    {
      cat: "work",
      subcat: "Team meeting",
      task:"Host",
      duration:"00:25:00"
    },
    {
      cat: "personal",
      subcat: "Weekend",
      task:"cricket",
      duration:"00:50:00"
    },
]

let details = {
    cat:"",
    subcat:"",
    task:"",
    duration:""
  };
  function adduser() {
    alert("add")
    let cat = document.getElementById("cat").value;
    let subcat = document.getElementById("subcat").value;
    let task=document.getElementById("task").value;
    let time=document.getElementById("time").innerText;
    details.cat=cat
    details.subcat=subcat
    details.task=task
    details.duration=time
    obj.push(details);
    filteredobjects();
  }
  function deletetask(index){
    obj.splice(index, 1);
    filteredobjects()
  }
  function update(index){

    let cat = document.getElementById("cat");
    let subcat = document.getElementById("subcat");
    let task=document.getElementById("task");
    let time=document.getElementById("time");
    let btn=document.getElementById("btn")
    document.getElementById("id").value=index
    let ar=obj[index];
    cat.value=ar.cat
    subcat.value=ar.subcat
    task.value=ar.task
    time.innerText=ar.duration
    btn.innerText="Save Details"

  }
  function save(){
    // alert("save")
    let index=document.getElementById("id").value;
    let cat = document.getElementById("cat").value;
    let subcat = document.getElementById("subcat").value;
    let task=document.getElementById("task").value;
    let time=document.getElementById("time").innerText;
    obj[index].cat=cat
    obj[index].subcat=subcat
    obj[index].task=task
    obj[index].duration=time
    filteredobjects()

  }
  function submit(){
    let btn=document.getElementById("btn").innerText
    if(btn=="Save Details"){
      save()
    }else{
      adduser()
    }
  }
  
  let min = 0;
  let sec = 0;
  let hour = 0;
  let running = false;
  let timer;
  function start() {
    if (!running) {
      timer = setInterval(() => {
        sec++;
        if (sec >= 60) {
          sec = 0;
          min++;
          if (min >= 60) {
            min = 0;
            hour++;
          }
        }
        running = true;
        document.getElementById("start").innerText = "STOP";
        let formatedtime = `${hour.toString().padStart(2, "0")}:${min
          .toString()
          .padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
        document.getElementById("time").innerText = formatedtime;
      }, 1000);
    } else {
      running = false;
      clearInterval(timer);
      document.getElementById("start").innerText = "START";
    }
  }
  function reset() {
    running = false;
    clearInterval(timer);
    document.getElementById("start").innerText = "START";
    document.getElementById("time").innerText = "00:00:00";
  
  }
let filter = document.getElementById("select");
function filteredobjects() {
    let val = filter.value;
    let filteredobj =
      val === "all"
        ? obj
        : obj.filter((d) => {return d.cat==val });
    let body = document.getElementById("body");
    body.innerHTML = "";
    filteredobj.map((d,i) => {
      let tr=document.createElement("tr")
      tr.innerHTML=`
      <td>${d.cat}</td>
      <td>${d.subcat}</td>
      <td>${d.task}</td>
      <td>${d.duration}</td>
      <td><button onClick="update(${i})" class="button" type="button">Update</button>  <button class="button" type="button" onClick="deletetask(${i})">Delete</button></td>
      `
      body.append(tr);
    });
  }


  filteredobjects();

filter.addEventListener("change", filteredobjects);