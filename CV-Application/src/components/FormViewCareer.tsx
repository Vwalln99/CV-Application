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
                  <h2>Career</h2>
        <p>{formDataCareer.jobName}</p>
        <p>{formDataCareer.position}</p>
        <p>{formDataCareer.jobDescripton}</p>
        <p>{formDataCareer.startDate}</p>
        <p>{formDataCareer.endDate}</p>
        </>
    )
}