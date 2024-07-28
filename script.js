const carosel = document.querySelector(".carosel"),
firstImg = document.querySelectorAll("img")[0],
arrowIcon = document.querySelectorAll(".wrapper i");

let isDragstart = false,prevScrollLeft,prevPageX;

let firstImgWidth=firstImg.clientWidth+14;

const dragStart = (e) => {
  isDragstart = true;
  prevPageX = e.pageX;
  prevScrollLeft = carosel.scrollLeft;
};



const showHideIcons = () => {
  let scrollWidth = carosel.scrollWidth - carosel.clientWidth;
  arrowIcon[0].style.display = carosel.scrollLeft === 0 ? "none" : "block";
  arrowIcon[1].style.display = Math.abs(scrollWidth - carosel.scrollLeft) < 1 ? "none" : "block";
};


arrowIcon.forEach(icon=>{
  icon.addEventListener("click", ()=>{
    let firstImgWidth=firstImg.clientWidth+14;
    carosel.scrollLeft += icon.id === "left" ? -firstImgWidth : firstImgWidth;
    setTimeout(() => 
      showHideIcons(),60);
  });
});

const dragging = (e) => {
  if (!isDragstart) return;
  e.preventDefault();
  carosel.classList.add("dragging");
  let positiondiff = e.pageX - prevPageX;
  carosel.scrollLeft = prevScrollLeft - positiondiff;
  showHideIcons();
};

const dragStop = (e) => {
  isDragstart = false;
  carosel.classList.remove("dragging");
};

carosel.addEventListener("mousedown", dragStart);
carosel.addEventListener("mousemove", dragging);
carosel.addEventListener("mouseup", dragStop);
carosel.addEventListener("mouseleave", dragStop); // Added to handle mouse leaving the carosel element
