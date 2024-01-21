'use client';

import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '@/store/CounterSlice'
import { setTrue, setFalse } from '@/store/ShowIfTrueSlice'
import { setUser, resetUser } from '@/store/UserSlice';
import { RootState } from '@/store/store'

import ShowIfTrue from '@/components/ShowIfTrue'





export default function Home() {

  const showIfTrue = useSelector((state : RootState) => state.showIfTrue.value)
  const count = useSelector((state : RootState) => state.counter.value)
  const user = useSelector((state : RootState) => state.user.user)
  const password = useSelector((state : RootState) => state.user.password)
  const email = useSelector((state : RootState) => state.user.email)
  const terms = useSelector((state : RootState) => state.user.terms)
  const confirmPassword = useSelector((state : RootState) => state.user.confirmPassword)
  const isActive = useSelector((state : RootState) => state.user.isActive)
  const firstName = useSelector((state : RootState) => state.user.firstName)
  const lastName = useSelector((state : RootState) => state.user.lastName)
  const dateCreated = useSelector((state : RootState) => state.user.dateCreated)

  const dispatch = useDispatch()

  return (
   <>
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

    <div>
      <h1>User: {user}</h1>
      <h1>Password: {password}</h1>
      <h1>Confirm Password: {confirmPassword}</h1>
      <h1>Email: {email}</h1>
      <h1>Terms: {terms.toString()}</h1>
      <h1>Active: {isActive.toString()}</h1>
      <h1>First Name: {firstName}</h1>
      <h1>Last Name: {lastName}</h1>
      <h1>Date Created: {dateCreated}</h1>
      
    </div>
   </>
  )
}
