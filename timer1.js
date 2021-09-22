//process.stdout.write(\x07);

const myBeep = (str) => {
  //let beepArr = str.split(' ').sort()
  //console.log(beepArr)
  console.log(str)
  for(let i =0 ; i < str.length; i++){
    const delay = Number(str[i]*1000);
    //console.log(delay);

    if(delay > 0 || !str.length){
      setTimeout(() => {
        process.stdout.write('bam!');      
        //console.log(beepArr[i]);      
      },delay)
    }
  }

}

myBeep(process.argv.slice(2)) 
// console.log(myBeep('12 2 3))
// myBeep('')
// myBeep('-1, 8, 2') 
// myBeep('word,more') 