import React, { useEffect } from 'react'
import CardOrganizatio from './CardOrganizatio'
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { IAttack } from '../../../types/redux';
import { fetchGetAllAttack } from '../../../redux/slise/attackSlise';

export default function List() {
    const dispatch = useAppDispatch();
    const data:IAttack[] | null = useAppSelector((state) => state.attack.data);

    useEffect(() => {
        (async ()=>{await dispatch(fetchGetAllAttack())})()
    }, []);

  return (
    <div>
        { data? "not fonf attack": null}
        {} 
    </div>
  )
}
