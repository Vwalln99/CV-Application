type Props = {
    formDataPersonal: {
    firstName: string,
    lastname: string,
    birthDate: string,
    address:string,
    zipcode:string,
    location:string,
    email:string,
    telNum:string,
}
}

export default function FormViewPersonal({formDataPersonal}: Props) {
    return(
        <>
        <h2>{formDataPersonal.firstName}</h2>
        <h2>{formDataPersonal.lastname}</h2>
        <p>{formDataPersonal.birthDate}</p>
        <p>{formDataPersonal.address}</p>
        <p>{formDataPersonal.zipcode}</p>
        <p>{formDataPersonal.location}</p>
        <p>{formDataPersonal.email}</p>
        <p>{formDataPersonal.telNum}</p>
        </>
    )
}