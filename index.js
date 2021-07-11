let counter = 0;
const setBudget = 300;
const bankAccount = 1000.89;
const unitPrice = 5.853;
const taxRate = 0.045;
const discountRate = 0.052;
let grossTotal = 0;

let itemUpdate = document.getElementById("input_el");
let orderOutput = document.getElementById("output_el");
let purchaseAlert = document.getElementById("alert_el");
let itemCheckout = document.getElementById("checkoutEl");

let itemCounted = () => {
  // Counts items when button is cliked
  counter = counter + 1;
  itemUpdate.innerText = counter;

  // displays gorss cost when button is cliked
  grossTotal = counter * unitPrice;
  orderOutput.innerText = `$${grossTotal.toFixed(2)}`;

  // Alert out function
  if (grossTotal === bankAccount || grossTotal > bankAccount) {
    purchaseAlert.innerHTML = "Customer is bankrupt";
  } else if (grossTotal > setBudget && grossTotal <= bankAccount / 2) {
    purchaseAlert.innerText =
      "Customer has exceeds  buget but can still afford";
    purchaseAlert.style.color = "#8f6e03";
  } else if (grossTotal > bankAccount / 2 && grossTotal !== bankAccount) {
    purchaseAlert.innerText = "Customer exhauting bank balance.";
    purchaseAlert.style.color = "red";
  } else {
    purchaseAlert.innerText = "Customer still within budget";
  }
};

//  Final checkout function

let order = () => {
  // Counts items when button is cliked
  let netTotal = grossTotal + grossTotal * taxRate;
  let discountedPrice = netTotal - netTotal * discountRate;
  itemCheckout.innerText = `$${discountedPrice.toFixed(2)}`;
};
