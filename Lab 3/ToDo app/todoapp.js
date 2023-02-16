document.querySelector('#push').onclick = function(){
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <input type="checkbox" class="checkbox">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt" style="color:red; font-size:20px; margin-right:10px;"></i>
                </button>
            </div>
        `;

        let current_tasks = document.querySelectorAll(".delete");
        for(let i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
}