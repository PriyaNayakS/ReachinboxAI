async function fetchData() {
    try {
        // Fetch data from the local JSON file
        const response = await fetch('mail.json');

        if (!response.ok) {
            throw new Error('Could not fetch resources');
        }

        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error(error);
    }
}

// Event listener for profile icon click
document.querySelector('.profile-icon a').addEventListener('click', async function (event) {
    event.preventDefault(); // Prevent default link behavior

    try {
        const data = await fetchData(); // Fetch data from the local JSON file

        if (data && data.status === 200) {
            displayEmails(data.data);
        } else {
            console.error('Error in response status:', data.status);
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});

// Function to display emails
function displayEmails(emails) {
    const emailList = document.getElementById('email-list');
    emailList.innerHTML = ''; // Clear previous email list

    emails.forEach(email => {
        // Create email container
        const emailItem = document.createElement('div');
        emailItem.classList.add('email-item');

        // Add email details
        emailItem.innerHTML = `
            <h3>${email.subject}</h3>
            <p><strong>From:</strong> ${email.fromName} (${email.fromEmail})</p>
            <p><strong>To:</strong> ${email.toEmail}</p>
            <p><strong>Date:</strong> ${new Date(email.sentAt).toLocaleString()}</p>
            <p><strong>Body:</strong> ${email.body}</p>
        `;

        // Append to the email list
        emailList.appendChild(emailItem);
    });
}

// Initial call to ensure email list is present
document.addEventListener('DOMContentLoaded', () => {
    const emailList = document.getElementById('email-list');
    if (!emailList) {
        console.error('Email list element not found');
    }
});







// // JavaScript can handle form validation, Google authentication API integration, etc.
// document.querySelector('.google-btn').addEventListener('click', function () {
//     alert('Google sign-in functionality will go here.');
// });

// document.querySelector('.create-account-btn').addEventListener('click', function () {
//     alert('Account creation functionality will go here.');
// });


// async function fetchData() {
//     try {
//         // Adjust the URL to point to your local JSON file
//         const response = await fetch('mail.json');

//         if (!response.ok) {
//             throw new Error('Could not fetch resources');
//         }

//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error(error);
//     }
// }

// // Call fetchData to execute the fetch request
// fetchData();




// async function loginUser() {
//     try {
//         const response = await fetch('https://hiring.reachinbox.xyz/api/v1/auth/login', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 username: 'your-username',
//                 password: 'your-password'
//             })
//         });

//         if (!response.ok) {
//             throw new Error('Login failed');
//         }

//         const data = await response.json();
//         const token = data.accessToken; // Replace with actual property name

//         // Store token securely
//         localStorage.setItem('accessToken', token);

//         console.log('Login successful');
//     } catch (error) {
//         console.error('Error logging in:', error);
//     }
// }



// document.querySelector('.profile-icon a').addEventListener('click', async function (event) {
//     event.preventDefault(); // Prevent default link behavior

//     try {
//         const token = localStorage.getItem('accessToken');
//         if (!token) {
//             console.error('No access token found');
//             return;
//         }

//         const response = await fetch('https://hiring.reachinbox.xyz/api/v1/onebox/list', {
//             method: 'GET',
//             headers: {
//                 'Authorization': `Bearer ${token}`
//             }
//         });

//         if (!response.ok) {
//             throw new Error('Could not fetch resources');
//         }

//         const data = await response.json();

//         // Check if status is 200
//         if (data.status === 200) {
//             displayEmails(data.data);
//         } else {
//             console.error('Error in response status:', data.status);
//         }
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// });












// JavaScript can handle form validation, Google authentication API integration, etc.
// document.querySelector('.google-btn').addEventListener('click', function () {
//     alert('Google sign-in functionality will go here.');
// });

// document.querySelector('.create-account-btn').addEventListener('click', function () {
//     alert('Account creation functionality will go here.');
// });

