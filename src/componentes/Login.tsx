import { useState } from 'react';

export function Login() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <>
      <form>
        <div>
          <label> Usuario:</label>
          <input onChange={(e) => setUsuario(e.target.value)} value={usuario} />
        </div>
        <div>
          <label> Senha:</label>
          <input
            onChange={(e) => setSenha(e.target.value)}
            value={senha}
            type="password"
          />
        </div>
      </form>
    </>
  );
}
