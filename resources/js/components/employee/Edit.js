import React, { useState, useEffect } from 'react';

import employeeServices from "../../services/Employee";

function Edit(props) {

    const [id, setId] = useState(null);
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [city, setCity] = useState(null);
    const [phone, setPhone] = useState(null);
    const [rol, setRol] = useState(null);
    const [selectedRol, setSelectRol] = useState(null);
    const [listRol, setListRol] = useState([]);

    useEffect(() => {
        async function fetchDataEmployee() {
            let id = props.match.params.id;
            const res = await employeeServices.edit(id);
            if (res.success) {
                const data = res.data;
                setId(data.id);
                setName(data.name);
                setEmail(data.email);
                setCity(data.city);
                setPhone(data.phone);
                setRol(data.rol);
                setSelectRol(data.role.rol_name)
            } else {

            }
        }
        fetchDataEmployee();

        async function fetchDataRol() {
            // load data from API
            const res = await employeeServices.list();
            setListRol(res.data)
        }
        fetchDataRol();

    }, []);

    const updateEmployee = async () => {
        const data = {
            id, name, email, city, phone, rol
        };

        const res = await employeeServices.update(data);

        if (res.success) {
            alert(res.message);
        } else {
            alert(res.data.errors);
        }
    }

    return (
        <div className="container">
            <h4 style={{ textAlign: 'center' }}>Editar Funcionário</h4>
            <hr />
            <div className="row">
                <div className="col-lg-12 col-md-6 mb-3" style={{ margin: 'auto' }}>
                    <label htmlFor="name">Nome Completo</label>
                    <input type="text" className="form-control" value={name || null}
                        onChange={(event) => setName(event.target.value)} />
                </div>
            </div>

            <div className="row">
                <div className="col-lg-12 col-md-6 mb-3" style={{ margin: 'auto' }}>
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" value={email || null}
                        onChange={(event) => setEmail(event.target.value)} />
                </div>
            </div>

            <div className="row">
                <div className="col-lg-12 col-md-6 mb-3" style={{ margin: 'auto' }}>
                    <label htmlFor="city">Cidade</label>
                    <input type="text" className="form-control" value={city || null}
                        onChange={(event) => setCity(event.target.value)} />
                </div>
            </div>

            <div className="row">
                <div className="col-lg-12 col-md-6 mb-3" style={{ margin: 'auto' }}>
                    <label htmlFor="phone">Telefone </label>
                    <input type="text" className="form-control" value={phone || null}
                        onChange={(event) => setPhone(event.target.value)} />
                </div>
            </div>

            <div className="row">
                <div className="col-lg-12 col-md-6 col-sm-12 mb-3" style={{ margin: 'auto' }}>
                    <label htmlFor="role">Tipo de usuário</label>
                    <select
                        id="inputState"
                        className="form-control"
                        value={rol}
                    >
                        {
                            listRol.map((itemselect) => {
                                return (
                                    <option value={itemselect.rol_id} key={itemselect.rol_id}>{itemselect.rol_name}</option>
                                )
                            })
                        }
                    </select>
                </div>
            </div>


            <div className="row">
                <div className="col-lg-12 col-md-6 mb-3" style={{ margin: 'auto' }}>
                    <button
                        className="btn btn-primary btn-block"
                        type="submit"
                        onClick={() => updateEmployee()}>Salvar</button>
                </div>
            </div>
        </div>
    )

}

export default Edit;
