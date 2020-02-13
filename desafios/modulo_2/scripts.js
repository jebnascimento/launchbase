const modalOverlay = document.querySelector('.modal-overlay');

// seleciona todos as tags com a classe card
const cards = document.querySelectorAll('.card');



for(let card of cards)
{ // chama a função function quando o evento click é detectado no card
  card.addEventListener("click", function()
  {
    const videoId = card.getAttribute("id");
    modalOverlay.classList.add('active');
    modalOverlay.querySelector("iframe").src = `https://www.youtube.com/embed/${videoId}`;
  })

}

document.querySelector(".close-modal").addEventListener("click", function()
{
  modalOverlay.classList.remove("active")
  modalOverlay.querySelector("iframe").src = ""
})