let wrapper = document.querySelector(".wrapper");
let val = document.querySelector(".val");

let arr = ["Web Developer", "App Developer", "Web Design"];

let count = 0;

const txtAnim = () => {
  if (count >= arr.length) {
    count = 0;
  }
  val.innerHTML = "";

  for (let i = 0; i < arr[count].length; i++) {
    let div = document.createElement("div");
    div.innerHTML = arr[count][i];

    div.classList.add("txt");
    div.classList.add("anim");
    div.style.animationDelay = i / 10 + "s"

    if(div.innerHTML === " "){
      div.innerHTML = "&nbsp;"
    }
    val.appendChild(div);
  }
  count++;
};

txtAnim();
setInterval(txtAnim, 2000);
