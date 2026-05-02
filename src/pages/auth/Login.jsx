import { useState } from "react"
import {useUserContext} from '../../hooks/useUserContext'
import { useNavigate, Link } from "react-router"


export const Login = () =>{
    const [userCredentials, setUserCredentials] = useState({email: '', password: ''})
    const {login, error, loading} = useUserContext()
    const navigate = useNavigate()


    async function handleSubmit(e){
        e.preventDefault()
        try{
            await login(userCredentials)
            navigate('/')
        }catch(err){
            console.log(err)
        }
    }


    return (
        <div className="container-fluid vh-100 bg-black text-white">
            <div className="row h-100">
                <div className="col-md-4 d-flex align-items-center justify-content-center p-5">
                    <div className="w-100" style={{ maxWidth: '350px' }}>
                        <h2 className="fw-bold mb-4 italic">SIGN IN</h2>
                        
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <input 
                                    type="email" 
                                    className="form-control bg-dark border-0 text-white p-3" 
                                    placeholder="EMAIL" 
                                    value={userCredentials.email} 
                                    onChange={(e) => setUserCredentials( {...userCredentials, email:e.target.value})} 
                                    required 
                                />
                            </div>
                            <div className="mb-4">
                                <input 
                                    type="password" 
                                    className="form-control bg-dark border-0 text-white p-3" 
                                    placeholder="PASSWORD" 
                                    value={userCredentials.password} 
                                    onChange={(e) => setUserCredentials({...userCredentials, password: e.target.value})} 
                                    required 
                                />
                            </div>
                            
                            {error && <div className="text-danger small mb-3 fw-bold">{error.toUpperCase()}</div>}
                            
                            <button type="submit" className="btn btn-danger w-100 p-3 fw-bold mb-4" disabled={loading}>
                                {loading ? 'LOADING...' : 'SIGN IN'}
                            </button>
                        </form>

                        <div className="text-center">
                            <Link to="/auth/register" className="text-secondary text-decoration-none small fw-bold">CREATE ACCOUNT</Link>
                        </div>
                    </div>
                </div>
                
                <div className="col-md-8 d-none d-md-block p-0">
                    <div style={{
                        backgroundImage: `url('https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: '100%'
                    }}></div>
                </div>
            </div>
        </div>
    )
}