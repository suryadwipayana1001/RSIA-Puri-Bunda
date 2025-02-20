<?php

namespace App\Http\Controllers;

use App\Models\Unit;
use Inertia\Inertia;
use Illuminate\Http\Request;


class UnitController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $units = Unit::latest()->get();

        //return view
        return inertia('Unit/Index', [
            'units' => $units
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Unit/Create', []);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $messages = [
            'required' => ':attribute tidak boleh kosong !',
        ];
        $this->validate($request, [
            'nama' => 'required|unique:unit,nama',
        ], $messages);

        Unit::create([
            'nama'      => $request->nama,
        ]);

        return redirect('/unit')->with('status', 'Tambah Unit Berhasil!');

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $unit = Unit::findOrFail($id);
        return inertia('Unit/Show', ['unit' => $unit]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $unit = Unit::findOrFail($id);
        return inertia('Unit/Edit', ['unit' => $unit]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        /**
         * validate request
         */
        $messages = [
            'required' => ':attribute tidak boleh kosong !',
        ];
        $this->validate($request, [
            'nama'      => 'required',
        ], $messages);

        /**
         * update user
         */
        $unit = Unit::findOrFail($id);
        $unit->update([
            'nama'      => $request->nama,
        ]);

        //redirect
        return redirect()->route('unit.index')->with('success', 'unit updated successfully!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Unit $unit)
    {
        $unit->delete();
        return redirect()->route('unit.index')->with('success', 'Data Berhasil Dihapus!');
    }
}
