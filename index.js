
//regular function

function myfn(){
    console.log('====================================');
    console.log('regular function');
    console.log('====================================');
}

//arrow function
const _myfn = (param1,param2)=>{
    console.log('====================================');
    console.log('arrow function');
    console.log('====================================');
}

// https://jsonplaceholder.typicode.com/posts

const get_comment = async()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    console.log('====================================');
    console.log(data);
    console.log('====================================');
}



