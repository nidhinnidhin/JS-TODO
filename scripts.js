function addTodo(){
    const arr = [];
    let res = document.getElementById('todo').value;

    let newLi = document.createElement("li");
    newLi.className = "list-item";
    newLi.innerText=res;
    
    // remove
    let removeBtn = document.createElement("button");
    removeBtn.className = "btn btn-danger";
    removeBtn.innerText = "Remove"

    // Edit
    let editBtn = document.createElement("button");
    editBtn.className = "btn btn-primary m-1"
    editBtn.innerText = "Edit"

    newLi.appendChild(removeBtn);
    newLi.appendChild(editBtn);

    removeBtn.onclick = function() {
        removeHandler(newLi);
    }
    editBtn.onclick = function() {
        editHandler(res, newLi, editBtn,removeBtn)
        
    }

    document.getElementById('todo-list').appendChild(newLi);
    document.getElementById('todo').value = "";
}

function removeHandler(newLi){
    newLi.remove();
}
function editHandler(res, newLi, editBtn,removeBtn){
    let updateBtn = document.createElement('button');
    updateBtn.innerText = "Update";
    updateBtn.className = "btn btn-danger";

    
    newLi.appendChild(updateBtn);
    document.getElementById('todo').value = res;

    updateBtn.onclick = function(){
        updateTodo(newLi, editBtn,removeBtn);
    }
}

function updateTodo(newLi, editBtn,removeBtn){
    let updateVal = document.getElementById('todo').value;
    newLi.innerText = updateVal;
    newLi.appendChild(removeBtn);
    newLi.appendChild(editBtn);
    document.getElementById('todo').value = "";
}