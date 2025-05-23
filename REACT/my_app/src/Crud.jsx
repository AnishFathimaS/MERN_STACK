import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'

const Crud = () => {

    const [ input, setInput ] = useState('')
    const [ list, setList ] = useState([])
    const [ show, setShow ] = useState(false)
    const [ viewText, setViewText ] = useState('')
    const [ edit, setEdit ] = useState('')
    const [ editText, setEditText ] = useState('')

    const addFun = () => {
        if(input.length == 0){
            alert('Please enter any task !')
        }
        else{
            setList(list.concat(input))
            setInput('')
        }
    }

    const deleteFun = (index) => {
        if(confirm('Are you sure want to delete ?')){
            setList(list.filter((a, i) => i != index )) 
        }
    }   

    const viewFun = (value) => {
        setShow(true)
        setViewText(value)
    }

    const editFun = (index) => {
        setEdit(index)
        setEditText(list[index])
    }

    const updateFun = () => {
        setList(list.map((value, index) => ( edit === index ? editText : value )))
        setEdit('')
    }

    return (
        <>
            <div className="container p-5">
                <h1>To do List</h1>
                <div className="input-group">
                    <input type="text" value={input} className='form-control' onChange={e => setInput(e.target.value)}/>
                    <button className='btn btn-primary' onClick={addFun}>Add</button>
                </div>

                {list.length == 0 
                ? ( <p className='text-center m-5'>No Tasks</p> ) 
                : ( <table className='table table-bordered my-5 text-center'>
                    <thead>
                        <tr>
                            <th>List</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list .map((value, index) => (
                            <tr key={index}>
                                <td>
                                    {
                                        edit === index ? ( <input type="text" value={editText} className='form-control' onChange={e => setEditText(e.target.value)} /> ) : (value)
                                    }
                                </td>
                                <td className='d-flex gap-3'>
                                    <button className='btn btn-success w-100' onClick={() => viewFun(value)}>View</button>
                                    {
                                        edit === index 
                                        ? ( <button className='btn btn-warning w-100' onClick={updateFun}>Update</button> ) 
                                        : ( <button className='btn btn-warning w-100' onClick={() => editFun(index)}>Edit</button> )
                                    }
                                    <button className='btn btn-danger w-100' onClick={() => deleteFun(index)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table> )}

                <Modal show={show}>
                    <Modal.Header closeButton onHide={() => setShow(false)}>
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