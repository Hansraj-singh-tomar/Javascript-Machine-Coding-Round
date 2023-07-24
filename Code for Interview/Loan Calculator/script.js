window.onload= () => {
    console.log("this is an ch");
    const inputs = document.querySelectorAll("input");

    inputs.forEach((input) => {
        input.addEventListener('change', calculateEmi);
    });
}

function calculateEmi(){
    console.log("function called");
    const principal = document.querySelector("#amount").value;
    const rate = document.querySelector("#interest").value;
    const tenure = document.querySelector("#tenure").value;

    if(!principal || !rate || !tenure) return ;

    const monthlyInterest = rate / 100 /12;
    const emi = principal * monthlyInterest * Math.pow(1 + monthlyInterest, tenure) / (Math.pow(1 + monthlyInterest, tenure) - 1);

    const totalAmount = emi * tenure;
    const totalInterest = totalAmount - principal;

    document.querySelector('#emi').innerText = 'EMI: ₹' + emi.toFixed(2);
    document.querySelector('#totalAmount').innerText = 'Total Amount: ₹' + totalAmount.toFixed(2);
    document.querySelector('#totalInterest').innerHTML = 'Total Interest: ₹' + totalInterest.toFixed(2);
}