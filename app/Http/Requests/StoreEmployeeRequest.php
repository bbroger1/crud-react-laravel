<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreEmployeeRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $rules = [
            'name'    => 'required|string|max:191',
            'city'    => 'required|string',
            'phone'   => 'required|integer',
            'rol'     => 'required|integer'
        ];
        if ($this->method() == 'PUT') {
            $id = $this->segment(4);
            $rules['email'] = 'required|email|unique:employee,email,' . $id . ',id';
        } else {
            $rules['email'] = 'required|email|unique:employee,email';
        }

        return $rules;
    }
}
