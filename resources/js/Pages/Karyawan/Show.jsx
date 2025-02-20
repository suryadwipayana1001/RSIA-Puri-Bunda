import React from "react";
import Header from "../../Layouts/Header";
import Sidebar from "../../Layouts/Sidebar";
import Footer from "../../Layouts/Footer";

const ShowKaryawan = ({ auth, karyawan }) => {
    return (
        <>
            <Header/>
            <Sidebar active="karyawan"/>
            <div className="content-wrapper">
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Detail Karyawan</h1>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="content">
                    <div className="container-fluid"></div>
                </section>
                <section className="content">
                    <div className="card">
                        <div className="card-body row">
                            <div className="col-12">
                                <div className="row mt-2">
                                    <div className="col-3"><h6>Nama</h6></div>
                                    <div className="col-9"><h6>: {karyawan.nama} </h6></div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-3"><h6>Username</h6></div>
                                    <div className="col-9"><h6>: {karyawan.username} </h6></div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-3"><h6>Unit</h6></div>
                                    <div className="col-9"><h6>: {karyawan.unit ? karyawan.unit.nama : "-"} </h6></div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-3"><h6>Jabatan</h6></div>
                                    <div className="col-9">
                                        <h6>: {karyawan.jabatans && karyawan.jabatans.length > 0
                                            ? karyawan.jabatans.map(j => j.nama).join(", ")
                                            : "-"}
                                        </h6>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-3"><h6>Tanggal Bergabung</h6></div>
                                    <div className="col-8"><h6>: {karyawan.tanggal_bergabung} </h6></div>
                                </div>

                                <div className="form-group mt-4">
                                    <button onClick={() => window.history.back()} className="btn btn-danger">Kembali</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default ShowKaryawan;
