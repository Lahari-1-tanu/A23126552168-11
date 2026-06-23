try {
   // code
} catch(err) {
   await Log(
      "backend",
      "error",
      "handler",
      err.message
   );
}