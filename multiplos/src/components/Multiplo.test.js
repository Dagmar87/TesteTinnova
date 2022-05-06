import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Multiplo from "./Multiplo";

describe("<Multiplo/>", () => {
    test("Componente Multiplo renderizado", () => {
        render(<Multiplo/>);
        expect(screen.getByText("Soma dos Multiplos de 3 ou 5")).toBeInTheDocument();
    });
    test("O valor do limite inserido é 150", () => {
        render(<Multiplo/>);
        const limitador = screen.getByTestId("limite");
        fireEvent.change(limitador, {target: { value: 150 }})
        expect(limitador.value).toEqual('150');
    });
    test("A soma dos multiplos 3 e 5 é 23, sendo limite é 10", async () => {
        render(<Multiplo/>);
        const limitador = screen.getByTestId("limite");
        fireEvent.change(limitador, {target: { value: 10 }})
        const somaButton = screen.getByText("Somar");
        fireEvent.click(somaButton);
        const resultadoSoma = await screen.findByTestId("resultadoSoma"); 
        expect(resultadoSoma.textContent).toBe('23.00');
    })
});