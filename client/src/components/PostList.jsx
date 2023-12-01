// import React from "react";


// const PostList = ({ post }) => {
//   return (
//     <div>
//       <ul
//         role="list"
//         className="grid justify-around gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
//       >
//         {posts.map((posts, index) => {
//           return (
//             <li key={post._id} role="listitem" className="mt-4">
//               <CardProduct {...post} index={index} />
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// };

// function TaskList() {
//     const { tasks } = useContext(TaskContext);
  
//     if (tasks.length === 0) {
//       return (
//         <h1 className="text-white text-4xl font-bold text-center">
//           aún no hay tareas
//           <AiOutlineSmile className="max-w-md mx-auto" />
//         </h1>
//       );
//     }
  
//     return (
//       <div className="grid grid-cols-4 gap-2 p-4 rounded-md">
//         {tasks.map((task) => (
//           <TaskCard key={task.id} task={task} /> 
//         ))}
//       </div>
//     );
//   }

// export default PostList;