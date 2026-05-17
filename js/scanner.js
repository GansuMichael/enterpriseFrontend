// scanner
function onScanSuccess(decodedText){

    console.log(
       "Scanned:",
       decodedText
    );
    
    }
    
    const html5QrCode =
    new Html5Qrcode("reader");
    
    html5QrCode.start(
    
    {
       facingMode: "environment"
    },
    
    {
       fps: 10,
       qrbox: 250
    },
    
    onScanSuccess
    
    );