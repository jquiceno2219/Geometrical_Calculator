let selectedFigure = null;
let calculationType = null;
const secondInput = document.getElementById('second-input');
const thirdInput = document.getElementById('third-input');


/**
 * Permite seleccionar una figura geométrica y actualiza la interfaz.
 * Muestra u oculta el campo adicional según la figura seleccionada.
 *
 * @param {String} figure - El nombre de la figura seleccionada (cuadrado, círculo, triángulo, rectángulo).
 */
function selectFigure(figure) {
  selectedFigure = figure;

  // Muestra u oculta el campo adicional según la figura
  if (figure === 'triángulo') {
    secondInput.style.display = 'block';  // Mostrar segundo input
    document.getElementById('result').innerText = `Figura seleccionada: ${capitalize(figure)}.`;
  } else if (figure === 'rectángulo') {
    secondInput.style.display = 'block';  // Mostrar segundo input
    thirdInput.style.display = 'none';  // Ocultar tercer input
    document.getElementById('result').innerText = `Figura seleccionada: ${capitalize(figure)}. Necesitas dos valores.`;
  } else {
    secondInput.style.display = 'none';  // Ocultar segundo input
    thirdInput.style.display = 'none';
    document.getElementById('result').innerText = `Figura seleccionada: ${capitalize(figure)}.`;
  }
}

/**
 * Establece el tipo de cálculo a realizar.
 *
 * @param {String} type - El tipo de cálculo (área o perímetro).
 */
function setCalculation(type) {
    calculationType = type;
  
    if (calculationType === 'perímetro' && selectedFigure === 'triángulo') {
        thirdInput.style.display = 'block';  // Mostrar tercer input
        document.getElementById('result').innerText = `Parámetro a calcular: ${capitalize(type)}`;
    } else {
        document.getElementById('result').innerText = `Parámetro a calcular: ${capitalize(type)}`;
        thirdInput.style.display = 'none';  // Ocultar tercer input
    }
}

/**
 * Realiza el cálculo basado en la figura y el tipo de cálculo seleccionados.
 */
function calculate() {
  const value1 = parseFloat(document.getElementById('inputValue1').value);
  const value2 = parseFloat(document.getElementById('inputValue2')?.value);
  const value3 = parseFloat(document.getElementById('inputValue3')?.value);
  let result = '';

  if (!selectedFigure || !calculationType || isNaN(value1) || value1 < 0 || value2 < 0 || value3 < 0) {
    result = 'Por favor selecciona una figura, el cálculo y un valor válido.';
  } else {
    switch (selectedFigure) {
      case 'cuadrado':
        result = calculateSquare(value1);
        break;
      case 'círculo':
        result = calculateCircle(value1);
        break;
      case 'triángulo':
        if (!isNaN(value2)) {
          result = calculateTriangle(value1, value2, value3);
        } else {
          result = 'Por favor ingresa la base y altura válidas para el triángulo.';
        }
        break;
      case 'rectángulo':
        if (!isNaN(value2)) {
          result = calculateRectangle(value1, value2);
        } else {
          result = 'Por favor ingresa la base y altura válidas para el rectángulo.';
        }
        break;
      default:
        result = 'Figura no soportada.';
    }
  }

  document.getElementById('result').innerText = result;
}


/**
 * Calcula el área o perímetro del cuadrado.
 *
 * @param {number} lado - La longitud del lado del cuadrado.
 * @returns {string} - El resultado del cálculo (área o perímetro).
 */
function calculateSquare(lado) {
  if (calculationType === 'área') {
    return `El área del cuadrado es de ${lado * lado}`;
  } else if (calculationType === 'perímetro') {
    return `El perímetro del cuadrado es de ${4 * lado}`;
  }
}

/**
 * Calcula el área o perímetro del círculo.
 *
 * @param {number} radio - El radio del círculo.
 * @returns {string} - El resultado del cálculo (área o perímetro).
 */
function calculateCircle(radio) {
  if (calculationType === 'área') {
    return `El área del círculo es de ${(Math.PI * radio * radio).toFixed(2)}`;
  } else if (calculationType === 'perímetro') {
    return `El perímetro del círculo es de ${(2 * Math.PI * radio).toFixed(2)}`;
  }
}

/**
 * Calcula el área o perímetro de un triángulo.
 *
 * @param {number} base - La base del triángulo.
 * @param {number} altura - La altura del triángulo.
 * @param {number} tercerLado - La longitud del tercer lado del triángulo (solo para perímetro).
 * @returns {string} - El resultado del cálculo (área o perímetro).
 */
function calculateTriangle(base, altura, tercerLado) {
  if (calculationType === 'área') {
    return `El área del triángulo es de ${(base * altura / 2).toFixed(2)}`;
  } else if (calculationType === 'perímetro') {
    return `El perímetro del triángulo es ${base + altura + tercerLado}`;
  }
}

/**
 * Calcula el área o perímetro de un rectángulo.
 *
 * @param {number} base - La base del rectángulo.
 * @param {number} altura - La altura del rectángulo.
 * @returns {string} - El resultado del cálculo (área o perímetro).
 */
function calculateRectangle(base, altura) {
  if (calculationType === 'área') {
    return `El área del rectángulo es de ${base * altura}`;
  } else if (calculationType === 'perímetro') {
    return `El perímetro del rectángulo es de ${2 * (base + altura)}`;
  }
}

/**
 * Capitaliza la primera letra de una cadena.
 *
 * @param {string} str - La cadena a capitalizar.
 * @returns {string} - La cadena con la primera letra en mayúscula.
 */
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}