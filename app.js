const btn = document.querySelector(".submit-btn");
const ratesBtn = document.querySelectorAll(".rates-one");
const thankCard = document.querySelector(".thank-card");
const card = document.querySelector(".card");
const titleRating = document.querySelector(".title-rating__h2");

getRates();

btn.addEventListener("click", ()=>{   
    card.classList.add("hide");
    thankCard.classList.add("show-card");

})

function getRates(){
    ratesBtn.forEach((btn)=>{
        btn.addEventListener("click", (e) =>{

            const selectedRates = e.currentTarget.getAttribute('value');

            titleRating.textContent = `You selected ${selectedRates} out of 5`;

            // This way, only one button will have the active class at a time.

            ratesBtn.forEach((otherBtn) => {
                const otherRate = otherBtn.getAttribute('value');

                if(otherRate !== selectedRates){
                    otherBtn.classList.remove("active");
                }else{
                    otherBtn.classList.add("active");
                }
            })            
        })
    })
}