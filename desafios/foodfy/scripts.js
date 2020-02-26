const modalOverlay = document.querySelector('.modal-overlay');

// seleciona todos as tags com a classe card
const cards = document.querySelectorAll('.card');



for(let card of cards)
{ // chama a função function quando o evento click é detectado no card
  card.addEventListener("click", function()
  {
    const receita = card.getAttribute("id");
    const food = card.querySelector(".food-description").innerHTML;
    const author = card.querySelector(".food-author").innerHTML;
    modalOverlay.classList.add('active');
    modalOverlay.querySelector("img").src = `/foodfy/${receita}.png`;
    modalOverlay.querySelector(".modal-food").innerHTML = `${food}`;
    document.querySelector(".modal-author").innerHTML = `${author}`;
  })

}

document.querySelector(".close-modal").addEventListener("click", function()
{
  modalOverlay.classList.remove("active")
  modalOverlay.querySelector("img").src = ""
})

