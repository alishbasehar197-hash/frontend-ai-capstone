import React, { useEffect, useState } from 'react';

export default function HealthCheck() {
  const [status, setStatus] = useState('Checking...');
  const [data, setData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => {
        if (!response.ok) {
          throw new Error('API request failed');
        }
        return response.json();
      })
      .then((result) => {
        setData(result);
        setStatus('Healthy');
      })
      .catch((err) => {
        setError(err.message);
        setStatus('Unavailable');
      });
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-10">
      <div className="mx-auto max-w-2xl rounded-xl bg-white p-6 shadow-card">
        <h1 className="text-2xl font-bold text-slate-900">
          System Health Check
        </h1>

        <p className="mt-2 text-slate-600">
          This page checks whether the application can successfully fetch data
          from an external API.
        </p>

        <div className="mt-6 rounded-lg bg-slate-100 p-4">
          <p className="font-semibold">
            Status: <span>{status}</span>
          </p>
        </div>

        {data && (
          <div className="mt-4 rounded-lg border p-4">
            <h2 className="font-semibold text-slate-900">
              Fetched Data
            </h2>

            <p className="mt-2 text-slate-600">User ID: {data.userId}</p>
            <p className="text-slate-600">ID: {data.id}</p>
            <p className="text-slate-600">Title: {data.title}</p>
            <p className="text-slate-600">
              Completed: {data.completed ? 'Yes' : 'No'}
            </p>
          </div>
        )}

        {error && (
          <div className="mt-4 rounded-lg border border-red-200 bg-red-50 p-4 text-red-700">
            Error: {error}
          </div>
        )}
      </div>
    </div>
  );
}