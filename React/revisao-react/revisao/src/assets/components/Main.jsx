import { userState } from 'react';
 
export default function Main() {
    const [contador, setContador] = userState(0);
 
    return (
        <main>
            <h2>Conteúdo Principal</h2>
            <p>Contador: {contador}</p>
            <button onClick={() => setContador(contador + 1)}>Incrementar</button>
        </main>
    );
}