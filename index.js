// let whereAt = () => {
//     let pos = window.scrollY
//     let screenY = document.documentElement.scrollHeight - window.innerHeight;
//     let percentage = pos/screenY*100
//     let imm = document.getElementsByClassName("imm")[0];
//     console.log(percentage, "outside")

//     if (percentage > 70) {
//         originalY = screenY;
//         screenY = (0.3)*screenY;
//         pos = 0 - (originalY*0.7) + pos;
//         percentage = pos/screenY*100
//         console.log(100-percentage, "inside")
//         imm.style.clipPath = `polygon(0% ${100-percentage}%, 100% ${100-percentage}%, 100% 100%, 0% 100%)`;

//     }
//     console.log(percentage, imm)
// };