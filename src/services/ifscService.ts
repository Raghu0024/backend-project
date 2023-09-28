import axios from 'axios';

// Function to fetch bank details by IFSC code
export const getBankDetailsByIFSC = async (ifscCode: string): Promise<any> => {
  try {
    const response = await axios.get(`https://ifsc.razorpay.com/${ifscCode}`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching bank details');
  }
};
