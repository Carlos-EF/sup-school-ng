import { Routes } from '@angular/router';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { ListaPessoasComponent } from './components/lista-pessoas/lista-pessoas.component';
import { CalculadoraRetanguloComponent } from './components/calculadora-retangulo/calculadora-retangulo.component';

export const routes: Routes = [
    { path: "calculadora", component: CalculadoraComponent },
    { path: "lista-pessoas", component: ListaPessoasComponent },
    { path: "calculadora-retangulo", component: CalculadoraRetanguloComponent}
];
// SPA: Single Page Application
