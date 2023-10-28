import React, { useState }from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Button, Typography,Stack } from '@mui/material';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';


export default function CreateUser() {
    
    const handleSubmit = event => {
        event.preventDefault();
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify({
          "email": email,
          "password": password,
          "fname": fname,
          "lname": lname,
          "age":age,
          "phone":phone,
          "lineid":lineid,
          "role":role
        });
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
        fetch("http://localhost:3333/usercreate", requestOptions)
          .then(response => response.json())
          .then(result => {
            console.log(result)
            alert('สร้างบัญชีผู้ใช้งานเรียบร้อย')
            window.location.href = "/chalothon/yangbot_frontend/user";
          })
          .catch(error => console.log('error', error));
    } 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [age, setAge] = useState('');
    const [phone, setPhone] = useState('');
    const [lineid, setLineid] = useState('');
    const [role, setRole] = useState('');

   


  return (
    <React.Fragment>
      <CssBaseline />
      <h2>สร้างบัญชีผู้ใช้งาน</h2>
            <form onSubmit={handleSubmit} >
                <Stack spacing={2} direction="row" sx={{marginBottom: 4,'& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: '#000', // สีเส้นขอบเมื่อไม่ได้โฟกัส
                        },
                        '&:hover fieldset': {
                          borderColor: '#006400', // สีเส้นขอบเมื่อโฟกัส
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#006400', // สีเส้นขอบเมื่อได้รับโฟกัส
                        },
                      }}}>
                    <TextField
                        type="text"
                        variant='outlined'
                        color='success'
                        label="ชื่อจริง"
                        onChange={e => setFname(e.target.value)}
                        value={fname}
                        fullWidth
                        required
                        InputLabelProps={{
                            style: { color: 'black' }, // สีของ Label
                          }}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="นามสกุล"
                        onChange={e => setLname(e.target.value)}
                        value={lname}
                        fullWidth
                        required
                        InputLabelProps={{
                            style: { color: 'black' }, // สีของ Label
                          }}
                    />
                    
                </Stack>
                
                                      
                <Stack spacing={3} direction="row" sx={{marginBottom: 4,'& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: '#000', // สีเส้นขอบเมื่อไม่ได้โฟกัส
                        },
                        '&:hover fieldset': {
                          borderColor: '#006400', // สีเส้นขอบเมื่อโฟกัส
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#006400', // สีเส้นขอบเมื่อได้รับโฟกัส
                        },
                      }}}>
                   
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="Email"
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        sx={{width: '900px'}}
                        required
                        InputLabelProps={{
                            style: { color: 'black' }, // สีของ Label
                          }}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="หมายเลขโทรศัพท์"
                        onChange={e => setPhone(e.target.value)}
                        value={phone}
                        
                        required
                        InputLabelProps={{
                            style: { color: 'black' }, // สีของ Label
                          }}
                        sx={{
                                
                            '& .MuiOutlinedInput-root': {
                              '& fieldset': {
                                borderColor: '#000', // สีเส้นขอบเมื่อไม่ได้โฟกัส
                              },
                              '&:hover fieldset': {
                                borderColor: '#006400', // สีเส้นขอบเมื่อโฟกัส
                              },
                              '&.Mui-focused fieldset': {
                                borderColor: '#006400', // สีเส้นขอบเมื่อได้รับโฟกัส
                              },
                            },
                            
                          }}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="อายุ"
                        onChange={e => setAge(e.target.value)}
                        value={age}
                        fullWidth 
                        required
                        InputLabelProps={{
                            style: { color: 'black' }, // สีของ Label
                          }}
                          sx={{ width: '200px' }} 
                    />
                </Stack>
                <Stack spacing={2} direction="row" sx={{marginBottom: 3}}>
                    
                    <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            label="LineID (ถ้ามี)"
                            onChange={e => setLineid(e.target.value)}
                            value={lineid}
                            InputLabelProps={{
                                style: { color: 'black' }, // สีของ Label
                              }}
                            sx={{ width: '700px',color: 'red','& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                  borderColor: '#000', // สีเส้นขอบเมื่อไม่ได้โฟกัส
                                },
                                '&:hover fieldset': {
                                  borderColor: '#006400', // สีเส้นขอบเมื่อโฟกัส
                                },
                                '&.Mui-focused fieldset': {
                                  borderColor: '#006400', // สีเส้นขอบเมื่อได้รับโฟกัส
                                },
                              }, }} 
                            required
                        />
                       
                       <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            label="Role"
                            onChange={e => setRole(e.target.value)}
                            value={role}
                            InputLabelProps={{
                                style: { color: 'black' }, // สีของ Label
                              }}
                            sx={{ width: '700px',color: 'red','& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                  borderColor: '#000', // สีเส้นขอบเมื่อไม่ได้โฟกัส
                                },
                                '&:hover fieldset': {
                                  borderColor: '#006400', // สีเส้นขอบเมื่อโฟกัส
                                },
                                '&.Mui-focused fieldset': {
                                  borderColor: '#006400', // สีเส้นขอบเมื่อได้รับโฟกัส
                                },
                              }, }} 
                            required
                        />
                       
                    
                </Stack>
                
                <TextField sx={{marginBottom: 3,'& .MuiOutlinedInput-root': {
                              '& fieldset': {
                                borderColor: '#000', // สีเส้นขอบเมื่อไม่ได้โฟกัส
                              },
                              '&:hover fieldset': {
                                borderColor: '#006400', // สีเส้นขอบเมื่อโฟกัส
                              },
                              '&.Mui-focused fieldset': {
                                borderColor: '#006400', // สีเส้นขอบเมื่อได้รับโฟกัส
                              },
                            },}}
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="รหัสผ่าน"
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                        fullWidth
                        required
                        InputLabelProps={{
                            style: { color: 'black' }, // สีของ Label
                          }}
                />
                <br></br>
                <TextField sx={{marginBottom: 3}}
                        type="text"
                        variant='outlined'
                        color='success'
                        label="ยืนยันรหัสผ่าน"
                        
                          
                        fullWidth
                        required
                        InputLabelProps={{
                            style: { color: 'black' }, // สีของ Label
                          }}
                          sx={{
                            marginBottom: 4,
                            '& .MuiOutlinedInput-root': {
                              '& fieldset': {
                                borderColor: '#000', // สีเส้นขอบเมื่อไม่ได้โฟกัส
                              },
                              '&:hover fieldset': {
                                borderColor: '#006400', // สีเส้นขอบเมื่อโฟกัส
                              },
                              '&.Mui-focused fieldset': {
                                borderColor: '#006400', // สีเส้นขอบเมื่อได้รับโฟกัส
                              },
                            },
                          }}
                />
                
                <Button
                    variant="outlined"
                    color="success"
                    type="submit"
                    
                    sx={{
                        width: '1600px', // ปรับขนาดความกว้างของปุ่ม
                        height: '50px', // ปรับขนาดความสูงของปุ่ม
                        backgroundColor: 'green', // สีพื้นหลัง
                        color: 'white', // สีตัวหนังสือ
                        
                        '&:hover': {
                        backgroundColor: 'darkgreen', // สีพื้นหลังเมื่อโฟกัส
                        },
                    }}
                    >
                    ส่งข้อมูลลงทะเบียน
                </Button>


            </form>
    </React.Fragment>
  );
}