async function sleep(millis: number): Promise<void> {
  return new Promise((resolve, reject) => {
    if (resolve) {
      return setTimeout(resolve, millis);
    }
    return setTimeout(reject, millis);
  });
}


/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */