function changetables() {
    const buttontoggle = document.querySelector("input#switch-toggle")
    const price1 = document.querySelector("h2#price1")
    const price2 = document.querySelector("h2#price2")
    const price3 = document.querySelector("h2#price3")

    if(price1.innerHTML == '$12/month' ){
        price1.innerHTML = '$144/Yearly'
        price2.innerHTML = '$192/Yearly'
        price3.innerHTML = '$220/Yearly'
    }else {
         price1.innerHTML = '$12/month'
        price2.innerHTML = '$16/month'
        price3.innerHTML = '$20/month'
    }

}
