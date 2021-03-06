//Listener to form button and send messege to WhatsApp
document.getElementById("send").addEventListener("click", function(event){
    event.preventDefault()

    //get input data
    const name = document.querySelector("#fname")
    const email = document.querySelector("#fmail")
    const city = document.querySelector("#fcity")
    const message = document.querySelector("#fmessage")

    //format text to send with WhatsApp
    let textToSend = `[${name.value} - ${email.value} - ${city.value}] --> ${message.value}`
    textToSend.replace(/\s+/g, "%20")
    
    //Set your WhatsApp number
    const PHONE_NUMBER = 5562988887777
    
    //Join text with WhatsApp API
    let url = `https://api.whatsapp.com/send?phone=${PHONE_NUMBER}&text=%20${textToSend}`

    //Open WhatsApp App
    window.open(url, "-blank")

    //Clear input data
    name.value = ""
    email.value = ""
    city.value = ""
    message.value = ""

  });