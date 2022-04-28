var url = 'https://adminpaneldata-edyoda-sourav.herokuapp.com/admin/data';
var res=""
let detailsBox=document.getElementById("info-wrapper")

let mainBox = document.getElementById("main-con")
$(function () {
    $.get(url, function abc(response) {
        res = response

       
     


        for (let i = 0; i <response.length; i++) {
            var cardId=response[i].id

            mainBox.innerHTML += `
            
                    <tr class="data-row ${i==0?"active":""}" id="info${response[i].id}" onclick="makethisinclick(${cardId})">
                       <td class="column1">${response[i].id}</td>
                       <td class="column2">${response[i].firstName}</td>
                       <td class="column3">${response[i].lastName}</td>
                        <td class="column4">${response[i].email}</td>
                      <td class="column5">${response[i].phone}</td>
             </tr>
          `
        }
        detailsBox.innerHTML=`
        <h1>Details</h1>
        <p>Click on a table item to get detailed information</p>
        <div id=con${response[0].id} class="info-content">
        <div><b>User selected:</b> ${response[0].firstName+" "+response[0].lastName}</div>
                <div>
                    <b>Description: </b>
                    <textarea cols="50" rows="5" readonly>
                        ${response[0].description}    
                    </textarea>
                </div>
                <div><b>Address:</b> ${response[0].address.streetAddress} </div>
                <div><b>City:</b> ${response[0].address.city}</div>
                <div><b>State:</b> ${response[0].address.state}</div>
                <div><b>Zip:</b> ${response[0].address.zip}</div>
                </div>
        `
        


      

        
        
    })
});




function makethisinclick(pass) {
    var mainboxClass=document.getElementsByClassName("active")[0]
    
    
    if(mainboxClass!==undefined){
        mainboxClass.classList.remove("active")

    }
    
    let clickedRow=document.getElementById(`info${pass}`)
    clickedRow.classList.add("active")
    
    var mainBoxById=document.getElementById(`info${pass}`)
    var classForClicked= mainBoxById.classList
    console.log(classForClicked)
  
    res.map((item,i)=>{
        if(item.id==pass){
        detailsBox.innerHTML=`
        <h1>Details</h1>
        <p>Click on a table item to get detailed information</p>
        <div id="con${pass}" class="info-content">
        <div><b>User selected:</b> ${item.firstName+" "+item.lastName}</div>
        <div>
            <b>Description: </b>
            <textarea cols="50" rows="5" readonly>
                ${item.description}    
            </textarea>
        </div>
        <div><b>Address:</b> ${item.address.streetAddress} </div>
        <div><b>City:</b> ${item.address.city}</div>
        <div><b>State:</b> ${item.address.state}</div>
        <div><b>Zip:</b> ${item.address.zip}</div>
        </div>
        `
     
    }

   })





}

var searchBox=document.getElementById("search-box")
function userTyped(){
var activeUser=document.getElementsByClassName("info-content")[0]
console.log(activeUser)




mainBox.innerHTML=""
var secondBox=searchBox.value
var filterdData= res.filter((item,i)=>{
    var cardId=item.id
    if(
        item.firstName.toLowerCase().includes(secondBox.toLowerCase())
    ){
        console.log(`${activeUser.id=="con"+item.id }`)
        
        return (  mainBox.innerHTML += `
        
        <tr class="data-row ${activeUser.id=="con"+item.id?"active":"" }" id="info${item.id}" onclick="makethisinclick(${cardId})">
           <td class="column1">${item.id}</td>
           <td class="column2">${item.firstName}</td>

           <td class="column3">${item.lastName}</td>
            <td class="column4">${item.email}</td>
          <td class="column5">${item.phone}</td>
 </tr>
`)
    }

})

}

