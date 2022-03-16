import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import '../stylesheets/registerPage.css';
import Loader from '../components/Loader';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

function RegisterPage() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [confirmPassword,setConfirmPassword] = useState("");
  const [loading,setLoading] = useState(false);
  const auth = getAuth();

async function registerUser(){
  try{
    setLoading(true);
    const result = await createUserWithEmailAndPassword(auth,email, password);
    console.log(result);
    setLoading(false);
    toast.success('registration successful');
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  }catch(error){
    console.log(error);
    toast.error('Registration failed');
    setLoading(false);
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  }
}

  return (
    <div className="register-container">
      {loading && (<Loader />)}
      <div className="row">
        <div className="col-1">
          <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_pm5qdb4j.json" background="transparent" speed="1" loop autoplay></lottie-player>
        </div>
        <div className="col-2">
            <div className='form'>
              <h2>Register</h2><hr/>
              <input type="email" className='form-control' placeholder='email' value={email} onChange={e=>setEmail(e.target.value)}/>
              <input type="password" value={password} placeholder='enter password' onChange={e=>setPassword(e.target.value)}/>
              <input type="password" className='form-control' placeholder='confirm password' value={confirmPassword} onChange={e=>setConfirmPassword(e.target.value)}/>
              <button onClick={registerUser}>Register</button>
              <Link to='/login'>Already register</Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage