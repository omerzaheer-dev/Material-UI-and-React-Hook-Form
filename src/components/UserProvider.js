import { FormProvider, useForm } from "react-hook-form"
import {DevTool} from "@hookform/devtools"
import Form from "../pages/Form"
import { zodResolver } from "@hookform/resolvers/zod";
import { schema , defaultValues } from "../schema/User";
const UserProvider = () => {
    const methods = useForm({
        mode:"all",
        resolver: zodResolver(schema),
        defaultValues
    });
  return (
    <FormProvider {...methods}>
        <Form/>
        <DevTool control={methods.control}/>
    </FormProvider>
  )
}

export default UserProvider
