import React, { useEffect, useState } from 'react';

import employeeServices from "../../services/Employee";
import { Link } from 'react-router-dom';

function List() {

    const [listEmployee, setListEmployee] = useState([]);

    useEffect(() => {
        async function fetchDataEmployee() {
            const res = await employeeServices.listEmployee();
            setListEmployee(res.data);
        }

        fetchDataEmployee();
    }, [])

    const employeeDelete = async (i, id) => {
        var confirmDelete = confirm('Confirma a exclusão desse funcionário?');

        if (confirmDelete === true) {
            const res = await employeeServices.delete(id);

            if (res.success) {
                alert(res.message);
                const newList = listEmployee;
                if (i > -1) {
                    newList.splice(i, 1);
                }
                setListEmployee([...newList]);
            } else {
                alert(res.message);
            }
        }
    };

    return (
        <section>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Email</th>
                        <th scope="col">Cidade</th>
                        <th scope="col">Telefone</th>
                        <th scope="col">Tipo</th>
                        <th scope="col">Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {listEmployee.map((item, i) => {
                        return (
                            <tr key={item.id}>
                                <th scope="row">{item.id}</th>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.city}</td>
                                <td>{item.phone}</td>
                                <td>{item.role.rol_name}</td>
                                <td>
                                    <Link to={"/employee/edit/" + item.id} className="btn btn-primary mr-2"> Editar </Link>
                                    <a href='#' className="btn btn-danger" onClick={() => employeeDelete(i, item.id)}> Excluir </a>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </section>
    )
}

export default List;
