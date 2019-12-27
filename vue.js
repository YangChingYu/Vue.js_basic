var app = new Vue ({
    el:'#app',
    //為了要綁住這個app
    data:{
      //有任何數據句都要放在這裏
    message:'hello World!!',
    score: 60,
    colors: ['black','red','blue'],
    homes:[{father:'tom'},{father:'John'},{father:'Kevin'}],

    },
    methods:{
      myFa: function(father){
        alert('我的爸爸是'+father)
      }
    } 
  });
  
  //element
  