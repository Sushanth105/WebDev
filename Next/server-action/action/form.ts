'use server'
import fs from 'fs/promises'

export const handleForm = async (e: FormData)=>{
    console.log(e.get('name') , e.get('age'))
    await fs.appendFile('detail.txt',`my name is ${e.get('name')} of age ${e.get('age')}\r\n`)
  }