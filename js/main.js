const app = new Vue({
    el: '#app',
    data: {
        input: '',
        toDoList: [
            {
                name: 'Imparare Vue',
                done: false
            },
            {
                name: 'Imparare js',
                done: false
            },
            {
                name: 'Imparare css',
                done: false
            }
        ],
        newTask: {
            text: '',
        },
    },
    methods: {
        addTask() {
            this.newTask.text = this.input;
            this.toDoList.push(
                {
                    name: this.newTask.text,
                    done: false
                }
            );
            this.input = '';
        },
        removeTask(index) {
            this.toDoList.splice(index, 1);
        },
        taskDone(index) {
            if(this.toDoList[index].done == false) {
                this.toDoList[index].done = true;
                console.log(this.toDoList[index].done)
            } else {
                this.toDoList[index].done = false;
                console.log(this.toDoList[index].done)
            }
        }
    }
});