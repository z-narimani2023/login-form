import logo from './logo.svg';
import './App.css';
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
function App() {
  const schema = yup.object().shape({
    name: yup.string().required("فیلد نام اجباری است"),
    password: yup.string().min(4).max(15).required(),
    confirmPassword: yup.string().oneOf([yup.ref("password")], "password not matches").required()
  })
  const { register, handleSubmit, formState: { errors } } =
    useForm({ resolver: yupResolver(schema) })

  const onFormSubmit = (data) => {
    console.log("this form submited!")
    console.log(data)
  }
  return (
    <div className='App'>
      <div class="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <div class="user-box">
            <input type="text" {...register("name")} />
            <label>Username</label>
            <p>{errors.name?.message}</p>
          </div>
          <div class="user-box">
            <input type="password" {...register("password")} />
            <label>Password</label>
            <p>{errors.password?.message}</p>
          </div>
          <div class="user-box">
            <input type="password" {...register("confirmPassword")} /> 
            <label>ConfirmPassword</label>
            <p>{errors.confirmPassword?.message}</p>
          </div>
          <a href="#" type='submit'>
            <input type="submit" hidden/>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </a>
        </form>
      </div>
    </div>

  );
}

export default App;

/*

*/