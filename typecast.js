const carouselText = [
    {text: "I'm a Coder", color: "#7f00ff"},
    {text: "I'm a Frontend Web Developer", color: "#7f00ff"},
    {text: "I have knowledge about Java", color: "#7f00ff"},
    {text: "I have knowledge about Data Structure and algorithm", color: "#7f00ff"},
    {text: "I have knowledge about MYSQL", color: "#7f00ff"},
    {text: "I have knowledge about OS", color: "#7f00ff"}
    
  ]

  $( document ).ready(async function() {
    carousel(carouselText, "#feature-text")
  });
  
  async function typeSentence(sentence, eleRef, delay = 40) {
    const letters = sentence.split("");
    let i = 0;
    while(i < letters.length) {
      await waitForMs(delay);
      $(eleRef).append(letters[i]);
      i++
    }
    return;
  }
  

  


  async function deleteSentence(eleRef) {
    const sentence = $(eleRef).html();
    const letters = sentence.split("");
    let i = 0;
    while(letters.length > 0) {
      await waitForMs(100);
      letters.pop();
      $(eleRef).html(letters.join(""));
    }
  }
  
  async function carousel(carouselList, eleRef) {
      var i = 0;
      while(true) {
        updateFontColor(eleRef, carouselList[i].color)
        await typeSentence(carouselList[i].text, eleRef);
        await waitForMs(1500);
        await deleteSentence(eleRef);
        await waitForMs(500);
        i++
        if(i >= carouselList.length) {i = 0;}
      }
  }
  
  function updateFontColor(eleRef, color) {
    $(eleRef).css('color', color);
  }
  
  function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }


  $(document).ready(function() {
    $("#downloadCV").click(function() {
      // Call a function to generate and download the PDF
      downloadPDF();
    });

    // Function to generate and download the PDF
    function downloadPDF() {
      // Here you can implement the logic to generate the PDF, for example using a library like jsPDF
      // For simplicity, let's just simulate a PDF creation
      const pdfContent = "This is your CV content. Customize it based on your needs.";

      // Create a Blob with the PDF content
      const blob = new Blob([pdfContent], { type: "application/pdf" });

      // Create a link element and trigger a download
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = "./photoes/as.pdf";
      link.click();
    }
  });


  /***************For multiple slideshow************/
  
  let slideIndex = [1,1];
let slideId = ["mySlides1", "mySlides2"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}