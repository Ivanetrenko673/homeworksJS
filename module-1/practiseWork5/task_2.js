const numberi = 10 ;

for (let i = 0; i < numberi; i += 1) {
  if (i % 2 === 0) {
    console.log(' Число парне : ', i);
    continue;
    
  }

  console.log('Число непарне : ', i);
}