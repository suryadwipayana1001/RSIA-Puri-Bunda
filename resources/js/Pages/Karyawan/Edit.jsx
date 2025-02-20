import React, { useState } from "react";
import { usePage } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import Header from "../../Layouts/Header";
import Sidebar from "../../Layouts/Sidebar";
import Footer from "../../Layouts/Footer";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import CreatableSelect from "react-select/creatable";

function EditKaryawan({ auth, karyawan, units, jabatans }) {
    const { errors } = usePage().props;
    const [nama, setNama] = useState(karyawan.nama);
    const [username, setUsername] = useState(karyawan.username);
    const [password, setPassword] = useState("");
    const [tanggalBergabung, setTanggalBergabung] = useState(new Date(karyawan.tanggal_bergabung));


    const [unit, setUnit] = useState(
        units.find(u => u.id === karyawan.unit_id)
            ? { value: karyawan.unit_id, label: units.find(u => u.id === karyawan.unit_id).nama }
            : null
    );

    const [selectedJabatans, setSelectedJabatans] = useState(
        karyawan.jabatans.map(j => ({
            value: j.id,
            label: j.nama
        }))
    );

    const updateKaryawan = () => {
        const formattedTanggal = format(tanggalBergabung, "yyyy-MM-dd");

        Inertia.put(`/karyawan/${karyawan.id}`, {
            nama,
            username,
            unit_id: unit.value,
            jabatan_ids: selectedJabatans.map(j => j.value),
            tanggal_bergabung: formattedTanggal,
            password: password ? password : null,
        });
    };

    const unitOptions = units.map(unit => ({
        value: unit.id,
        label: unit.nama,
    }));

    const handleChangeUnit = (selectedOption) => {
        setUnit(selectedOption);
    };

    const handleCreateNewUnit = (inputValue) => {
        Inertia.post('/karyawan/store-unit', {
            nama: inputValue
        }, {
            onSuccess: (page) => {
                //Mengambil value unit terbaru
                const newUnit = page.props.units.find(unit => unit.nama === inputValue);
                const newOption = { value: newUnit.id, label: newUnit.nama };
                setUnit(newOption);
            }
        });
    };

    const jabatanOptions = jabatans.map(jabatan => ({
        value: jabatan.id,
        label: jabatan.nama,
    }));

    const handleJabatanChange = (newValue) => {
        setSelectedJabatans(newValue);
    };

    const handleCreateNewJabatan = async (inputValue) => {
        Inertia.post('/karyawan/store-jabatan', { nama: inputValue }, {
            onSuccess: (page) => {
                const newJabatan = page.props.jabatans.find(jabatan => jabatan.nama === inputValue);
                if (newJabatan) {
                    const newOption = { value: newJabatan.id, label: newJabatan.nama };
                    setSelectedJabatans([...selectedJabatans, newOption]);
                }
            }
        });
    };

    return (
        <>
            <Header/>
            <Sidebar active="karyawan"/>
            <div className="content-wrapper">
                <section className="content-header">
                    <div className="container-fluid">
                        <h1>Edit Karyawan</h1>
                    </div>
                </section>
                <section className="content">
                    <div className="container-fluid">
                        <div className="card card-primary">
                            <div className="card-body">
                                <div className="form-group">
                                    <label>Nama</label>
                                    <input type="text" className="form-control" value={nama} onChange={(e) => setNama(e.target.value)} />
                                    {errors.nama && <div className="alert alert-danger">{errors.nama}</div>}
                                </div>
                                <div className="form-group">
                                    <label>Username</label>
                                    <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} />
                                    {errors.username && <div className="alert alert-danger">{errors.username}</div>}
                                </div>
                                <div className="form-group">
                                    <label>Password Baru (Kosongkan jika tidak ingin mengubah)</label>
                                    <input type="text" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    {errors.password && <div className="alert alert-danger">{errors.password}</div>}
                                </div>
                                <div className="form-group">
                                    <label>Unit</label>
                                    <CreatableSelect
                                    value={unit}
                                    onCreateOption={handleCreateNewUnit}
                                    onChange={handleChangeUnit}
                                    options={unitOptions}
                                    isSearchable={true}
                                    placeholder="Pilih atau Tambah Unit"
                                    formatCreateLabel={(inputValue) => `Tambah Unit: "${inputValue}"`}/>
                                </div>
                                <div className="form-group">
                                    <label>Jabatan</label>
                                    <CreatableSelect
                                    isMulti
                                    options={jabatanOptions}
                                    value={selectedJabatans}
                                    onCreateOption={handleCreateNewJabatan}
                                    onChange={handleJabatanChange}
                                    placeholder="Pilih atau Tambah Jabatan"
                                    formatCreateLabel={(inputValue) => `Tambah Jabatan: "${inputValue}"`}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Tanggal Bergabung</label>
                                    <div>
                                        <DatePicker selected={tanggalBergabung} onChange={setTanggalBergabung} dateFormat="yyyy-MM-dd" className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col d-flex justify-content-end">
                                    <button onClick={() => window.history.back()} className="btn btn-danger mr-3">Kembali</button>
                                    <button onClick={updateKaryawan} className="btn btn-success mr-3">Simpan</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
}

export default EditKaryawan;
