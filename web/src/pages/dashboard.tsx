import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import { useAuth } from '../hooks/auth';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  const Router = useRouter();

  useEffect(() => {
    if (user === undefined) {
      Router.push('/');
    }
  })

  return (
    <p>Dashboard</p>
  )
};

export default Dashboard;
