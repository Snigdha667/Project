const search=document.querySelector('input');
const btn=document.querySelector('button');
const rad=document.querySelectorAll('.c');
const img1=document.querySelector('ul');
const h1=document.querySelector('h1');
const ip=document.querySelector('.inpi');
const l=document.querySelector('.c2');
const sub=document.querySelector('button');
rad[0].addEventListener('click',function onClick(event) {
    // 👇️ change background color
    document.body.style.backgroundColor = 'pink';
    h1.style.color='red';
  
    // 👇️ optionally change text color
    // document.body.style.color = 'white';
  });
  rad[1].addEventListener('click',function onClick(event) {
    // 👇️ change background color
    document.body.style.backgroundColor = 'aqua';
    h1.style.color='blue';
    // 👇️ optionally change text color
    // document.body.style.color = 'white';
  });
  rad[2].addEventListener('click',function onClick(event) {
    // 👇️ change background color
    document.body.style.backgroundColor = 'yellow';
    h1.style.color='orange';
  
    // 👇️ optionally change text color
    // document.body.style.color = 'white';
  });
  rad[3].addEventListener('click',function onClick(event) {
    // 👇️ change background color
    document.body.style.backgroundColor = 'black';
    h1.style.color='white';
    // 👇️ optionally change text color
    // document.body.style.color = 'white';
  });

console.log(sub);
// sub..addEventListener('click',function onClick(event) {
//     // 👇️ change background color
//     document.body.style.backgroundColor = 'pink';
//     h1.style.color='red';
  
//     // 👇️ optionally change text color
//     // document.body.style.color = 'white';
//   });
sub.addEventListener('click',function my(e){
    const v=ip.value;
    e.preventDefault();
    Mov(v);
});
function Mov(v){ 
    while(l.firstChild){
        l.removeChild(l.firstChild);
    }
    const url=`https://api.tvmaze.com/search/shows?q=${v}`;
    // axios.get(url)
    // .then((res)=>{
    //     console.log(res);
    //     for(let i of res.data){
    //         console.log(i);
    //         if(i.show.image){
    //             const im=document.createElement('img');
    //             im.src=i.show.image.medium;
    //             im.style.margin='2%';
    //             l.append(im);
    //         }
    //     }
    // }).catch((err)=>{
    //     console.log(err);
    // })
    fetch(url)
    .then((res) => {
        console.log(res);
        return res.json();
    })
    .then((data) => {
        console.log(data);
        // add_search(data);
        for(let i of data){
            console.log(i);
            if(i.show.image){
                const im=document.createElement('img');
                im.src=i.show.image.medium;
                im.style.margin='2%';
                l.append(im);
            }
        }
    });
}