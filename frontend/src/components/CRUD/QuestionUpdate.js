import React, { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Button, MenuItem, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

export default function UserUpdate() {
  const [selectedQuestionType, setSelectedQuestionType] = useState('');
  const { No } = useParams();
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .put(`http://localhost:3333/updatequestion/${No}`, { QuestionType: selectedQuestionType })
      .then((res) => {
        console.log(res);
        navigate('/Question');
        alert(`แก้ไขข้อมูลลำดับที่ ${No} เรียบร้อย`);
      })
      .catch((err) => console.log(err));
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" sx={{ p: 2 }}>
        <Typography Typography variant="h6" gutterBottom>
          ระบุประเภทของคำถาม
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Types</InputLabel>
              <Select 
                id="questiontype"
                name="questiontype"
                value={selectedQuestionType}
                onChange={(e) => setSelectedQuestionType(e.target.value)}
                required
              >
                <MenuItem value="คำถามเกี่ยวกับสภาพอากาศ">คำถามเกี่ยวกับสภาพอากาศ</MenuItem>
                <MenuItem value="คำถามเกี่ยวกับโรคยาง">คำถามเกี่ยวกับโรคยาง</MenuItem>
                <MenuItem value="คำถามเกี่ยวกับการแก้ศัตรูพืช">คำถามเกี่ยวกับการแก้ศัตรูพืช</MenuItem>
                <MenuItem value="อื่นๆ">อื่นๆ</MenuItem>
                {/* เพิ่มตัวเลือกคำตอบอื่นๆ ตามต้องการ */}
              </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <Button type="submit" variant="contained" fullWidth>
                Save
              </Button>
            </Grid>
            
          </Grid>
        </form>
      </Container>
    </React.Fragment>
  );
}
