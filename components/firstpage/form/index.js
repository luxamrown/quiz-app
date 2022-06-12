import {Form, Button} from 'react-bootstrap'
import { useRouter } from 'next/dist/client/router'
import { useState } from 'react'

export default function UserForm() {
    const [userName, setName] = useState([])
    const router = useRouter()
    const handleStart = () =>{
        window.sessionStorage.setItem('name', userName)
        router.push({
            pathname:'/question'
        })
    }

  return (
    <>
        <Form className='text-center my-5'>
            <Form.Group className="mb-5 w-75 m-auto">
                <Form.Label>Your Name: </Form.Label>
                <Form.Control onChange={(e) => setName(e.target.value)} className='bg-transparent border-0 border-bottom rounded-0 text-white' type="text" placeholder="Name: " />
            </Form.Group>
            <Button variant="outline-light" onClick={handleStart} className='px-5 rounded-0'>
                Start
            </Button>
        </Form>
    </>
  )
}
