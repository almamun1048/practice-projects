const btnWithdraw = document.getElementById("btn-withdraw")
const withdrawAmount = document.getElementById("withdraw-amount")
const withdrawInput = document.getElementById("withdraw-input")
const totalBalanceAmount = document.getElementById("balance-amount")

btnWithdraw.addEventListener('click',()=>{
    console.log("clicked")
    const withdrawInputValue = parseFloat(withdrawInput.value)
    if (isNaN(withdrawInputValue)) {
        alert('Please provide a valid number');
        return;
    }
    withdrawAmount.innerHTML = parseFloat(withdrawInput.value) + parseFloat(withdrawAmount.innerHTML)
    totalBalanceAmount.innerHTML =  parseFloat(totalBalanceAmount.innerHTML) - parseFloat(withdrawInput.value)
    withdrawInput.value = ""
})