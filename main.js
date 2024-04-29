

const openModel = document.querySelector(".open-model");
const closeModal = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");


//this function link to button for open modal
openModel.addEventListener("click", () => {
    modal.classList.add ("active");
})


//this function create for close button 
closeModal.addEventListener("click", () => {
    modal.classList.remove("active");
})

