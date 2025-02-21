import React, { useEffect, useState } from 'react';
import Header from '../../Layouts/Header';
import Sidebar from '../../Layouts/Sidebar';
import Footer from '../../Layouts/Footer';
import { Inertia } from '@inertiajs/inertia';
import ModalDelete from '../../Component/ModalDelete';
import { apiKaryawan } from '../../config';
import LoadingSpinner from "../../Component/Spinner";
import DataKaryawan from './DataList';

export default function KaryawanIndex({ auth }) {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
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
            {/* <ModalDelete showModal={showModal} close={() => setShowModal(false)} submit={() => deleteKaryawan(idKaryawan)} nama={nama} /> */}
            <Header />
            <Sidebar active="karyawan" />
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
                                        <a href="/karyawan/create" className="btn btn-dark-blue btn-md mb-3">Tambah Data</a>
                                        {loading ? <LoadingSpinner /> :
                                            <DataKaryawan data={data} />
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
