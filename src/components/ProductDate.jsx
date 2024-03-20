import '../css/ProductDate.css'

export default function ProductDate({date}) {
  return (
    <div className='product-date'>
        <p>{date.getDate()}</p> 
        {/*  it will give date 1 to 31 */}
       
        <p>{date.getMonth() + 1}</p> 
        {/* added +1 bcz getMohth() will return month in range 0-11*/}


        <p>{date.toLocaleString('en-US', {month: 'long'})}</p> 
        {/* it will return string form of date  */}


        <p>{date.getFullYear()}</p>
        {/* it will return  */}
      
    </div>
  )
}
