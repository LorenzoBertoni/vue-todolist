const app = new Vue({
    el: '#app',
    data: {
        input: '',
        toDoList: ['Imparare Vue', 'ripassare js'],
        newTask: {
            text: '',
            done: false
        },
    },
    methods: {
        addTask() {
            this.newTask.text = this.input;
            this.toDoList.push(this.newTask.text);
            this.input = '';
        },
        removeTask(index) {
            this.toDoList.splice(index, 1);
        }
    }
});