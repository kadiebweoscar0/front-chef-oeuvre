

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
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



export default function Tableau() {

    const [allCriminal, setAllCriminal] = useState([]);
    useEffect(()=>{
        const fetchCriminal = async ()=>{
            try {
                const response = await axios.get('http://localhost:3000/api/user/getAllCriminel');
                setAllCriminal(response.data)
                
                    
            } catch (error) {
                console.log(error);
                
            }
        }
        fetchCriminal()
    } ,[])

  return (

    <div className=' relative w-[77%] left-[23.9rem] mt-56'>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Nom</StyledTableCell>
            <StyledTableCell align="right">Post-Nom</StyledTableCell>
            <StyledTableCell align="right">Prenom&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Pseudo&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Action&nbsp;</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allCriminal.map((row) => (
            <StyledTableRow key={row.nom}>
              <StyledTableCell  component="th" scope="row">{row.nom}</StyledTableCell>
              <StyledTableCell align="right">{row.postnom}</StyledTableCell>
              <StyledTableCell align="right">{row.prenom}</StyledTableCell>
              <StyledTableCell align="right">{row.pseudo}</StyledTableCell>
              <StyledTableCell className=' flex flex-col' align="right">
                <Button className=' bg-lime-500 w-20 py-1 text-white rounded-full' textButton='Alerter' /><br />
                </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}