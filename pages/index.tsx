import React, { FC } from 'react'
import styles from '../styles/Home.module.css'
import { gql } from "@apollo/client";
import client from "./apollo-client";
import _ from 'lodash';

export interface TPcountries{
  code: String
  name: String
}

interface NextPageProps{
  countries: TPcountries[]
  countrie: String
}


const Home: FC<NextPageProps> = ({countries}) => {
  console.log(countries)
  return (
    <div className={styles.container}>
      {countries.map((countries, key )=> {
          return <div key={key}>{countries.name}</div>
      })}
    </div>
  )
}


export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query Countries {
        countries {
          code
          name
          emoji
        }
      }
    `,
  });

  return {
    props: {
      countries: data.countries.slice(0, 8),
    },
 };
}


export default Home
