import style from './homeStyle.css';

export default function Home(){

    return(
        <div className={`container mt-5 ${style.content}`}>
            <h1>Online Plant Nursery</h1>
            <table className="table table-striped mt-5" style={{background:'white' ,width:'50%', boxShadow:'2px 2px 5px rgba(0,0,0,0.5)'}}>
                <thead>
                    <tr>
                        <th>Module Name</th>
                        <th>Member Name</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Planter</td>
                        <td>Yash Bhatia</td>
                    </tr>
                    <tr>
                        <td>Plant</td>
                        <td>Kumar Rohit</td>
                    </tr>
                    <tr>
                        <td>Seed</td>
                        <td>Mounika Kamagiri & Anirudh Bhardwaj</td>
                    </tr>
                    <tr>
                        <td>Customer</td>
                        <td>Abeer Banu & Saurabh Kumar</td>
                    </tr>
                    <tr>
                        <td>Order</td>
                        <td>Chandan Sharma</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}