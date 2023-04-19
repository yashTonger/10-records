import getdata  from '/Users/abhinavsingh/Desktop/NextJS Project/ten-records/public/library/getdata'
import styles from '/Users/abhinavsingh/Desktop/NextJS Project/ten-records/app/page.module.css'
  
type Params = {
    params:{
        tenthPlace: number
    }
}
export default async function Tendata({params:{ tenthPlace }}: Params) {
    
    const current = Number(tenthPlace)
    const dataSource: Promise<dataType[]> = getdata(current)
    const awaittedTenData = await dataSource
    const table10 = awaittedTenData.map(data => {
        return (

        <tr key={data.id}>
          <td>{data.id}</td>
          <td>{data.name}</td>
          <td>{data.email}</td>
        </tr>
    
         )
    })

    return(
         <div> 
            <table className={styles.tableStyle}>


                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>

                {table10} 
               

            </table>

            <div className={styles.grid}>
                <a
                href= {`/${current+10}`}
                className={styles.card}
                rel="noopener noreferrer"
                >
                <h2>
                    Next <span>-&gt;</span>
                </h2>
                <p>
                    Find the next 10 Records from API.
                </p>
                </a>
            </div>
      </div>
    )
}