import React from 'react';

const LoginPage = (props) => {
    return (
        <main class="holder">
        <div>
            <h2>Iniciar sesión</h2>
            <form action="" class="formulario">
                <p>
                    <label for="usuario">Usuario:</label>
                    <input type="text"/>
                </p>
                <p>
                    <label for="contrasena">Contraseña:</label>
                    <input type="password"/>
                </p>
                <p>
                    <input type="submit" name="" value="Entrar"/>
                </p>
            </form>
        </div>
    </main>
    )
}

export default LoginPage;