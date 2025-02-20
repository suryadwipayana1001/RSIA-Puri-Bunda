import React, { useEffect, useState } from 'react';
import Header from '../../Layouts/Header';
import Sidebar from '../../Layouts/Sidebar';
import Footer from '../../Layouts/Footer';
import { Inertia } from '@inertiajs/inertia';
import ModalDelete from '../../Component/ModalDelete';
import { apiKaryawan } from '../../config';
import LoadingSpinner from "../../Component/Spinner";

export default function KaryawanIndex({ auth }) {
    const [showModal, setShowModal] = useState(false);
    const [idKaryawan, setIdKaryawan] = useState(null);
    const [nama, setNama] = useState(null);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

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
        Promise.all([
            axios.get(apiKaryawan),
        ])
            .then(([responseData]) => {
                setData(responseData.data.data);
                setLoading(false);
                console.log("datanya", responseData);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setError(error);
                setLoading(false);
            });
    }, []);

    return (
        <>
            <ModalDelete showModal={showModal} close={() => setShowModal(false)} submit={() => deleteKaryawan(idKaryawan)} nama={nama} />
            <Header/>
            <Sidebar active="karyawan"/>
            <div className="content-wrapper">
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Karyawan</h1>
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
                                        <a href="/karyawan/create" className="btn btn-dark-blue btn-md mb-3">Tambah</a>
                                        {
                                            loading ? <LoadingSpinner /> :
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
                                                        {data.map((karyawan, index) => (
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
                                        }
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
