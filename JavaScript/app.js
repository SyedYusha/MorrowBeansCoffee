let cartContainer=document.querySelector('.cart-items-container')
let cartImg=document.querySelector('#cart-btn')

cartImg.addEventListener("click",()=>{
    cartContainer.classList.toggle("cartContainer-active")
    if (playlist.classList.contains("cartContainer-active")) {
       cartImg.src="fa-solid fa-cart-shopping"
    }
    else{
        playlistImg.src="./assets/library.svg"
    }
})
playlistSong.forEach((song,index) => {
    song.addEventListener('click', ()=>{
        loadTrack(index);
        playSong()
        playlist.classList.remove("playlist-active")
        playlistImg.src="./assets/library.svg"        
    })
});