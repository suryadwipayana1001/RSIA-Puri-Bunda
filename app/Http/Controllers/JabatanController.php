<?php

namespace App\Http\Controllers;

use App\Models\Jabatan;
use Inertia\Inertia;
use Illuminate\Http\Request;

class JabatanController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $jabatans = Jabatan::latest()->get();

        //return view
        return inertia('Jabatan/Index', [
            'jabatans' => $jabatans
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Jabatan/Create', []);
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
            'nama'      => 'required',
        ], $messages);

        Jabatan::create([
            'nama'      => $request->nama,
        ]);

        return redirect('/jabatan')->with('status', 'Tambah Jabatan Berhasil!');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $jabatan = Jabatan::findOrFail($id);
        return inertia('Jabatan/Show', ['jabatan' => $jabatan]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $jabatan = Jabatan::findOrFail($id);
        return inertia('Jabatan/Edit', ['jabatan' => $jabatan]);
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
        $jabatan = Jabatan::findOrFail($id);
        $jabatan->update([
            'nama'      => $request->nama,
        ]);

        //redirect
        return redirect()->route('jabatan.index')->with('success', 'jabatan updated successfully!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Jabatan $jabatan)
    {
        $jabatan->delete();
        return redirect()->route('jabatan.index')->with('success', 'Data Berhasil Dihapus!');
    }
}
