const container = document.querySelector('.container');

let limit = 4;
let pageCount = 1;
let postCount=1;

// Steps:
/* 
pt.1
    get a batch of images and append to the container div
*/
const getPost = async () => {
    const response = await fetch(`http://hn.algolia.com/api/v1/search?query=${state.query}&_page=${pageCount}`);
    //console.log(response);
    const data = await response.json();
    //console.log(data[0].body);
    data.map((curElm,index) => {
        const htmlData  = `<div class="posts">
        <p class="post-id">${postCount++}</p>
        <h2 class="title">${curElm.name}</h2>
        <p class="post-info"> ${curElm.body}</p>
    </div>`;

    container.insertAdjacentHTML('beforeend',htmlData)
    });
}
getPost();

const showData = () =>{
    setTimeout(() => {
        pageCount++;
        getPost();
    }, 10)
};
/* 
pt.2
    listen for a scroll event and load more images if we reach the buttom of window
*/
window.addEventListener('scroll', () => {
    const {scrollHeight, scrollTop, clientHeight} = document.documentElement;

    if(scrollTop + clientHeight >= scrollHeight){
        //console.log("I am here");
        showData();
    }
});
