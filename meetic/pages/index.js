import Head from 'next/head';
import { ProfileList } from '../components/ProfileList';
export default function Home() {
  return (
    <div>
      <Head>
        <title>Meetic test-entretien</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='container d-grid gap-4'>
        <ProfileList data='online' />
        
        <ProfileList data='featured' />
      </div>
    </div>
  )
}


/*
import Head from 'next/head';
import { observer } from 'mobx-react';
import Profile from '../stores/Profile';
import { ProfileList } from '../components/ProfileList';
const ConnectedList = observer(
  () => <div>{
    Profile.online.map(
      (e, i) => <div key={i}>
        <img src={e.picture} className="img-fluid" />
      </div>
    )
  }</div>
);

const FeaturedList = observer(
  () => <div>{
    Profile.featured.map(
      (e, i) => <div key={i}>
        <img src={e.picture} className="img-fluid" />
      </div>
    )
  }</div>
);
export default function Home() {
  return (
    <div>
      <Head>
        <title>Meetic test-entretien</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ConnectedList />
        <i className="bi-alarm"></i><i className="bi-alarm"></i>
        <FeaturedList />
      </main>
    </div>
  )
}

export default= un seul element = import {Profile}
export const = plusiers objet = import Profile
*/