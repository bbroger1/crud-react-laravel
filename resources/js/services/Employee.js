import axios from "axios";

const baseUrl = "http://crud_react.test/api/employee";
const employee = {};

employee.list = async () => {
    const urlList = baseUrl + "/role";
    const res = await axios.get(urlList)
        .then(response => { return response.data; })
        .catch(error => { return error; });

    return res;
}

employee.save = async (data) => {
    const urlSave = baseUrl + "/create";
    const res = await axios.post(urlSave, data)
        .then(response => {
            return response.data
        })
        .catch(error => {
            return error.response;
        })

    return res;
}

employee.listEmployee = async () => {
    const urlListEmployee = baseUrl + "/list";
    const res = await axios.get(urlListEmployee)
        .then(response => {
            return response.data
        })
        .catch(error => {
            return error.response;
        })

    return res;
}

employee.edit = async (id) => {
    const urlEdit = baseUrl + "/edit/" + id;
    const res = await axios.post(urlEdit)
        .then(response => {
            return response.data
        })
        .catch(error => {
            return error.response;
        })
    return res;
}

employee.save = async (data) => {
    const urlSave = baseUrl + "/create";
    const res = await axios.post(urlSave, data)
        .then(response => {
            return response.data
        })
        .catch(error => {
            return error.response;
        })

    return res;
}

employee.update = async (data) => {
    const urlUpdate = baseUrl + "/update/" + data.id;
    const res = await axios.put(urlUpdate, data)
        .then(response => {
            return response.data
        })
        .catch(error => {
            return error.response;
        })

    return res;
}

employee.delete = async (id) => {
    const urlDelete = baseUrl + "/delete/" + id;
    const res = await axios.delete(urlDelete)
        .then(response => {
            return response.data
        })
        .catch(error => {
            return error.response;
        })
    return res;
}

export default employee;
