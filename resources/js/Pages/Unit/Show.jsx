import React, { useState } from 'react';
import { usePage } from '@inertiajs/inertia-react';
import Header from '../../Layouts/Header';
import Sidebar from '../../Layouts/Sidebar';
import Footer from '../../Layouts/Footer';
function ShowUnit({unit}) {
    const { errors } = usePage().props;
    const [nama, setNama] = useState(unit.nama);

    return (
        <>
            <Header/>
            <Sidebar active="unit"/>
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
                        <div className="col-md-12">
                            <div className="card card-primary">
                                <div className="card-header">
                                    <h3 className="card-title">Unit</h3>
                                </div>
                                <div className="card-body">
                                    <div className="form-group">
                                        <label>Nama</label>
                                        <input type="text" className="form-control" value={nama} onChange={(e) => setNama(e.target.value)} placeholder="Nama Unit"  readOnly/>
                                        {errors.nama && (
                                            <div className="alert alert-danger">
                                                {errors.nama}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col d-flex justify-content-end">
                                        <button onClick={() => window.history.back()} className="btn btn-danger mr-3">Kembali</button>
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

export default ShowUnit
