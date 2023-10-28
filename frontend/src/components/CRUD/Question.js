import React,{useState,useEffect}  from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import Stack from '@mui/material/Stack';
import { ButtonGroup } from '@mui/material';
import axios from 'axios';


export default function ButtonAppBar() {

    const [items, setItems] = useState([]);

    useEffect(() => {
        UserGet()
      }, [])

      const UserGet = () => {
        fetch("http://localhost:3333/linebot_log2")
        .then(res => res.json())
        .then(
          (result) => {
            setItems(result);
          }
        )
      }

      const handleDelete = async (id) => {
          try {
            await axios.delete('http://localhost:3333/userdel/'+id)
            window.location.reload()
            alert ("ลบบัญชีผู้ใช้งานเรียบร้อย")
          }catch(err) {
            console.log(err);
          }
      }
      
      const handleUpdate = id => {
        window.location = '/chalothon/yangbot_frontend/QuestionUpdate/' + id
      }

  return (
    <Box sx={{ flexGrow: 1 }}>
      
      <React.Fragment>
      <CssBaseline />
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h4 className="m-0 font-weight-bold text-primary">
            คำถามที่พบบ่อย
          </h4>
        </div>
        <div className="card-body">

      
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead style={{ fontSize: '16px',backgroundColor: '#EAEAEA', color: 'white'}}>
                <TableRow>
                    <TableCell style={{ fontSize: '20px' ,color:'#3B3B3B'}}>ID</TableCell>
                    <TableCell align="right" style={{ fontSize: '20px' ,color:'#3B3B3B'}}>ชื่อในระบบ</TableCell>
                    
                    <TableCell align="right" style={{ fontSize: '20px' ,color:'#3B3B3B'}}>วันที่ถาม</TableCell>
                    <TableCell align="left" style={{ fontSize: '20px' ,color:'#3B3B3B'}}>คำถาม</TableCell>
                    <TableCell align="right" style={{ fontSize: '20px' }}></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {items.map((row,index) => (
            <TableRow
                key={row.No}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell  style={{ fontSize: '16px' }} component="th" scope="row">
                {index + 1} {/* เพิ่มส่วนนี้เพื่อแสดงลำดับ */}
                </TableCell>
                <TableCell align="right"  style={{ fontSize: '16px' }}>{row.DisplayName}</TableCell>

                <TableCell align="right"  style={{ fontSize: '16px' }}>{row.Date}</TableCell>
                <TableCell align="left"  style={{ fontSize: '16px' }}>{row.Message}</TableCell>
                <TableCell align="right"  style={{ fontSize: '16px' }}>
                <Stack direction="row" spacing={1} alignItems="center" justifyContent="flex-end">
                   <Button   spacing={1} variant="contained" endIcon={<EditIcon />}   onClick={() => handleUpdate(row.No)} style={{ fontSize: '16px',backgroundColor: '#6CAB84', color: 'white'}}>
                      ระบุประเภทคำถาม
                    </Button>
                </Stack>    
                </TableCell>
            </TableRow>
          ))}
            </TableBody>
            </Table>
            </TableContainer>
       </div>
      </div>
    </React.Fragment>
    </Box>
    
  );
}