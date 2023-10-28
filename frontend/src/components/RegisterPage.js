import React, {useState} from "react";
import { Link,  } from "react-router-dom";


function RegisterPage() {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    repeatPassword: ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = async (event) => {
    event.preventDefault();
 

    try {
      const response = await fetch("http://localhost:3333/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // การลงทะเบียนสำเร็จ
        console.log("Registration successful!");
        window.location.replace("/chalothon/yangbot_frontend/");
        alert('ลงทะเบียนสำเร็จ')
        
      } else {
        // การลงทะเบียนไม่สำเร็จ
        console.log("Registration failed.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <section className="bg-gradient-primary bgprimarys" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}> 
        <div className="container pt-2">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              {/* <!-- Nested Row within Card Body --> */}
              <div className="row">
                <div className="col-lg-5 d-none d-lg-block bg-register-image"></div>
                <div className="col-lg-7">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h2 text-gray-900 mb-4">
                        สมัครบัญชีผู้ใช้งาน
                      </h1>
                    </div>
                    <form className="user" onSubmit={handleRegister}>
                      <div className="form-group row">
                        <div className="col-sm-6 mb-3 mb-sm-0">
                          <input
                            type="text"
                            className="form-control form-control-user"
                            id="exampleFirstName"
                            placeholder="ชื่อจริง"
                            name="fname"
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="col-sm-6">
                          <input
                            type="text"
                            className="form-control form-control-user"
                            id="exampleLastName"
                            placeholder="นามสกุล"
                            name="lname"
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control form-control-user"
                          id="exampleInputEmail"
                          placeholder="อีเมล"
                          name="email"
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="form-group row">
                        <div className="col-sm-6 mb-3 mb-sm-0">
                          <input
                            type="password"
                            className="form-control form-control-user"
                            id="exampleInputPassword"
                            placeholder="พาสเวิร์ด"
                            name="password"
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="col-sm-6">
                          <input
                            type="password"
                            className="form-control form-control-user"
                            id="exampleRepeatPassword"
                            placeholder="ระบุพาสเวิร์ดอีกครั้ง"
                          />
                        </div>
                      </div>
                      <button type="submit" className="btn btn-primary btn-user btn-block ">
                               ยืนยันการสมัคร
                          </button>
                      
                    </form>
                    
                    <div className="text-center">
                      
                    </div>
                    <div className="text-center">
                      <Link className="small" to="/">
                        Already have an account? Login!
                      </Link>
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

export default RegisterPage;
