<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreEmployeeRequest;
use App\Models\Employee;
use App\Models\Role;

class EmployeeController extends Controller
{
    public function list()
    {
        try {
            $data = Employee::with("role")->get();
            return response()->json([
                'success' => true,
                'data' => $data,
                'status' => 200
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage(),
                'status' => 404
            ]);
        }
    }

    public function create(StoreEmployeeRequest $request)
    {
        try {
            $data = $request->validated();
            if (!Employee::create($data)) {
                return response()->json([
                    'success' => false,
                    'message' => 'Não foi possível concluir o cadastramento',
                    'status' => 200
                ]);
            }

            return response()->json([
                'success' => true,
                'message' => 'Funcionário cadastrado com sucesso',
                'status' => 200
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage(),
                'status' => 404
            ]);
        }
    }

    public function edit($id)
    {
        try {
            if (!$data = Employee::with("role")->find($id)) {
                return response()->json([
                    'success' => false,
                    'message' => "Funcionário não localizado",
                    'status' => 404
                ]);
            };
            return response()->json([
                'success' => true,
                'data' => $data,
                'status' => 200
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage(),
                'status' => 404
            ]);
        }
    }

    public function update(StoreEmployeeRequest $request)
    {
        try {
            $data = $request->validated();
            if (!Employee::where("id", $request->id)->update($data)) {
                return response()->json([
                    'success' => false,
                    'message' => 'Não foi possível concluir a edição',
                    'status' => 200
                ]);
            }

            return response()->json([
                'success' => true,
                'message' => 'Funcionário editado com sucesso',
                'status' => 200
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage(),
                'status' => 404
            ]);
        }
    }

    public function delete($id)
    {
        try {
            if (!Employee::where("id", $id)->delete()) {
                return response()->json([
                    'success' => false,
                    'message' => 'Não foi possível excluir o funcionário',
                    'status' => 200
                ]);
            }

            return response()->json([
                'success' => true,
                'message' => 'Funcionário excluído com sucesso',
                'status' => 200
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage(),
                'status' => 404
            ]);
        }
    }

    public function list_role()
    {
        $data = Role::get();

        return response()->json([
            'data' => $data,
            'success' => true,
            'status' => 200
        ]);
    }
}
