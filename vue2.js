var app = new Vue ({
    el:'#app',
    //為了要綁住這個app
    data:{
    todos:[],
    //做一個空陣列給他
    newTodo:''
    },
    methods:{
     addTodo: function(todo){
         this.todos.push({content:todo,complete:false})
     },
     removeTodo: function(todo){
        this.todos.splice(this.todos.indexOf(todo), 1);
    }
      }
    })
  
  //element
  