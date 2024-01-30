type Props = {
    formDataPersonal: {
    firstName: string,
    lastname: string,
    birthDate: string,
    adress:string,
    zipcode:string,
    location:string,
    email:string,
    telNum:string,
}
}

export default function FormViewPersonal({formDataPersonal}: Props) {
    return(
        <>
        <p>{formDataPersonal.firstName}</p>
        <p>{formDataPersonal.lastname}</p>
        <p>{formDataPersonal.birthDate}</p>
        <p>{formDataPersonal.adress}</p>
        <p>{formDataPersonal.zipcode}</p>
        <p>{formDataPersonal.location}</p>
        <p>{formDataPersonal.email}</p>
        <p>{formDataPersonal.telNum}</p>
        </>
    )
}