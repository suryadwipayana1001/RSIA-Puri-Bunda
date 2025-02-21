import React, { useEffect, useState } from 'react';
import ModalDelete from '../../Component/ModalDelete';
import { Inertia } from '@inertiajs/inertia';
export default function DataKaryawan(props) {
    const [showModal, setShowModal] = useState(false);
    const [idKaryawan, setIdKaryawan] = useState(null);
    const [nama, setNama] = useState(null);
    const handleShowModal = (id, nama) => {
        setIdKaryawan(id);
        setNama(nama);
        setShowModal(true);


    };

    const handleEdit = (id) => {
        Inertia.get(`/karyawan/${id}/edit`);
    }

    const handleShow = (id) => {
        Inertia.get(`/karyawan/${id}`);
    }

    const deleteKaryawan = async (id) => {
        Inertia.delete(`/karyawan/${id}`);
        setShowModal(false);
        window.location.reload();
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
                    "searching": true,
                    "ordering": true,
                    "info": true,
                    "autoWidth": false,
                    "responsive": true,
                });
            });
        } else {
            console.error("jQuery belum dimuat, pastikan Anda telah memuatnya sebelum menambahkan kode ini.");
        }
    }, []);
    return (
        <>
            <ModalDelete showModal={showModal} close={() => setShowModal(false)} submit={() => deleteKaryawan(idKaryawan)} nama={nama} />
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h5>List Data Karyawan</h5>
                        </div>
                    </div>
                </div>
            </section>
            <table id="example1" className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Nama</th>
                        <th>Username</th>
                        <th>Unit</th>
                        <th>Tanggal Bergabung</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((karyawan, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{karyawan.nama}</td>
                            <td>{karyawan.username}</td>
                            <td>{karyawan.unit.nama}</td>
                            <td>{karyawan.tanggal_bergabung}</td>
                            <td>
                                <button onClick={() => handleShow(karyawan.id)} className="btn btn-sm btn-primary">Lihat</button>
                                <button onClick={() => handleEdit(karyawan.id)} className="btn btn-sm btn-warning ml-2">Edit</button>
                                <button onClick={() => handleShowModal(karyawan.id, karyawan.nama)} className="btn btn-sm btn-red ml-2">Hapus</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}
