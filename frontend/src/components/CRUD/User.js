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
import Link from '@mui/material/Link';

import axios from 'axios';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Stack from '@mui/material/Stack';
import AddCircleIcon from '@mui/icons-material/AddCircle';

export default function ButtonAppBar() {

    const [items, setItems] = useState([]);

    useEffect(() => {
        UserGet()
      }, [])

      const UserGet = () => {
        fetch("http://localhost:3333/userlog")
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
        window.location = '/chalothon/yangbot_frontend/userupdate/' + id
      }

  return (
    <Box sx={{ flexGrow: 1 }}>
      
      <React.Fragment>
      <CssBaseline />
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h4 className="m-0 font-weight-bold text-primary">
            บัญชีผู้ใช้งาน
          </h4>   
        </div>
        <div className="card-body">  
        <Stack direction="row" spacing={1} alignItems="center" justifyContent="flex-end">
         
            </Stack>   
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead  style={{ fontSize: '16px',backgroundColor: '#EAEAEA', color: 'white'}}>
                <TableRow>
                    <TableCell style={{ fontSize: '20px' }}>ID</TableCell>
                    <TableCell align="right" style={{ fontSize: '20px' ,color:'#3B3B3B'}}>อีเมล</TableCell>
                    
                    <TableCell align="right" style={{ fontSize: '20px' ,color:'#3B3B3B'}}>ชื่อ</TableCell>
                    <TableCell align="right" style={{ fontSize: '20px' ,color:'#3B3B3B'}}>นามสกุล</TableCell>
                    <TableCell align="right" style={{ fontSize: '20px' ,color:'#3B3B3B'}}>อายุ</TableCell>
                    <TableCell align="right" style={{ fontSize: '20px' ,color:'#3B3B3B'}}>หมายเลขโทรศัพท์</TableCell>
                    <TableCell align="right" style={{ fontSize: '20px' ,color:'#3B3B3B'}}>ตำแหน่ง</TableCell>
                    <TableCell align="right" >
                      <Link href="createuser" >  
                        <Button variant="contained" startIcon={<AddCircleIcon/>} color='success'  style={{ fontSize: '16px' ,backgroundColor: '#6CAB84', color: 'white'}}>
                            สร้างบัญชีผู้ใช้งาน
                        </Button>
                        
                      </Link>
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {items.map((row,index) => (
            <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell   style={{ fontSize: '16px' }} component="th" scope="row">
                {index + 1} 
                </TableCell>
                <TableCell align="right" style={{ fontSize: '16px' }}>{row.email}</TableCell>

                <TableCell align="right"  style={{ fontSize: '16px' }}>{row.fname}</TableCell>
                <TableCell align="right"  style={{ fontSize: '16px' }}>{row.lname}</TableCell>
                <TableCell align="right"  style={{ fontSize: '16px' }}>{row.age}</TableCell>
                <TableCell align="right"  style={{ fontSize: '16px' }}>{row.phone}</TableCell>
                <TableCell align="right"  style={{ fontSize: '16px' }}>{row.role}</TableCell>
                <TableCell align="right" >
                <Stack direction="row" spacing={1} alignItems="center" justifyContent="flex-end">
                   <Button   spacing={1} variant="contained" endIcon={<EditIcon />}   onClick={() => handleUpdate(row.id)} style={{ fontSize: '16px',backgroundColor: '#6CAB84', color: 'white'}}>
                      แก้ไข
                    </Button>
                    <Button variant="contained" startIcon={<DeleteIcon />} onClick={ e => handleDelete(row.id)}  style={{ fontSize: '16px',backgroundColor: '#6CAB84', color: 'white'}}>
                      ลบบัญชีผู้ใช้งาน
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