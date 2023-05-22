onmessage = function(event) {
  if (event.data === "start") {
    // Start the worker
    console.log("Am primit o notificare de la scriptul principal!");
    self.postMessage("Mesaj de la worker la main script");
  }
};
