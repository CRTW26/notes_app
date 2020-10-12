class Assert {

  isTrue(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Test failed:" + assertionToCheck);
     } else {
        console.log("Test passed!")
      }
  }

}