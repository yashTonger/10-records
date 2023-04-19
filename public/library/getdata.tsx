export default async function getdata(current: number) {
    
    const Data = await fetch(`https://jsonplaceholder.typicode.com/comments`)
    const allData = Data.json()
    const dataSource: Promise<dataType[]> =allData
    const awaittedTenData = await dataSource
    const tenData = awaittedTenData.slice(current-1,current+9)
    return tenData

 }