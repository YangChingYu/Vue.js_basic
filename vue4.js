var app = new Vue ({
    el:'#app',
    //為了要綁住這個app
    data:{
   NT: 0
    },
    computed: {
      japan : function(){
        return this.NT * 0.2713
      }
    }
   
    })
  
  //element
  