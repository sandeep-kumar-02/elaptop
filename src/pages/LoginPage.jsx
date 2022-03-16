import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/loginPage.css';
import Loader from '../components/Loader';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from 'react-toastify';

function LoginPage() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [loading,setLoading] = useState(false);
  const auth = getAuth();

  async function loginUser(){
    try{
      setLoading(true);
      const result = await signInWithEmailAndPassword(auth,email, password);
      localStorage.setItem('currentUser',JSON.stringify(result));
      setLoading(false);
      toast.success('Login successful');
      setEmail("");
      setPassword("");
      window.location.href = '/';
    }catch(error){
      console.log(error);
      toast.error('Login failed');
      setLoading(false);
      setEmail("");
      setPassword("");
    }
  }

  return (
    <div className="login-container">
      {loading && (<Loader />)}
      <div className="row">
        <div className="col-1">
          <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_pm5qdb4j.json" background="transparent" speed="1" loop autoplay></lottie-player>
        </div>
        <div className="col-2">
            <div className='form'>
              <h2>Login</h2><hr/>
              <input type="email" className='form-control' placeholder='email' value={email} onChange={e=>setEmail(e.target.value)}/>
              <input type="password" value={password} placeholder='enter password' onChange={e=>setPassword(e.target.value)}/>
              <button onClick={loginUser}>Login</button>
              <hr/>
              <Link to='/register'>Click here to register</Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage;