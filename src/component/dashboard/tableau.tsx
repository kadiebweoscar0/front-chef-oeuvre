import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { useEffect, useState } from "react";
import Button from "../button";
import InputField from "../inputField";

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
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

interface Tableau {
  nom: string;
  postnom: string;
  prenom: string;
  pseudo: string;
}

export default function Tableau() {
  const [showForm, setShowForm] = useState(false);
  const [allCriminal, setAllCriminal] = useState<Tableau[]>([]);

  const handleClick = () => {
    setShowForm(!showForm);
  };

  useEffect(() => {
    const fetchCriminal = async () => {
      try {
        const response = await axios.get(
          "https://capstone2-c1-kadiebweoscar0.onrender.com/api/user/getAllCriminel"
        );
        setAllCriminal(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCriminal();
  }, []);

  return (
    <div className="relative w-[77%] left-[23.9rem] mt-56">
      <h1 className="text-4xl">Liste des criminels enregistrés</h1>
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
            {Array.isArray(allCriminal) &&
              allCriminal.map((row, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell component="th" scope="row">
                    {row.nom}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.postnom}</StyledTableCell>
                  <StyledTableCell align="right">{row.prenom}</StyledTableCell>
                  <StyledTableCell align="right">{row.pseudo}</StyledTableCell>
                  <StyledTableCell className="flex flex-col" align="right">
                    <Button
                      className="bg-[#4361EE] w-20 mb-1 py-1 text-white rounded-full"
                      textButton="Modifier"
                      onClick={handleClick}
                    /><br />
                    <Button
                      className="bg-red-700 w-20 py-1 text-white rounded-full"
                      textButton="Supprimer"
                    />
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      {showForm && (
        <div className="popup z-50 mt-[-110%] flex flex-col items-center justify-center min-h-screen backdrop-blur-sm bg-white/30">
          <form className="flex justify-center w-[58rem] h-[25rem] items-center">
          <span>
              <InputField
                type="text"
                name="nom"
                placeholder="nom"
                validation={{ required: true }}

              />
              <InputField
                type="text"
                name="postnom"
                placeholder="postnom"
                validation={{ required: true }}

              />
              <InputField
                type="text"
                name="prenom"
                placeholder="prenom"
                validation={{ required: true }}

              />
              <InputField
                type="text"
                name="pseudo"
                placeholder="pseudo"
                validation={{ required: true }}

              />
              <InputField
                type="text"
                name="photo"
                placeholder="photo"
                validation={{ required: true }}

              />
              <InputField
                type="text"
                name="crime"
                placeholder="crime"
                validation={{ required: true }}

              />
            </span>
            <span>
              <InputField
                type="text"
                name="sexe"
                placeholder="sexe"
                validation={{ required: true }}

              />
              <InputField
                type="date"
                name="date_de_naissance"
                placeholder="date_de_naissance"
                validation={{ required: true }}

              />
              <InputField
                type="text"
                name="adress"
                placeholder="adress"
                validation={{ required: true }}

              />
              <InputField
                type="text"
                name="description"
                placeholder="description"

              />
            </span>
            <input type="checkbox" />
            <Button
              className=" max-sm:w-[17rem] bg-[#4361EE] max-sm:mx-0 w-[16.625rem] h-[3.813rem] max-sm:text-xl text-4xl rounded-3xl text-white"
              textButton="update"
            />
          </form>
        </div>
      )}
    </div>
  );
}
