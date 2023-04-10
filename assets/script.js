// text

let fileInput = document.querySelector('input');
let text = document.querySelector('.text');

fileInput.addEventListener('change', (e)=>{
    let fileR = new FileReader();
    fileR.readAsText(e.target.files[0]);
    fileR.addEventListener('load', ()=>{
        text.textContent = fileR.result;
    })
})



// sekil

let fileInput2 = document.querySelector('.ikinci');
let img = document.querySelector('.img');

fileInput2.addEventListener('change', (e)=>{
    console.log(e);
    let fileR = new FileReader();
    fileR.readAsDataURL(e.target.files[0]);
    fileR.addEventListener('load', ()=>{
        let img = document.createElement('img');
        img.src = fileR.result;
        text.append(img);
    })
})




