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
        <h2>Education</h2>
        <p>{formDataSchool.schoolName}</p>
        <p>{formDataSchool.subject}</p>
        <p>{formDataSchool.endDate}</p>
        </>
    )
}