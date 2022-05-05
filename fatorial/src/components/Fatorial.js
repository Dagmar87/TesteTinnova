import { useState } from "react";
import "./Fatorial.css"

function Fatorial() {
    const [numero, setNumero] = useState(0);
    const [resultado, setResultado] = useState();

    function calcular(){

        if(numero < 0){
            return setResultado("O valor do número deve ser igual ou maior que zero");
        }

        if(numero === 0 || numero === 1){
            return setResultado(1);
        }

        let fatorial = numero;

        const pM = numero - 1;

        for (var i = pM; i > 1; i--) {
            fatorial = fatorial * i;
        } 

        setResultado(fatorial);
    }

    return (
        <div className="Fatorial">
            <div>
            <h1>Cálculo do Fatorial</h1>
            </div>
            <div className="input">
                <div>
                    <label htmlFor="nome">Digite o número:</label>
                </div>
                <div>
                    <input 
                    className="numero"
                    id="numero"
                    data-testid="numero"
                    type="number"
                    required="required"
                    value={numero}
                    onChange={(e) => setNumero(Number(e.target.value))}
                    />  
                </div>                          
            </div>
            <div>
                <button className="calcular" id="calcular" onClick={calcular}>
                    Calcular
                </button>
            </div>
            <div className="resultado" id="resultado" data-testid="resultado">
                {typeof resultado === "number"
                ? resultado.toFixed(2)
                :resultado}
            </div>
        </div>
    );
}

export default Fatorial;