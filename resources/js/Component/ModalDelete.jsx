import Modal from "react-bootstrap/Modal";
import React from 'react';

export default function ModalDelete(props) {
    return (
        <>
            <Modal show={props.showModal} size="md">
                <Modal.Header className="header-modal">
                    <Modal.Title>Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Apakah anda yakin menghapus : {props.nama}
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-warning" onClick={props.close}>
                        Tidak
                    </button>
                    <button className="btn btn-danger" onClick={props.submit}>
                        Iya
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
