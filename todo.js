const addlist = document.getElementById("add_text");
const addbtn = document.getElementById("add_btn");
const add_list = document.getElementById("list");

addbtn.addEventListener("click",()=>{
    const listitem = addlist.value.trim();
    if(listitem!=="")
    {
        const taskitem = document.createElement("li");
        taskitem.innerHTML = `${listitem} ${" "} <button class = "del_btn">Delete</button>`;
        add_list.appendChild(taskitem);
        addlist.value = "";

        const delete_btn = taskitem.querySelector(".del_btn");
        delete_btn.addEventListener("click",()=>{
        taskitem.remove();
        })
    }
})


/*addbtn.addEventListener("click",()=>{
    const listitem = addlist.value.trim();
    
    if(listitem!=="")
    {
        
        createtask(listitem);
        addlist.value = "";
    }
})

function createtask(text)
{
    const taskitem = document.createElement("li");
    taskitem.innerHTML = `${text} ${" "} <button class ="del_btn">Delete</button>`;
    add_list.appendChild(taskitem);

    const delete_btn = taskitem.querySelector(".del_btn")
    delete_btn.addEventListener("click",()=>{
        taskitem.remove();
    })
    
}*/