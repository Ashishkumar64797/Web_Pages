document.addEventListener('DOMContentLoaded',function(){

    const list =document.querySelector('#movie-list ul');
    const forms= document.forms;

    //to delete a list item
    list.addEventListener('click',(e)=>{
        if(e.target.className == 'delete'){
            const li = e.target.parentElement;
            li.parentNode.removeChild(li);0.
        }
    });

    //add a movie
    const addForm = forms['add-movie'];
    addForm.addEventListener('submit',function(e){
        e.preventDefault();
    
    if(addForm.querySelector('input[type="text"]').value!=''){
    //creating elements
    const value = addForm.querySelector('input[type="text"]').value;
    const li = document.createElement('li');
    const movieName = document.createElement('span');
    const deleteBtn = document.createElement('span');
    
    //add text contents
    movieName.textContent = value;
    deleteBtn.textContent = 'delete';
    
    //add classes
    movieName.classList.add('name');
    deleteBtn.classList.add('delete');

    //append to DOM
    li.appendChild(movieName);
    li.appendChild(deleteBtn);
    list.appendChild(li);

    }})

})
