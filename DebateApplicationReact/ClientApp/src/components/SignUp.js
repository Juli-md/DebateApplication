import React, { Component } from 'react';
import { withFormik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { Col, Row, Button, FormGroup, Label, Input, FormText } from 'reactstrap';



export const SignUp = ({ //destructure props
    values,
    errors,
    touched,
    isSubmitting,
    valid
}) => {
    
    return (
        <Form>
            <Row form="true">
                <Col md={6}>
                    <FormGroup>
                        <Label for="usrName">Имя</Label>
                        
                        <Input tag={Field} type="text" name="usrName" placeholder="Введите свое имя" />
                        <ErrorMessage name="usrName" />
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="usrSurname">Фамилия</Label>
                        
                        <Input tag={Field} type="text" name="usrSurname" placeholder="Введите свою фамилию" />
                        <ErrorMessage name="usrSurname" />
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="Email">Email</Label>
                      
                        <Input invalid={touched.email && errors.email} valid={touched.email && !errors.email} tag={Field} type="email" name="email" placeholder="Email" />
                        <ErrorMessage name="email" />
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="phoneNumber">Номер</Label>
                        
                        <Input invalid={touched.phoneNumber && errors.phoneNumber} valid={touched.phoneNumber && !errors.phoneNumber} tag={Field} type="number" name="phoneNumber" placeholder="Номер мобильного телефона" />
                        <ErrorMessage name="phoneNumber" />
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="password">Пароль</Label>
                        <Input invalid={touched.password && errors.password} valid={touched.password && !errors.password} tag={Field} type="password" name="password" placeholder="Пароль" />
                        <ErrorMessage name="password" />
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="passwordConfirmation">Подтвердите Пароль</Label>
                        
                        <Input invalid={touched.passwordConfirmation && errors.passwordConfirmation} valid={touched.passwordConfirmation && !errors.passwordConfirmation} tag={Field} type="password" name="passwordConfirmation" placeholder="Пароль" />
                        <ErrorMessage name="passwordConfirmation" />
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="city">Город</Label>
                       
                        <Input tag={Field} type="text" name="city" placeholder="Город" />
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="university">Университет</Label>
                        
                        <Input tag={Field} type="text" name="university" placeholder="Университет" />
                    </FormGroup>
                </Col>
            </Row>
            
            <Input tag={Field} type="textarea" name="AbouUsr" placeholder="О себе" />
            <Button className="my-3" disabled={isSubmitting}>Зарегистрироваться</Button>
            </Form>
        );
    
}

export const FormikSignUp = withFormik({
    mapPropsToValues({ email, phoneNumber, password, passwordConfirmation, usrName, city, university, AboutUsr, usrSurname }) { //  дают доступ к props которые можно передать компоненту formikSignUp
        return {
            email: email || '', // email - if prop email exists, void if it doesnt exist
            password: password || '',
            passwordConfirmation: passwordConfirmation || '',
            usrName: usrName || '',
            usrSurname: usrSurname || '',
            city: city || '',
            university: university || '',
            AboutUsr: AboutUsr || '',
            phoneNumber: phoneNumber || ''
        }
    },
    validationSchema: yup.object().shape({
        usrName: yup.string().required('Name is required'),
        usrSurname: yup.string().required('Surname is required'),
        email: yup.string().email('Email not valid').required('Email is required'),
        password: yup.string().min(6, 'Password must be 6 characters or longer').required('Password is required'),
        passwordConfirmation: yup.string().oneOf([yup.ref('password'), null], "Passwords don't match")
            .required('Password confirm is required'),
        phoneNumber: yup.string().length(11, 'Phone number must be 11 digits').matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Phone number must be 11 digits'
).required('Phone Number is required')

    })
    
    
    /*handleSubmit(values, { setErrors, resetForm, setSubmit }) {
        setTimeout(() => {
            if (values.email === 'julia@test.io') {
                setErrors({email: 'That email is already taken'})
            } else {
                resetForm();
            }
            //setSubmitting(false)
        }, 2000)
        
    }*/
})(SignUp)

