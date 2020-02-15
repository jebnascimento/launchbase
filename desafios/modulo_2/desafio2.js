const modalOverlay = document.querySelector('.modal-overlay');
const modal = document.querySelector('.modal');


// seleciona todos as tags com a classe card
const cards = document.querySelectorAll('.card');



for(let card of cards)
{ // chama a função function quando o evento click é detectado no card
  card.addEventListener("click", function()
  {
    const course = card.getAttribute("id");
    modalOverlay.classList.add('active');
    modalOverlay.querySelector("iframe").src = `https://rocketseat.com.br/${course}`;
  })

}

document.querySelector(".close-modal").addEventListener("click", function()
{
  modalOverlay.classList.remove("active")
  modalOverlay.classList.remove("maximize")
  modalOverlay.querySelector("iframe").src = ""
})

document.querySelector(".maximize-modal").addEventListener("click", () =>
{
  modal.classList.add('maximize');   
})

// document.querySelector(".minimize-modal").addEventListener("click", () =>
// {
//   modal.classList.add('minimize');   
// })