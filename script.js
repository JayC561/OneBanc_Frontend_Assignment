window.addEventListener("DOMContentLoaded", () =>{
  const typewriting = document.getElementsByClassName('typewriter')[0];
  const typewriter = new Typewriter(typewriting,{
    loop: true,
    delay: 75
  })
  typewriter
    .pauseFor(2300)
    .typeString('REWARDS')
    .pauseFor(300)
    .deleteChars(7)
    .typeString('SAVINGS')
    .pauseFor(300)
    .deleteChars(7)
    .typeString('INVESTMENTS')
    .pauseFor(300)
    .deleteChars(11)
    .typeString('FOREX')
    .pauseFor(300)
    .deleteChars(5)
    .typeString('ANALYTICS')
    .pauseFor(300)
    .deleteChars(9)
    .typeString('CARDS')
    .pauseFor(300)
    .deleteChars(5)
    .typeString('PAYMENTS')
    .pauseFor(300)
    .deleteChars(8)
    .typeString('LOAN')
    .pauseFor(300)
    .deleteChars(4)
    .typeString('SUPPORT')
    .pauseFor(300)
    .deleteChars(7)
    .pauseFor(500)
    .start();
})


/*
Loan
Support
rewards
savings
inv
forex
ana
cards
pay
*/
