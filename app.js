function getAndUpdate(){
          tit=document.getElementById('title').value;
          desc=document.getElementById('description').value;
          if(localStorage.getItem('itemsJson')==null){
                    console.log("Updating");
                    itemJsonArray=[];
                    itemJsonArray.push([tit,desc]);
                    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
          }
          else{
                    itemJsonArrayStr=localStorage.getItem('itemsJson');
                    itemJsonArray=JSON.parse(itemJsonArrayStr);
                    itemJsonArray.push([tit,desc]);
                    localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray))
          }
          update();
}

function update(){
          if(localStorage.getItem('itemsJson')==null){
                    itemJsonArray=[];
                    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
          }
          else{
                    itemJsonArrayStr=localStorage.getItem('itemsJson');
                    itemJsonArray=JSON.parse(itemJsonArrayStr);
                    
          }

          let tableb=document.getElementById("tableb");
          let str="";
          itemJsonArray.forEach((element,index) => {
                    str+=`
                    <tr>
                                  <th scope="row">${index+1}</th>
                                  <td>${element[0]}</td>
                                  <td>${element[1]}</td>
                                  <td><button class="btn btn-sm btn-primary" onclick="deleted(${index})">Delete</button></td>
                                </tr>
                    `;
          });
          tableb.innerHTML=str;
}

const add=document.getElementById("add");
add.addEventListener("click",getAndUpdate);
update();
function deleted(itemindex){
          console.log("Delete",itemindex);
          itemJsonArrayStr=localStorage.getItem('itemsJson');
          itemJsonArray=JSON.parse(itemJsonArrayStr);
          itemJsonArray.splice(itemindex,1);
          localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray));
          update();


}
function clearstr(){
          if(confirm("Do you really want to clear?")){
          console.log('Clearing the storage');
          localStorage.clear();
          update();
          }
          
}
