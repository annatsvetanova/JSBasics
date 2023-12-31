function newHouse(input) {
    let flowerType = input[0];
    let flowerCount = Number(input[1]);
    let budget = Number(input[2]);

    let finalPrice = 0;

    switch (flowerType) {
        case 'Roses':
            finalPrice = flowerCount * 5.00;
            if (flowerCount > 80) {
                finalPrice *= 0.90;
            }
            break;
        case 'Dahlias':
            finalPrice = flowerCount * 3.80;
            if (flowerCount > 90) {
                finalPrice *= 0.85;
            }
            break;
        case 'Tulips':
            finalPrice = flowerCount * 2.80;
            if (flowerCount > 80) {
                finalPrice *= 0.85;
            }
            break;
        case 'Narcissus':
            finalPrice = flowerCount * 3;
            if (flowerCount < 120) {
                finalPrice *= 1.15;
            }
            break;
        case 'Gladiolus':
            finalPrice = flowerCount * 2.50;
            if (flowerCount < 80) {
                finalPrice *= 1.20;
            }
            break;
        }
            if (budget >= finalPrice) {
                let remainingSum = budget - finalPrice;
                console.log(`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${remainingSum.toFixed(2)} leva left.`);
            } else {
                let moneyNeeded = finalPrice - budget;
                console.log(`Not enough money, you need ${moneyNeeded.toFixed(2)} leva more.`);
            }
        }
    
    newHouse(["Tulips",
        "88",
        "260"]);
    