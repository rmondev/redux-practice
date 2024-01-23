'use client';

import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '@/store/CounterSlice'
import { setTrue, setFalse } from '@/store/ShowIfTrueSlice'
import { setUser, resetUser } from '@/store/UserSlice';
import { RootState } from '@/store/store'
//import { UserData } from '@/store/UserSlice'

//import UserData from '@/store/AppTypes'


import ShowIfTrue from '@/components/ShowIfTrue'
import React, { useState, useEffect } from 'react';

export default function Home() {

  const showIfTrue = useSelector((state : RootState) => state.showIfTrue.value)
  const count = useSelector((state : RootState) => state.counter.value)
  // const user = useSelector((state : RootState) => state.user.user)
  // const password = useSelector((state : RootState) => state.user.password)
  // const email = useSelector((state : RootState) => state.user.email)
  // const terms = useSelector((state : RootState) => state.user.terms)
  // const confirmPassword = useSelector((state : RootState) => state.user.confirmPassword)
  // const isActive = useSelector((state : RootState) => state.user.isActive)
  // const firstName = useSelector((state : RootState) => state.user.firstName)
  // const lastName = useSelector((state : RootState) => state.user.lastName)
  //const dateCreated = useSelector((state : RootState) => state.user.dateCreated)

  // Declare dateCreated state variable and its setter function
  const [dateCreated, setDateCreated] = useState('');

  // ...existing useSelector calls...

  useEffect(() => {
    setDateCreated(new Date().toISOString());
  }, []);

  // ...rest of your component...


 

  // const User: UserData = {
  //   user: 'John',
  //   password: 'password',
  //   confirmPassword: 'password',
  //   email: 'jon@bailey.com',
  //   terms: true,
  //   isActive: true,
  //   firstName: 'John',
  //   lastName: 'Bailey',
  //   dateCreated: dateCreated
  // }
  

  const dispatch = useDispatch()

  // dispatch(setUser(User))

  return (
   <>
   <section>
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>

     <div>
        <button
          aria-label="Set True"
          onClick={() => dispatch(setTrue())}
        >
          Set True
        </button>
        {showIfTrue ?<ShowIfTrue /> : null}
        <button
          aria-label="Set False"
          onClick={() => dispatch(setFalse())}
        >
          Set False
        </button>
    </div>

    {/* <div>
      <p>User: {user}</p>
      <p>Password: {password}</p>
      <p>Confirm Password: {confirmPassword}</p>
      <p>Email: {email}</p>
      <p>Terms: {terms.toString()}</p>
      <p>Active: {isActive.toString()}</p>
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      {/* <p>Date Created: {dateCreated}</p> 
    </div>
     */}

    </section>
   </>
  )
}
