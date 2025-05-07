import React, { useContext } from 'react'
import { Modal } from 'react-bootstrap'
import { myContext } from './Crud_Context'

const Crud = () => {

    const { input, setInput, list, viewText, showModal, setShowModal, addFun, deleteFun, viewFun } = useContext(myContext)

    return (
        <>
            <div className="container my-5">
                <h1>To do List</h1>
                <div className="input-group">
                    <input type="text" value={input} className='form-control' onChange={e => setInput(e.target.value)}/>
                    <button className='btn btn-primary' onClick={addFun}>Add</button>
                </div>

                {
                    list.length === 0 
                    ? (<p className='text-center text-danger my-5'>No Task</p>)
                    : (
                    <table className='table table-bordered my-5'>
                        <thead>
                            <tr>
                                <th>List</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            { list.map((value, index) => (
                                <tr key={index}>
                                    <td>{value}</td>
                                    <td className='d-flex gap-3'>
                                        <button className='btn btn-success w-100' onClick={() => viewFun(value)}>View</button>


                                        <button className='btn btn-warning w-100'>Edit</button>

                                        
                                        <button className='btn btn-danger w-100' onClick={() => deleteFun(index)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    )
                }

                <Modal show={showModal}>
                    <Modal.Header closeButton onHide={() => setShowModal(false)}>
                        <h3>Your Task</h3>
                    </Modal.Header>
                    <Modal.Body>
                        <p>{viewText}</p>
                    </Modal.Body>
                </Modal>

            </div>
        </>
    )
}

export default Crud