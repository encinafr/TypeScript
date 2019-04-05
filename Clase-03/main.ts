/// <reference path="Empleado.ts" />

let emp = new Empleados.Empleados(123,1000,"Manito", "Larga", 12334, "Masculino");

console.log(emp.ToString());
console.log(emp.Hablar("Ingles"));