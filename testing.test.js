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
let tercerLado;

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
      return valorLado + valorBase + tercerLado;
    case 'Rectángulo':
      return 2 * (largo + ancho);
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
    tercerLado = 0;
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

  it('debería calcular el perímetro de un triángulo', () => {
    tipoFigura = 'Triángulo';
    valorLado = 3;
    valorBase = 4;
    tercerLado = 5; // Asignar un valor al tercer lado
    resultado = calcularPerimetro();
    expect(resultado).toBe(12); // 3 + 4 + 5
  });

  it('debería calcular el área de un rectángulo', () => {
    tipoFigura = 'Rectángulo';
    largo = 4;
    ancho = 6;
    resultado = calcularArea();
    expect(resultado).toBe(24);
  });

  it('debería calcular el perímetro de un rectángulo', () => {
    tipoFigura = 'Rectángulo';
    largo = 4;
    ancho = 6;
    resultado = calcularPerimetro();
    expect(resultado).toBe(20); // 2 * (4 + 6)
  });
});
