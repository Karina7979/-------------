
function addEventListenersForAddToCardButtons() {

    let addToCardBtns = document.getElementsByClassName('product-btn');

    for (i = 0; i < addToCardBtns.length; i++) {
        addToCardBtns[i].addEventListener('click', function(event) {
            console.log(event.target);
        });
    }

    // let addToCardbtns = document.querySelectorAll('button[product-btn]');

    // addToCardbtns.forEach(function (button) {
    //     button.addEventListener('click', clickHandler);
    // })
}

addEventListenersForAddToCardButtons();






