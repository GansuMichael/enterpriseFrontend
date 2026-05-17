async function startScanner(){

    const stream =
    await navigator.mediaDevices
    .getUserMedia({
       video:true
    });
 
    video.srcObject = stream;
 
 }