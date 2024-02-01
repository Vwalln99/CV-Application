type Props = {
    formDataCareer: {
        jobName:string,
        position: string,
        jobDescripton:string,
        startDate:string
        endDate:string,
   
}
}

export default function FormViewCareer({formDataCareer}: Props) {
    return(
        <>
        <h4>{formDataCareer.jobName}</h4>
        <p>{formDataCareer.position}</p>
        <p>{formDataCareer.jobDescripton}</p>
        <p>{formDataCareer.startDate}</p>
        <p>{formDataCareer.endDate}</p>
        </>
    )
}