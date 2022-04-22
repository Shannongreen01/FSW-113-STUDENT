var bankName = 'CashMoney Bank'
let letterText = ''

const customers = [ 
    { fname: 'Brianna', balance: -54.99, rate: 2.7 },
    { fname: 'Dillon', balance: 1014.94, rate: 5.1 },
    { fname: 'Dmitri', balance: 0, rate: 7.2 },

];

for (let i = 0; i < customers.length; i++){
    if (customers[i].balance < 0){
        letterText += `<div class='debt_owed'> Hello, ${customers[i].fname}, this is an attempt to collect a debt owed to ${bankName}. Your account is past due by the amount of ${customers[i].balance}.`;
    }
    else if (customers[i].balance == 0){
        letterText += `<div class='No_action'> Hello, ${customers[i].fname}, greetings from ${bankName}. Your balance is current. No need for action until next month. `;
    }
    else {
        letterText += `<div class='Lower'> Hello, ${customers[i].fname}, greetings from ${bankName}. Because you are such a great customer, we're lowering your interest rate to ${customers[i].rate}%.`;
    };
};
document.getElementById('Div').innerHTML = letterText;