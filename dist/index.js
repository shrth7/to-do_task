"use strict";
function createCard(text) {
    const card = document.createElement('div');
    card.classList.add('card', 'mb-3');
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    const cardData = document.createElement('span');
    cardData.textContent = text;
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            cardData.classList.add('checked');
            const delButton = document.createElement('button');
            delButton.classList.add('btn', 'btn-danger', 'delete-btn');
            delButton.textContent = 'Delete';
            delButton.addEventListener('click', () => {
                card.remove();
            });
            cardBody.appendChild(delButton);
        }
        else {
            cardData.classList.remove('checked');
            const delButton = cardBody.querySelector('.delete-btn');
            if (delButton) {
                delButton.remove();
            }
        }
    });
    cardBody.appendChild(checkbox);
    cardBody.appendChild(cardData);
    card.appendChild(cardBody);
    return card;
}
function addTask() {
    const txtinput = document.getElementById('text');
    const cardView = document.getElementById('card');
    if (txtinput.value) {
        const card = createCard(txtinput.value);
        cardView.appendChild(card);
        txtinput.value = '';
    }
}
const button = document.getElementById('button');
button.addEventListener('click', addTask);
