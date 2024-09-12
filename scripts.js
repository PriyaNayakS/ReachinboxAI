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






