import assert from 'node:assert/strict';
import { test } from 'node:test';
import {
  calcularFilasCostos,
  margenSobrePrecio,
  precioPorMargenObjetivo,
  resumenMensual,
  totalCostosFijosMensual,
} from '../../sistema-estetica/src/lib/costosCalculo.ts';

const servicio = (overrides = {}) => ({
  id: 's1', nombre: 'Servicio de prueba', categoria_label: 'Prueba',
  precio: 150, duracion_minutos: 60, margen_objetivo: 40,
  costo_mano_obra: 30, cantidad_estimada_mensual: 10, activo: true,
  ...overrides,
});

const insumos = [
  { servicio_id: 's1', insumo_id: 'i1', cantidad: 2, costo_por_unidad: 15 },
  { servicio_id: 's1', insumo_id: 'i2', cantidad: 1, costo_por_unidad: 30 },
  { servicio_id: 's2', insumo_id: 'i1', cantidad: 1, costo_por_unidad: 999 },
];

const filas = (...servicios) => calcularFilasCostos(servicios, insumos);

test('el precio sugerido usa margen sobre venta, no recargo sobre costo', () => {
  assert.equal(precioPorMargenObjetivo(90, 40), 150);
  assert.equal(margenSobrePrecio(150, 90), 40);
});

test('precio cero no tiene margen calculable', () => {
  assert.equal(margenSobrePrecio(0, 90), null);
  assert.equal(margenSobrePrecio(-1, 90), null);
});

test('solo suma insumos del servicio correspondiente', () => {
  const [fila] = filas(servicio());
  assert.equal(fila.costo_insumos, 60);
  assert.equal(fila.costo_directo, 90);
  assert.equal(fila.contribucion_sesion, 60);
  assert.equal(fila.contribucion_mes, 600);
  assert.equal(fila.bajo_margen, false);
});

test('una venta por debajo del costo conserva la pérdida', () => {
  const [fila] = filas(servicio({ precio: 80 }));
  assert.equal(fila.contribucion_sesion, -10);
  assert.equal(fila.contribucion_mes, -100);
  assert.equal(fila.bajo_margen, true);
});

test('los costos fijos inactivos o negativos no se suman', () => {
  assert.equal(totalCostosFijosMensual([
    { monto_mensual: 500, activo: true },
    { monto_mensual: 100, activo: false },
    { monto_mensual: -20, activo: true },
  ]), 500);
});

test('el resumen excluye servicios inactivos y resta los fijos una sola vez', () => {
  const resumen = resumenMensual(filas(
    servicio(),
    servicio({ id: 's2', activo: false }),
    servicio({ id: 's3', cantidad_estimada_mensual: 0 }),
  ), 500);
  assert.equal(resumen.ingreso_total, 1500);
  assert.equal(resumen.costo_variable_total, 900);
  assert.equal(resumen.contribucion_total, 600);
  assert.equal(resumen.ganancia_neta, 100);
  assert.equal(resumen.sesiones_estimadas_total, 10);
  assert.equal(resumen.estado, 'verde');
});

test('distingue pérdida, equilibrio y cobertura suficiente', () => {
  const base = filas(servicio());
  assert.equal(resumenMensual(base, 601).estado, 'rojo');
  assert.equal(resumenMensual(base, 600).estado, 'amarillo');
  assert.equal(resumenMensual(base, 550).estado, 'amarillo');
  assert.equal(resumenMensual(base, 500).estado, 'verde');
});

test('sin actividad no inventa ingresos ni margen de cobertura', () => {
  const resumen = resumenMensual([], 0);
  assert.equal(resumen.ingreso_total, 0);
  assert.equal(resumen.ganancia_neta, 0);
  assert.equal(resumen.cobertura_pct, null);
  assert.equal(resumen.estado, 'amarillo');
});
