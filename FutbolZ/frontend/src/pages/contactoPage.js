import React from 'react';

const ContactoPage = (props) => {
    return (
        <main className="holder">
            <div>
                <h2>Contacto</h2>
                <form action="" className="formulario">
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email</label>
                    <br/>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="nombre@ejemplo.com"/>
                    </div>
                    <br/>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Mensaje</label>
                    <br/>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <br/>
                    <p>
                        <input type="submit" value="Enviar" />
                    </p>
                </form>
            </div>
        </main>
    )
}

export default ContactoPage;