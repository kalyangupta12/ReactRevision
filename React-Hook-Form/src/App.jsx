import { useState } from 'react'
import {useForm} from 'react-hook-form'
import toast, {Toaster} from 'react-hot-toast'
import {ThreeDots} from 'react-loader-spinner'
import axios from 'axios'
import './App.css'

function App() {
  const {handleSubmit, register, setError, formState:{errors, isSubmitting}}= useForm();
  // const [id , setId] = useState(1);
  const delay = (e) => {
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        resolve();
      }, e * 1000)
    })
  }

  // const IdSetter = () =>{
  //   setId((id) => id + 1); //incrementing id to set for the form 
  //   return id;
  // }
  
  const onSubmit = async(data)=>{
    //suppose I want to blacklist this person then I can set custom errors
    //synatx is setError("key", {message:value})
    // if(data.email == "testuser@gmail.com"){
    //   setError("myform",{message:"You cannot fill this form, you are blacklisted from our website"});
    // }
    // else{
    //   let id  = IdSetter();
    //   let newData = { id, ...data}
    //   await delay(4); // will simulate it more , its just a network delay simulator 
    //   toast.success("Form Successfully Submitted!")
    
    //   console.log(newData);
    //   console.log(newData.id);
    //   console.log(newData.email);
    //   console.log(newData.password);
    // }


    await delay(4); // will simulate it more , its just a network delay simulator 
    try{
      //make the POST request to your API
      const response = await axios.post('http://localhost:1211/sendusers', data);

      //handle the response
      if(response.status === 201){
        toast.success("Form Successfully Submitted");
      }
    }catch(error) {
      console.error("Error submitting the form: ", error);
      toast.error("There was an error submitting the form.")
    }

  }


  const handleErrors = () => {
    if (errors.email) {
      toast.error(errors.email.message); // it will do email error toast
    }
    else if (errors.password) {
      toast.error(errors.password.message); // it will do password error toast
    }
    // else if (errors.myform) {
    //   toast.error(errors.myform.message); // it will toast a blacklisted person who is not allowed to fill this form
    // }
  }

  return (

    <>
    <Toaster
      position="top-center"
      reverseOrder={false}
    />
    <form action='' onSubmit={handleSubmit(onSubmit, handleErrors)}>
      <input type='email' 
        {...register("email",{
        required:{value:true, message: "Email is Required"},
          pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message: "invalid email address"}
          })}
          placeholder='email'/>  <br />
      <input type='password'  
        {...register("password",{
          required:{value:true, message:"Password is Required!"},
          minLength:{value: 8, message:"Minimum length of the password must be 8"},
          maxLength:{value: 14, message:"Maximum length of the password must be 14"}
        })}
        placeholder='password'/> <br />
          {isSubmitting && <div style={{
                  display: "flex", 
                  justifyContent: "center", 
                  alignItems: "center", 
                }}>
                  <ThreeDots
                    visible={true}
                    height="50"
                    width="50"
                    color="white"
                    radius="9"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                  />
                </div>
                }
      <input type="submit" disabled={isSubmitting} value="Submit" />
    </form>
    </>
  )
}

export default App
