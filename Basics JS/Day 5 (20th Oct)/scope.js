        //global scope
        const x=100;
        //let x=100;
        //var x = 100;
        {
            {
                console.log(x)//100
            }
        }
        console.log(x)//100

        //block scope
        {
            let y =200;
           // const y =200;
            console.log(y);//200
        }
       // console.log(y);//not defined

        if(5>4){
            var a="hello"
        //const a="hello"
            //let a ="hello"
            {
                console.log(a)//hello
            }
        }
        console.log(a)//not defined

        //functional scope

        function scope(){
            var car = "Volvo"
            //let car = "Volvo"
          return car;
        //console.log(car);
        }
        console.log(scope());//not defined
        //scope();