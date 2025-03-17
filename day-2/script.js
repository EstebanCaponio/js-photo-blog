const endpoint = 'https://lanciweb.github.io/demo/api/pictures/';

const cardList = document.getElementById('card-List');
const containerOn = document.getElementById('container-dnone');
const buttonElement = document.getElementById('btn');
const imgElement = document.querySelector('.img-fluid');
const myError = document.getElementById('my-error');
const header = document.querySelector('header');
const body = document.querySelector('body');
const mainContainer = document.getElementById('main-container');

// chiamata api
axios.get(endpoint)
    .then((response) => {

        let cards = '';
        let cardsInfo = response.data;
        console.log(cardsInfo);

        cardsInfo.forEach(element => {
            cards += `<div class="col-12 col-md-6 col-lg-4">
                    <div class="card rounded-0 mb-5">
                        <img class="translate-middle start-50 pin" src="img/pin.svg" style="position:absolute;" alt="pin">
                        <div class="card-body">
                            <img src="${element.url}" class="card-img-top rounded-0" alt="...">
                        </div>
                        <div class="card-body pt-0">
                            <p class="card-text">
                            ${element.date}
                            </p>
                            <p class="card-text">
                            ${element.title}
                            </p>
                        </div>
                    </div>
                </div>`;
        })
        cardList.innerHTML = cards;

        // creo costante
        const card = document.querySelectorAll(".card");
        console.log(card);

        // utilizzo for per poi selezionare l'img da mettere nell'src con l'indice
        for (let i = 0; i < card.length; i++) {

            card[i].addEventListener('click', function () {
                // debug
                console.log(`ho cliccato l'immagine n.${i + 1}`);
                body.classList.add('overflow-hidden');
                containerOn.classList.replace('d-none', 'd-block');
                const currentImg = document.querySelectorAll(".card-img-top");
                imgElement.src = currentImg[i].src;
            })
        }


        // click bottone
        buttonElement.addEventListener('click', function () {
            console.log('ho cliccato');
            containerOn.classList.add('d-none');
            body.classList.remove('overflow-hidden');
        })



    })
    // errore
    .catch(error => {
        console.log('error:', error);
        myError.classList.replace('d-none', 'd-block');
        header.classList.add('d-none');
        document.body.style.backgroundImage = 'none';
        document.body.style.backgroundColor = 'black';
        mainContainer.classList.add('d-none');
    });