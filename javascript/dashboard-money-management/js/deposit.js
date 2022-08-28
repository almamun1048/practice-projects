const btnDeposit = document.getElementById("btn-deposit")
const depositAmount = document.getElementById("deposit-amount")
const depositInput = document.getElementById("deposit-input")
const balanceAmount = document.getElementById("balance-amount")

btnDeposit.addEventListener('click',()=>{
    const depositInputValue = parseFloat(depositInput.value)
    if (isNaN(depositInputValue)) {
        alert('Please provide a valid number');
        return;
    }
    depositAmount.innerHTML = parseFloat(depositInput.value) + parseFloat(depositAmount.innerHTML)
    balanceAmount.innerHTML = parseFloat(depositInput.value) + parseFloat(balanceAmount.innerHTML)
    depositInput.value = ""
})