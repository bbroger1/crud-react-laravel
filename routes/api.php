<?php

use App\Http\Controllers\API\EmployeeController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/employee/list', [EmployeeController::class, 'list']);
Route::get('/employee/role', [EmployeeController::class, 'list_role']);
Route::post('/employee/create', [EmployeeController::class, 'create']);
Route::post('/employee/edit/{id}', [EmployeeController::class, 'edit']);
Route::put('/employee/update/{id}', [EmployeeController::class, 'update']);
Route::delete('/employee/delete/{id}', [EmployeeController::class, 'delete']);
