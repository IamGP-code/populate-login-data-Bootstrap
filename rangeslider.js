  // Initialize the single slider
  var singleSlider = new Slider("#singleSlider", {});
  // to Update the selected value
  singleSlider.on("slide",(sliderValue)=> {
    var selectedValue = document.getElementById("sliderValue");
    selectedValue.textContent = sliderValue;
    if(sliderValue < 10) {
      document.getElementById('card2').classList.remove('scale');
      //document.getElementById('card3').classList.remove('scale');
      document.getElementById('card1').classList.add('scale');

    }
    else if(sliderValue >= 10 && sliderValue <= 20) {
      document.getElementById('card1').classList.remove('scale');
      document.getElementById('card3').classList.remove('scale');
      document.getElementById('card2').classList.add('scale');
    }
    else
    {document.getElementById('card1').classList.remove('scale');
    document.getElementById('card2').classList.remove('scale');
   document.getElementById('card3').classList.add('scale');
  
  }
  });
  