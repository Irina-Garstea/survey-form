import styled from "@emotion/styled"

export const Container =styled.div`
  background: ${({ theme }) => theme.palette.primary.main};
  position: fixed;
  color: #ffffff;
  font-family: Roboto;
  letter-spacing: 1px;
  height: 100vh;
  width: 100%;
  
.form-group {
  background: ${({ theme }) => theme.palette.secondary.main};
  height: 80vh;
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 30px;


} 
  button {
  position: fixed;
  background-color: #D99F0B;    
  color: #ffffff;
  text-transform: uppercase;
  text-align: center;
  border: 1px solid #D99F0B;
  font-weight: 500;
  font-size: 22px;
  letter-spacing: 2px;
  width:120px;
  height: 50px;
  cursor: pointer;
  margin-top:8%;
  margin-left:75%;
   
  }
  .text-paragraph {
  font-size: 42px;
  margin: 0 auto;
  }

  .recommanded-form {
    font-size: 39px;
    text-align: center;
  }
  h2{
    font-size: 41px;
    text-align: center;
    letter-spacing: 2px;
  }
  input {
  background: ${({ theme }) => theme.palette.secondary.main};
  border-top: hidden;
  border-left: hidden;
  border-right: hidden;
  border-bottom: 2px solid #ffffff; 
}


section{
  margin-left: 50px;
  margin-right: 50px;
  padding-top: 90px;
}

#selectbox {
  font-size: 18px;
}

.text-name {
  font-size: 12px;
}

.label-name {
  font-size: 24px;
  letter-spacing: 1px;
  position: absolute;
  margin-top: 2.5%;
}
input[name=name] {
  width: 100%;
  margin-top: 5%;
}

.label-age {
  font-size: 24px;
  letter-spacing: 1px;
  position: absolute;
  margin-top:7%;
}
input[name=age] {
  width: 100%;
  margin-top: 9%;
}
.label-mail {
  font-size: 24px;
  letter-spacing: 1px;
  position: absolute;
  margin-top:16%;
}

input[name=email] {
  width: 100%;
  margin-top: 20%;
}


.role-form {
  font-size: 39px;
  text-align: center;

}
select {
  background-color: ${({ theme }) => theme.palette.secondary.main};
  color: #ffffff;
  border-left: hidden;
  border-right: hidden;
  border-top: hidden;
  margin-bottom: 1em;
  padding: .25em;
}


.favorite-form {
  font-size: 39px;
  text-align: center;
}

input[type=radio] {
  display: inline-block;
  margin: 28px;
}

.chekform {
  display: block;
  margin: 0;
}

.favorite-form {
  margin-top: -60px;
  margin-bottom: -10px; 
}

textarea {
  width: 600px;
  height: 200px;
  margin-left: 30%;
}

.succesfully {
  font-size: 48px;
  text-align: center;
}

.suggestion {
  text-align: center;
  font-size: 48px;
}
.thanks {
  font-size: 18px;
  letter-spacing: 1px;
  margin-left: 14%;
}
.footer {
  font-weight: 500;
  letter-spacing: 1px;
  margin-top: 20%;
  margin-left:40%;
}


/**Media QUerry */
@media screen and (max-width: 1112px) {
  section {
    margin-left: 10px;
    margin-right: 10px;
  }
  .text-paragraph {
    font-size: 22px;
    margin-bottom: 94px;
  }
.role-form, .recommanded-form,
.favorite-form, .suggestion,
.succesfully {
  font-size: 24px;
}

#selectbox {
  margin-top: 80px;
}
.option {
  font-size: 14px;
  margin-top:50px;
}

textarea {
 width: 300px;
 height: 240px;
 margin-left: 0 auto;
 margin-right: 0 auto;
 margin-bottom: 0px;
}

.thanks {
  padding-top: 50px;
}
footer {
  margin-left: -220px;
  margin-top: 45%;
  
}
  button {
    position: fixed;
    margin-top: 120px;
    margin-left: 28%;
  }
input {
  margin: 0 auto;
  padding: 7px;
}



}


@media screen and (max-width: 480px) {
  section {
    margin-left: 10px;
    margin-right: 10px;
  }
  .text-paragraph {
    font-size: 22px;
    margin-bottom: 94px;
  }
.role-form, .recommanded-form,
.favorite-form, .suggestion,
.succesfully {
  font-size: 22px;
}

#selectbox {
  margin-top: 80px;
}
.option {
  font-size: 12px;
  margin-top:50px;
}

textarea {
 width: 200px;
 height: 210px;
 margin-left: 0 auto;
 margin-right: 0 auto;
 margin-bottom: 0px;
}

.thanks {
  padding-top: 50px;
}
footer {
  margin-left: -220px;
  margin-top: 50%;
  
}
  button {
    position: fixed;
    margin-top: 120px;
    margin-left: 28%;
  }
input {
  margin: 0 auto;
  padding: 7px;
}
}




  `



