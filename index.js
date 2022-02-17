

const url = 'https://jsonplaceholder.typicode.com/posts'

const get_comment = async()=>{

    const response = await fetch(url);
    const posts = await response.json() // data

    // const nodeList = [];

    // <div id={id}>
    //     <h1>{title}</h1>
    //     <p>{body}</p>
    // </div>

    for(post of posts) {
        const {id,title,body} = post; //destructure
        //******creating (element) */
        //create div element
        const div = document.createElement('div') 
        //create h1 element
        const h1 = document.createElement('h1')
        //create p element
        const p = document.createElement('p')
        
        div.id = id;
        h1.innerHTML = title;
        p.innerHTML = body;

        div.appendChild(h1)
        div.appendChild(p)

        document.getElementById('root').appendChild(div)
       
    }

}
get_comment()


