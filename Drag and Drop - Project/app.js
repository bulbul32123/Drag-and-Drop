const DragArea = document.querySelector('.AppBody');
DragText = DragArea.querySelector('h3'),
button = DragArea.querySelector('button'),
input = DragArea.querySelector('input');
const btn = document.getElementById('btn');

  let file;


  button.onclick = ()=>{
    input.click()
  }
  input.addEventListener('change',()=>{
     file = this.files[0]
     DragArea.classList.add('active');
     showMe()
  })


  DragArea.addEventListener('dragover', (event  )=>{
     event.preventDefault();
     DragArea.classList.add('active');
     DragText.textContent = 'Release To UpLoad File'
  })

  DragArea.addEventListener('dragleave',()=>{
    DragArea.classList.remove('active');
    DragText.textContent = 'Drag & Drop'
  } )

  DragArea.addEventListener('drop',(event)=>{
    event.preventDefault();
    file =event.dataTransfer.files[0]
    showMe()
  })

  function showMe(){
    let FileType = file.type;
    let ValiEx = ['image/jpeg' ,'image/jpg','image.png'];
    if(ValiEx.includes(FileType)){
        let fileReder = new FileReader()
        fileReder.onload = ()=>{
            let imgurl = fileReder.result;
            let img = `<img src='${imgurl}' alt =''>`
            DragArea.innerHTML = img
        }
        fileReder.readAsDataURL(file)
    }else{
        alert('This File is Not Valid');
        DragArea.classList.add('active');
        DragText.textContent = 'Drag & Drop'
    }

  }
btn.addEventListener('click',()=>{
    window.location.reload()
})

