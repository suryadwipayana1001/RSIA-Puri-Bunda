import React, { useEffect, useState } from 'react';
import Header from '../../Layouts/Header';
import Sidebar from '../../Layouts/Sidebar';
import Footer from '../../Layouts/Footer';
import { Inertia } from '@inertiajs/inertia';
import ModalDelete from '../../Component/ModalDelete';

export default function UnitIndex({ auth, units }) {
    const [showModal, setShowModal] = useState(false);
    const [idUnit, setIdUnit] = useState(null);
    const [nama, setNama] = useState(null);

    const handleShowModal = (id, nama) => {
        setIdUnit(id);
        setNama(nama);
        setShowModal(true);
    };

    const handleEdit = (id) => {
        Inertia.get(`/unit/${id}/edit`);
    }

    const handleShow = (id) => {
        Inertia.get(`/unit/${id}`);
    }

    const deleteUnit = async (id) => {
        Inertia.delete(`/unit/${id}`);
        setShowModal(false);
    };

    useEffect(() => {
        if (window.$) {
            $(function () {
                $("#example1").DataTable({
                    "responsive": true,
                    "lengthChange": false,
                    "autoWidth": false,
                }).buttons().container().appendTo('#example1_wrapper .col-md-6:eq(0)');
                $('#example2').DataTable({
                    "paging": true,
                    "lengthChange": false,
                    "searching": false,
                    "ordering": true,
                    "info": true,
                    "autoWidth": false,
                    "responsive": true,
                });
            });
        } else {
            console.error("Error Datatable");
        }
    }, []);

    return (
        <>
            <ModalDelete showModal={showModal} close={() => setShowModal(false)} submit={() => deleteUnit(idUnit)} nama={nama} />
            <Header user={auth.user} />
            <Sidebar active="unit" level="te" />
            <div className="content-wrapper">
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Unit</h1>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-body">
                                        <a href="/unit/create" className="btn btn-dark-blue btn-md mb-3">Tambah</a>
                                        <table id="example1" className="table table-bordered table-striped">
                                            <thead>
                                                <tr>
                                                    <th>No</th>
                                                    <th>Nama Unit</th>
                                                    <th>Aksi</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {units.map((unit, index) => (
                                                    <tr key={index}>
                                                        <td>{index + 1}</td>
                                                        <td>{unit.nama}</td>
                                                        <td>
                                                            <button onClick={() => handleShow(unit.id)} className="btn btn-sm btn-primary">Lihat</button>
                                                            <button onClick={() => handleEdit(unit.id)} className="btn btn-sm btn-warning ml-2">Edit</button>
                                                            <button onClick={() => handleShowModal(unit.id, unit.nama)} className="btn btn-sm btn-red ml-2">Hapus</button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
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
