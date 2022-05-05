/* eslint-disable jest/valid-title */
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Fatorial from "./Fatorial"

describe("<Fatorial/>", () => {
    test("Componente Fatorial renderizado", () => {
        render(<Fatorial/>);             
        expect(screen.getByText("Cálculo do Fatorial")).toBeInTheDocument();
    })

    test("O valor de numero inserido é 20", () => {
        render(<Fatorial/>); 
        const input = screen.getByTestId("numero");
        fireEvent.change(input, {target: { value: 20 }})
        expect(input.value).toEqual('20');
    })

    test("O fatorial de 5 é 120", async () => {
        render(<Fatorial/>);   
        const input = screen.getByTestId("numero");
        fireEvent.change(input, {target: { value: 5 }})
        const calcButton = screen.getByText("Calcular");
        fireEvent.click(calcButton);
        const resultado = await screen.findByTestId("resultado");       
        expect(resultado.textContent).toBe('120.00');
    })
});

