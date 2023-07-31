function openWhatsApp() {
   
    const phoneNumber = "+923218996191"; 
    const message = "Hello, Thank You for contect with Us"; 

   
    const encodedMessage = encodeURIComponent(message);

    
    const whatsappLink = `https://wa.me/${phoneNumber}/?text=${encodedMessage}`;

   
    window.open(whatsappLink, "_blank");
  }

  document.getElementById("whatsappButton").addEventListener("click", openWhatsApp);