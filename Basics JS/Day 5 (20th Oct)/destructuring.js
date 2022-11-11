        //obj destruc
        const user = {
            name:"arun",
            place:"chennai",
            job:"mentor",
            salary:"4LPA"
        }
        console.log(user)
        console.log(user.name)
        // console.log(user["name"],user["job"])

        const{name1,place,job,salary}=user

       console.log(name1,place,job,salary)
        console.log(place)
        console.log(job)
        console.log(salary)

        //array destruc

        let array =["hello","world","guvi","geek"]
        let [...random]=array
        //console.log(fname)
        //console.log(lname)
        // console.log(mname)
        console.log(random)
        // console.log(array)

        //swap 