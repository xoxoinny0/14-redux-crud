import React, { memo, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getList, getItem, postItem, putItem, deleteItem } from './slice/DepartmentSlice';

const Test = memo(() => {
    const dispatch = useDispatch();
    const { data, loading, error} = useSelector((state) => state.DepartmentSlice);

    useEffect(() => {
        dispatch(getList());
        
        // dispatch(getItem({id : 102}));

        // dispatch(postItem({dname: 'React.js', loc: '1403호'}));

        // dispatch(putItem({id: 206, dname: 'React.js수정', loc: '1406호'}));

        // dispatch(deleteItem({id: 206}));
    }, [dispatch]);

    console.log(data);
    console.log(loading)
    return (
        
        loading ? "loading..." : (
            error ? JSON.stringify(error) : (
                <>
                    {JSON.stringify(data)}
                </>
            )
        )
    )
});

export default Test;