
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import styles from "./Dashboard.module.css"
import { useHistory } from 'react-router-dom'
import { getGithubData } from '../Store/GitStore/actions';

export const Dashboard = () => {

    const [search, setSearch] = useState("");
    const dispatch = useDispatch();
    const { loading, data, error } = useSelector(store => store.gituser.githubUsers, shallowEqual);
    const { isAuth } = useSelector(store => store.auth, shallowEqual)
    const history = useHistory();

    console.log(isAuth)

    useEffect(() => {
        if (!isAuth) {
            history.push("/login")
        }
    }, [isAuth])


    const getData = async () => {
        if (!search) {
            return
        }
        dispatch(getGithubData(search));
    }

    const handleData = (e) => {
        setSearch(e.target.value)
    }


    return <>
        <h1>Dashboard</h1>

        <input type="text" name="search" onChange={handleData} /><br />
        <button onClick={getData}>Search</button>


        {loading ?

            (<h1>Loading ...</h1>) : error ? (<h1>error</h1>) : (
                <div>
                    {data.map((e) => {
                        return <div key={e.id}>
                            <h1>{e.login}</h1>
                        </div>

                    })}
                </div>
            )
        }

    </>
}

