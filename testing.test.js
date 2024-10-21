import { describe, it, expect, beforeEach } from 'vitest';

// Variables globales para almacenar los valores de las figuras geométricas.
let resultado;
let tipoFigura;
let valorLado;
let valorBase;
let valorAltura;
let valorRadio;
let largo;
let ancho;

// Función para calcular el área según el tipo de figura geométrica.
const calcularArea = () => {
  switch (tipoFigura) {
    case 'Cuadrado':
      return valorLado * valorLado;
    case 'Círculo':
      return Math.PI * valorRadio * valorRadio;
    case 'Triángulo':
      return (valorBase * valorAltura) / 2;
    case 'Rectángulo':
      return largo * ancho;
    default:
      return null;
  }
};

// Función para calcular el perímetro.
const calcularPerimetro = () => {
  switch (tipoFigura) {
    case 'Cuadrado':
      return 4 * valorLado;
    case 'Triángulo':
      return 'El perímetro del triángulo no puede calcularse con base y altura únicamente.';
    default:
      return null;
  }
};

describe('Calculadora de Figuras Geométricas', () => {
  //Valores iniciales
  beforeEach(() => {
    resultado = '';
    tipoFigura = '';
    valorLado = 0;
    valorBase = 0;
    valorAltura = 0;
    valorRadio = 0;
    largo = 0;
    ancho = 0;
  });

  it('debería calcular el área de un cuadrado', () => {
    tipoFigura = 'Cuadrado';
    valorLado = 4;
    resultado = calcularArea();
    expect(resultado).toBe(16);
  });

  it('debería calcular el perímetro de un cuadrado', () => {
    tipoFigura = 'Cuadrado';
    valorLado = 4;
    resultado = calcularPerimetro();
    expect(resultado).toBe(16);
  });

  it('debería calcular el área de un círculo', () => {
    tipoFigura = 'Círculo';
    valorRadio = 3;
    resultado = calcularArea();
    expect(resultado).toBeCloseTo(28.27, 2);
  });

  it('debería calcular el área de un triángulo', () => {
    tipoFigura = 'Triángulo';
    valorBase = 3;
    valorAltura = 4;
    resultado = calcularArea();
    expect(resultado).toBe(6);
  });

  it('debería manejar correctamente el cálculo del perímetro de un triángulo', () => {
    tipoFigura = 'Triángulo';
    valorBase = 3;
    valorAltura = 4;
    resultado = calcularPerimetro();
    expect(resultado).toBe('El perímetro del triángulo no puede calcularse con base y altura únicamente.');
  });

  it('debería calcular el área de un rectángulo', () => {
    tipoFigura = 'Rectángulo';
    largo = 4;
    ancho = 6;
    resultado = calcularArea();
    expect(resultado).toBe(24);
  });
});
