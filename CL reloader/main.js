document.addEventListener("DOMContentLoaded", function() {
  document
    .getElementById("extension-button")
    .addEventListener("click", clickBtn);
  function closeWindow() {
    
  }
  function clickBtn() {
    var url = "https://www.google.com";
    var time = document.getElementById("time-quantity").value;
    url = document.getElementById("myText").value;
    
    if(time>5 || time<1){
        time = 4.9;
    }

    myWindow = chrome.windows.create({url: url, incognito: true, focused: true, type: "normal", state: "maximized"});
    chrome.windows.getLastFocused(null,function(w){ setTimeout(function(){
        chrome.windows.remove(w.id);
        clickBtn();
    },time*1000*60) });
    
  }
  
  
});
