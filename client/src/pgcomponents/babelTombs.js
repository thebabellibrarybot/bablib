import React from 'react';
import BasicTable from '../pgcomponents/babelTombList';
import Navbar from "../navbar";
import useTheme from '../hooks/useTheme';


const BabelHomeTomb = () => {

  const urlProp = {
    url: '/babeltombs/',
    style: 'full-table',
    endpoint: 'microfilm'
  };
  const { isDarkMode } = useTheme();

  return (
    <div className={isDarkMode}>

    <Navbar></Navbar>

    <BasicTable prop = {urlProp}></BasicTable>

    </div>
  );
};
  
export default BabelHomeTomb;