<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Clientes;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/', [Clientes::class, 'get'])->name('test_list');

Route::get('editar/{id}', [Clientes::class, 'show'])->name('test_editar');

Route::put('save/{id}', [Clientes::class, 'update'])->name('test_save');

Route::get('crear/', [Clientes::class, 'create'])->name('test_crear');

Route::post('store/', [Clientes::class, 'store'])->name('test_store');

Route::delete('delete/{id}', [Clientes::class, 'destroy'])->name('test_destroy');
