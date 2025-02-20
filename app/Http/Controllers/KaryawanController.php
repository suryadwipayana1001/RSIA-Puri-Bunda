<?php

namespace App\Http\Controllers;

use App\Models\Jabatan;
use App\Models\Karyawan;
use App\Models\Unit;
use Inertia\Inertia;
use Illuminate\Http\Request;

class KaryawanController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $karyawans = Karyawan::all();
        return Inertia::render('Karyawan/Index', ['karyawans'=>$karyawans]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $units = Unit::all();
        $jabatans = Jabatan::all();
        return Inertia::render('Karyawan/Create', ['units' => $units, 'jabatans' => $jabatans]);
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
            'username'      => 'required|unique:karyawan',
            'password'      => 'required',
            'unit_id'      => 'required',
            'tanggal_bergabung'      => 'required',
            'jabatan_ids' => 'array',
        ], $messages);

        $karyawan = Karyawan::create([
            'nama'      => $request->nama,
            'username'      => $request->username,
            'password'  => bcrypt($request->password),
            'unit_id'      => $request->unit_id,
            'tanggal_bergabung'      => $request->tanggal_bergabung,
        ]);

        if ($request->jabatan_ids) {
            $karyawan->jabatans()->sync($request->jabatan_ids);
        }

        return redirect('/karyawan')->with('status', 'Tambah Karyawan Berhasil!');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $karyawan = Karyawan::with(['unit', 'jabatans'])->findOrFail($id);

        return inertia('Karyawan/Show', [
            'karyawan' => $karyawan
        ]);
    }


    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $karyawan = Karyawan::with('jabatans')->findOrFail($id);
        $units = Unit::all();
        $jabatans = Jabatan::all();

        return Inertia::render('Karyawan/Edit', [
            'karyawan' => $karyawan,
            'units' => $units,
            'jabatans' => $jabatans
        ]);
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $messages = [
            'required' => ':attribute tidak boleh kosong !',
        ];

        $this->validate($request, [
            'nama'      => 'required',
            'username'  => 'required|unique:karyawan,username,' . $id,
            'unit_id'   => 'required',
            'tanggal_bergabung' => 'required',
            'jabatan_ids' => 'array',
            'password'  => 'nullable|min:6', // Tambahkan minimal panjang password
        ], $messages);

        $karyawan = Karyawan::findOrFail($id);
        $data = [
            'nama'      => $request->nama,
            'username'  => $request->username,
            'unit_id'   => $request->unit_id,
            'tanggal_bergabung' => $request->tanggal_bergabung,
        ];

        if (!empty($request->password)) {
            $data['password'] = bcrypt($request->password);
        }

        $karyawan->update($data);
        $karyawan->jabatans()->sync($request->jabatan_ids);

        return redirect('/karyawan')->with('status', 'Update Karyawan Berhasil!');
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $karyawan = Karyawan::findOrFail($id);
        $karyawan->delete();

        return redirect('/karyawan')->with('status', 'Karyawan berhasil dihapus!');
    }


    public function storeNewUnit(Request $request)
    {
        $request->validate([
            'nama' => 'required|unique:unit,nama',
        ]);
        Unit::create([
            'nama' => $request->nama,
        ]);
        return redirect()->back()->with('units', Unit::all());
    }

    public function storeNewJabatan(Request $request)
    {
        $request->validate([
            'nama' => 'required|unique:jabatan,nama',
        ]);
        Jabatan::create([
            'nama' => $request->nama,
        ]);
        return redirect()->back()->with('jabatans', Jabatan::all());
    }
}
