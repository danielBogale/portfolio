// import axios from "axios";
// import React from "react";

// // const baseURL =
// //   "https://yzghvdq3wk.execute-api.us-east-1.amazonaws.com/prod/works";
// const baseURL =
//   "https://yzghvdq3wk.execute-api.us-east-1.amazonaws.com/prod/message";

// const Check = () => {
//   // const [post, setPost] = React.useState();

//   // React.useEffect(() => {
//   //   axios.get(baseURL).then((response) => {
//   //     setPost(response.data);
//   //     console.log(response.data);
//   //   });
//   // }, []);
//   const headers = {
//     "Content-Type": "application/json",
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios
//       .post(
//         baseURL,
//         {
//           Message: "Hi Stelica",
//           Email: "gdr.dani@gmail.com",
//           GuestName: "Daniel Bogale",
//           Phone: "11111111",
//         },
//         { headers: headers }
//       )
//       .then((response) => {
//         console.log(response);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   // if (!post) return null;
//   return (
//     <div className="bg-white text-white  lg:rounded-2xl dark:bg-[#111111]">
//       {/* <p>{post[0].description}</p> */}
//       <div class="w-full max-w-xs">
//         <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//           <div class="mb-4">
//             <label
//               class="block text-gray-700 text-sm font-bold mb-2"
//               for="username"
//             >
//               Username
//             </label>
//             <input
//               class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="username"
//               type="text"
//               placeholder="Username"
//             />
//           </div>
//           <div class="mb-6">
//             <label
//               class="block text-gray-700 text-sm font-bold mb-2"
//               for="password"
//             >
//               Password
//             </label>
//             <input
//               class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
//               id="password"
//               type="password"
//               placeholder="******************"
//             />
//             <p class="text-red-500 text-xs italic">Please choose a password.</p>
//           </div>
//           <div class="flex items-center justify-between">
//             <button
//               class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//               type="button"
//               onClick={handleSubmit}
//             >
//               Save
//             </button>
//             <a
//               class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
//               href="#"
//             >
//               Forgot Password?
//             </a>
//           </div>
//         </div>
//         <p class="text-center text-gray-500 text-xs">
//           &copy;2020 Acme Corp. All rights reserved.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Check;
