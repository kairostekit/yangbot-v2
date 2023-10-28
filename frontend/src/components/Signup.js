import React, {useState} from 'react';
import { TextField, Button, Container, Stack } from '@mui/material';
import { Link } from "react-router-dom"
import Box from '@mui/material/Box';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { DatePicker, Space } from 'antd';
import MenuItem from '@mui/material/MenuItem';
 
const RegisterForm = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [password, setPassword] = useState('')
 
    function handleSubmit(event) {
        event.preventDefault();
        console.log(firstName, lastName, email, dateOfBirth, password) 
    }
    const currencies = [
        {
          value: 'นาย',
          label: 'นาย',
        },
        {
          value: 'นาง',
          label: 'นาง',
        },
        {
          value: 'นางสาว',
          label: 'นางสาว',
        }   
      ]; 
      const onChange = (date, dateString) => {
        console.log(date, dateString);
      };
      
    return (
        
        <React.Fragment>
            <h2>ลงทะเบียนสมาชิกใหม่</h2>
            <form onSubmit={handleSubmit} action={<Link to="/login" />}>
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
                        label="เลขประจำตัวประชาชน"
                        onChange={e => setFirstName(e.target.value)}
                        value={firstName}
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
                        label="เลขหลังบัตรประจำตัวประชาชน"
                        onChange={e => setLastName(e.target.value)}
                        value={lastName}
                        fullWidth
                        required
                        InputLabelProps={{
                            style: { color: 'black' }, // สีของ Label
                          }}
                    />
                    
                </Stack>
                <p>
                    หมายเลขหลังบัตรประจำตัวประชาชน 12 หลัก (พิมพ์ติดกันไม่ต้องใส่ "-") เช่น JT1234567890 หลักที่ 1-2 เป็นตัวอักษรภาษาอังกฤษ และหลักที่ 3-12 เป็นตัวเลข ดูหมายเลขได้จากตำเเหน่งดังรูป
                    <br />
                    <br />
                    <div class="col-12 col-sm-6">
                        <img 
                            src="https://webapp.ldd.go.th/singlesignon/dist/img/laser.png?" 
                            alt="บัตรประชาชน"
                            style={{ width: "290px", height: "auto"  }}
                            
                        />
                    </div>
                </p>
                                      
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
                            id="outlined-select-currency"
                            select
                            label="คำนำหน้าชื่อ"
                            defaultValue="EUR"
                            InputLabelProps={{
                                style: { color: 'black' }, // สีของ Label
                              }}
                            sx={{ width: '300px' }} 
                        >
                        {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="ชื่อ"
                        onChange={e => setFirstName(e.target.value)}
                        value={firstName}
                        sx={{ width: '700px' }} 
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
                        onChange={e => setLastName(e.target.value)}
                        value={lastName}
                        fullWidth 
                        required
                        InputLabelProps={{
                            style: { color: 'black' }, // สีของ Label
                          }}
                        
                    />
                </Stack>
                <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                <TextField
                    type="date"
                    variant='outlined'
                    color='secondary'
                    label="Date of Birth"
                    onChange={e => setDateOfBirth(e.target.value)}
                    value={dateOfBirth}
                    fullWidth
                    required
                    helperText="ระบุ วันเดือนปีเกิด"
                    InputLabelProps={{
                        style: { color: 'black' }, // สีของ Label
                      }}
                    sx={{mb: 4,'& .MuiOutlinedInput-root': {
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
                    
                />
                 <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="หมายเลขโทรศัพท์"
                        onChange={e => setFirstName(e.target.value)}
                        value={firstName}
                        fullWidth
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
                </Stack>
                <Stack spacing={2} direction="row" sx={{marginBottom: 1}}>
                    
                    <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            label="อีเมล"
                            onChange={e => setFirstName(e.target.value)}
                            value={firstName}
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
                            id="outlined-select-currency"
                            select
                            label="จังหวัด"
                            defaultValue="EUR"
                            helperText="กรุณาเลือกจังหวัดㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ"
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
                        >
                        {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                        ))}
                    </TextField>    
                    <TextField
                            id="outlined-select-currency"
                            select
                            label="อำเภอ"
                            defaultValue="EUR"
                            helperText="กรุณาเลือกอำเภอㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ"
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
                        >
                        {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                        ))}
                    </TextField>  
                    <TextField
                            id="outlined-select-currency"
                            select
                            label="ตำบล"
                            defaultValue="EUR"
                            helperText="กรุณาเลือกตำบลㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ"
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
                        >
                        {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                        ))}
                    </TextField>  
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
                        onChange={e => setFirstName(e.target.value)}
                        value={firstName}
                        fullWidth
                        required
                        InputLabelProps={{
                            style: { color: 'black' }, // สีของ Label
                          }}
                />
                <br></br>
                <TextField sx={{marginBottom: 4}}
                        type="text"
                        variant='outlined'
                        color='success'
                        label="ยืนยันรหัสผ่าน"
                        onChange={e => setFirstName(e.target.value)}
                        value={firstName}
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
                        width: '1800px', // ปรับขนาดความกว้างของปุ่ม
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
            <small>Already have an account? <Link to="/login">Login Here</Link></small>
                        
        </React.Fragment>
    )
}
 
export default RegisterForm;