var app = new Vue ({
    el:'#app',
    //為了要綁住這個app
    data:{
   a:0,
   b:0,
   BMI:20
    },
    computed:{
      whoHeavy: function(){
        if (this.a>this.b){
          return 'a is heavier'
        }
        else if(this.a<this.b){
          return'b is heavier.'

        }else{
          return 'same haeavy.'
        }

      },
      judgeA: function(){
        return this.a - this.BMI
      },
      judgeB: function(){
        return this.b - this.BMI
      }


    }
   
    
   
    })
  
  //兩個人比較bmi
  //畫面即時比較
  //全國平均體脂肪比較
  //即時動態更新
  
  