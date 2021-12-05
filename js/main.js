document.querySelector('button').addEventListener('click',getPhotos)


function getPhotos(){
    const inputDate = document.querySelector('input').value
    const url = `https://api.nasa.gov/planetary/apod?api_key=0Bf8d0oEZxvsByGqAbysYJEMKLpotlsP8CezS3yF&date=${inputDate}` 

    
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        
            if(data.media_type ==="image"){
                       document.querySelector('img').src =data.hdurl
            }
            document.querySelector('h3').innerText = data.explanation
   
})

let date = data["date"];
let imageType = `
        <div
          class="bg-image hover-overlay ripple shadow-1-strong rounded"
          data-ripple-color="light"
        >
          <img id="wrapper-image" src="" class="w-100" />
          <a id="wrapper-hdurl" href="" target="_blank">
            <div class="mask" style="background-color: rgba(251, 251, 251, 0.2);"></div>
          </a>
        </div>
		`
.catch(err =>{
    console.log(`error ${err}`)
})
}