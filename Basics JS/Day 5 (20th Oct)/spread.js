        //sum of 3 numbers
        function add(a,b,c,d,e){
            var result = a+b+c+d+e
            return result
        }
        //console.log(sum(1,2,3,4))

        const  number = [1,2,3,4,5]

        console.log(number)
        console.log(...number)
        console.log(add(...number))

        const parts = ["head","eyes"]
        const res = ["shoulders",...parts,"knees","toes"]

        console.log(parts);
        console.log(res);

        var array = ["hello","guvi"]
        console.log(...array)

        var str = "hello"
        console.log(...str)
        console.log([...str])

        array1=[1,2,3,4]
        array2 =[5,6,7,8]
        var array3 = [...array1,...array2]
        console.log(array3)