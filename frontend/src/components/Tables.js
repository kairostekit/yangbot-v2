import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



const Tables = () => {

  useEffect(() => {
    UserGet()
  }, [])

  const UserGet = () => {
    fetch("http://localhost:3333/tableimg")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);

          // fetch("http://localhost:3333/tableimg")
          //   .then(ress => ress.json())
          //   .then((resulta) => {
          //     console.log(resulta);
          //   })

          const sortedItems = result.sort((a, b) => new Date(b.Date) - new Date(a.Date));
          setItems(sortedItems);
        }
      )
  }


  const [items, setItems] = useState([]);

  const handleImageClick = (row) => {
    window.location.href = '/chalothon/yangbot_frontend/labelImg'
  };


  function extractGoogleDriveFileId(url) {
    const match = url.match(/[-\w]{25,}/);
    if (match) {
      return match[0];
    }
    return null;
  }




  const handleClick = () => {
    window.location.href = '/chalothon/yangbot_frontend/labelImg';
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>

        <React.Fragment>
          <CssBaseline />
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h5 className="m-0 font-weight-bold text-primary">
                ตารางจัดการข้อมูลรูปภาพ
              </h5>
            </div>
            <div className="card-body">

              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell style={{ fontSize: '20px' }} >No</TableCell>

                      <TableCell align="right" style={{ fontSize: '20px' }}>วันที่อัพโหลด</TableCell>
                      <TableCell align="left" style={{ fontSize: '20px' }}>ชื่อไฟล์</TableCell>
                      <TableCell align="left" style={{ fontSize: '20px' }}>รูปภาพ</TableCell>
                      <TableCell align="left" style={{ fontSize: '20px' }}>Lat&Long</TableCell>
                      <TableCell align="left" style={{ fontSize: '20px' }}>พื้นที่</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {
                      items.map((row, index) => (

                        <TableRow
                          key={row.id}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell style={{ fontSize: '16px' }} component="th" scope="row">
                            {index + 1} </TableCell>
                          <TableCell align="right" style={{ fontSize: '16px' }}>{row.Date}</TableCell>
                          <TableCell align="left" style={{ fontSize: '16px' }}>{row.ref_image}</TableCell>
                          <TableCell align="left" onClick={handleClick} onMouseOver={(e) => (e.currentTarget.style.cursor = 'pointer')}>
                            <img src={`https://drive.google.com/uc?id=${extractGoogleDriveFileId(row.link_image)}`} alt={`Image ${index}`} width="150" height="150" />
                          </TableCell>
                          <TableCell align="left" style={{ fontSize: '16px' }}>{row.location_image}</TableCell>
                          <TableCell id='showThme' align="left" style={{ fontSize: '16px' }}  > <div dangerouslySetInnerHTML={{ __html: row.image_address }} />   </TableCell>
                        </TableRow>
                      ))
                    }
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>

        </React.Fragment>
      </Box>


    </>

  );
}

export default Tables;