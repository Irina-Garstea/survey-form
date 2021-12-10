import React  from "react"
import { useForm } from "react-hook-form"




const RegisterPage = () => {
  const [formStep, setFormStep] = React.useState(0)
  const { register, handleSubmit, formState: { errors, isValid },
 } = useForm({ mode: "all"})


 

  const completeFormStep = () => {
    setFormStep(cur => cur + 1)
  }
  const renderButton = () => {
    if (formStep >=6 ) {
      return undefined
    } else if (formStep ===6) {
      return (
        <button 
        disabled={!isValid}
        onClick={completeFormStep}
        type="submit">
            Submit
        </button>
      )
  }else {
    return (
      <button
      onClick={completeFormStep}
      type="button"
      >
        Next
      </button>
      )
  }
}
const submitForm = (values: any): void => {
  window.alert(JSON.stringify(values, null,2))
  completeFormStep()
}


  return (
    <div className="form-group">
    <form onSubmit={handleSubmit(submitForm)}>
      {formStep === 0 && (
      <section className="name-form">
        <h3 className="text-paragraph">By following a few simple steps you will successfully complete the survey form</h3>
      <label className="label-name" htmlFor="name">Name</label>
      <input
      {...register("name",{ required: {
        value: true, 
        message: "Enter your name" 
      },
    })}
      type="text"
      id="name"
      name="name"
      className="text-input"
     />
       {errors.name && <p className="text-name">{errors.name.message}</p>}
      <br/>
      <label className="label-age" htmlFor="age">Age(optional)</label>
      <input 
        {...register("Age")}
      type="text"
      id="age"
      name="age"
      className="text-input"
      />
      </section>
      )}

{formStep === 1 && ( 
     <section className="email-form">
        <label className="label-mail" htmlFor="email">Email Adress</label>
        <input 
       {...register("email",{ required: {
        value: true, 
        message: "Enter your e-mail." 
      },
    })}
        type="text"
        id="email"
        name="email"
        className="text-input"
        />
          {errors.email && <p className="text-mail">{errors.email.message}</p>}
      </section>
)}

{formStep === 2 && ( 
     <section>
             <h3 className="role-form">Which option best describes your current role?</h3>
      <select id="selectbox">
      <option value="role">Select current role:</option>
      <option value="student">Student</option>
        <option value="job">Full time job</option>
        <option value="learner">Full time learner</option>
        <option value="say">Prefer not to say</option>
        <option value="other">Other</option>
      </select>
      </section>
)}

{formStep === 3 && ( 
     <section>
             <h3 className="recommanded-form">Would you recommend freeCodeCamp to a friend?</h3>
             <label className="container" htmlFor="field-definitely">
                    <input
                        {...register("definitely")}
                        type="radio"
                        name="definitely"
                        value="definitely"
                        id="field-definitely"
                        checked
                    />
                    Definitely
                        </label>
                
                    <br/>
              <label htmlFor="field-maybe">
                    <input
                        {...register("maybe")}
                        type="radio"
                        name="maybe"
                        value="maybe"
                        id="field-maybe"
                    />
                      Maybe
                </label>
                <br />
                <label htmlFor="field-notsure">
                    <input
                        {...register("notsure")}
                        type="radio"
                        name="notsure"
                        value="notsure"
                        id="field-notsure"
                        className="radio"
                    />
                      Not sure
                </label>
      </section>
)}



{formStep === 4 && ( 
     <section className="option">
             <h3 className="favorite-form">What is your favorite feature of freeCodeCamp?</h3>
             <select>
             <option value="">Select an option:</option>
      </select>
      <p className="apply-form"> What would you like to see improved? (Check all that apply)</p>
      <label className="chekform">
         <input type="checkbox"  />
         Front-end Projects
</label>
<label className="chekform">
         <input type="checkbox"  />
         Front-end Projects
</label>
<label className="chekform">
         <input type="checkbox"  />
         Data Visualization
</label>
<label className="chekform">
         <input type="checkbox"  />
         Challenges
</label>
<label className="chekform">
         <input type="checkbox"  />
         Open Source Community
</label>
<label className="chekform">
         <input type="checkbox"  />
         Gitter help rooms
</label>
<label className="chekform">
         <input type="checkbox"  />
         Videos
</label>
<label className="chekform">
         <input type="checkbox"  />
         City Meetups
</label>
<label className="chekform">
         <input type="checkbox"  />
         Wiki
</label>
<label className="chekform">
         <input type="checkbox"  />
         Forum
</label>
<label className="chekform">
         <input type="checkbox"  />
         Additional Courses
</label>
<label className="chekform">
         <input type="checkbox"  />
         Any comments or sugg
</label>
      </section>
)}


{formStep === 5 && (
  <section className="comments">
    <h3 className="suggestion">Are you any comments or suggestions?</h3>
 <textarea
  aria-label="empty textarea"
  placeholder="Enter  your comments here ..."></textarea>

</section>
)}

{ formStep === 6 && (
    <section>
      <h3 className="succesfully">Your message has been sent successfully.</h3>
      <p className="thanks">We will send our answer and the loyalty bonus to your e-mail address.
        <br />
        Thank you!</p>
        <footer>
  <p className="footer">©2019 omiron.software All Rights Reserved
</p>
</footer>

    </section>
    
  )
}

{renderButton()}
</form>
    </div>

      )}
  export default RegisterPage;
