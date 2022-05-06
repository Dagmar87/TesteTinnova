import { useState } from "react";
import "./Multiplo.css";

function Multiplo() {

    const [limite, setLimite] = useState(0);
    const [resultadoSoma, setResultadoSoma] = useState();

    function somar(){

        var x3 = 3;
        var x5 = 5;
        var somax3 = 0;
        var somax5 = 0; 

        for(var i = 1; i < limite; i++) {
            if(i % x3 === 0){
                somax3 += i;
            }
        }

        for(var j = 1; j < limite; j++) {
            if(j % x5 === 0){
                somax5 += j;
            }
        }
        
        var resultado = somax3 + somax5;

        setResultadoSoma(resultado);
    }

    return (
        <div className="Multiplo">
            <div>
                <h1>Soma dos Multiplos de 3 ou 5</h1>
            </div>
            <div className="input">
                <div>
                    <label htmlFor="nome">Digite o limite:</label>
                </div>
                <div>
                    <input 
                    className="limite"
                    id="limite"
                    data-testid="limite"
                    type="number"
                    required="required"
                    value={limite}
                    onChange={(e) => setLimite(Number(e.target.value))}
                    />  
                </div>
                <div>
                    <button className="somar" id="somar" onClick={somar}>
                        Somar
                    </button>
                </div>                
                <div className="resultadoSoma" id="resultadoSoma" data-testid="resultadoSoma">
                    {typeof resultadoSoma === "number"
                    ? resultadoSoma.toFixed(2)
                    : resultadoSoma}
                </div>
            </div>
        </div>
    );
}

export default Multiplo;