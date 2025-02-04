import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';


const ListSubscribers = ({ token }) => {
  const [subscribers, setSubscribers] = useState([]);

  // Fetch all subscribers
  const fetchSubscribers = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/email/emails`, {
        headers: { token }
      });

      if (response.data.success) {
        setSubscribers(response.data.emails);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Remove a subscriber
  const removeSubscriber = async (id) => {
    try {
      const response = await axios.delete(`${backendUrl}/api/email/email/${id}`, {
        headers: { token }
      });

      if (response.data.success) {
        toast.success(response.data.message);
        await fetchSubscribers(); // Refresh the list after removing
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Fetch subscribers on component mount
  useEffect(() => {
    fetchSubscribers();
  }, []);

  return (
    <div className="mt-[100px] p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">All Subscribers</h1>
      
      {/* Table to display subscribers */}
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-800">
            <tr>
              <th scope="col" className="px-6 py-3 text-white">Email</th>
              <th scope="col" className="px-6 py-3 text-white">Date Subscribed</th>
              <th scope="col" className="px-6 py-3 text-white">Actions</th>
            </tr>
          </thead>
          <tbody>
            {subscribers.map((subscriber, index) => (
              <tr key={index} className="bg-gray-700 border-b">
                <td className="px-6 py-4 text-white">{subscriber.email}</td>
                <td className="px-6 py-4 text-white">{new Date(subscriber.date).toLocaleDateString()}</td>
                <td className="px-6 py-4 text-white">
                  <button
                    onClick={() => removeSubscriber(subscriber._id)}
                    className="text-red-500 hover:text-red-700 transition"
                  >
                   🗑️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListSubscribers;
