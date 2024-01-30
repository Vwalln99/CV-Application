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
        <p>{formDataSchool.schoolName}</p>
        <p>{formDataSchool.subject}</p>
        <p>{formDataSchool.endDate}</p>
        </>
    )
}