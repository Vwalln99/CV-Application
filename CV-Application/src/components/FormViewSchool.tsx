type Props = {
    formDataSchool: {
        schoolName:string,
        subject: string,
        endDate:string,
   
}
}

export default function FormViewSchool({formDataSchool}: Props) {
    return(
        <>
        <h4>{formDataSchool.schoolName}</h4>
        <p>{formDataSchool.subject}</p>
        <p>{formDataSchool.endDate}</p>
        </>
    )
}