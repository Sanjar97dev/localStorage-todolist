const input = document.querySelector('input')
const list = document.querySelector('.list')
const btns = document.querySelectorAll('button')

//function create task
function createTask(plan, callback) {
    const liTag = document.createElement('li');
    liTag.innerHTML = plan;
    const delBtn = document.createElement('button')
    liTag.appendChild(delBtn)
    liTag.className='list-group-item d-flex justify-content-between'
    delBtn.innerHTML=''
    delBtn.className="btn btn-outline-danger"
    liTag.appendChild(delBtn);
    delBtn.style.color='white'
    console.log(delBtn);
    delBtn.onclick=(e) => {
        e.target.closest('li').remove();
        saveTask();
    }

    callback(liTag)
    saveTask()
}

function addTask(task){
    list.appendChild(task)
}

function saveTask() {
   const tasks = Array.from(list.children).map((li)=> li.innerText);
   localStorage.setItem('tasks', JSON.stringify(tasks));
}

const getTodos=JSON.parse(localStorage.getItem('tasks'));
getTodos.forEach(task=> createTask(task, addTask))
console.log(getTodos);

btns[0].onclick=()=>{
    if (input.value.trim()) {
        createTask(input.value, addTask);
        input.value='';
    }
}

btns[1].onclick=()=> {
    if (input.value.trim()) {
        createTask(input.value, addTask);
        input.value='';
    }
}






