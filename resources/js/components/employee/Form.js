import React, { useEffect, useState } from 'react';

import employeeServices from "../../services/Employee";

function Form() {

    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [city, setCity] = useState(null);
    const [phone, setPhone] = useState(null);
    const [rol, setRol] = useState(null);
    const [listRol, setListRol] = useState([]);
    const [listMessage, setListMessage] = useState([]);
    const [listErrors, setListErrors] = useState([]);

    useEffect(() => {
        async function fetchDataRol() {
            // load data from API
            const res = await employeeServices.list();
            setListRol(res.data)
        }
        fetchDataRol();
    }, []);

    const saveEmployee = async () => {

        const data = {
            name, email, city, phone, rol
        }
        const res = await employeeServices.save(data);

        if (res.success) {
            setListMessage(res.message);
        } else {
            setListErrors(res.data.errors);
        }
    }

    return (
        <section className="container">
            <h4 style={{ textAlign: 'center' }}>Cadastrar Funcionário</h4>
            <span className="text-success" style={{ textAlign: 'center' }}>{listMessage || null}</span>
            <hr />
            <div className="row">
                <div className="col-lg-12 col-md-6 col-sm-12 mb-3" style={{ margin: 'auto' }}>
                    <label htmlFor="name">Nome Completo </label>
                    <input type="text" className="form-control" placeholder="Fulano de Tal"
                        onChange={(event) => setName(event.target.value)} />
                    <span className="text-danger">{listErrors.name}</span>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-12 col-md-6 col-sm-12 mb-3" style={{ margin: 'auto' }}>
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" placeholder="exemplo@exemplo.com"
                        onChange={(event) => setEmail(event.target.value)} />
                    <span className="text-danger">{listErrors.email}</span>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-12 col-md-6 col-sm-12 mb-3" style={{ margin: 'auto' }}>
                    <label htmlFor="phone">Cidade</label>
                    <input type="text" className="form-control" placeholder="São Paulo"
                        onChange={(event) => setCity(event.target.value)} />
                    <span className="text-danger">{listErrors.city}</span>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-12 col-md-6 col-sm-12 mb-3" style={{ margin: 'auto' }}>
                    <label htmlFor="phone">Telefone </label>
                    <input type="text" className="form-control" placeholder="123467890"
                        onChange={(event) => setPhone(event.target.value)} />
                    <span className="text-danger">{listErrors.phone}</span>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-12 col-md-6 col-sm-12 mb-3" style={{ margin: 'auto' }}>
                    <label htmlFor="role">Tipo de usuário</label>
                    <select
                        id="inputState"
                        className="form-control"
                        onChange={(event) => setRol(event.target.value)}
                        defaultValue={'Selecione'}>
                        <option disabled value="Selecione">Selecione</option>
                        {
                            listRol.map((item) => {
                                return (
                                    <option key={item.rol_id} value={item.rol_id}>{item.rol_name}</option>
                                )
                            })
                        }
                    </select>
                    <span className="text-danger">{listErrors.rol}</span>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6 col-sm-12 mb-3" style={{ margin: 'auto' }}>
                    <button className="btn btn-primary btn-block" type="submit"
                        onClick={() => saveEmployee()}>Salvar</button>
                </div>
            </div>
        </section >
    )
}

export default Form;
