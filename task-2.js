const calculateEngravingPrice = function (message, pricePerWord) {
    let newCalculateEngravingPrice = message.split(" ");
  
    let countLength = newCalculateEngravingPrice.length;
  
  
    let priceTotal = pricePerWord * countLength;
    return priceTotal;
  };
  
  console.log(calculateEngravingPrice("Proin sociis natoque et magnis parturient montes mus", 10));
  
  console.log(calculateEngravingPrice("Proin sociis natoque et magnis parturient montes mus", 20));
  
  console.log(calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40));
  
  console.log(calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20));