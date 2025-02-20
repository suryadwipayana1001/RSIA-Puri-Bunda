import React, { useState } from 'react';
import { usePage } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';
import Header from '../../Layouts/Header';
import Sidebar from '../../Layouts/Sidebar';
import Footer from '../../Layouts/Footer';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { format } from 'date-fns';
import CreatableSelect from 'react-select/creatable';

function CreateKaryawan({ auth, units,jabatans }) {
    const { errors } = usePage().props;
    const [nama, setNama] = useState('');
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [tanggalBergabung, setTanggalBergabung] = useState(new Date());
    const [selectedUnit, setSelectedUnit] = useState(null);
    const [selectedJabatans, setSelectedJabatans] = useState([]);

    const storeKaryawan = async (e) => {
        const formattedTanggalBergabung = format(tanggalBergabung, 'yyyy-MM-dd');

        const response = await Inertia.post('/karyawan', {
            nama: nama,
            username: username,
            password: password,
            unit_id: selectedUnit.value,
            jabatan_ids: selectedJabatans.map(j => j.value),
            tanggal_bergabung: formattedTanggalBergabung
        });

        console.log(response);
    }

    const options = units.map(unit => ({
        value: unit.id,
        label: unit.nama,
    }));

    const handleChange = (selectedOption) => {
        setSelectedUnit(selectedOption);
        console.log('Selected Unit:', selectedOption);
    };

    const handleChangeDate = (date) => {
        setTanggalBergabung(date);
        console.log("Selected Date: ", date);
    };

    const handleCreateNewUnit = (inputValue) => {
        Inertia.post('/karyawan/store-unit', {
            nama: inputValue
        }, {
            onSuccess: (page) => {
                //Mengambil value unit terbaru
                const newUnit = page.props.units.find(unit => unit.nama === inputValue);
                const newOption = { value: newUnit.id, label: newUnit.nama };
                setSelectedUnit(newOption);
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
            <Sidebar active="unit"/>
            <div className="content-wrapper">
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Tambah Karyawan</h1>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="content">
                    <div className="container-fluid">
                        <div className="col-md-12">
                            <div className="card card-primary">
                                <div className="card-header">
                                    <h3 className="card-title">Tambah Karyawan Form</h3>
                                </div>
                                <div className="card-body">
                                    <div className="form-group">
                                        <label>Nama</label>
                                        <input type="text" className="form-control" onChange={(e) => setNama(e.target.value)} placeholder="Nama" />
                                        {errors.nama && (
                                            <div className="alert alert-danger">
                                                {errors.nama}
                                            </div>
                                        )}
                                    </div>
                                    <div className="form-group">
                                        <label>Username</label>
                                        <input type="text" className="form-control" onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
                                        {errors.username && (
                                            <div className="alert alert-danger">
                                                {errors.username}
                                            </div>
                                        )}
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="text" className="form-control" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                                        {errors.password && (
                                            <div className="alert alert-danger">
                                                {errors.password}
                                            </div>
                                        )}
                                    </div>
                                    <div className="form-group">
                                        <label>Unit</label>
                                        <CreatableSelect
                                            value={selectedUnit}
                                            onChange={handleChange}
                                            onCreateOption={handleCreateNewUnit}
                                            options={options}
                                            isSearchable={true}
                                            placeholder="Pilih atau Tambah Unit"
                                            formatCreateLabel={(inputValue) => `Tambah Unit: "${inputValue}"`}
                                        />
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
                                            <DatePicker
                                                selected={tanggalBergabung}
                                                onChange={handleChangeDate}
                                                dateFormat="yyyy-MM-dd"
                                                className="form-control"
                                                placeholderText="Pilih Tanggal Bergabung"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col d-flex justify-content-end">
                                        <button onClick={() => window.history.back()} className="btn btn-danger mr-3">Kembali</button>
                                        <button onClick={storeKaryawan} className="btn btn-success mr-3">Tambah</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}

export default CreateKaryawan;
