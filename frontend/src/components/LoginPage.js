
import React, { useState }from "react";
import { Link  } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("http://localhost:3333/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
  
      if (data.status === "ok") {
        // ดำเนินการหลังจากการล็อกอินสำเร็จ เช่น นำผู้ใช้ไปหน้าหลัก
        alert('login success')
        localStorage.setItem('token', data.token)
        window.location.replace("/chalothon/yangbot_frontend/dashboard");// เปลี่ยนเส้นทางไปหน้าหลักหรือเพจที่ต้องการ
        console.log ('Success:', data);
      } else {
        // แสดงข้อความผิดพลาดหรือดำเนินการอื่นตามที่คุณต้องการ
        alert('login failed')
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  
  return (
    <>
      <section className="bg-gradient-primary bgprimarys" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}> 
        <div className="container pt-3"style={{ width: '100%' }} >
          {/* <!-- Outer Row --> */}
          <div className="row justify-content-center">
            <div className="col-xXl-10 col-lg-12 col-md-9">
              <div className="card o-hidden border-0 shadow-lg my-5">
                <div className="card-body p-0" >
                  {/* <!-- Nested Row within Card Body --> */}
                  <div className="row">
                  <div className="col-lg-6 d-none d-lg-block bg-login-image">
    
                  </div>
                    <div className="col-lg-6">
                      <div className="p-5">
                        <div className="text-center">
                          <h1 className="h2 text-gray-900 mb-4">
                            ยินดีต้อนรับ
                          </h1>
                        </div>
                       
                        <form className="user" onSubmit={handleLogin}>
                          <div className="form-group">
                            <input
                              type="email"
                              className="form-control form-control-user "
                              id="exampleInputEmail"
                              aria-describedby="emailHelp"
                              placeholder="กรุณากรอกอีเมลผู้ใช้งาน..."
                              value={email}
                              onChange={handleEmailChange } //เพิ่มส่วนนี้
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="password"
                              className="form-control form-control-user"
                              id="exampleInputPassword"
                              placeholder="กรุณากรอกพาสเวิร์ด..."
                              value={password}
                              onChange={handlePasswordChange} //เพิ่ม
                            />
                          </div>
                          
                          <button type="submit" className="btn btn-primary btn-user btn-block">
                               เข้าสู่ระบบ
                          </button>
                        </form>
                        <hr />
                        <div className="text-center">
                         
                        </div>
                        <div className="text-center">
                          <Link className="large" to="/register">
                            สมัครบัญชีผู้ใช้งาน
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LoginPage;