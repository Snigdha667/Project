const search=document.querySelector('input');
const btn=document.querySelector('button');
const rad=document.querySelectorAll('.c');
const img1=document.querySelector('ul');
const h1=document.querySelector('h1');
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

btn.addEventListener('click',()=>{
    const t=search.value;
    if(t==="Kumfu Panda"){
        for(let i=0;i<4;i++)
        {
            const v=document.createElement('img');
v.src='https://i.pinimg.com/474x/f3/e3/63/f3e3635567b41a18a413936cc6900860.jpg';
img1.append(v);
        }
    }
        else if(t==="Spiderman"){
            for(let i=0;i<4;i++)
            {
                const v=document.createElement('img');
    v.src='https://deadline.com/wp-content/uploads/2021/11/spidermannowayhomeposter.jpg?w=819';
    img1.append(v);
            }
            }
        }
);
