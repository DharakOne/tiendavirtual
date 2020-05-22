import {useState} from 'react'

export default function useForm(inputs){

    const [stateForm,setStateForm]=useState(inputs)

    function handleChange(event){
        let name=event.target.name
        let value=event.target.value
        setStateForm({...stateForm,[name]:value})
    }
    function createSubmit(callback) {
        return (event)=>{
            event.preventDefault()
            callback(setStateForm)}
    }
    return [stateForm,handleChange,createSubmit]
} 