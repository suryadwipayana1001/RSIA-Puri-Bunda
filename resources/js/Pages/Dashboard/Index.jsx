import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../Layouts/Header";
import Sidebar from "../../Layouts/Sidebar";
import Footer from "../../Layouts/Footer";
import "react-datepicker/dist/react-datepicker.css";
import { apiDashboard } from "../../config";
import DatePicker from "react-datepicker";
import id from "date-fns/locale/id";
import { format } from "date-fns";

function Dashboard() {
    const [data, setData] = useState([]);
    const [date, setDate] = useState(null);
    const [formattedDate, setFormattedDate] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleDateChange = (selectedDate) => {
        setDate(selectedDate);
        if (selectedDate) {
            setFormattedDate(format(selectedDate, "yyyy-MM-dd"));
        } else {
            setFormattedDate(null);
        }
    };

    const fetchData = async (filterDate = null) => {
        setLoading(true);
        try {
            const response = await axios.get(apiDashboard, {
                params: filterDate ? { tanggal_bergabung: filterDate, tanggal_login: filterDate } : {},
            });
            setData(response.data.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleFilter = () => {
        fetchData(formattedDate);
    };

    const handleReset = () => {
        setDate(null);
        setFormattedDate(null);
        fetchData();
    };

    return (
        <>
            <Header/>
            <Sidebar active="dashboard"/>
            <div className="content-wrapper">
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Dashboard</h1>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="content">
                    <div className="row">
                        <div className="container-fluid">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="small-box bg-primary">
                                                    <div className="inner">
                                                        <h3>{data.jumlah_total_unit}</h3>
                                                        <h5>Jumlah Unit</h5>
                                                    </div>
                                                    <div className="icon">
                                                        <i className="ion ion-bag"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="small-box bg-secondary">
                                                    <div className="inner">
                                                        <h3>{data.jumlah_total_jabatan}</h3>
                                                        <h5>Jumlah Jabatan</h5>
                                                    </div>
                                                    <div className="icon">
                                                        <i className="ion ion-bag"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Filter Section */}
                                        <div className="row mt-5 mb-3">
                                            <div className="col-md-6">
                                                <label className="form-label font-weight-normal mr-5">Tanggal</label>
                                                <DatePicker
                                                    locale={id}
                                                    selected={date}
                                                    onChange={handleDateChange}
                                                    dateFormat="dd/MM/yyyy"
                                                    showYearDropdown
                                                    showMonthDropdown
                                                    placeholderText="Tanggal"
                                                    className="form-control form-control full-width-datepicker"
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <div className="row">
                                                    <button className="btn btn-dark-blue" onClick={handleFilter}>
                                                        <span className="fa fa-search"></span> Filter
                                                    </button>
                                                    <button className="btn btn-red ml-3" onClick={handleReset}>
                                                        <span className="fa fa-sync"></span> Reset
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="small-box bg-success">
                                                    <div className="inner">
                                                        <h3>{data.jumlah_total_karyawan}</h3>
                                                        <h5>Jumlah Karyawan</h5>
                                                    </div>
                                                    <div className="icon">
                                                        <i className="ion ion-bag"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="small-box bg-info">
                                                    <div className="inner">
                                                        <h3>{data.jumlah_total_login}</h3>
                                                        <h5>Jumlah Login</h5>
                                                    </div>
                                                    <div className="icon">
                                                        <i className="ion ion-bag"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="card">
                                            <h4 className="m-4">Top 10 Karyawan Login</h4>
                                                <div className="card-body">
                                                    {
                                                        <table id="example1" className="table table-bordered table-striped">
                                                            <thead>
                                                                <tr>
                                                                    <th>No</th>
                                                                    <th>Jumlah Login</th>
                                                                    <th>Nama</th>
                                                                    <th>Username</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {data?.top_10_total_login && data.top_10_total_login.length > 0 ? (
                                                                    data.top_10_total_login.map((karyawan, index) => (
                                                                        <tr key={index}>
                                                                            <td>{index + 1}</td>
                                                                            <td>{karyawan.total_login}</td>
                                                                            <td>{karyawan.karyawan?.nama || "Tidak Diketahui"}</td>
                                                                            <td>{karyawan.karyawan?.username || "Tidak Diketahui"}</td>
                                                                        </tr>
                                                                    ))
                                                                ) : (
                                                                    <tr>
                                                                        <td colSpan="4" className="text-center">Tidak ada data</td>
                                                                    </tr>
                                                                )}
                                                            </tbody>
                                                        </table>
                                                    }
                                                </div>
                                            </div>
                                        </div>
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

export default Dashboard;
