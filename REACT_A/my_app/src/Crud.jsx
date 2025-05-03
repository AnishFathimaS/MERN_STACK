// import React, { useState } from 'react';

// const Day13 = () => {
//   const [input, setInput] = useState('');
//   const [list, setList] = useState([]);
//   const [editText, setEditText] = useState('');
//   const [edit, setEdit] = useState(null);
//   const [showModal, setShowModal] = useState(false);
//   const [viewText, setViewText] = useState('');

//   const Add = () => {
//     if (input === '') {
//       alert('Please enter a task!');
//       return;
//     }
//     setList(list.concat(input));
//     setInput('');
//   };

//   const Delete = (index) => {
//     if (window.confirm('Are You Sure Want To Delete?')) {
//       setList(list.filter((a, i) => i !== index));
//     }
//   };

//   const Edit = (index) => {
//     setEdit(index);
//     setEditText(list[index]);
//   };

//   const Update = () => {
//     const updatedList = list.map((value, i) => (i === edit ? editText : value));
//     setList(updatedList);
//     setEdit(null);
//     setEditText('');
//   };

//   const viewTask = (task) => {
//     setViewText(task);
//     setShowModal(true);
//   };

//   const closeModal = () => {
//     setShowModal(false);
//   };

//   return (
//     <div className="container mt-4">
//       <h3>To-Do List</h3>

//       <div className="input-group mb-3">
//         <input
//           type="text"
//           className="form-control"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="Enter task"
//         />
//         <button className="btn btn-primary" onClick={Add}>Add</button>
//       </div>

//       {/* List of Tasks */}
//       {list.length === 0 ? (
//         <p className="text-center">No Tasks</p>
//       ) : (
//         <table className="table table-bordered">
        //   <thead>
        //     <tr>
        //       <th>Task</th>
        //       <th>Actions</th>
        //     </tr>
        //   </thead>
//           <tbody>
//             {list.map((value, index) => (
//               <tr key={index}>
//                 <td>
//                   {edit === index ? (
//                     <input
//                       type="text"
//                       className="form-control"
//                       value={editText}
//                       onChange={(e) => setEditText(e.target.value)}
//                     />
//                   ) : (
//                     value
//                   )}
//                 </td>
//                 <td>
//                   {edit === index ? (
//                     <button className="btn btn-success btn-sm" onClick={Update}>Update</button>
//                   ) : (
//                     <>
//                       <button className="btn btn-warning btn-sm" onClick={() => Edit(index)}>Edit</button>
//                       <button className="btn btn-danger btn-sm" onClick={() => Delete(index)}>Delete</button>
//                       <button className="btn btn-info btn-sm ms-2" onClick={() => viewTask(value)}> View
//                       </button>
//                     </>
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}

//       {/* Modal for Viewing Task */}
//       <div className={`modal fade ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }} tabIndex="-1" aria-labelledby="viewModalLabel" aria-hidden={!showModal}>
//         <div className="modal-dialog">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title" id="viewModalLabel">View Task</h5>
//               <button type="button" className="btn-close" onClick={closeModal} aria-label="Close"></button>
//             </div>
//             <div className="modal-body">
//               <p>{viewText}</p>
//             </div>
//             <div className="modal-footer">
//               <button type="button" className="btn btn-secondary" onClick={closeModal}>Close</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Day13;












// import React, { useState } from 'react'
// import { Modal } from 'react-bootstrap'

// const Crud = () => {

//     const [ input, setInput ] = useState('')
//     const [list, setList] = useState([]);

//     const [ show, setShow ] = useState(false);
//     const [ viewTask, setViewTask ] = useState('')

//     const addFun = () => {
//         if(input.length === 0){
//             alert('Please enter a task !')
//         }
//         else{
//             setList(list.concat(input));
//             setInput('')
//         }
//     }

//     const deleteFun = (index) => {
//         if(confirm('Are you sure want to delete ?')){
//             setList(list.filter((val, i) =>   i != index))
//         }
//     }

//     const viewFun = (task) => {
//         setShow(true)
//         setViewTask(task)
//     }

//     const modalClose = () => {
//         setShow(false)
//     }

//     return (
//         <>
//             <div className='container my-5'>
//                 <h3>To Do List</h3>
//                 <div className='input-group'>
//                     <input type="text" value={input} className='form-control' onChange={(e) => setInput(e.target.value)} />
//                     <button className='btn btn-primary' onClick={addFun}>Add</button>
//                 </div>

//                 {list.length === 0 
//                 ? ( <p className='text-center'>No Tasks</p> ) 
//                 : (
//                     <table className='table table-bordered text-center'>
//                         <thead>
//                             <tr>
//                                 <th>Task</th>
//                                 <th>Actions</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             { list.map((value, index) => (
//                                 <tr key={index}>
//                                     <td>{value}</td>
//                                     <td className='d-flex gap-4'>
//                                         <button className='btn btn-success w-100' onClick={() => { viewFun(value) }}>View</button>
//                                         <button className='btn btn-warning w-100'>Edit</button>
//                                         <button className='btn btn-danger w-100' onClick={() => { deleteFun(index) }}>Delete</button>
//                                     </td>
//                                 </tr>
//                             ) ) }
//                         </tbody>
//                     </table>
//                 )}

//                 <Modal show={show} onHide={modalClose}>
//                     <Modal.Header closeButton>
//                         <h3>Task</h3>
//                     </Modal.Header>
//                     <Modal.Body>
//                         <h2> {viewTask} </h2>
//                     </Modal.Body>
//                 </Modal>

//             </div>    
//         </>
//     )
// }

// export default Crud



import React, { useState } from 'react'

const Crud = () => {

    const [ input, setInput ] = useState('')
    const [ list, setList ] = useState([])

    const addFun = () => {
        if(input.length == 0){
            alert('Please Enter a Task')
        }
        else{
            setList(list.concat(input))
            setInput('')
        }
    }

    const deleteFun = (index) => {
        setList(list.filter((i) => console.log(i)))
    }

    return (
        <>
            <div className='container'>
                
                <div className='input-group my-5'>
                    <input type="text" className='form-control' value={input} onChange={(e) => setInput(e.target.value)} />
                    <button className='btn btn-primary' onClick={addFun}>Add</button>
                </div>

                <table className='table table-bordered text-center'>
                    <thead>
                        <tr>
                            <th>Tasks</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {list.map((value, index) => (
                            <tr key={index}>
                                <td>{value}</td>
                                <td className='d-flex gap-2'>
                                    <button className='btn btn-success w-100'>View</button>
                                    <button className='btn btn-warning w-100'>Edit</button>
                                    <button className='btn btn-danger w-100' onClick={() => deleteFun(index)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>

            </div>

          
        </>
    )
}

export default Crud