import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {preview} from '../assets'
import {getRandomPrompt} from '../utils'
import { FormField,Loader } from '../components'


const CreatePost = () => {
  const navigate = useNavigate();
  const [form,SetForm] = useState({
    name:'',
    prompt : '',
    photo: '',
  });

  function handleSubmit(){

  }

  function handleChange(e){

  }

  function handleSurpriseMe(){

  }

  const [generatingImg,SetGeneratingImg] = useState(false);
  const [loading,SetLoading] = useState(false)

  return (
    <section className='max-w-7xl mx-auto'>
      <div >
        <h1 className='font-extrabold text-[#222328] text-[32px]'>Create</h1>
        <p className='mt-2 text-[16px]  max-w-[675px] text-[#222328]'>Create imaginative and visually stunning images through by AI and share them.</p>
      </div>
      <form className='mt-16 max-w-3xl' onSubmit={handleSubmit}>
        <div className='flex flex-col gap-5'>
          <FormField 
            labelName="Your Name"
            type="text"
            name="name"
            placeholder="Ex., john doe"
            value={form.name}
            handleChange={handleChange}
          />
          <FormField 
            labelName="Prompt"
            type="text"
            name="prompt"
            placeholder="A dragon made of clouds flying over mountains"
            value={form.prompt}
            handleChange={handleChange}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
          />
        </div>
      </form>
    </section>
  )
}

export default CreatePost