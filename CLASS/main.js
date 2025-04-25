// FIND, FILTER

// FIND

// var arr = [ 1, 3, 4, 2, 5, 7 ];
// console.log(arr);
// console.log(arr.find((a) => a % 2 == 0 ));

// var arr = [ 1, -6, 3, -5, 8 ];
// console.log(arr.find((arr) => arr < 0))

// FLITER

// var arr = [ 1, 2, 3, 4, 7, 9 ];
// console.log(arr);
// console.log(arr.filter((a) => a % 2 == 0 ));

// var arr = [ 1, -6, 3, -5, 8 ];
// console.log(arr.filter((arr) => arr < 0))

// const users = [
//     { 
//         id : 1,
//         img : "https://static.vecteezy.com/system/resources/thumbnails/035/314/037/small/ai-generated-professional-man-in-suit-standing-confidently-in-office-generative-ai-free-photo.jpg",
//         name: "John Doe",
//         email: "john@example.com"
//     },
//     { 
//         id : 2,
//         img : "https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM=",
//         name: "Jane Smith",
//         email: "jane@example.com"
//     },
//     { 
//         id : 3,
//         img : "https://t4.ftcdn.net/jpg/01/42/20/17/360_F_142201762_qMCuIAolgpz4NbF5T5m66KQJzYzrEbUv.jpg",
//         name: "Alice Johnson",
//         email: "alice@example.com"
//     },
//     { 
//         id : 4,
//         img : "https://img.freepik.com/free-photo/smiling-young-male-professional-standing-with-arms-crossed-while-making-eye-contact-against-isolated-background_662251-838.jpg",
//         name: "Bob Brown",
//         email: "bab@example.com"
//     }
// ];

// const cardFun = (data) => {
//     data.map((value) => {
//         document.getElementById("cardRow").innerHTML += `
//             <div class="col-lg-3 col-md-6">
//                 <div class="card">
//                     <img src="${value.img}" alt="" height="200">
//                     <div class="card-body">
//                         <h4>${value.name}</h4>
//                         <p>Email : ${value.email}</p>
//                     </div>
//                 </div>
//             </div>
//         `
//     })
// }

// cardFun(users)

// const Submit = (event) => {
//     event.preventDefault()
//     var searchInput = document.getElementById('searchBox').value.toLowerCase();
//     // console.log(searchInput);
//     var filteredUsers = users.filter((value) => value.name.toLowerCase().includes(searchInput) || value.email.toLowerCase().includes(searchInput))
//     cardFun(filteredUsers)
// }

