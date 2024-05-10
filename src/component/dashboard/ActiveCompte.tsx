
// // export default function ActiveCompte() {
// //   return (
// //     <div className=" relative w-[77%] left-[23.9rem]">
// //         ActiveCompte
// //     </div>
// //   )
// // }


// import { styled } from '@mui/material/styles';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell, { tableCellClasses } from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import Button from '../button';

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,
//   },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   '&:nth-of-type(odd)': {
//     backgroundColor: theme.palette.action.hover,
//   },
//   // hide last border
//   '&:last-child td, &:last-child th': {
//     border: 0,
//   },
// }));


// export default function ActiveCompte() {
//     const [alluser, setAlluser] = useState([]);
//     useEffect(()=>{
//         const fetchCriminal = async ()=>{
//             try {
//                 const response = await axios.get('http://localhost:3000/api/user/getAllUser');
//                 setAlluser(response.data)
                
                    
//             } catch (error) {
//                 console.log(error);
                
//             }
//         }
//         fetchCriminal()
//     } ,[])

//   return (

//     <div className=' relative w-[77%] left-[23.9rem] mt-56'>
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 700 }} aria-label="customized table">
//         <TableHead>
//           <TableRow>
//             <StyledTableCell>Nom</StyledTableCell>
//             <StyledTableCell align="right">Post-Nom</StyledTableCell>
//             <StyledTableCell align="right">Prenom&nbsp;</StyledTableCell>
//             <StyledTableCell align="right">email&nbsp;</StyledTableCell>
//             <StyledTableCell align="right">Action&nbsp;</StyledTableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {alluser.map((user) => (
//             <StyledTableRow key={user.nom}>
//               <StyledTableCell  component="th" scope="user">{user.nom}</StyledTableCell>
//               <StyledTableCell align="right">{user.postnom}</StyledTableCell>
//               <StyledTableCell align="right">{user.prenom}</StyledTableCell>
//               <StyledTableCell align="right">{user.email}</StyledTableCell>
//               <StyledTableCell className=' flex flex-col' align="right">
//                 <Button className=' bg-lime-500 w-20 py-1 text-white rounded-full' textButton='Activer' /><br />
//                 </StyledTableCell>
//             </StyledTableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//     </div>
//   );
// }


import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from '../button';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

interface User {
    nom: string;
    postnom: string;
    prenom: string;
    email: string;
    ID_user: number;
    Role: string;
  }
  
  const ActiveCompte: React.FC = () => {
    const [alluser, setAlluser] = useState<User[]>([]);
  
    useEffect(() => {
      const fetchUsers = async () => {
        try {
          const response = await axios.get<User[]>(
            'https://capstone2-c1-kadiebweoscar0.onrender.com/api/user/getAllUser'
          );
          setAlluser(response.data);
        } catch (error) {
          console.log(error);
        }
      };
      fetchUsers();
    }, []);
  
    const handleActivateAccount = async (userId: number) => {
      try {
        await axios.put(
          `https://capstone2-c1-kadiebweoscar0.onrender.com/api/user/putRoleUserById/${userId}`,
          { role: 'ADMIN' }
        );
        const updatedUsers = alluser.map((user) =>
          user.ID_user === userId ? { ...user, Role: 'ADMIN' } : user
        );
        setAlluser(updatedUsers);
      } catch (error) {
        console.log(error);
      }
    };
  
    return (
      <div className="relative w-[77%] left-[23.9rem] mt-56">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Nom</StyledTableCell>
                <StyledTableCell align="right">Post-Nom</StyledTableCell>
                <StyledTableCell align="right">Prenom</StyledTableCell>
                <StyledTableCell align="right">Email</StyledTableCell>
                <StyledTableCell align="right">Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {alluser.map((user) => (
                <StyledTableRow key={user.ID_user}>
                  <StyledTableCell>{user.nom}</StyledTableCell>
                  <StyledTableCell align="right">{user.postnom}</StyledTableCell>
                  <StyledTableCell align="right">{user.prenom}</StyledTableCell>
                  <StyledTableCell align="right">{user.email}</StyledTableCell>
                  <StyledTableCell align="right">
                    {!user.Role === 'ADMIN' && (
                      <Button
                        className="bg-lime-500 w-20 py-1 text-white rounded-full"
                        textButton="Activer"
                        onClick={() => handleActivateAccount(user.ID_user)}
                      />
                    )}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  };
  
  export default ActiveCompte;
  