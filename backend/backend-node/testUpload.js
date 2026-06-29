const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');

async function runTest() {
  try {
    // 1. Login
    console.log('Logging in as superadmin...');
    const loginRes = await axios.post('http://localhost:5000/api/v1/auth/login', {
      email: 'superadmin@netsentinel.ai',
      password: 'SuperAdmin@123'
    });
    
    const token = loginRes.data.data.token;
    console.log('Login successful. Token acquired:', token);

    // 2. Create a dummy file
    const logContent = `May 15 14:02:11 webserver sshd[12345]: Failed password for invalid user admin from 192.168.1.100 port 54321 ssh2`;
    fs.writeFileSync('dummy.log', logContent);

    // 3. Upload file
    console.log('Uploading file...');
    const formData = new FormData();
    formData.append('file', fs.createReadStream('dummy.log'));

    const uploadRes = await axios.post('http://localhost:5000/api/analysis/upload', formData, {
      headers: {
        ...formData.getHeaders(),
        Authorization: `Bearer ${token}`
      }
    });

    console.log('Upload Response:', JSON.stringify(uploadRes.data, null, 2));

    // Cleanup
    fs.unlinkSync('dummy.log');
  } catch (error) {
    if (error.response) {
      console.error('Error Response:', error.response.data);
    } else {
      console.error('Error:', error.message);
    }
  }
}

runTest();
