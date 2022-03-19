import axios from 'axios';

// axios.defaults.baseURL = 'https://test-task-j.herokuapp.com/data';

export async function fetchAllStudents() {
    try {
        const response = await axios.get('https://test-task-j.herokuapp.com/data');
        console.log('response', response);
        return response.data.results;
    } catch (error) {
        alert(error.message);
    }
}
