import Head from 'next/head'
import Link from 'next/Link'

const Signin = () => {
    return (
      <div>
        <Head>
          <title>Sign in Page</title>
        </Head>
        <form className="mx-auto my-4" style={{maxWidth:'500px'}}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1"/>
          </div>
          <button type="submit" className="btn btn-dark w-100">Log in</button>
          <p className="my-2">You don't have an account'? <Link href="/register"><a style={{color:'crimson'}}>Register</a></Link> </p>
        </form>
      </div>
    )
  }
  
  export default Signin