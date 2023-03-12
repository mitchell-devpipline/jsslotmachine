/*
Due: Monday the 13th
Project: Slot Machine
- Rules can be whatever you want
- Symbols can be whatever you want (&, *, (, #, etc..)
- Must include some promise object
- Must include an async function that awaits a promise
- Starting balance, betting system, continue playing by choice, scoring system
- IDEA: Animate the console when you "pull the lever"
- HINT: combination of console.log and console.clear()
*/

const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

// const winningSymbols = ["@@@" || "###" || "$$$"];
// const symbols = "@#$";

function receipt() {
  let receipt = alert(
    ` -----------------------------------------------------------------
    |                           Receipt                               |
    -----------------------------------------------------------------
    |                                                                 |
    |                                                                 |
    |            Bank Balance: $${James.balance} USD               |
    |                                                                 |
    |                                                                 |
    -----------------------------------------------------------------`
  );

  return receipt;
}

class User {
  constructor(firstName, lastName, balance = 0) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.balance = balance;
  }

  get viewBalance() {
    const prompt = `Welcome here is your balance.`;
    alert(`You're Balance is: $ ${this.balance}`);
    receipt();
    atmMenu();
  }

  get makeDeposit() {
    const deposit = Number(
      prompt("Please enter the ammount you would like to deposit")
    );
    this.balance = this.balance + deposit;
    let showBal = alert(`Your new balance is: $ ${this.balance}`);
    receipt();
    atmMenu();
    return this.balance;
  }

  get slots() {
    const winningSymbols = ["@@@" || "###" || "$$$"];
    const symbols = "@#$";
    let slots1 = "";
    for (let i = 0; i < 3; i++) {
      const runSlots = symbols[Math.floor(Math.random() * symbols.length)];
      slots1 += runSlots;
    }
    return slots1;
  }
  get winner() {
    if (symbols == winningSymbols) {
      result = alert(
        `WINNER!!!! 
      You win $200``Your new balance is ${James.balance + 200}`
      );
    } else {
      alert(`Wow you're really dumb for gambling`);
      atmMenu();
    }
  }

  get makeWithdrawl() {
    const withdraw = Number(
      prompt("Please enter the ammount you would like to withdraw")
    );
    this.balance = this.balance - withdraw;
    let showBal = alert(`Your new balance is: $ ${this.balance}`);
    receipt();
    atmMenu();
    return this.balance;
  }
}

const James = new User("James", "Bond", 950);

async function atmMenu() {
  await loadingTimer();
  const pickMenuOption = prompt(
    `What would you like to do?
    1) View Balance
    2) Make a Deposit
    3) Make a Withdrawl
    4) Play Slots
    `
  );

  if (pickMenuOption === "1") {
    alert(James.viewBalance);
    viewBalance();
  } else if (pickMenuOption === "2") {
    alert(James.makeDeposit);
    makeDeposit();
  } else if (pickMenuOption === "3") {
    alert(James.makeWithdrawl);
    makeWithdrawl();
  } else if (pickMenuOption === "4") {
    alert(`Your new balance is ${James.balance - 10}`);
    alert(slots());
    atmMenu();
  }
}

atmMenu();

// async function slots() {
//   await loadingTimer();
//   const winningSymbols = ["@@@", "###", "$$$"];
//   const symbols = "@#$";
//   let slots1 = "";
//   for (let i = 0; i < 3; i++) {
//     const runSlots = symbols[Math.floor(Math.random() * symbols.length)];
//     slots1 += runSlots;
//   }
//   return slots1;
// }

// const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

async function loadingTimer() {
  /*for (let i = 5; i > 0; i--)*/ {
    await sleep(1000);
    alert(`Loading Your Menu Options.
    Please press OK to see Menu. `);
    // alert(i);
  }
}
// loadingTimer();
