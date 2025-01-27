(() => {
  // Resolver sin la triple condicional dentro del if
  // includes? arrays?
  function isRedFruit(fruit: string): boolean {
    // if (fruit === "manzana" || fruit === "cereza" || fruit === "ciruela") {
    //   return true;
    // } else {
    //   return false;
    // }
    const redFruitsNames = ["manzana", "cereza", "ciruela"];

    return redFruitsNames.includes(fruit) ? true : false;
  }

  type FruitColor = "red" | "yellow" | "purple";

  interface Fruits {
    [color: string]: string[];
  }

  // Simplificar esta función
  // switch? Object literal? validar posibles colores
  function getFruitsByColor(color: FruitColor): string[] {
    // if (color === "red") {
    //   return ["manzana", "fresa"];
    // } else if (color === "yellow") {
    //   return ["piña", "banana"];
    // } else if (color === "purple") {
    //   return ["moras", "uvas"];
    // } else {
    //   throw Error("the color must be: red, yellow, purple");
    // }
    // switch (color) {
    //   case "red":
    //     return ["manzana", "fresa"];
    //   case "yellow":
    //     return ["piña", "banana"];
    //   case "purple":
    //     return ["moras", "uvas"];
    //   default:
    //     throw Error("the color must be: red, yellow, purple");
    // }

    const fruitsByColor: Fruits = {
      red: ["manzana", "fresa"],
      yellow: ["piña", "banana"],
      purple: ["moras", "uvas"],
    };

    const availableColors = Object.keys(fruitsByColor);

    if (!availableColors.includes(color))
      throw Error(`the color must be: ${availableColors}`);

    return fruitsByColor[color];
  }

  // Simplificar esta función
  let isFirstStepWorking = true;
  let isSecondStepWorking = true;
  let isThirdStepWorking = true;
  let isFourthStepWorking = true;

  function workingSteps(): string {
    // if (isFirstStepWorking === true) {
    //   if (isSecondStepWorking === true) {
    //     if (isThirdStepWorking === true) {
    //       if (isFourthStepWorking === true) {
    //         return "Working properly!";
    //       } else {
    //         return "Fourth step broken.";
    //       }
    //     } else {
    //       return "Third step broken.";
    //     }
    //   } else {
    //     return "Second step broken.";
    //   }
    // } else {
    //   return "First step broken.";
    // }

    if (!isFirstStepWorking) return "First step broken.";

    if (!isSecondStepWorking) return "Second step broken.";

    if (!isThirdStepWorking) return "Third step broken.";

    return isFourthStepWorking ? "Working properly!" : "Fourth step broken.";
  }

  // isRedFruit
  console.log({ isRedFruit: isRedFruit("cereza"), fruit: "cereza" }); // true
  console.log({ isRedFruit: isRedFruit("piña"), fruit: "piña" }); // true

  //getFruitsByColor
  console.log({ redFruits: getFruitsByColor("red") }); // ['manzana', 'fresa']
  console.log({ yellowFruits: getFruitsByColor("yellow") }); // ['piña', 'banana']
  console.log({ purpleFruits: getFruitsByColor("purple") }); // ['moras', 'uvas']
  // console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

  // workingSteps
  console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados
})();
