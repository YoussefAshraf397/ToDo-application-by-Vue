
export default function(){
    console.log('hello world')

    var user = {
        name: "youssef ashraf" ,
        age : 23
    }

    function print(person){
        console.log('hello '+person.name + ' your age is '+ person.age)
    }

    print(user)

}