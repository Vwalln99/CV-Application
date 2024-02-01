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
        <h3>{formDataPersonal.firstName}</h3>
        <h4>{formDataPersonal.lastname}</h4>
        <p>{formDataPersonal.birthDate}</p>
        <p>{formDataPersonal.address}</p>
        <p>{formDataPersonal.zipcode}</p>
        <p>{formDataPersonal.location}</p>
        <p>{formDataPersonal.email}</p>
        <p>{formDataPersonal.telNum}</p>
        </>
    )
}