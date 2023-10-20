
import React, {useEffect,useState} from 'react';
import ReactDOM from 'react-dom';

function ApiTest() {

    const [state, setData] = useState({
        users: ''
    });
    
    const fetchData = async () => {
        const api = await fetch("api/randoms");
        setData({
            users: await api.json()
        });
    };

    useEffect(() => {
        fetchData();
    }, [])
    
    console.log(state.users.data)

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">User List : CodeCheef</div>
                        <div className="card-body">
                          <table>
                              <thead>
                                <tr>
                                    <th>1</th>
                                    <th>Name</th>
                                    <th>Age</th>
                                </tr>
                              </thead>
                              <tbody>
                              {   
                                state?.users?.data ? 
                                    state?.users?.data?.map((user) => (
                                            <tr key={user?.id}>
                                                <td>{user?.id}</td>
                                                <td>{user?.name}</td>
                                                <td>{user?.age}</td>
                                            </tr>
                                    )) : "Loading..."
                              }
                              </tbody>
                          </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ApiTest;

if (document.getElementById('api_test')) {
    ReactDOM.render(<ApiTest />, document.getElementById('api_test'));
}
 