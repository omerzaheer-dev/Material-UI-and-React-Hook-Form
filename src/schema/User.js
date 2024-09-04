import { z } from 'zod';

const schema = z.object({

  name:z.string().min(1,{message:"Required"}),  
  email: z.string().min(1,{message:"Email is Required"}).refine((text)=>
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(text),{
        message:"Invalid Email"
    }
  ),
  states:z.array(z.string()).min(1,{message:"at least 1"}).max(2,{message:"no more than 2"}),
  languages:z.array(z.string().min(1,{message:"at least 1"}).max(2,{message:"no more than 2"})).max(2,{message:"no more than 2"}),
  gender:z.string().min(1,{message:"At least 1"})
});
const defaultValues = {
    email:'',
    name:'',
    states:[],
    languages:[],
    gender:'',
}
export { schema  ,defaultValues}