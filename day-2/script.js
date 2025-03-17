const endpoint = 'https://lanciweb.github.io/demo/api/pictures/';

const cardList = document.getElementById('card-List');


axios.get(endpoint)
    .then((response) => {

        let cards = '';
        let cardsInfo = response.data;
        console.log(cardsInfo);

        cardsInfo.forEach(element => {
            cards += `<div class="col-12 col-md-6 col-lg-4">
                    <div class="card rounded-0 mb-5">
                        <img class="translate-middle start-50" src="img/pin.svg" style="position:absolute;" alt="pin">
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

            cardList.innerHTML = cards;
        })
    })

    .catch(error => {
        console.log('error:', error);
    });