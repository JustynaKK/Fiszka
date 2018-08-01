document.addEventListener("DOMContentLoaded", function() {

    const offer_buttons = document.querySelectorAll(".offer_toggler")

    offer_buttons.forEach(function(el) {
        el.addEventListener("click", function () {
            this.parentElement.querySelector('.offer_description').classList.toggle('offer_description-visibility')
        })
    })




});
