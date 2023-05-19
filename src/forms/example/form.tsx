"use client"
import { SignUpSchema } from "./schema"
import Form from "../Form"
import { validatedAction } from "./action"

const FormWrapper = () => {
    return (
        <Form
            schema={SignUpSchema}
            onSubmit={(e) => {
                validatedAction(e).then(() => {console.log("hi")})
            }}
            renderAfter={() => <button style={{
                backgroundColor: "#2d3748",
                color: "#fff",
                borderRadius: "0.25rem",
                transitionProperty: "background-color",
                transitionDuration: "150ms",
                transitionTimingFunction: "linear",
                padding: ".5rem",
                width: "100%"
            }}
                type="submit" >Submit</button >}
        />
    )

}

export default FormWrapper