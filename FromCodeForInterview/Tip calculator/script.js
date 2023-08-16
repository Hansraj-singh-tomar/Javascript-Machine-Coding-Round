const varObj = {
    tip: 0
}

window.onload = () => {
    document.querySelector("#btn1").onclick = calculateTip;
    document.querySelector("#btn2").onclick = resetValues;

    const tips = document.querySelectorAll(".tip");
    
    tips.forEach((tip) => {
        tip.addEventListener('click', handleTipClick);
    })
}

function handleTipClick(e){
    // console.log(e.target.textContent); // 5%
    // console.log(e.target.textContent.split('%')); //  ['5', '']
    // console.log(e.target.textContent.split('%')[0]); //  5
    varObj.tip = Number(e.target.textContent.split('%')[0]);
}


function calculateTip(){
    const amount = parseInt(document.querySelector("#amount").value);
    
    const people = parseInt(document.querySelector("#people").value);

    
    if (!amount && !people) {
        alert("Please enter values");
        return;
    }

    const tip = (amount * varObj.tip) / 100;
    const billPerPerson = (amount + tip) / people;

    document.querySelector("#tipamount").innerText = tip / people;
    document.querySelector("#totalamount").innerText = billPerPerson;
}

function resetValues () {
    document.querySelector('#tipamount').innerText = 0;
    document.querySelector('#totalamount').innerText = 0;
}